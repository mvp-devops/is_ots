import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { appStore } from "./store";

import ruRU from "antd/es/locale-provider/ru_RU";
// export const BASENAME = window.location.pathname.slice(0, -1);
// export const site = window.location.origin + BASENAME;

function App() {
  return (
    <Provider store={appStore}>
      {/* <ConfigProvider locale={ruRU}> */} <AppRouter />
      {/* </ConfigProvider> */}
    </Provider>
  );
}

export default App;
