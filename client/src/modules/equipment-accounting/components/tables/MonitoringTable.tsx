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
import { FC, useEffect, useState } from "react";
import { setMonitoringFilters } from "./table.setting";
import { MonitoringView } from "../../../../../../server/common/types/equipment-accounting";
import { formatDate } from "../../../../utils/main.utils";
import { ModalContainer, MonitoringForm } from "../forms";
import { FormActions } from "../forms/form.settings";
import DeleteDialog from "../forms/DeleteDialog";
import { Link } from "react-router-dom";

const { Text } = Typography;

interface MonitoringTableProps {
  data: MonitoringView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const MonitoringTable: FC<MonitoringTableProps> = ({
  data,
  searchValue,
  unitId,
  subUnitId,
}) => {
  const [dataSource, setDataSource] = useState<MonitoringView[]>([]);
  const [currentRow, setCurrentRow] = useState<MonitoringView | undefined>();
  const [actionType, setActionType] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => setDataSource(data), [data]);

  useEffect(
    () =>
      setDataSource(
        data.filter(
          (item) =>
            item?.unit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.subUnit?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.tag?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.mountDate?.includes(searchValue.toUpperCase()) ||
            item?.connectDate
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.testDate
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase()) ||
            item?.awpDate?.toUpperCase()?.includes(searchValue.toUpperCase()) ||
            item?.commisionDate
              ?.toUpperCase()
              ?.includes(searchValue.toUpperCase())
        )
      ),
    [searchValue]
  );

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

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Space className="text-secondary">
              <SearchOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-primary"
              />
              Документы
            </Space>
          ),

          key: "VIEW",
          children: [
            {
              label: (
                <Space className="text-secondary">
                  <Link
                    to="#"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <SearchOutlined
                      style={{
                        marginRight: "6px",

                        padding: 0,
                      }}
                      className="text-primary"
                    />
                    <Text type="secondary">
                      Ведомость смонтированного оборудования
                    </Text>
                  </Link>
                </Space>
              ),
              key: "VIEW-1",
            },
            {
              label: (
                <Space className="text-secondary">
                  <Link
                    to="#"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <SearchOutlined
                      style={{ marginRight: "6px", padding: 0 }}
                      className="text-primary"
                    />
                    <Text type="secondary">Акт о подключении</Text>
                  </Link>
                </Space>
              ),
              key: "VIEW-2",
            },
            {
              label: (
                <Space className="text-secondary">
                  <Link
                    to="#"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <SearchOutlined
                      style={{ marginRight: "6px", padding: 0 }}
                      className="text-primary"
                    />
                    <Text type="secondary">Акт об окончии ПНР</Text>
                  </Link>
                </Space>
              ),
              key: "VIEW-3",
            },
            {
              label: (
                <Space className="text-secondary">
                  <Link
                    to="#"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <SearchOutlined
                      style={{ marginRight: "6px", padding: 0 }}
                      className="text-primary"
                    />
                    <Text type="secondary">Протокол проверки сигналов</Text>
                  </Link>
                </Space>
              ),
              key: "VIEW-4",
            },
            {
              label: (
                <Space className="text-secondary">
                  <Link
                    to="#"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <SearchOutlined
                      style={{ marginRight: "6px", padding: 0 }}
                      className="text-primary"
                    />
                    <Text type="secondary">Акт ввода в эксплуатацию</Text>
                  </Link>
                </Space>
              ),
              key: "VIEW-5",
            },
          ],
        },
        {
          label: (
            <Space className="text-secondary">
              <ExclamationOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-warning"
              />
              Замечания
            </Space>
          ),

          key: "VIEW-6",
        },
        {
          label: (
            <Space
              className="text-secondary"
              onClick={() => {
                setActionType(FormActions.EDIT);
                setFormVisible(true);
              }}
            >
              <EditOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-secondary"
              />
              Редактировать
            </Space>
          ),

          key: "EDIT",
        },
        {
          label: (
            <DeleteDialog
              target="monitoring"
              id={currentRow?.id}
              onCancel={() => {
                setFormVisible(false);
                setActionType("");
              }}
              onConfirm={() => console.log(currentRow)}
              children={
                <Space className="text-secondary">
                  <DeleteOutlined
                    className="text-danger"
                    style={{ marginBottom: "6px", padding: 0 }}
                  />
                  Удалить
                </Space>
              }
            />
          ),
          key: "REMOVE",
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
            setMonitoringFilters("unit", dataSource).length > 5 ? true : false,
          filters: setMonitoringFilters("unit", dataSource),
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
            setMonitoringFilters("sub-unit", dataSource).length > 5
              ? true
              : false,
          filters: setMonitoringFilters("sub-unit", dataSource),
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
            setMonitoringFilters("tag", dataSource).length > 5 ? true : false,
          filters: setMonitoringFilters("tag", dataSource),
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
    <>
      <Table
        size="small"
        bordered
        pagination={data.length < 5 && false}
        scroll={{ y: 500, x: "100%" }}
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record);
            },
          };
        }}
        rowKey={(record) => Math.random()}
      />
      {formVisible && (
        <ModalContainer
          target="monitoring"
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<MonitoringForm row={currentRow} />}
        />
      )}
    </>
  );
};

export default MonitoringTable;
