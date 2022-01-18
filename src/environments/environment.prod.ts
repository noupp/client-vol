export const environment = {
  production: true,
  keycloak: {
    issuer: 'http://localhost:8081/auth/',
    realm: 'api-rest-vol-keycloak',
    clientId: 'client-vol-ui',
    redirectUri: 'http://localhost:4200/'
  }
};
