import {
  Dropdown,
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
import { signalSum, setSignalFilters } from "./table.setting";
import { SignalView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface SignalTableProps {
  data: SignalView[];
}

const SignalTable: FC<SignalTableProps> = ({ data }) => {
  const menu = (
    <Menu
      items={[
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

          key: "edit",
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
          key: "delete",
        },
      ]}
    />
  );

  const columns: TableColumnsType<SignalView> = [
    {
      title: "#",
      width: 40,
      align: "center",
      render: (value, record, index) => (
        <Text type="secondary">{index + 1}</Text>
      ),
    },
    {
      title: "Общие сведения",

      children: [
        {
          title: "Объект",
          dataIndex: "unit",
          key: "unit",
          align: "center",

          filterSearch:
            setSignalFilters("unit", data).length > 5 ? true : false,
          filters: setSignalFilters("unit", data),
          onFilter: (value: any, record) =>
            record.unit
              ? record.unit.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Установка",
          dataIndex: "subUnit",
          key: "subUnit",

          width: 150,
          filterSearch:
            setSignalFilters("sub-unit", data).length > 5 ? true : false,
          filters: setSignalFilters("sub-unit", data),
          onFilter: (value: any, record) =>
            record.subUnit
              ? record.subUnit.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "TAG",
          dataIndex: "tag",
          key: "tag",

          width: 100,
          filterSearch: setSignalFilters("tag", data).length > 5 ? true : false,
          filters: setSignalFilters("tag", data),
          onFilter: (value: any, record) =>
            record.tag.toUpperCase().includes(value.toUpperCase()),
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "Тип",
      dataIndex: "signalType",
      key: "signalType",
      align: "center",
      filterSearch:
        setSignalFilters("signal-type", data).length > 5 ? true : false,
      filters: setSignalFilters("signal-type", data),
      onFilter: (value: any, record) =>
        record.unit
          ? record.signalType.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Протокол",
      dataIndex: "signalProtocol",
      key: "signalProtocol",
      filterSearch:
        setSignalFilters("signal-protocol", data).length > 5 ? true : false,
      filters: setSignalFilters("signal-protocol", data),
      onFilter: (value: any, record) =>
        record.unit
          ? record.signalProtocol.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "TAG",
      dataIndex: "signalTag",
      key: "signalTag",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Уставки",
      children: [
        {
          title: "LL",
          dataIndex: "ll",
          key: "ll",
          align: "center",
          width: 80,
          render: (value) => <Text type="danger">{value}</Text>,
        },
        {
          title: "L",
          dataIndex: "l",
          key: "l",
          align: "center",
          width: 80,
          render: (value) => <Text type="warning">{value}</Text>,
        },
        {
          title: "H",
          dataIndex: "h",
          key: "h",
          align: "center",
          width: 80,
          render: (value) => <Text type="warning">{value}</Text>,
        },
        {
          title: "HH",
          dataIndex: "hh",
          key: "hh",
          align: "center",
          width: 80,
          render: (value) => <Text type="danger">{value}</Text>,
        },
      ],
    },

    {
      title: "Описание",
      dataIndex: "emergencyProtocol",
      key: "emergencyProtocol",
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
      summary={(data) => (
        <Row style={{ margin: 0, padding: 0 }}>
          <Cell index={0} colSpan={4} align="right">
            <Text strong>Количество:</Text>
          </Cell>
          <Cell index={1} align="center">
            <Text strong>{data.length}</Text>
          </Cell>
          <Cell index={2} align="center">
            <Text strong>{data.length}</Text>
          </Cell>
          <Cell index={3} colSpan={7} />
        </Row>
      )}
    />
  );
};

export default SignalTable;
