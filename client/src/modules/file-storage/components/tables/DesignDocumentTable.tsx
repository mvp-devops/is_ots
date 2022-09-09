import {
  Input,
  Layout,
  Space,
  Spin,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import {
  EditOutlined,
  PlusOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
  DeleteOutlined,
  CheckOutlined,
  SearchOutlined,
  MessageOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";
import { useFileStorageTableData } from "./hooks/useFileStorageTableData";
import { tableLocale } from "../../../main";

const { Text } = Typography;
const { Content } = Layout;

const DesignDocumentTable = () => {
  const {
    loading,
    setTableColumnFilters,
    dataSource,
    searchValue,
    onSearch,
    setCurrentDesignDocument,
    setFilePath,
  } = useFileStorageTableData();

  const columns: TableColumnsType<DesignDocumentView> = [
    {
      title: "Шифр",
      dataIndex: "code",
      key: "code",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Наименование",
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (_, record) => {
        return (
          <Space className="d-flex justify-content-start">
            <Text type="secondary">
              {record.fileType.toUpperCase() === ".PDF" ? (
                <FilePdfOutlined className="text-danger" />
              ) : (
                <FileUnknownOutlined className="text-secondary" />
              )}
            </Text>
            <a
              href={setFilePath(`${record.filePath}/${record.fileName}`)}
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-secondary"
              title={record.title}
            >
              {record.title && record.title}
            </a>
          </Space>
        );
      },
    },

    {
      title: "Ревизия",
      dataIndex: "revision",
      key: "revision",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Стадия",
      dataIndex: "stageTitle",
      key: "stageTitle",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
      filters: setTableColumnFilters("stage", dataSource),
      onFilter: (value: any, record) =>
        record.stageTitle.toUpperCase().includes(value.toUpperCase()),
    },
    {
      title: "Марка/раздел",
      dataIndex: "sectionTitle",
      key: "sectionTitle",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
      filters: setTableColumnFilters("section", dataSource),
      onFilter: (value: any, record) =>
        record.sectionTitle.toUpperCase().includes(value.toUpperCase()),
    },
    {
      title: "Контрагент",
      dataIndex: "supplierTitle",
      key: "supplierTitle",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
      filters: setTableColumnFilters("supplier", dataSource),
      onFilter: (value: any, record) =>
        record.supplierTitle
          ? record.supplierTitle.toUpperCase().includes(value.toUpperCase())
          : false,
    },
    {
      title: "Дата",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Примечание",
      dataIndex: "description",
      key: "description",
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Действия",
      key: "operation",
      render: (_blank, record) => (
        <Space size="middle">
          <MessageOutlined
            title="Добавить замечание"
            className="text-info"
            // onClick={() => {
            //   setActionType(FormActions.POST);
            //   setCurrentDocument(record);
            //   setAddCommentsVisible(true);
            // }}
          />
          <EditOutlined
            title="Редактировать информацию"
            className="text-secondary"
            onClick={() => console.log("Edit")}
          />
          <DeleteOutlined
            title="Удалить документ"
            className="text-danger"
            onClick={() => {}}
          />
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      {loading ? (
        <Content
          className="d-flex justify-content-center align-items-center"
          style={{ height: window.innerHeight - 54 }}
        >
          <Spin size="large" />
        </Content>
      ) : (
        <Content>
          <Table
            className="border p-1"
            size="small"
            locale={tableLocale}
            loading={loading}
            rowSelection={{
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: DesignDocumentView[]
              ) => {
                console.log(
                  `selectedRowKeys: ${selectedRowKeys}`,
                  "selectedRows: ",
                  selectedRows
                );
              },
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  setCurrentDesignDocument(record);
                }, // click row
              };
            }}
            title={() => (
              <div className="d-flex justify-content-between font-weight-bold">
                <Text type="secondary">
                  <Input
                    className="mb-3 text-secondary"
                    placeholder="Поиск..."
                    title="Поиск записей по шифру/наименованию/дате"
                    value={searchValue}
                    suffix={<SearchOutlined className="text-secondary" />}
                    onChange={onSearch}
                  />
                </Text>
                <Text type="secondary">ДОКУМЕНТАЦИЯ</Text>
                <Space>
                  <PlusOutlined
                    key="add"
                    className="text-success mx-2 mb-2"
                    style={{ fontSize: "20px" }}
                    title="Добавить документ"
                    //   onClick={() => setAddDocumentVisible(true)}
                  />
                  <DownloadOutlined
                    disabled
                    key="download"
                    className="text-info mx-2 mb-2"
                    style={{ fontSize: "20px" }}
                    title="Скачать"
                    onClick={() => console.log("Скачать документы")}
                  />
                </Space>
              </div>
            )}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={dataSource}
            footer={() => (
              <Space className="d-flex justify-content-end ">
                <Text className="mx-2 text-secondary">
                  Количество документов:{" "}
                </Text>
                <Text className="font-weight-bolder text-secondary">
                  {dataSource.length}
                </Text>
              </Space>
            )}
          />
        </Content>
      )}
    </Layout>
  );
};

export default DesignDocumentTable;
