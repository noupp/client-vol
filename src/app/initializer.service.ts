import { KeycloakService } from 'keycloak-angular';
import { environment as env } from '../environments/environment';

export function initializer(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: env.keycloak.issuer,
        realm: env.keycloak.realm,
        clientId: env.keycloak.clientId
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: true
      }
    });
}
