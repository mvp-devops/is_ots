import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { appStore } from "./store";

// export const BASENAME = window.location.pathname.slice(0, -1);
// export const site = window.location.origin + BASENAME;

function App() {
  return (
    <Provider store={appStore}>
      <AppRouter />
    </Provider>
  );
}

export default App;
