import { Space, Layout, Typography } from "antd";
import {
  MenuOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePage } from ".";
import { useTypedSelector } from "..";

const { Header } = Layout;
const { Text } = Typography;

const PageHeader = () => {
  const { navigate, logout, collapsed, setCollapsed } = usePage();

  const { currentUser } = useTypedSelector((state) => state.main);

  const user =
    // ${currentUser.subsidiaryTitle}. ${currentUser.subdivision}
    `${currentUser.lastName} 
  ${currentUser.firstName.slice(0, 1)}.
  ${currentUser.secondName.slice(0, 1)}. (${currentUser.roles[0]})`;

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
        <Text className="text-white me-5">{user}</Text>
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
