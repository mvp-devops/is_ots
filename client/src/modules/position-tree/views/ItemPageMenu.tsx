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
  UserAddOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Menu } from "antd";
import { FC } from "react";
import { useItemPage } from "../";
import { FormActions, MenuItem } from "../../main";

const { Sider } = Layout;
const { Text } = Typography;

export interface ItemPageMenuProps {
  // role: string;
  childTarget: string;
}

const ItemPageMenu: FC<ItemPageMenuProps> = ({ childTarget }) => {
  const items: MenuItem[] = [
    {
      label: (
        <Space>
          <MoreOutlined style={{ marginBottom: 20, padding: 0 }} />
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
              <EditOutlined style={{ marginBottom: 20, padding: 0 }} />
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
              <DeleteOutlined style={{ marginBottom: 20, padding: 0 }} />
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
          <SisternodeOutlined style={{ marginBottom: 20, padding: 0 }} />
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
            <Space
              onClick={() => {
                setDocumentationView(false);
                setStatisticView(false);
                setListItemsView(true);
              }}
            >
              <SearchOutlined style={{ marginBottom: 20, padding: 0 }} />
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
              <PlusOutlined style={{ marginBottom: 20, padding: 0 }} />
              Добавить
            </Space>
          ),
          key: "CHILDREN-ADD",
        },
        {
          label: (
            <Space
              onClick={() => {
                setSummaryListOfEquipmentView(true);
                setActionType(FormActions.SUMMARY_LIST_OF_EQUIPMENT);
              }}
            >
              <AppstoreOutlined style={{ marginBottom: 20, padding: 0 }} />
              Перечень оборудования
            </Space>
          ),
          key: "SUMMARY_LIST_OF_EQUIPMENT",
        },
      ],
    },

    {
      label: (
        <Space>
          <DatabaseOutlined style={{ marginBottom: 20, padding: 0 }} />
          Документация
        </Space>
      ),
      key: "DOCUMENTATION",
      children: [
        {
          label: (
            <Space
              onClick={() => {
                setListItemsView(false);
                setStatisticView(false);
                setDocumentationView(true);
              }}
            >
              <SearchOutlined style={{ marginBottom: 20, padding: 0 }} />
              Просмотр
            </Space>
          ),
          key: "DOCUMENTATION-VIEW",
        },
        {
          label: (
            <Space>
              <FileAddOutlined style={{ marginBottom: 20, padding: 0 }} />
              Добавить новый документ
            </Space>
          ),
          key: "DOCUMENTATION-ADD",
        },
        {
          label: (
            <Space
              onClick={() => {
                setCollectiveCheckSheetView(true);
                setActionType(FormActions.COLLECTIVE_CHECK_SHEET);
              }}
            >
              <FileDoneOutlined style={{ marginBottom: 20, padding: 0 }} />
              Сформировать ЛКП
            </Space>
          ),
          key: "COLLECTIVE_CHECK_SHEET",
        },
        {
          label: (
            <Space>
              <ContainerOutlined style={{ marginBottom: 20, padding: 0 }} />
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
          <PieChartOutlined style={{ marginBottom: 20, padding: 0 }} />
          Статистика
        </Space>
      ),
      key: "STATS",
      children: [
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.CHECKLIST);
                setFormVisible(true);
              }}
            >
              <AuditOutlined style={{ marginBottom: 20, padding: 0 }} />
              Чеклист
            </Space>
          ),
          key: "CHECK_LIST",
        },
        {
          label: (
            <Space
              onClick={() => {
                setDocumentationView(false);
                setListItemsView(false);
                setStatisticView(true);
              }}
            >
              <PieChartOutlined style={{ marginBottom: 20, padding: 0 }} />
              Статистика
            </Space>
          ),
          key: "STATISTIC",
        },
      ],
    },
    {
      label: (
        <Space
          onClick={() => {
            setFormVisible(true);
            setActionType(FormActions.USER);
          }}
        >
          <UserAddOutlined style={{ marginBottom: 20, padding: 0 }} />
          Регистрация пользователя
        </Space>
      ),
      key: "USER",
    },
    {
      label: (
        <Space>
          <BookOutlined style={{ marginBottom: 20, padding: 0 }} />
          Справочники
        </Space>
      ),
      key: "DICTIONARIES",
      children: [
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.ADD);
                setFormVisible(true);
              }}
            >
              <PlusOutlined style={{ marginBottom: 20, padding: 0 }} />
              Добавить
            </Space>
          ),
          key: `ADD_DICTIONARY`,
        },
        {
          label: (
            <Space
              onClick={() => {
                setActionType(FormActions.EDIT);
                setFormVisible(true);
              }}
            >
              <EditOutlined style={{ marginBottom: 20, padding: 0 }} />
              Редактировать
            </Space>
          ),
          key: `EDIT_DICTIONARY`,
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
              Удалить
            </Space>
          ),
          key: `REMOVE_DICTIONARY`,
        },
      ],
    },
  ];

  const {
    currentItem,
    menuItems,
    setFormVisible,
    setActionType,
    documentationView,
    listItemsView,
    setStatisticView,
    setCollectiveCheckSheetView,
    setSummaryListOfEquipmentView,

    setListItemsView,
    setDocumentationView,
  } = useItemPage(items);

  return (
    <Sider className="site-layout-background" width={300}>
      <Menu mode="inline" style={{ height: "100%" }} items={menuItems} />
    </Sider>
  );
};

export default ItemPageMenu;
