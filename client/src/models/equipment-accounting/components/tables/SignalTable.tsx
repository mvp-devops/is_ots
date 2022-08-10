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
import { FC, useEffect, useState } from "react";
import { signalSum, setSignalFilters } from "./table.setting";
import { SignalView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface SignalTableProps {
  data: SignalView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const SignalTable: FC<SignalTableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<SignalView[]>([]);

  useEffect(() => setDataSource(data), [data]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.signalType
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item.signalProtocol
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.signalTag?.includes(searchValue.toUpperCase()) ||
            item?.emergenceProtocol
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase())
        )
      ),
    [searchValue]
  );

  useEffect(() => {
    unitId
      ? setDataSource(dataSource.filter((item) => item?.unitId === unitId))
      : setDataSource(data);
  }, [data, unitId]);

  useEffect(() => {
    subUnitId
      ? setDataSource(
          dataSource.filter((item) => item?.subUnitId === subUnitId)
        )
      : setDataSource(data);
  }, [data, subUnitId]);
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
            setSignalFilters("unit", dataSource).length > 5 ? true : false,
          filters: setSignalFilters("unit", dataSource),
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
            setSignalFilters("sub-unit", dataSource).length > 5 ? true : false,
          filters: setSignalFilters("sub-unit", dataSource),
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
          filterSearch:
            setSignalFilters("tag", dataSource).length > 5 ? true : false,
          filters: setSignalFilters("tag", dataSource),
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
        setSignalFilters("signal-type", dataSource).length > 5 ? true : false,
      filters: setSignalFilters("signal-type", dataSource),
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
        setSignalFilters("signal-protocol", dataSource).length > 5
          ? true
          : false,
      filters: setSignalFilters("signal-protocol", dataSource),
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
      dataSource={dataSource}
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
