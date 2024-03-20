import { useState } from "react";
import { kc } from "../services/keycloakService";

const SecuredPage = () => {
  const [infoMessage, setInfoMessage] = useState("");

  return (
    <div className="App">
      <h1 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
        Secured with Keycloak
      </h1>

      <div className="grid">
        <div className="grid-cols-none">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setInfoMessage(
                kc.authenticated
                  ? "Authenticated: TRUE"
                  : "Authenticated: FALSE"
              );
            }}
          >
            Is Authenticated
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              kc.login();
            }}
          >
            Login
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setInfoMessage(kc.token || "");
            }}
          >
            Show Access Token
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setInfoMessage(JSON.stringify(kc.tokenParsed));
            }}
          >
            Show Parsed Access token
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (kc.authenticated) {
                setInfoMessage(kc.isTokenExpired(0).toString());
              } else {
                setInfoMessage("Token expired");
              }
            }}
          >
            Check Token expired
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              kc.updateToken(10).then(
                (refreshed: boolean) => {
                  setInfoMessage("Token Refreshed: " + refreshed.toString());
                },
                (_) => {
                  setInfoMessage("Refresh Error");
                }
              );
            }}
          >
            Update Token (if about to expire)
          </button>
          {/** 10 seconds */}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              kc.logout({ redirectUri: "http://localhost:3000/" });
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
        <div className="grid-cols-2"></div>
        <div className="grid-cols-8">
          <h3>Info Pane</h3>
          <label>
            <p style={{ wordBreak: "break-all" }} id="infoPanel">
              {infoMessage}
            </p>
          </label>
        </div>
        <div className="grid-cols-2"></div>
      </div>
    </div>
  );
};

export default SecuredPage;
