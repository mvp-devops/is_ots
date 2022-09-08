import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks";
import { authRoutes, BASENAME, publicRoutes } from "./routes";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.main);

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {/* <Route path={"*"} element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
