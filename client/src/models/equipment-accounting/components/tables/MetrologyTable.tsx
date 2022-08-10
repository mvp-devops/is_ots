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
import {
  cableSum,
  formatDate,
  setDateToVerification,
  setMetrologyFilters,
  verificateDates,
} from "./table.setting";
import { MetrologyView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface TableProps {
  data: MetrologyView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const MetrologyTable: FC<TableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<MetrologyView[]>([]);

  useEffect(() => setDataSource(data), [data]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.sgroei?.includes(searchValue.toUpperCase()) ||
            item?.measurementArea
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.meansurementType
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.meansureGroup
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.grsi?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.documentType
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.documentNumber
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.counterparty
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.fromDate
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.toDate?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.status?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.mpi?.toUpperCase()?.includes(searchValue.toUpperCase())
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
              //   setActionType("POST");
              //   setFormVisible(true);
              // }}
            >
              <SearchOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-primary"
              />
              Документы
            </Space>
          ),

          key: "1",
          children: [
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
                  Свидетельство об утверждении типа СИ
                </Space>
              ),
              key: "2",
            },
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
                  Методика поверки
                </Space>
              ),
              key: "3",
            },
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
                  Документ со сведениями о поверке/калибровке
                </Space>
              ),
              key: "4",
            },
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
                  "ФГИС «АРШИН»
                </Space>
              ),
              key: "5",
            },
          ],
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

  const columns: TableColumnsType<MetrologyView> = [
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
          width: 150,
          filterSearch:
            setMetrologyFilters("unit", dataSource).length > 5 ? true : false,
          filters: setMetrologyFilters("unit", dataSource),
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
            setMetrologyFilters("sub-unit", dataSource).length > 5
              ? true
              : false,
          filters: setMetrologyFilters("sub-unit", dataSource),
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
          filterSearch:
            setMetrologyFilters("tag", dataSource).length > 5 ? true : false,
          filters: setMetrologyFilters("tag", dataSource),
          onFilter: (value: any, record) =>
            record.tag.toUpperCase().includes(value.toUpperCase()),
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "СГРОЕИ",
      dataIndex: "sgroei",
      key: "sgroei",
      align: "center",
      filterSearch:
        setMetrologyFilters("sgroei", data).length > 5 ? true : false,
      filters: setMetrologyFilters("sgroei", data),
      onFilter: (value: any, record) =>
        record.sgroei
          ? record.sgroei.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Область измерений",
      dataIndex: "measurementArea",
      key: "measurementArea",
      align: "center",
      width: 120,
      filterSearch:
        setMetrologyFilters("area", dataSource).length > 5 ? true : false,
      filters: setMetrologyFilters("area", dataSource),
      onFilter: (value: any, record) =>
        record.measurementArea
          ? record.measurementArea.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Вид измерений",
      dataIndex: "meansurementType",
      key: "meansurementType",
      align: "center",
      width: 120,
      filterSearch:
        setMetrologyFilters("type", dataSource).length > 5 ? true : false,
      filters: setMetrologyFilters("type", dataSource),
      onFilter: (value: any, record) =>
        record.meansurementType
          ? record.meansurementType.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Группа СИ",
      dataIndex: "meansureGroup",
      key: "meansureGroup",
      align: "center",
      filterSearch:
        setMetrologyFilters("group", dataSource).length > 5 ? true : false,
      filters: setMetrologyFilters("group", dataSource),
      onFilter: (value: any, record) =>
        record.meansureGroup
          ? record.meansureGroup.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "№ ГРСИ",
      dataIndex: "grsi",
      key: "grsi",
      align: "center",
      filterSearch:
        setMetrologyFilters("grsi", dataSource).length > 5 ? true : false,
      filters: setMetrologyFilters("grsi", dataSource),
      onFilter: (value: any, record) =>
        record.grsi
          ? record.grsi.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Характеристики",
      children: [
        {
          title: "Пределы измерений",

          children: [
            {
              title: "min",
              dataIndex: "min",
              key: "min",
              align: "center",
              // width: 200,
              render: (value, record) => (
                <Text type="secondary">
                  {value} {record.range}
                </Text>
              ),
            },
            {
              title: "max",
              dataIndex: "max",
              key: "max",
              align: "center",
              // width: 200,
              render: (value, record) => (
                <Text type="secondary">
                  {value} {record.range}
                </Text>
              ),
            },
          ],
        },
        {
          title: "Погрешность/класс точности, %",
          dataIndex: "accuracy",
          key: "accuracy",
          align: "center",
          // width: 200,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "Сведения о МО",
      children: [
        {
          title: "Документ",

          children: [
            {
              title: "Тип документа",
              dataIndex: "documentType",
              key: "documentType",
              align: "center",
              // width: 200,
              render: (value, record) => <Text type="secondary">{value}</Text>,
            },
            {
              title: "Орг-я, выполнившая работы",
              dataIndex: "counterparty",
              key: "counterparty",
              align: "center",
              // width: 200,
              render: (value, record) => <Text type="secondary">{value}</Text>,
            },
            {
              title: "Дата поверки/калибровки",
              dataIndex: "fromDate",
              key: "fromDate",
              align: "center",
              width: 120,
              render: (value, record) => (
                <Text type="secondary">{formatDate(record.fromDate)}</Text>
              ),
            },
            {
              title: "Дата след. поверки/калибровки",
              // dataIndex: "toDate",
              // key: "toDate",
              align: "center",
              width: 120,
              filterSearch:
                setMetrologyFilters("date-to-verification", dataSource).length >
                5
                  ? true
                  : false,
              filters: setMetrologyFilters("date-to-verification", dataSource),
              onFilter: (value: any, record) =>
                record.toDate
                  ? record.toDate
                      .toUpperCase()
                      .includes(formatDate(value.toUpperCase()))
                  : false,
              render: (value, record) => (
                <Text
                  type={
                    verificateDates(
                      setDateToVerification(record.fromDate, record.mpi)
                    ) === "d"
                      ? "danger"
                      : verificateDates(
                          setDateToVerification(record.fromDate, record.mpi)
                        ) === "s"
                      ? "success"
                      : "warning"
                  }
                >
                  {setDateToVerification(record.fromDate, record.mpi)}
                </Text>
              ),
            },
            {
              title: "МПИ, мес.",
              dataIndex: "mpi",
              key: "mpi",
              align: "center",
              width: 60,
              render: (value) => <Text type="secondary">{value}</Text>,
            },
          ],
        },
        {
          title: "Статус",
          dataIndex: "status",
          key: "status",
          align: "center",
          // width: 200,
          render: (value, record) => <Text type="secondary">{value}</Text>,
        },
      ],
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
    />
  );
};

export default MetrologyTable;
