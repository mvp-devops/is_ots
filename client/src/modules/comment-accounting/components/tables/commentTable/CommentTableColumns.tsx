import { Dropdown, Menu, Space, TableColumnsType, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";

import { DesignDocumentCommentView } from "../../..";
import { FormActions, setFilePath } from "../../../../main";
import { useCommentTable } from "./hooks/useCommentTable";
import { setCommentFilters } from "../table.settings";

const { Text } = Typography;

const CommentTableColumns = () => {
  const { dataSource, currentDesignDocument, setActionType, setFormVisible } =
    useCommentTable();

  const numberColumn: ColumnType<DesignDocumentCommentView> = {
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

  const markFilters = setCommentFilters("document-section", dataSource);

  const markColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Раздел/Марка документа",
    dataIndex: "documentSection",
    key: "documentSection",
    filterSearch: markFilters.length > 5 ? true : false,
    filters: markFilters,
    onFilter: (value: any, record) =>
      record?.documentSection
        ? record?.documentSection?.toUpperCase()?.includes(value?.toUpperCase())
        : false,
    width: 50,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const documentCodeColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Обозначение документа",
    dataIndex: "documentCode",
    key: "documentCode",
    width: 100,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const documentTitleColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Наименование документа",
    dataIndex: "documentTitle",
    key: "documentTitle",
    width: 250,
    align: "center",
    render: (_, record) => {
      return (
        currentDesignDocument && (
          <Space className="d-flex justify-content-start">
            <Text type="secondary">
              {currentDesignDocument?.fileType?.toUpperCase() === ".PDF" ? (
                <FilePdfOutlined className="text-danger" />
              ) : (
                <FileUnknownOutlined className="text-secondary" />
              )}
            </Text>
            <a
              href={setFilePath(
                `${currentDesignDocument?.filePath}/${currentDesignDocument?.fileName}`
              )}
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-secondary"
              title={record?.documentTitle}
            >
              {record?.documentTitle}
            </a>
          </Space>
        )
      );
    },
  };

  const documentPageColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Страница/Лист документа",
    dataIndex: "documentPage",
    key: "documentPage",
    width: 50,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const commentColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Замечание",
    dataIndex: "comment",
    key: "comment",
    width: 400,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const normativeFilters = setCommentFilters("normative", dataSource);

  const normativeColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Нормативная ссылка",
    dataIndex: "normative",
    key: "normative",
    filterSearch: normativeFilters.length > 5 ? true : false,
    filters: normativeFilters,
    onFilter: (value: any, record) =>
      record?.normative
        ? record?.normative?.toUpperCase()?.includes(value?.toUpperCase())
        : false,
    width: 250,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const criticalityFilters = setCommentFilters("criticality", dataSource);

  const criticalityColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Код замечания*",
    dataIndex: "criticalityId",
    key: "criticalityId",
    filterSearch: criticalityFilters.length > 5 ? true : false,
    filters: criticalityFilters,
    onFilter: (value, record) =>
      record?.criticalityId
        ? record?.criticalityId
            ?.toString()
            ?.toUpperCase()
            ?.includes(value?.toString()?.toUpperCase())
        : false,
    width: 50,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const subdivisionFilters = setCommentFilters(
    "expert-subdivision",
    dataSource
  );

  const subdivisionColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Наименование отдела/службы",
    dataIndex: "expertSubdivision",
    key: "expertSubdivision",
    filterSearch: subdivisionFilters.length > 5 ? true : false,
    filters: subdivisionFilters,
    onFilter: (value: any, record) =>
      record?.expertSubdivision
        ? record?.expertSubdivision
            ?.toUpperCase()
            ?.includes(value?.toUpperCase())
        : false,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const expertContactsFilters = setCommentFilters(
    "expert-contacts",
    dataSource
  );

  const expertContactsColumn: ColumnType<DesignDocumentCommentView> = {
    title: "Ф.И.О. специалиста, контактные данные",
    dataIndex: "expertContacts",
    key: "expertContacts",
    filterSearch: expertContactsFilters.length > 5 ? true : false,
    filters: expertContactsFilters,
    onFilter: (value: any, record) =>
      record?.expertContacts
        ? record?.expertContacts?.toUpperCase()?.includes(value?.toUpperCase())
        : false,
    align: "center",
    render: (value) => <Text type="secondary">{value}</Text>,
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Space
              className="text-secondary"
              onClick={() => {
                setActionType(FormActions.EDIT_COMMENT);
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

          key: "EDIT_COMMENT",
        },
        {
          label: (
            <Space
              className="text-secondary"
              onClick={() => {
                setActionType(FormActions.REMOVE_COMMENT);
                setFormVisible(true);
              }}
            >
              <DeleteOutlined
                className="text-danger"
                style={{ marginBottom: "6px", padding: 0 }}
              />
              Удалить
            </Space>
          ),
          key: "REMOVE_COMMENT",
        },
      ]}
    />
  );

  const actionsColumn: ColumnType<DesignDocumentCommentView> = {
    title: "",
    key: "actions",
    render: (_blank, record) => (
      <Dropdown trigger={["click"]} overlay={menu}>
        <EllipsisOutlined className="text-secondary" />
      </Dropdown>
    ),
  };

  const columns: TableColumnsType<DesignDocumentCommentView> = [
    numberColumn,
    markColumn,
    documentCodeColumn,
    documentTitleColumn,
    documentPageColumn,
    commentColumn,
    normativeColumn,
    criticalityColumn,
    subdivisionColumn,
    expertContactsColumn,
    actionsColumn,
  ];

  return columns;
};

export default CommentTableColumns;
