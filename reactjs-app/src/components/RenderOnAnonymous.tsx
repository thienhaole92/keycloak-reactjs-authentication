import KeycloakService from "../services/keycloakService";

const RenderOnAnonymous = (props: { children: JSX.Element }) =>
  !KeycloakService.isLoggedIn() ? props.children : null;

export default RenderOnAnonymous;
