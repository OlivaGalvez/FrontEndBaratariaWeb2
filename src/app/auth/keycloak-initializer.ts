import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : environment.keycloackConfig,
     // loadUserProfileAtStartUp: true,
      initOptions: {
          //onLoad: 'check-sso',
          // onLoad: 'login-required',
          checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: [' ', '/assets', '/error' ]
    };

    return () => keycloak.init(options);
}