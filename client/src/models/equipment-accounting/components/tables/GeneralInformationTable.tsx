import {
  Dropdown,
  Layout,
  Menu,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { FC } from "react";
import { cableSum, setCableLogFilters } from "./table.setting";
import { GeneralInformationView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface GeneralInformationTableProps {
  data: GeneralInformationView[];
}

const GeneralInformationTable: FC<GeneralInformationTableProps> = ({
  data,
}) => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Space
              className="text-secondary"
              // onClick={() => {
              //   setActionType("POST");
              //   setFormVisible(true);
              // }}
            >
              <SearchOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-primary"
              />
              Схема внешних электрических проводок (С5)
            </Space>
          ),

          key: "1",
        },
        {
          label: (
            <Space
              className="text-secondary"
              // onClick={() => {
              //   setActionType("UPDATE");
              //   setFormVisible(true);
              // }}
            >
              <EditOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-secondary"
              />
              Редактировать
            </Space>
          ),

          key: "2",
        },
        {
          label: (
            <Space
              // onClick={() => setDetailVisible(true)}
              className="text-secondary"
            >
              <DeleteOutlined
                className="text-danger"
                style={{ marginBottom: "6px", padding: 0 }}
              />
              Удалить
            </Space>
          ),
          key: "3",
        },
      ]}
    />
  );

  const columns: TableColumnsType<GeneralInformationView> = [
    {
      title: "Общие сведения",
      children: [
        {
          title: "Объект",
          dataIndex: "unit",
          key: "unit",
          align: "center",

          width: 150,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Установка",
          dataIndex: "subUnit",
          key: "subUnit",
          align: "center",
          width: 150,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Место установки",
          dataIndex: "installationLocation",
          key: "installationLocation",
          align: "center",
          width: 150,
          render: (value) => <Text type="secondary">{value}</Text>,
        },

        {
          title: "TAG",
          dataIndex: "tag",
          key: "tag",
          align: "center",
          width: 80,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Параметр",
          dataIndex: "controlledParameter",
          key: "controlledParameter",
          align: "center",
          width: 100,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },

    {
      title: "Тип",
      dataIndex: "equipmentType",
      key: "equipmentType",
      align: "center",
      width: 80,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Система",
      children: [
        {
          title: "РСУ",
          dataIndex: "systemType",
          key: "systemType",
          render: (_blank, record) =>
            record.systemType.includes("РСУ") ? "+" : "-",
          filters: [
            {
              value: "+",
              text: "+",
            },
            {
              value: "-",
              text: "-",
            },
          ],
          width: 80,
          // sorter: (a, b) => a.title - b.title,
        },
        {
          title: "ПАЗ",
          dataIndex: "systemType",
          key: "systemType",
          render: (_blank, record) =>
            record.systemType.includes("ПАЗ") ? "+" : "-",
          filters: [
            {
              value: "+",
              text: "+",
            },
            {
              value: "-",
              text: "-",
            },
          ],
          // onFilter: (value: any, record) =>
          // record.systemType[].toUpperCase().includes(value.toUpperCase()),
          width: 80,
          // sorter: (a, b) => a.title - b.title,
        },
        {
          title: "КИТСО",
          dataIndex: "systemType",
          key: "systemType",
          render: (_blank, record) =>
            record.systemType.includes("КИТСО") ? "+" : "-",
          filters: [
            {
              value: "+",
              text: "+",
            },
            {
              value: "-",
              text: "-",
            },
          ],
          width: 80,
          // sorter: (a, b) => a.title - b.title,
        },
      ],
    },

    {
      title: "Данные об оборудовании",
      children: [
        {
          title: "Страна",
          dataIndex: "country",
          key: "country",
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Произв.",
          dataIndex: "vendor",
          key: "vendor",
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Наим-е",
          dataIndex: "facilityTitle",
          key: "facilityTitle",
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Модиф.",
          dataIndex: "facilityModification",
          key: "facilityModification",
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Специф.",
          dataIndex: "specification",
          key: "specification",
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Хар-ки",
          children: [
            {
              title: "Мес.вып.",
              dataIndex: "month",
              key: "month",
              align: "center",
              render: (value) => <Text type="secondary">{value}</Text>,
              width: 50,
            },
            {
              title: "Год вып.",
              dataIndex: "year",
              key: "year",
              align: "center",
              render: (value) => <Text type="secondary">{value}</Text>,
              width: 50,
            },
            {
              title: "Срок эксп.",
              dataIndex: "period",
              key: "period",
              align: "center",
              render: (value) => <Text type="secondary">{value}</Text>,
              width: 50,
            },
          ],
        },
      ],
    },
    {
      title: "Прим.",
      dataIndex: "description",
      key: "description",
      align: "center",

      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "",
      key: "actions",
      width: 30,
      render: (_blank, record) => (
        <Dropdown trigger={["click"]} overlay={menu}>
          <EllipsisOutlined className="text-secondary" />
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      size="small"
      bordered
      scroll={{ y: 500, x: "100%" }}
      pagination={data.length < 5 && false}
      dataSource={data}
      columns={columns}
      rowKey={(record) => Math.random()}
    />
  );
};

export default GeneralInformationTable;
