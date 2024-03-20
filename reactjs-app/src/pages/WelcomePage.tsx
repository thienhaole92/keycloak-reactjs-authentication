import {kc} from "../services/keycloakService";

const Welcome = () => (
  <div>
    <h1 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">Hello Anonymous!</h1>
    <p>Please authenticate yourself!</p>
    <p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => kc.login()}
      >
        Login
      </button>
    </p>
  </div>
);

export default Welcome;
