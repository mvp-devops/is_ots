import { Space, TableColumnsType, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  FileWordOutlined,
  FileUnknownOutlined,
  FileExcelOutlined
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import type {NormativeView} from "../../../../../../../server/common/types/file-storage";
import {useActions} from "../../../../../hooks";
import {setTableColumnFilters} from "./table.settings";
import {stringSorter} from "../../../../main/utils/main.utils";
import {FormActions, setFilePath} from "../../../../main";

const { Text } = Typography;

const TableColumns = (data: NormativeView[]): TableColumnsType<NormativeView> => {

  const { setActionType, setFormVisible, removeNormative } = useActions();

  const showForm = (action: string) => {
    setActionType(action);
    setFormVisible(true);
  }

  const numberColumn: ColumnType<NormativeView> = {
    title: "№ п/п",
    key: "number",
    align: "center",
    width: 50,

    render: (_, __, ind: number) => (
      <Text  >
        {ind + 1}
      </Text>
    ),
  };

  const fileTypeIcon = (fileType: string) => {

    const type = fileType.toUpperCase();
    let icon = <FileUnknownOutlined className=" "/>;

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
  const codeColumn: ColumnType<NormativeView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    align: "center",
    // width: 300,
    filters: codeFilters,
    filterSearch: codeFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.code?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      isNaN(+a.code) && isNaN(+b.code)
        ? stringSorter(a?.code, b?.code)
        : +a?.code < +b?.code
          ? -1
          : +a?.code > +b?.code
            ? 1
            : 0,
    render: (value: string) => (
      <Text   style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const titleFilters = setTableColumnFilters("title", data);
  const titleColumn: ColumnType<NormativeView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
    sorter: (a, b) => stringSorter(a?.title, b?.title),
    onFilter: (value: any, record) =>
      record?.title?.toUpperCase()?.includes(value.toUpperCase()),
    render: (_, {title, code, fileType, filePath, fileName} ) =>  (
        (
          <Space className="d-flex justify-content-start align-content-center">
            {fileTypeIcon(fileType)}
            <a
              href={setFilePath(`${filePath}/${fileName}`)}
              target="_blank"
              rel="noreferrer"
              className="ms-2  "
              title={`${code}. ${title}.${fileType}`}
            >
              {title}
            </a>
          </Space>
        )
      )

  };

  const revisionColumn: ColumnType<NormativeView> = {
    title: "Ревизия/версия",
    dataIndex: "revision",
    key: "revision",
    align: "center",
    width: 80,
    render: (value: string) => (
      <Text  >
        {value}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<NormativeView> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) => stringSorter(a?.description, b?.description),
    render: (value: string) => (
      <Text  >
        {value}
      </Text>
    ),
  };

  const dateCreateColumn: ColumnType<NormativeView> = {
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
      <Text  >
        {value}
      </Text>
    ),
  };

  const dateUpdateColumn: ColumnType<NormativeView> = {
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
      <Text  >
        {value}
      </Text>
    ),
  };

  const actionsColumn: ColumnType<NormativeView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    render: (_blank, {id}) => (
      <Space size="middle" className="d-flex justify-content-end">
        <EditOutlined
          title="Редактировать документ"
          className=" "
          onClick={() => showForm(FormActions.EDIT_NORMATIVE)}
        />

        <DeleteOutlined
          title="Удалить документ"
          className="text-danger"
          onClick={() => removeNormative(id.toString())}
        />
      </Space>
    ),
  };

  const columns: TableColumnsType<NormativeView> = [
    numberColumn,
    codeColumn,
    titleColumn,
    revisionColumn,
    descriptionColumn,
    dateCreateColumn,
    dateUpdateColumn,
    actionsColumn
  ];

  return columns;
};

export default TableColumns;