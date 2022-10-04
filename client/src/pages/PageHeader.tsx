import { Space, Layout } from "antd";
import {
  MenuOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePage } from ".";

const { Header } = Layout;

const PageHeader = () => {
  const { navigate, logout, collapsed, setCollapsed } = usePage();

  return (
    <Header className="site-layout-background d-flex justify-content-between">
      <Space className="d-flex justify-content-start mx-3 mb-2">
        <MenuOutlined
          className="d-flex align-items-center text-white me-2"
          style={{ cursor: "pointer" }}
          title="Меню"
          onClick={() => setCollapsed(!collapsed)}
        />
      </Space>
      <Space className=" mb-2 me-2">
        <UserOutlined
          className={"text-white me-2"}
          title="Профиль"
          style={{ cursor: "pointer" }}
        />
        <QuestionCircleOutlined
          className={"text-white me-2"}
          title="Справка"
          style={{ cursor: "pointer" }}
        />
        <SettingOutlined
          className={"text-white me-2"}
          title="Настройки"
          style={{ cursor: "pointer" }}
        />
        <LogoutOutlined
          className={"text-white me-2"}
          title="Выход"
          style={{ cursor: "pointer" }}
          onClick={() => {
            logout();
            navigate("/");
          }}
        />
      </Space>
    </Header>
  );
};

export default PageHeader;
