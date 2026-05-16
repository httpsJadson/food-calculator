import { AppEnvironment } from "./environment.model";

export const environment: AppEnvironment = {
  production: false,

  apiBaseUrl: '/fluig',

  fluigBaseUrl: 'https://gd7distribuidor160600.fluig.cloudtotvs.com.br',

  useOAuth: true,

  oauth: {
    consumerKey: 'SEU_CONSUMER_KEY',
    consumerSecret: 'SEU_CONSUMER_SECRET',
    tokenKey: 'SEU_TOKEN_KEY',
    tokenSecret: 'SEU_TOKEN_SECRET'
  }
};