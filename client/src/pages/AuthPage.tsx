import { Layout, Button, Divider, Form, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputUIComponent } from "../components";
import { useActions, useTypedSelector } from "../hooks";
import { PageFooter } from ".";

const { Item } = Form;
const { Text } = Typography;

export interface LoginData {
  email: string;
  password: string;
}

function AuthPage() {
  const [data, setData] = useState<LoginData>({ email: "", password: "" });

  const { login } = useActions();

  const { isAuth } = useTypedSelector((state) => state.main);

  const onFormSubmit = (data: LoginData) => {
    const { email, password } = data;
    login(email, password);
    isAuth && navigate("/main");
  };

  const onChangeData = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    } else {
      navigate("/");
    }
  }, [isAuth]); // eslint-disable-line react-hooks/exhaustive-deps

  const authForm = (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 17 }}
      layout="horizontal"
      style={{ width: 400 }}
      className="p-1 border"
      // title="АВТОРИЗАЦИЯ"
    >
      <Divider orientation="center" className="text-secondary">
        АВТОРИЗАЦИЯ
      </Divider>
      <Item label={<Text type="secondary">E-mail</Text>} className="m-0">
        <InputUIComponent
          value={data.email}
          id="email"
          changeValue={onChangeData}
        />
      </Item>

      <Item label={<Text type="secondary">Пароль</Text>} className="m-0">
        <InputUIComponent
          type="password"
          value={data.password}
          id="password"
          changeValue={onChangeData}
        />
      </Item>

      <Divider className="p-0 m-2" />
      <Space className="d-flex justify-content-end mb-1">
        <Button
          type="primary"
          className="me-1 "
          title="Для входа заполните поля формы"
          onClick={() => onFormSubmit(data)}
          disabled={data.email === "" || data.password === "" ? true : false}
        >
          Войти
        </Button>
      </Space>
    </Form>
  );

  return (
    <Layout className="d-flex justify-content-center align-items-center">
      <Space
        style={{
          height: window.innerHeight - 100,
          // width: window.innerWidth - 400,
        }}
      >
        {authForm}
      </Space>
      <PageFooter />
    </Layout>
  );
}

export default AuthPage;
