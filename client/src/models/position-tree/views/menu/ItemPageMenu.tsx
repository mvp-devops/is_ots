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
} from "@ant-design/icons";
import { Layout, Space } from "antd";
import { Menu } from "antd";
import React, { FC, useEffect, useState } from "react";
import { MenuItem } from "../../../main";

const { Sider } = Layout;

const userRole = "Administrator";

export interface ItemPageMenuProps {
  role: string;
  target: string;
  childTarget: string;
}

export enum Roles {
  ADMIN = "ADMIN",
  EXPERT = "EXPERT",
  OTS = "OTS",
  CUSTOMER = "CUSTOMER",
}

const setMenuItems = (
  target: string,
  role: string,
  items: MenuItem[]
): MenuItem[] => {
  const menuItems: MenuItem[] = [];

  switch (role) {
    case Roles.ADMIN: {
      menuItems.push(...items.slice(0, 2));
      return menuItems;
    }
    // case Roles.EXPERT:
    // case Roles.CUSTOMER: {

    //   console.log(items[1]?.children[0] || [])
    //   menuItems.push({
    //     ...items[1],
    //     children:
    //   })

    //   menuItems.push(...items.slice(2));
    //   return menuItems;
    // }
    default:
      return menuItems;
  }

  return menuItems;
};

const ItemPageMenu: FC<ItemPageMenuProps> = ({ role, target, childTarget }) => {
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
      key: "1",
      children: [
        {
          label: (
            <Space>
              <EditOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Редактировать
            </Space>
          ),
          key: `1-1`,
        },
        {
          label: (
            <Space>
              <DeleteOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Удалить
            </Space>
          ),
          key: `1-2`,
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
          Объекты
        </Space>
      ),
      key: childTarget,
      children: [
        {
          label: (
            <Space>
              <SearchOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Просмотр списка
            </Space>
          ),
          key: "2-1",
        },
        {
          label: (
            <Space>
              <PlusOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Добавить
            </Space>
          ),
          key: "2-2",
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
      key: "3",
      children: [
        {
          label: (
            <Space>
              <SearchOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Просмотр
            </Space>
          ),
          key: "3-1",
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
          key: "3-2",
        },
        {
          label: (
            <Space>
              <FileDoneOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Сформировать ЛКП
            </Space>
          ),
          key: "3-3",
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
          key: "3-4",
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
      key: "4",
      children: [
        {
          label: (
            <Space>
              <AuditOutlined
                className="text-dark"
                style={{ marginBottom: "16px", padding: 0 }}
              />
              Чеклист
            </Space>
          ),
          key: "4-1",
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
          key: "4-2",
        },
      ],
    },
  ];

  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);

  useEffect(() => {
    switch (role) {
      case Roles.ADMIN:
        setMenuItems(items.slice(0, 2));
        break;
      case Roles.EXPERT:
      case Roles.CUSTOMER:
        setMenuItems(items.slice(1, 4));
        break;
      default:
        break;
    }
  }, [role]);

  return (
    <Sider className="site-layout-background" width={300}>
      <Menu mode="inline" style={{ height: "100%" }} items={menuItems} />
    </Sider>
  );
};

export default ItemPageMenu;
