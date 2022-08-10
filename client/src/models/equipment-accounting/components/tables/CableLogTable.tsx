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
import { cableSum, setCableLogFilters } from "./table.setting";
import { CableLogView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface CableLogTableProps {
  data: CableLogView[];
  searchValue: string;
  unitId: string;

  subUnitId: string;
}

const CableLogTable: FC<CableLogTableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<CableLogView[]>([]);

  // useEffect(() => {
  //   setDataSource(data);
  // }, [data]);

  useEffect(() => {
    unitId
      ? setDataSource(data.filter((item) => item?.unitId === unitId))
      : setDataSource(data);
  }, [unitId]);

  useEffect(() => {
    subUnitId
      ? setDataSource(data.filter((item) => item?.subUnitId === subUnitId))
      : setDataSource(data);
  }, [subUnitId]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item.numberOfTrace
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.cableMark?.includes(searchValue.toUpperCase()) ||
            item?.cableSection
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.fromUnit
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.fromPlace
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.toUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.toPlace?.toUpperCase()?.includes(searchValue.toUpperCase())
        )
      ),
    [searchValue]
  );

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

  const columns: TableColumnsType<CableLogView> = [
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
          // width: 150,
          filterSearch:
            setCableLogFilters("unit", dataSource).length > 5 ? true : false,
          filters: setCableLogFilters("unit", dataSource),
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
            setCableLogFilters("sub-unit", dataSource).length > 5
              ? true
              : false,
          filters: setCableLogFilters("sub-unit", dataSource),
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
            setCableLogFilters("tag", dataSource).length > 5 ? true : false,
          filters: setCableLogFilters("tag", dataSource),
          onFilter: (value: any, record) =>
            record.tag.toUpperCase().includes(value.toUpperCase()),
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "№ кабельной трассы",
      dataIndex: "numberOfTrace",
      key: "numberOfTrace",
      align: "center",
      // width: 200,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Марка кабеля",
      dataIndex: "cableMark",
      key: "cableMark",
      align: "center",
      // width: 200,
      filterSearch:
        setCableLogFilters("cable-mark", dataSource).length > 5 ? true : false,
      filters: setCableLogFilters("cable-mark", dataSource),
      onFilter: (value: any, record) =>
        record.cableMark.toUpperCase().includes(value.toUpperCase()),
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Сечение кабеля",
      dataIndex: "cableSection",
      key: "cableSection",
      align: "center",
      // width: 100,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Место подключения, от",
      dataIndex: "fromUnit",
      key: "fromUnit",
      align: "center",
      // width: 250,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Точка подключения, от",
      dataIndex: "fromPlace",
      key: "fromPlace",
      align: "center",
      // width: 250,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Место подключения, до",
      dataIndex: "toUnit",
      key: "toUnit",
      align: "center",
      // width: 250,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Точка подключения, до",
      dataIndex: "toPlace",
      key: "toPlace",
      align: "center",
      // width: 250,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Длина",
      dataIndex: "cableLenght",
      key: "cableLenght",
      align: "center",
      width: 80,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Ед. изм.",
      dataIndex: "range",
      key: "range",
      align: "center",
      width: 50,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Примечание",
      dataIndex: "description",
      key: "description",
      align: "center",
      // width: 300,
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
          <Cell index={0} colSpan={11} align="right">
            <Text strong>Длина:</Text>
          </Cell>
          <Cell index={1} align="center">
            <Text strong>{cableSum(data)}</Text>
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

export default CableLogTable;
