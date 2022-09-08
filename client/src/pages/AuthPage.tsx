import { Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions, useTypedSelector } from "../hooks";

export interface LoginData {
  email: string;
  password: string;
}

function AuthPage() {
  const [data, setData] = useState<LoginData>({ email: "", password: "" });

  const { login } = useActions();

  const onFormSubmit = (data: LoginData) => {
    const { email, password } = data;
    login(email, password);
  };

  const { isAuth, currentUser } = useTypedSelector((state) => state.main);

  console.log(isAuth);
  console.log(currentUser);

  let navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <div className="card border-secondary mb-3 w-30 mr-auto ml-auto">
        <div className="card-header text-center font-weight-bolder text-muted">
          АВТОРИЗАЦИЯ
        </div>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-sm-12">
              <div className=" d-flex flex-wrap align-content-center">
                <Input
                  type="email"
                  className="mb-3"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <Input
                  type="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-row justify-content-center mb-3">
            <button
              type="button"
              disabled={
                data.email === "" || data.password === "" ? true : false
              }
              className="btn btn-outline-primary mr-2"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Для входа заполните поля формы"
              onClick={() => onFormSubmit(data)}
            >
              <i className="bi bi-box-arrow-in-right"></i> Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
