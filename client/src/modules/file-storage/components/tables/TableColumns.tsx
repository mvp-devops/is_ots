import { Space, TableColumnsType, Typography } from "antd";
import {
  EditOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
  DeleteOutlined,
  MessageOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";
import { FormActions, setFilePath } from "../../../main";
import { useFileStorage } from "../../hooks";
import { setTableColumnFilters } from "./table.settings";
import { useFileStorageTable } from "./hooks";

const { Text } = Typography;

const TableColumns = (): TableColumnsType<DesignDocumentView> => {
  const { setFormVisible, setActionType, designDocuments } = useFileStorage();

  const { setCollectiveCheckSheetView } = useFileStorageTable();

  const columns: TableColumnsType<DesignDocumentView> = [];

  const numberColumn: ColumnType<DesignDocumentView> = {
    title: "№ п/п",

    key: "number",
    align: "center",
    width: 50,

    render: (_, __, ind: number) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {ind + 1}
      </Text>
    ),
  };

  const titleFilters = setTableColumnFilters("title", designDocuments);

  const titleColumn: ColumnType<DesignDocumentView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    align: "center",
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record.title.toUpperCase().includes(value.toUpperCase()),
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
  };

  const codeFilters = setTableColumnFilters("code", designDocuments);

  const codeColumn: ColumnType<DesignDocumentView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    align: "center",
    width: 100,
    filters: codeFilters,
    filterSearch: codeFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record.code.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const revisionColumn: ColumnType<DesignDocumentView> = {
    title: "Ревизия",
    dataIndex: "revision",
    key: "revision",
    align: "center",
    render: (value) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const stageFilters = setTableColumnFilters("stage", designDocuments);

  const stageColumn: ColumnType<DesignDocumentView> = {
    title: "Стадия",
    dataIndex: "stageTitle",
    key: "stageTitle",
    align: "center",
    filters: codeFilters,
    filterSearch: stageFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record.stageTitle.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const sectionFilters = setTableColumnFilters("section", designDocuments);

  const sectionColumn: ColumnType<DesignDocumentView> = {
    title: "Марка/раздел",
    dataIndex: "sectionTitle",
    key: "sectionTitle",
    align: "center",
    filters: codeFilters,
    filterSearch: sectionFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record.sectionTitle.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const supplierFilters = setTableColumnFilters("supplier", designDocuments);

  const supplierColumn: ColumnType<DesignDocumentView> = {
    title: "Марка/раздел",
    dataIndex: "supplierTitle",
    key: "supplierTitle",
    align: "center",
    filters: codeFilters,
    filterSearch: supplierFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record.supplierTitle.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const dateColumn: ColumnType<DesignDocumentView> = {
    title: "Дата",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    render: (value) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<DesignDocumentView> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    align: "center",
    render: (value) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const actionsColumn: ColumnType<DesignDocumentView> = {
    title: "Действия",
    key: "operation",
    render: (_blank, record) => (
      <Space size="middle">
        <MessageOutlined
          title="Добавить замечание"
          className="text-info"
          onClick={() => {
            setActionType(FormActions.VIEW_COMMENT);
            setCollectiveCheckSheetView(true);
          }}
        />
        <EditOutlined
          title="Редактировать информацию"
          className="text-secondary"
          onClick={() => {
            setActionType(FormActions.EDIT_DOCUMENT);
            setFormVisible(true);
          }}
        />
        <DeleteOutlined
          title="Удалить документ"
          className="text-danger"
          onClick={() => {
            setActionType(FormActions.REMOVE_DOCUMENT);
            setFormVisible(true);
          }}
        />
      </Space>
    ),
  };

  columns.push(numberColumn);
  columns.push(codeColumn);
  columns.push(titleColumn);
  columns.push(revisionColumn);
  columns.push(stageColumn);
  columns.push(sectionColumn);
  columns.push(supplierColumn);
  columns.push(dateColumn);
  columns.push(descriptionColumn);
  columns.push(actionsColumn);

  return columns;
};

export default TableColumns;
