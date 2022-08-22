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
import { MenuItem } from "../modules/main";
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
    if (item) {
      const { target, keys, id } = item;
      // setKeys(keys);
      // setTarget(item.target);
      // setChildTarget(item.childrenTarget);
      // setCurrentId(id);
      setCurrentItem(item);
      // setStatistic(target, id);
    } else {
      // setKeys([]);
      // setCurrentId("");
      // setTarget("");
      // setChildTarget("");
    }
  };

  const onSelect = (selectedKeys: any, e: any) => {
    console.log(selectedKeys, e.node);
    if (selectedKeys.length > 0) {
      onMenuItemSelected(e.node);
    } else {
      onMenuItemSelected();
    }
  };

  useEffect(() => {
    console.log(currentItem);
    console.log(menuItems);
  }, [currentItem, menuItems]);

  useEffect(() => {
    setMenuItems("Roles.ADMINISTRATOR");
  }, []);

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
    getItem(
      "Дерево позиций",
      "3",
      <AppstoreOutlined onClick={() => setCollapsed(!collapsed)} />,
      [
        ...setMenuItem(menuItems),
        // getItem("Option 6", "6"),
        // getItem("Submenu", "sub3", null, [
        //   getItem("Option 7", "7"),
        //   getItem("Option 8", "8"),
        // ]),
      ]
    ),
    getItem("Files", "9", <FileOutlined className={"text-secondary"} />),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!collapsed && (
        <Sider
          breakpoint="xl"
          width={"auto"}
          style={{
            left: 0,
            top: 66,
            bottom: 0,
          }}
          theme={"light"}
        >
          <Tree
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
          {/* {currentItem && <ItemPage />} */}
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
