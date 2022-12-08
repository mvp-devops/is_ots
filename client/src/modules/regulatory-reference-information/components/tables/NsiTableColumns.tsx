import { Space, TableColumnsType, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";

import { FormActions } from "../../../main";
import { NSIView } from "../../types";
import { useNsiTable, setTableColumnFilters } from ".";
import { stringSorter } from "../../../main/utils/main.utils";

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
    // width: dictionaryTarget === "section" ? 800 : 400,
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
    sorter: (a, b) => stringSorter(a?.title, b?.title),
    onFilter: (value: any, record) =>
      record?.title?.toUpperCase()?.includes(value.toUpperCase()),
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
    sorter: (a, b) => stringSorter(a?.description, b?.description),
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
    sorter: (a, b) =>
      +a?.tenseGoal < +b?.tenseGoal
        ? -1
        : +a?.tenseGoal > +b?.tenseGoal
        ? 1
        : 0,
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
    sorter: (a, b) => (+a?.goal < +b?.goal ? -1 : +a?.goal > +b?.goal ? 1 : 0),
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
    sorter: (a, b) =>
      +a?.threshold < +b?.threshold
        ? -1
        : +a?.threshold > +b?.threshold
        ? 1
        : 0,
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