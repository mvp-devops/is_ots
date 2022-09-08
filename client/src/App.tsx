import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthPage, MainPage } from "./pages";
import AppRouter from "./routes/AppRouter";
import { appStore } from "./store";

// export const BASENAME = window.location.pathname.slice(0, -1);
// export const site = window.location.origin + BASENAME;

function App() {
  return (
    <Provider store={appStore}>
      {/* <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter> */}
      <AppRouter />
    </Provider>
  );
}

export default App;
