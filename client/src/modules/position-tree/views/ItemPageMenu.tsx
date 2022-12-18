import {
  MoreOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Menu } from "antd";
import { useItemPage } from "../";
import { FormActions, MenuItem } from "../../main";

const { Sider } = Layout;
const { Text } = Typography;

const ItemPageMenu = () => {
  const items: MenuItem[] = [
    {
      label: (
        <Space>
          <MoreOutlined style={{ marginBottom: 20, padding: 0 }} />
          <Text >Действия</Text>
        </Space>
      ),
      key: "ACTIONS",
      children: [
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.ADD);
                setFormVisible(true);
              }}
            >
              <PlusOutlined style={{ marginBottom: 16, padding: 0 }} />
              <Text >Добавить</Text>
            </Space>
          ),
          key: "ADD",
        },
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.EDIT);
                setFormVisible(true);
              }}
            >
              <EditOutlined style={{ marginBottom: 16, padding: 0 }} />
              <Text >Редактировать</Text>
            </Space>
          ),
          key: `EDIT`,
        },
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.REMOVE);
                setFormVisible(true);
              }}
            >
              <DeleteOutlined style={{ marginBottom: 20, padding: 0 }} />
              <Text >Удалить</Text>
            </Space>
          ),
          key: `REMOVE`,
        },
        {
          label: (
            <Space
              onClick={() => {
                setFormVisible(true);
                setActionType(FormActions.ADD_USER);
              }}
            >
              <UserAddOutlined style={{ marginBottom: 20, padding: 0 }} />
              <Text>Регистрация пользователя</Text>
            </Space>
          ),
          key: "USER",
        },
      ],
    },
  ];

  const { menuItems, setFormVisible, setActionType } = useItemPage(items);

  return (
    <Sider className="site-layout-background" width={300}>
      <Menu mode="inline" style={{ height: "100%" }} items={menuItems} />
    </Sider>
  );
};

export default ItemPageMenu;