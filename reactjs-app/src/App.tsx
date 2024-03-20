import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SecuredPage from "./pages/SecuredPage";
import RenderOnAnonymous from "./components/RenderOnAnonymous";
import RenderOnAuthenticated from "./components/RenderOnAuthenticated";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <RenderOnAnonymous>
            <WelcomePage />
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <SecuredPage />
          </RenderOnAuthenticated>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
