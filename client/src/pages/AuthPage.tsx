import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state: any = location.state || {};

  const fromPage = state?.from?.pathname || "/";
  return <div>Login page {fromPage}</div>;
};

export { AuthPage };
