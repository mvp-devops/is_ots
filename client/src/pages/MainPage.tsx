import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, Space, Tree, Typography, Layout } from "antd";
import {
  MenuOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  AppstoreOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { PositionTreeItem } from "../../../server/common/types/position-tree";
import { useActions, useTypedSelector } from "../hooks";
import { ItemPage } from "../modules/position-tree";

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

const MainPage: FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { setMenuItems, setCurrentItem, logout } = useActions();
  const { menuItems, currentItem } = useTypedSelector(
    (state) => state.positionTree
  );
  const { formVisible, currentUser } = useTypedSelector((state) => state.main);

  const onMenuItemSelected = (item?: PositionTreeItem): void => {
    item && setCurrentItem(item);
  };

  const onSelect = (selectedKeys: any, e: any) => {
    if (selectedKeys.length > 0) {
      onMenuItemSelected(e.node);
    } else {
      onMenuItemSelected();
    }
  };

  useEffect(() => {
    currentUser &&
      currentUser.subsidiaryId &&
      setMenuItems(currentUser.roles, currentUser.subsidiaryId.toString());
  }, [formVisible, currentUser]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
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
        <Layout>
          {!collapsed && (
            <Sider
              breakpoint="xl"
              style={{
                marginRight: 100,
                left: 0,
                top: 0,
                bottom: 0,
              }}
              theme={"light"}
            >
              <Collapse
                style={{
                  backgroundColor: "white",
                  margin: "1px 0",
                  minWidth: 300,
                  border: "none",
                }}
              >
                <Panel
                  header={
                    <Space className="d-flex align-items-center">
                      <AppstoreOutlined
                        style={{ marginBottom: 4 }}
                        className="text-secondary"
                      />
                      <Text type="secondary">Дерево позиций</Text>
                    </Space>
                  }
                  key="position-tree"
                >
                  <Tree
                    style={{ top: 2, width: 275 }}
                    showLine={true}
                    showIcon={false}
                    onSelect={onSelect}
                    treeData={menuItems}
                    className="text-secondary mx-2"
                  />
                </Panel>
                <Panel
                  header={
                    <Space className="d-flex align-items-center">
                      <BookOutlined
                        style={{ marginBottom: 4 }}
                        className="text-secondary"
                      />
                      <Text type="secondary">Справочники</Text>
                    </Space>
                  }
                  key="regulatory-reference-information"
                >
                  Будет перечень справочников
                </Panel>
              </Collapse>
            </Sider>
          )}
          <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
            {currentItem && <ItemPage />}
          </Content>
        </Layout>

        <Footer style={{ textAlign: "right", background: "rgb(255,255,255" }}>
          <Text type="secondary">ООО "Газпромнефть-Автоматизация" © 2022</Text>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainPage;
