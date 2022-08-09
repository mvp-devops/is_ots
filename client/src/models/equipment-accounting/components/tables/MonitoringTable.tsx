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
  ExclamationOutlined,
} from "@ant-design/icons";
import { FC } from "react";
import { formatDate, setMonitoringFilters } from "./table.setting";
import { MonitoringView } from "../../../../../../common/types/equipment-accounting";
const { Row, Cell } = Table.Summary;
const { Text } = Typography;

interface MonitoringTableProps {
  data: MonitoringView[];
}

const MonitoringTable: FC<MonitoringTableProps> = ({ data }) => {
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
                  Ведомость смонтированного оборудования
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
                  Акт о подключении
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
                  Акт об окончии ПНР
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
                  Протокол проверки сигналов
                </Space>
              ),
              key: "5",
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
                  Акт ввода в эксплуатацию
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
              <ExclamationOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-warning"
              />
              Замечания
            </Space>
          ),

          key: "3",
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

  const columns: TableColumnsType<MonitoringView> = [
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
          width: 200,
          filterSearch:
            setMonitoringFilters("unit", data).length > 5 ? true : false,
          filters: setMonitoringFilters("unit", data),
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

          width: 200,
          filterSearch:
            setMonitoringFilters("sub-unit", data).length > 5 ? true : false,
          filters: setMonitoringFilters("sub-unit", data),
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

          width: 200,
          filterSearch:
            setMonitoringFilters("tag", data).length > 5 ? true : false,
          filters: setMonitoringFilters("tag", data),
          onFilter: (value: any, record) =>
            record.tag.toUpperCase().includes(value.toUpperCase()),
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "Дата монтажа",
      dataIndex: "mountDate",
      key: "mountDate",
      align: "center",
      width: 150,
      render: (value, record) => (
        <Text type="secondary">{formatDate(record.mountDate)}</Text>
      ),
    },
    {
      title: "Дата подключения",
      dataIndex: "connectDate",
      key: "connectDate",
      align: "center",
      width: 150,
      render: (value, record) => (
        <Text type="secondary">{formatDate(record.connectDate)}</Text>
      ),
    },
    {
      title: "Дата проведения ПНР",
      dataIndex: "testDate",
      key: "testDate",
      align: "center",
      width: 150,
      render: (value, record) => (
        <Text type="secondary">{formatDate(record.testDate)}</Text>
      ),
    },
    {
      title: "Дата проверки прохождения сигналов на АРМ",
      dataIndex: "awpDate",
      key: "awpDate",
      align: "center",
      width: 150,
      render: (value, record) => (
        <Text type="secondary">{formatDate(record.awpDate)}</Text>
      ),
    },
    {
      title: "Дата ввода в эксплуатацию",
      dataIndex: "commisionDate",
      key: "commisionDate",
      align: "center",
      width: 150,
      render: (value, record) => (
        <Text type="secondary">{formatDate(record.commisionDate)}</Text>
      ),
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
      dataSource={data}
      columns={columns}
      rowKey={(record) => Math.random()}
      // summary={(data) => (
      //   <Row style={{ margin: 0, padding: 0 }}>
      //     <Cell index={0} colSpan={11} align="right">
      //       <Text strong>Длина:</Text>
      //     </Cell>
      //     <Cell index={1} align="center">
      //       <Text strong>{cableSum(data)}</Text>
      //     </Cell>
      //     <Cell index={2} align="center">
      //       <Text strong>м</Text>
      //     </Cell>
      //     <Cell index={3} colSpan={2} />
      //   </Row>
      // )}
    />
  );
};

export default MonitoringTable;
