import { Space, TableColumnsType, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";

import { FormActions } from "../../../main";
import { NSIView } from "../..";
import { useNsiTable, setTableColumnFilters } from ".";

const { Text } = Typography;

const NsiTableColumns = (): TableColumnsType<NSIView> => {
  const { setActionType, setFormVisible, dataSource, dictionaryTarget } =
    useNsiTable();

  const numberColumn: ColumnType<NSIView> = {
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

  const titleFilters = setTableColumnFilters("title", dataSource);

  const titleColumn: ColumnType<NSIView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    width: 300,
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
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

  const codeFilters = setTableColumnFilters("code", dataSource);

  const codeColumn: ColumnType<NSIView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    align: "center",
    width: 300,
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

  const descriptionColumn: ColumnType<NSIView> = {
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

  const tenseGoalColumn: ColumnType<NSIView> = {
    title: "Амцель",
    dataIndex: "tenseGoal",
    key: "tenseGoal",
    align: "center",
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const goalColumn: ColumnType<NSIView> = {
    title: "Цель",
    dataIndex: "goal",
    key: "goal",
    align: "center",
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const thresholdColumn: ColumnType<NSIView> = {
    title: "Порог",
    dataIndex: "threshold",
    key: "threshold",
    align: "center",
    render: (value: string) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const actionsColumn: ColumnType<NSIView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    render: (_blank, record) => (
      <Space size="middle" className="d-flex justify-content-end">
        <EditOutlined
          title="Редактировать информацию"
          className="text-secondary"
          onClick={() => {
            setActionType(FormActions.EDIT_DICTIONARY_ITEM);
            setFormVisible(true);
          }}
        />

        <DeleteOutlined
          title="Удалить запись"
          className="text-danger"
          onClick={() => {
            setActionType(FormActions.REMOVE_DICTIONARY_ITEM);
            setFormVisible(true);
          }}
        />
      </Space>
    ),
  };

  const columns: TableColumnsType<NSIView> = [];

  switch (dictionaryTarget) {
    case "criticality": {
      columns.push(numberColumn);
      columns.push(titleColumn);
      columns.push(codeColumn);
      columns.push(thresholdColumn);
      columns.push(goalColumn);
      columns.push(tenseGoalColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);
      break;
    }
    default:
      columns.push(numberColumn);
      columns.push(titleColumn);
      columns.push(codeColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);
      break;
  }

  return columns;
};

export default NsiTableColumns;
