export const environment = {
  production: false,
  keycloak: {
    issuer: 'http://localhost:8081/auth/',
    realm: 'reservation-vol',
    clientId: 'client-vol-ui',
    redirectUri: 'http://localhost:4200/'
  }
};