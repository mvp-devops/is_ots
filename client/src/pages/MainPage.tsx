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
import { Divider, Space, Tree, Typography } from "antd";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { PositionTreeItem } from "../../../server/common/types/position-tree";
import { useActions, useTypedSelector } from "../hooks";
import { MenuItem, Roles } from "../modules/main";
import { ItemPage } from "../modules/position-tree";

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

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

const role = Roles.EXPERT;

const userSubsidiaryId = "7";

const setMenuItem = (menuItems: PositionTreeItem[]): MenuItem[] => {
  const items: MenuItem[] = [];

  for (let i = 0; i < menuItems.length; i++) {
    const { key, title } = menuItems[i];
    const subItems = menuItems[i].children;
    const item = getItem(title, key);
    if (subItems) {
      item.children = setMenuItem(subItems);
    }
    items.push(item);
  }

  return items;
};

const MainPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setMenuItems, setCurrentItem } = useActions();
  const { menuItems, currentItem } = useTypedSelector(
    (state) => state.positionTree
  );

  const onMenuItemSelected = (item?: PositionTreeItem): void => {
    item && setCurrentItem(item);
  };

  const onSelect = (selectedKeys: any, e: any) => {
    console.log(selectedKeys, e.node);
    if (selectedKeys.length > 0) {
      onMenuItemSelected(e.node);
    } else {
      onMenuItemSelected();
    }
  };

  const { formVisible } = useTypedSelector((state) => state.main);

  const { isAuth, currentUser } = useTypedSelector((state) => state.main);

  useEffect(() => {
    currentUser &&
      currentUser.subsidiaryId &&
      setMenuItems(role, currentUser.subsidiaryId.toString());
  }, [formVisible]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!collapsed && (
        <Sider
          breakpoint="xl"
          width={"auto"}
          style={{
            left: 0,
            top: 0,
            bottom: 0,
          }}
          theme={"light"}
        >
          <div className="bg-primary" style={{ height: 52 }} />

          <Tree
            style={{ top: 14 }}
            showLine={true}
            showIcon={false}
            onSelect={onSelect}
            treeData={menuItems}
            className="text-secondary mx-2"
          />
        </Sider>
      )}
      <Layout className="site-layout">
        <Header className="site-layout-background d-flex justify-content-between">
          <Space className="d-flex justify-content-start mx-3 mb-2">
            <MenuOutlined
              className="d-flex align-items-center text-white me-2"
              style={{ cursor: "pointer" }}
              title="Меню"
              onClick={() => setCollapsed(!collapsed)}
            />
            <Text
              onClick={() => setCollapsed(!collapsed)}
              className="d-flex align-items-center"
              title="Справочники"
            >
              <BookOutlined
                className={"text-white me-2"}
                style={{ cursor: "pointer" }}
              />
              <Text className="text-white" style={{ cursor: "pointer" }}>
                Справочники
              </Text>
            </Text>
            <Divider type="vertical" />
            <Text
              onClick={() => setCollapsed(!collapsed)}
              className="d-flex align-items-center"
              title="Дерево позиций"
            >
              <AppstoreOutlined
                className={"text-white me-2"}
                style={{ cursor: "pointer" }}
              />
              <Text className="text-white" style={{ cursor: "pointer" }}>
                Дерево позиций
              </Text>
            </Text>
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
            />
          </Space>
        </Header>
        <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
          {currentItem && <ItemPage userRole={role} />}
          {/* <ItemPage /> */}
        </Content>
        <Footer style={{ textAlign: "right", background: "rgb(255,255,255" }}>
          <Text type="secondary">ООО "Газпромнефть-Автоматизация" © 2022</Text>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainPage;
