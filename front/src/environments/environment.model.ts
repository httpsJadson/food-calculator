export interface OAuthEnvironment {
  consumerKey: string;
  consumerSecret: string;
  tokenKey: string;
  tokenSecret: string;
}

export interface AppEnvironment {
  production: boolean;
  apiBaseUrl: string;
  fluigBaseUrl: string;
  useOAuth: boolean;
  oauth: OAuthEnvironment | null;
}