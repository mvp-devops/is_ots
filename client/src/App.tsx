import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthPage, MainPage } from "./pages";
import { appStore } from "./store";

export const BASENAME = window.location.pathname.slice(0, -1);

// export const site = window.location.origin + BASENAME;

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename={BASENAME}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project" element={<MainPage />} />
          <Route path="login" element={<AuthPage />} />
          {/* {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        <Route path={"*"} element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
