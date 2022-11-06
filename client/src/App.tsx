import {ConfigProvider} from "antd";
import {Provider} from "react-redux";
import AppRouter from "./routes/AppRouter";
import {appStore} from "./store";
import ruRu from 'antd/lib/locale-provider/ru_RU';
import LocaleProvider from "antd/es/locale-provider";


function App() {
  return (
    <Provider store={appStore}>
      <LocaleProvider locale={ruRu}>
        <AppRouter/>
      </LocaleProvider>
    </Provider>
  );
}

export default App;