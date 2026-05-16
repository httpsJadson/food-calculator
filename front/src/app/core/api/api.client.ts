import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios';

import OAuth from 'oauth-1.0a';
import * as CryptoJS from 'crypto-js';

import { environment } from '../../../environments/environment';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

class ApiClient {
  private axiosInstance: AxiosInstance;
  private oauth?: OAuth;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.apiBaseUrl,
      timeout: 30000
    });

    if (environment.useOAuth && environment.oauth) {
      this.oauth = new OAuth({
        consumer: {
          key: environment.oauth.consumerKey,
          secret: environment.oauth.consumerSecret
        },
        signature_method: 'HMAC-SHA1',

        hash_function(baseString, key) {
          return CryptoJS.HmacSHA1(baseString, key)
            .toString(CryptoJS.enc.Base64);
        }
      });
    }

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!environment.useOAuth || !environment.oauth || !this.oauth) {
          return config;
        }

        const endpoint = config.url ?? '';

        const method = (config.method?.toUpperCase() || 'GET') as HttpMethod;

        const endpointSemProxy = endpoint.replace(/^\/fluig/, '');

        const realUrl = `${environment.fluigBaseUrl}${endpointSemProxy}`;

        const oauthParams =
          method === 'GET'
            ? config.params
            : config.data;

        const requestData = {
          url: realUrl,
          method,
          data: oauthParams
        };

        const authData = this.oauth.authorize(
          requestData,
          {
            key: environment.oauth.tokenKey,
            secret: environment.oauth.tokenSecret
          }
        );

        const authHeader = this.oauth.toHeader(authData);

        config.headers.set(
          'Authorization',
          authHeader.Authorization
        );

        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(
      url,
      data,
      config
    );

    return response.data;
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(
      url,
      data,
      config
    );

    return response.data;
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.delete<T>(
      url,
      config
    );

    return response.data;
  }

  async makeRequest<T>(
    endpoint: string,
    method: HttpMethod = 'GET',
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.request<T>({
      url: endpoint,
      method,
      params: method === 'GET' ? params : undefined,
      data: method !== 'GET' ? params : undefined,
      ...config
    });

    return response.data;
  }
}

export const apiClient = new ApiClient();