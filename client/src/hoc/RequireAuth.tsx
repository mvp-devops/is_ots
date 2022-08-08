import React, { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";

export interface RequireAuthProps {
  children: ReactElement;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
