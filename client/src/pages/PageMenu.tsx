import { Collapse, Space, Tree, Typography, Layout } from "antd";
import {
  BookOutlined,
  AppstoreOutlined,
  DeploymentUnitOutlined,
  ApartmentOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { RegulatoryReferenceInformationList } from "../modules/regulatory-reference-information";
import { usePage } from ".";
import {useActions, useTypedSelector} from "../hooks";
import {FormActions} from "../modules/main"
import { Roles} from "../modules/main/utils/main.consts";
import {PositionTreeItem} from "../modules/position-tree";


const { Sider } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

const PageMenu = () => {
  const { setBaseTarget, onSelect, menuItems } = usePage();
  const {setFormVisible, setActionType} = useActions();



  const {currentUser} = useTypedSelector(state => state.main)


  return (
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
        { (currentUser?.roles?.includes(Roles.ADMINISTRATOR) || currentUser?.roles?.includes(Roles.ESCORT)) && (
          <Panel
            header={
              <Space
                className="d-flex align-items-center"
                onClick={() => setBaseTarget("POSITION_TREE")}
              >
                <DeploymentUnitOutlined
                  style={{ marginBottom: 4 }}
                />
                <Text>Администрирование</Text>
              </Space>
            }
            key="ADMIN_PANEL"
          >
            {currentUser.roles.includes(Roles.ESCORT) && (
              <Space style={{cursor: "pointer"}} onClick={() => {
                setActionType(FormActions.CREATE_POSITION_TREE_ITEMS)
                setFormVisible(true);

              }}>
                <ApartmentOutlined style={{marginBottom: 6}}/>
                <Text >Загрузить структуру</Text>
              </Space>
            )}
            {currentUser?.roles?.includes(Roles.ADMINISTRATOR) && (
              <Space
                style={{cursor: "pointer"}}
                onClick={() => {
                  setActionType(FormActions.ADD_USER);
                  setFormVisible(true);
                }}
              >
                <UserAddOutlined  style={{marginBottom: 6}} />
                <Text>Регистрация пользователя</Text>
              </Space>
            )}



          </Panel>
        )}
        <Panel
          header={
            <Space
              className="d-flex align-items-center"
              onClick={() => setBaseTarget("POSITION_TREE")}
            >
              <AppstoreOutlined
                style={{ marginBottom: 4 }}
              />
              <Text >Структура проектов Компании</Text>
            </Space>
          }
          key="POSITION_TREE"
        >
          <Tree
            style={{ top: 2, width: 275 }}
            showLine={true}
            showIcon={false}
            onSelect={onSelect}
            treeData={menuItems}
            className=" mx-2"
          />
        </Panel>
        <Panel
          header={
            <Space
              className="d-flex align-items-center"
              onClick={() => setBaseTarget("REGULATORY_REFERENCE_INFORMATION")}
            >
              <BookOutlined
                style={{ marginBottom: 4 }}
              />
              <Text >Справочная информация</Text>
            </Space>
          }
          key="REGULATORY_REFERENCE_INFORMATION"
        >
          <RegulatoryReferenceInformationList />
        </Panel>
      </Collapse>
    </Sider>
  );
};

export default PageMenu;