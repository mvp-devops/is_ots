import { Space, TableColumnsType, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  FileExcelOutlined, MessageOutlined
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import type {DesignDocumentView} from "../../../../../../../server/common/types/file-storage";
import {useActions, useTypedSelector} from "../../../../../hooks";
import {setTableColumnFilters} from "./table.settings";
import {stringSorter} from "../../../../main/utils/main.utils";
import {FormActions, setFilePath} from "../../../../main";
import {Roles} from "../../../../main/utils/main.consts";

const { Text } = Typography;

const TableColumns = (data: DesignDocumentView[]): TableColumnsType<DesignDocumentView> => {

  const { setActionType, setFormVisible, removeDesignDocument, setCollectiveCheckSheetView } = useActions();
  const {target} = useTypedSelector(state => state.positionTree)

  const showForm = (action: string) => {
    setActionType(action);
    setFormVisible(true);
  }

  const numberColumn: ColumnType<DesignDocumentView> = {
    title: "№ п/п",
    key: "number",
    align: "center",
    width: 50,

    render: (_, __, ind: number) => (
      <Text type="secondary">
        {ind + 1}
      </Text>
    ),
  };

  const fileTypeIcon = (fileType: string) => {

    const type = fileType?.toUpperCase();
    let icon = <FileUnknownOutlined className="text-secondary"/>;

    switch (type) {
      case "PDF": return <FilePdfOutlined className="text-danger" />;
      case "DOC":
      case "DOCX": return <FileWordOutlined className="text-info" />;
      case "XLS":
      case "XLSX": return <FileExcelOutlined className="text-success"/>
      default: return icon
    }

  }

  const codeFilters = setTableColumnFilters("code", data);
  const codeColumn: ColumnType<DesignDocumentView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    align: "center",
    // width: 300,
    filters: codeFilters,
    filterSearch: codeFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.code?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) =>
      isNaN(+a.code) && isNaN(+b.code)
        ? stringSorter(a?.code, b?.code)
        : +a?.code < +b?.code
          ? -1
          : +a?.code > +b?.code
            ? 1
            : 0,
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const titleFilters = setTableColumnFilters("title", data);
  const titleColumn: ColumnType<DesignDocumentView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
    sorter: (a, b) => stringSorter(a?.title, b?.title),
    onFilter: (value: any, record) =>
      record?.title?.toUpperCase()?.includes(value?.toUpperCase()),
    render: (_, {title, code, fileType, filePath, fileName} ) =>  (
        (
          <Space className="d-flex justify-content-start align-content-center">
            {fileTypeIcon(fileType)}
            <a
              href={setFilePath(`${filePath}/${fileName}`)}
              target="_blank"
              rel="noreferrer"
              className="ms-2 text-secondary"
              title={`${code}. ${title}.${fileType}`}
            >
              {title}
            </a>
          </Space>
        )
      )

  };

  const revisionColumn: ColumnType<DesignDocumentView> = {
    title: "Ревизия/версия",
    dataIndex: "revision",
    key: "revision",
    align: "center",
    width: 80,
    render: (value: string) => (
      <Text type="secondary">
        {value}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<DesignDocumentView> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) => stringSorter(a?.description, b?.description),
    render: (value: string) => (
      <Text type="secondary">
        {value}
      </Text>
    ),
  };

  const dateCreateColumn: ColumnType<DesignDocumentView> = {
    title: "Дата загрузки",
    dataIndex: "createdAt",
    key: "createdAt",
    align: "center",
    sorter: (a, b) =>
      +a?.createdAt < +b?.createdAt
        ? -1
        : +a?.createdAt > +b?.createdAt
        ? 1
        : 0,
    render: (value: string) => (
      <Text type="secondary">
        {value}
      </Text>
    ),
  };

  const dateUpdateColumn: ColumnType<DesignDocumentView> = {
    title: "Дата загрузки",
    dataIndex: "updatedAt",
    key: "updatedAt",
    align: "center",
    sorter: (a, b) =>
      +a?.updatedAt < +b?.updatedAt
        ? -1
        : +a?.updatedAt > +b?.updatedAt
          ? 1
          : 0,
    render: (value: string) => (
      <Text type="secondary">
        {value}
      </Text>
    ),
  };

  const stageFilters = setTableColumnFilters("stage", data);

  const stageColumn: ColumnType<DesignDocumentView> = {
    title: "Стадия",
    dataIndex: "stageTitle",
    key: "stageTitle",
    align: "center",
    filters: stageFilters,
    filterSearch: stageFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.stageTitle?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => stringSorter(a?.stageTitle, b?.stageTitle),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const sectionFilters = setTableColumnFilters("section", data);

  const sectionColumn: ColumnType<DesignDocumentView> = {
    title: "Марка/раздел",
    dataIndex: "sectionTitle",
    key: "sectionTitle",
    align: "center",
    filters: sectionFilters,
    filterSearch: sectionFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.sectionTitle?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => stringSorter(a?.sectionTitle, b?.sectionTitle),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const supplierFilters = setTableColumnFilters("supplier", data);

  const supplierColumn: ColumnType<DesignDocumentView> = {
    title: "Проектировщик",
    dataIndex: "supplierTitle",
    key: "supplierTitle",
    align: "center",
    filters: supplierFilters,
    filterSearch: supplierFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.supplierTitle?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => stringSorter(a?.supplierTitle, b?.supplierTitle),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };
  const {currentUser} = useTypedSelector(state => state.main);

  const actionsColumn: ColumnType<DesignDocumentView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    render: (_blank, {id}) => (
      <Space size="middle" className="d-flex justify-content-end">
        {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.CUSTOMER))  && (
          <MessageOutlined
            title="Добавить замечание"
            className="text-info"
            onClick={() => {
              setActionType(FormActions.VIEW_COMMENT);
              setCollectiveCheckSheetView(true);
            }}
          />
        ) }
        {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.ESCORT))  && (
          <>
            <EditOutlined
              title="Редактировать документ"
              className="text-secondary"
              onClick={() => showForm(FormActions.EDIT_DOCUMENT)}
            />

            <DeleteOutlined
              title="Удалить документ"
              className="text-danger"
              onClick={() => removeDesignDocument(id, undefined, target)}
            />
          </>
        )}

      </Space>
    ),
  };

  const columns: TableColumnsType<DesignDocumentView> = [
    numberColumn,
    codeColumn,
    titleColumn,
    revisionColumn,
    stageColumn,
    sectionColumn,
    dateCreateColumn,
    descriptionColumn,
    actionsColumn
  ];

  target !== "project" && columns.push(supplierColumn)






  return columns;
};

export default TableColumns;