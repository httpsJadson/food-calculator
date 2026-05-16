import { AppEnvironment } from "./environment.model";

export const environment: AppEnvironment = {
  production: false,

  apiBaseUrl: '',

  fluigBaseUrl: '',

  useOAuth: true,

  oauth: {
    consumerKey: 'SEU_CONSUMER_KEY',
    consumerSecret: 'SEU_CONSUMER_SECRET',
    tokenKey: 'SEU_TOKEN_KEY',
    tokenSecret: 'SEU_TOKEN_SECRET'
  }
};
