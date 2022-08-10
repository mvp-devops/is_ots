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
} from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { impulseLineSum, setImpulseLineLogFilters } from "./table.setting";
import { ImpulseLineLogView } from "../../../../../../common/types/equipment-accounting";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface TableProps {
  data: ImpulseLineLogView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const ImpulseLineLogTable: FC<TableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<ImpulseLineLogView[]>([]);

  useEffect(() => setDataSource(data), [data]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.numberOfTrace?.includes(searchValue.toUpperCase()) ||
            item?.impulseLineType
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.fromPlace
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.toPlace?.toUpperCase()?.includes(searchValue.toUpperCase())
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

  const columns: TableColumnsType<ImpulseLineLogView> = [
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
      align: "center",
      children: [
        {
          title: "Объект",
          dataIndex: "unit",
          key: "unit",
          align: "center",
          width: 250,
          filterSearch:
            setImpulseLineLogFilters("unit", dataSource).length > 5
              ? true
              : false,
          filters: setImpulseLineLogFilters("unit", dataSource),
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
          align: "center",
          width: 250,
          filterSearch:
            setImpulseLineLogFilters("sub-unit", dataSource).length > 5
              ? true
              : false,
          filters: setImpulseLineLogFilters("sub-unit", dataSource),
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
          align: "center",
          width: 200,
          filterSearch:
            setImpulseLineLogFilters("tag", dataSource).length > 5
              ? true
              : false,
          filters: setImpulseLineLogFilters("tag", dataSource),
          onFilter: (value: any, record) =>
            record.tag.toUpperCase().includes(value.toUpperCase()),
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "№ импульсной линии",
      dataIndex: "numberOfTrace",
      key: "numberOfTrace",
      align: "center",
      width: 200,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Тип импульсной линии",
      dataIndex: "impulseLineType",
      key: "impulseLineType",
      align: "center",
      width: 200,
      filterSearch:
        setImpulseLineLogFilters("impulse-line-type", dataSource).length > 5
          ? true
          : false,
      filters: setImpulseLineLogFilters("impulse-line-type", dataSource),
      onFilter: (value: any, record) =>
        record.impulseLineType.toUpperCase().includes(value.toUpperCase()),
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Место подключения",
      align: "center",

      children: [
        {
          title: "от",
          dataIndex: "fromPlace",
          key: "fromPlace",
          align: "center",
          width: 250,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "до",
          dataIndex: "toPlace",
          key: "toPlace",
          align: "center",
          width: 250,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },

    {
      title: "Длина",
      dataIndex: "impulseLineLenght",
      key: "impulseLineLenght",
      align: "center",
      width: 80,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Ед. изм.",
      dataIndex: "range",
      key: "range",
      width: 60,

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
      pagination={data.length < 5 && false}
      scroll={{ y: 500, x: "100%" }}
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => Math.random()}
      summary={(data) => (
        <Row style={{ margin: 0, padding: 0 }}>
          <Cell index={0} colSpan={8} align="right">
            <Text strong>Длина:</Text>
          </Cell>
          <Cell index={1} align="center">
            <Text strong>{impulseLineSum(data)}</Text>
          </Cell>
          <Cell index={2} align="center">
            <Text strong>м</Text>
          </Cell>
          <Cell index={3} colSpan={2} />
        </Row>
      )}
    />
  );
};

export default ImpulseLineLogTable;
