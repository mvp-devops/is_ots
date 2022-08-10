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
  AppstoreAddOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import {
  cableSum,
  setCableLogFilters,
  setGeneralInformationFilters,
} from "./table.setting";
import { GeneralInformationView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface GeneralInformationTableProps {
  data: GeneralInformationView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const GeneralInformationTable: FC<GeneralInformationTableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<GeneralInformationView[]>([]);

  useEffect(() => setDataSource(data), [data]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.installationLocation
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item.equipmentType
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.systemType?.includes(searchValue.toUpperCase()) ||
            item?.country?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.vendor?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.facilityTitle
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.facilityModification
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.specification
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
              //   setActionType("POST");
              //   setFormVisible(true);
              // }}
            >
              <PlusOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-success"
              />
              Тех. карты
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
                  <AppstoreAddOutlined
                    style={{ marginBottom: "6px", padding: 0 }}
                    className="text-primary"
                  />
                  ПНР
                </Space>
              ),

              key: "1",
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
                  <AppstoreAddOutlined
                    style={{ marginBottom: "6px", padding: 0 }}
                    className="text-primary"
                  />
                  ТО
                </Space>
              ),

              key: "1",
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
                  <AppstoreAddOutlined
                    style={{ marginBottom: "6px", padding: 0 }}
                    className="text-primary"
                  />
                  МО
                </Space>
              ),

              key: "1",
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

  const columns: TableColumnsType<GeneralInformationView> = [
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
            setGeneralInformationFilters("unit", dataSource).length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters("unit", dataSource),
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
          width: 150,
          filterSearch:
            setGeneralInformationFilters("sub-unit", dataSource).length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters("sub-unit", dataSource),
          onFilter: (value: any, record) =>
            record.subUnit
              ? record.subUnit.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Место установки",
          dataIndex: "installationLocation",
          key: "installationLocation",
          align: "center",
          width: 150,
          filterSearch:
            setGeneralInformationFilters("installation-location", dataSource)
              .length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters(
            "installation-location",
            dataSource
          ),
          onFilter: (value: any, record) =>
            record.installationLocation
              ? record.installationLocation
                  .toUpperCase()
                  .includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },

        {
          title: "TAG",
          dataIndex: "tag",
          key: "tag",
          align: "center",
          width: 80,
          filterSearch:
            setGeneralInformationFilters("tag", dataSource).length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters("tag", dataSource),
          onFilter: (value: any, record) =>
            record.tag
              ? record.tag.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Параметр",
          dataIndex: "controlledParameter",
          key: "controlledParameter",
          align: "center",
          width: 100,
          filterSearch:
            setGeneralInformationFilters("controlled-parameter", dataSource)
              .length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters(
            "controlled-parameter",
            dataSource
          ),
          onFilter: (value: any, record) =>
            record.controlledParameter
              ? record.controlledParameter
                  .toUpperCase()
                  .includes(value.toUpperCase())
              : false,
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
      filterSearch:
        setGeneralInformationFilters("equipment-type", dataSource).length > 5
          ? true
          : false,
      filters: setGeneralInformationFilters("equipment-type", dataSource),
      onFilter: (value: any, record) =>
        record.equipmentType
          ? record.equipmentType.toUpperCase().includes(value.toUpperCase())
          : false,
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Система",
      children: [
        {
          title: "РСУ",
          dataIndex: "systemType",
          key: "systemType",
          align: "center",
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
          align: "center",
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
          align: "center",
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
          filterSearch:
            setGeneralInformationFilters("country", dataSource).length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters("country", dataSource),
          onFilter: (value: any, record) =>
            record.country
              ? record.country.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Произв.",
          dataIndex: "vendor",
          key: "vendor",
          align: "center",
          filterSearch:
            setGeneralInformationFilters("vendor", dataSource).length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters("vendor", dataSource),
          onFilter: (value: any, record) =>
            record.vendor
              ? record.vendor.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Наим-е",
          dataIndex: "facilityTitle",
          key: "facilityTitle",
          align: "center",
          filterSearch:
            setGeneralInformationFilters("facility-title", dataSource).length >
            5
              ? true
              : false,
          filters: setGeneralInformationFilters("facility-title", dataSource),
          onFilter: (value: any, record) =>
            record.facilityTitle
              ? record.facilityTitle.toUpperCase().includes(value.toUpperCase())
              : false,
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Модиф.",
          dataIndex: "facilityModification",
          key: "facilityModification",
          align: "center",
          filterSearch:
            setGeneralInformationFilters("facility-modification", dataSource)
              .length > 5
              ? true
              : false,
          filters: setGeneralInformationFilters(
            "facility-modification",
            dataSource
          ),
          onFilter: (value: any, record) =>
            record.facilityModification
              ? record.facilityModification
                  .toUpperCase()
                  .includes(value.toUpperCase())
              : false,
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
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => Math.random()}
    />
  );
};

export default GeneralInformationTable;
