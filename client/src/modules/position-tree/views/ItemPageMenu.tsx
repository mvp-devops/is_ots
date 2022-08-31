import {
  DatabaseOutlined,
  PieChartOutlined,
  SisternodeOutlined,
  MoreOutlined,
  DeleteOutlined,
  FileDoneOutlined,
  AuditOutlined,
  EditOutlined,
  PlusOutlined,
  FileAddOutlined,
  ContainerOutlined,
  SearchOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Layout, Space } from "antd";
import { Menu } from "antd";
import { FC } from "react";
import { useItemPage } from "../";
import { FormActions, MenuItem } from "../../main";

const { Sider } = Layout;

export interface ItemPageMenuProps {
  role: string;
  target: string;
  childTarget: string;
  setShowSLOE: () => void;
  setShowCCLS: () => void;
  setShowListItems: () => void;
  setShowDocumentation: () => void;
}

const ItemPageMenu: FC<ItemPageMenuProps> = ({
  role,
  target,
  childTarget,
  setShowSLOE,
  setShowCCLS,

  setShowListItems,
  setShowDocumentation,
}) => {
  const items: MenuItem[] = [
    {
      label: (
        <Space>
          <MoreOutlined
            className="text-dark"
            style={{ marginBottom: "22px", padding: 0 }}
          />
          Действия
        </Space>
      ),
      key: "ACTIONS",
      children: [
        // {
        //   label: (
        //     <Space
        //       onClick={() => {
        //         setActionType(FormActions.ADD);
        //         setFormVisible(true);
        //       }}
        //     >
        //       <PlusOutlined
        //         className="text-dark"
        //         style={{ marginBottom: "16px", padding: 0 }}
        //       />
        //       Добавить
        //     </Space>
        //   ),
        //   key: `ADD`,
        // },
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.EDIT);
                setFormVisible(true);
              }}
            >
              <EditOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Редактировать
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
              <DeleteOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Удалить
            </Space>
          ),
          key: `REMOVE`,
        },
      ],
    },
    {
      label: (
        <Space>
          <SisternodeOutlined
            className="text-dark"
            style={{ marginBottom: "22px", padding: 0 }}
          />
          {childTarget === "field"
            ? "Месторождения"
            : childTarget === "project"
            ? "Проекты"
            : childTarget === "unit"
            ? "Объекты строительства"
            : "Объекты/установки"}
        </Space>
      ),
      key: "CHILDREN",
      children: [
        {
          label: (
            <Space onClick={setShowListItems}>
              <SearchOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Просмотр списка
            </Space>
          ),
          key: "CHILDREN-VIEW",
        },
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.ADD);
                setFormVisible(true);
              }}
            >
              <PlusOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Добавить
            </Space>
          ),
          key: "CHILDREN-ADD",
        },
        {
          label: (
            <Space onClick={setShowSLOE}>
              <AppstoreOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Перечень оборудования
            </Space>
          ),
          key: "SLOE",
        },
      ],
    },

    {
      label: (
        <Space>
          <DatabaseOutlined
            className="text-dark"
            style={{ marginBottom: "22px", padding: 0 }}
          />
          Документация
        </Space>
      ),
      key: "DOCUMENTATION",
      children: [
        {
          label: (
            <Space onClick={setShowDocumentation}>
              <SearchOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Просмотр
            </Space>
          ),
          key: "DOCUMENTATION-VIEW",
        },
        {
          label: (
            <Space>
              <FileAddOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Добавить новый документ
            </Space>
          ),
          key: "DOCUMENTATION-ADD",
        },
        {
          label: (
            <Space onClick={setShowCCLS}>
              <FileDoneOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Сформировать ЛКП
            </Space>
          ),
          key: "CCHL",
        },
        {
          label: (
            <Space>
              <ContainerOutlined
                className="text-dark"
                style={{ marginBottom: "22px", padding: 0 }}
              />
              Отчет
            </Space>
          ),
          key: "REPORT",
        },
      ],
    },

    {
      label: (
        <Space>
          <PieChartOutlined
            className="text-dark"
            style={{ marginBottom: "22px", padding: 0 }}
          />
          Статистика
        </Space>
      ),
      key: "STATISTIC",
      children: [
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.CHECKLIST);
                setFormVisible(true);
              }}
            >
              <AuditOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Чеклист
            </Space>
          ),
          key: "CHECKLIST",
        },
        {
          label: (
            <Space>
              <PieChartOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Статистика
            </Space>
          ),
          key: "STAT",
        },
      ],
    },
  ];

  const { menuItems, setFormVisible, setActionType } = useItemPage(role, items);

  return (
    <Sider className="site-layout-background" width={300}>
      <Menu mode="inline" style={{ height: "100%" }} items={menuItems} />
    </Sider>
  );
};

export default ItemPageMenu;
