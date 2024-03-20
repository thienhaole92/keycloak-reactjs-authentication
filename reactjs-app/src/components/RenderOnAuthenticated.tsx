import KeycloakService from "../services/keycloakService";

const RenderOnAuthenticated = (props: { children: JSX.Element }) =>
  KeycloakService.isLoggedIn() ? props.children : null;

export default RenderOnAuthenticated;
