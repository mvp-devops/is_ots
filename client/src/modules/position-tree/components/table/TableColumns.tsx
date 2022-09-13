import { Space, TableColumnsType, Typography } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import {
  FieldView,
  PositionTreeView,
} from "../../../../../../server/common/types/position-tree";
import { usePositionTreeTableData } from "./hooks/usePositionTreeTableData";
import { setTableColumnFilters } from "./table.settings";

const { Text } = Typography;

const TableColumns = (): TableColumnsType<PositionTreeView> => {
  const { renderItems, currentItem } = usePositionTreeTableData();

  const numberColumn: ColumnType<PositionTreeView> = {
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

  const titleColumn: ColumnType<PositionTreeView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    align: "center",
    filters: setTableColumnFilters("title", renderItems),
    onFilter: (value: any, record) =>
      record.title.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text
        type="secondary"
        className="d-flex justify-content-start mx-2"
        style={{ fontSize: 12 }}
      >
        {value}
      </Text>
    ),
  };

  const codeColumn: ColumnType<PositionTreeView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    align: "center",
    width: 100,
    filters: setTableColumnFilters("code", renderItems),
    onFilter: (value: any, record) =>
      record.code.toUpperCase().includes(value.toUpperCase()),
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<PositionTreeView> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    align: "center",
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  //   const subsidiaryTitleColumn: ColumnType<PositionTreeView> = {
  //     title: "До/СП",
  //     key: "subsidiary",
  //     align: "center",
  //     width: 300,
  //     filters: setTableColumnFilters("subsidiary", renderItems),
  //     onFilter: (value: any, record) =>
  //       "subsidiary" in record &&
  //       record.subsidiary.title.toUpperCase().includes(value.toUpperCase()),
  //     render: (_, record) => (
  //       <Text
  //         type="secondary"
  //         className="d-flex justify-content-start mx-2"
  //         style={{ fontSize: 12 }}
  //       >
  //         {"subsidiary" in record && record.subsidiary.title}
  //       </Text>
  //     ),
  //   };

  //   const actionsColumn: ColumnType<PositionTreeView> = {
  //     title: "Действия",
  //     key: "operation",
  //     render: (_blank, record) => (
  //       <Space size="middle">
  //         <MessageOutlined
  //           title="Добавить замечание"
  //           className="text-info"
  //           // onClick={() => {
  //           //   setActionType(FormActions.POST);
  //           //   setCurrentDocument(record);
  //           //   setAddCommentsVisible(true);
  //           // }}
  //         />
  //         <EditOutlined
  //           title="Редактировать информацию"
  //           className="text-secondary"
  //           onClick={() => console.log("Edit")}
  //         />
  //         <DeleteOutlined
  //           title="Удалить документ"
  //           className="text-danger"
  //           onClick={() => {}}
  //         />
  //       </Space>
  //     ),
  //   };

  const columns: TableColumnsType<PositionTreeView> = [];

  switch (currentItem?.childrenTarget) {
    case "field": {
      columns.push(numberColumn);
      //   columns.push(subsidiaryTitleColumn);
      columns.push(titleColumn);
      columns.push(codeColumn);
      columns.push(descriptionColumn);
      break;
    }
    default:
      break;
  }

  return columns;
};

export default TableColumns;
