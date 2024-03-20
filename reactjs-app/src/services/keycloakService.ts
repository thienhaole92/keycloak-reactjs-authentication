import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  realm: "keycloak-react-auth",
  url: "http://localhost:8080/",
  clientId: "react-auth",
});

const initKeycloak = (onAuthenticatonCallback: Function) => {
  if (typeof window !== "undefined") {
    _kc
      .init({
        onLoad: "check-sso",
        enableLogging: true,
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
        checkLoginIframe: false,
        pkceMethod: "S256",
      })
      .then((authenticated: boolean) => {
        if (authenticated) {
          _kc.onTokenExpired = () => {
            console.log("token expired");
          };
        }
        onAuthenticatonCallback();
      })
      .catch((reason: any) => {
        console.error(reason);
      });
  }
};

const isLoggedIn = () => !!_kc.token;

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) =>
  roles.some((role) => _kc.hasRealmRole(role));

const KeycloakService = {
  initKeycloak,
  isLoggedIn,
  getUsername,
  hasRole,
};

export default KeycloakService;

export const kc = _kc;
