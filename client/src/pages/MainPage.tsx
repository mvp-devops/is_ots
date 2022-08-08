import {
  MenuOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  FileOutlined,
  SettingOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { MenuItem } from "../models/main";
import ItemPage from "../models/position-tree/views/ItemPage";

const { Header, Content, Footer, Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const MainPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    getItem(
      "Меню",
      "1",
      <MenuOutlined
        className={"text-secondary"}
        onClick={() => setCollapsed(!collapsed)}
      />
    ),
    getItem("Справочники", "2", <BookOutlined className={"text-secondary"} />),
    getItem("Дерево позиций", "3", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("Files", "9", <FileOutlined className={"text-secondary"} />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="test"
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={"light"}
      >
        <Menu className="text-secondary" mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background d-flex justify-content-end">
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
            />
          </Space>
        </Header>
        <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
          <ItemPage />
        </Content>
        <Footer style={{ textAlign: "right", background: "rgb(255,255,255" }}>
          ООО "Газпромнефть-Автоматизация" ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainPage;
