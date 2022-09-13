import { Space, TableColumnsType, Typography } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  FileAddOutlined,
  ContainerOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
  DeleteOutlined,
  CheckOutlined,
  SearchOutlined,
  MessageOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import { FormActions } from "../../../main";
import { setTableColumnFilters } from "./table.settings";
import { usePositionTreeTable } from "./hooks";

const { Text } = Typography;

const TableColumns = (): TableColumnsType<PositionTreeView> => {
  const {
    childTarget,
    renderItems,
    setFormVisible,
    setActionType,
    dataSource,
    titleFilters,
  } = usePositionTreeTable();

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
    filters: titleFilters,
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

  const codeFilters = setTableColumnFilters("code", renderItems);

  const codeColumn: ColumnType<PositionTreeView> = {
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

  const contractFilters = setTableColumnFilters("contract", renderItems);

  const contractColumn: ColumnType<PositionTreeView> = {
    title: "№ договора",
    dataIndex: "contract",
    key: "contract",
    align: "center",
    filters: contractFilters,
    filterSearch: contractFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "contract" in record &&
      record.contract.toUpperCase().includes(value.toUpperCase()),
    render: (_, record) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {"contract" in record && record.contract}
      </Text>
    ),
  };

  const positionFilters = setTableColumnFilters("position", renderItems);

  const positionColumn: ColumnType<PositionTreeView> = {
    title: "Позиция по ГП",
    dataIndex: "position",
    key: "position",
    align: "center",
    filters: positionFilters,
    filterSearch: positionFilters ? true : false,
    onFilter: (value: any, record) =>
      "position" in record &&
      record.position.toUpperCase().includes(value.toUpperCase()),
    render: (_, record) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {"position" in record && record.position}
      </Text>
    ),
  };

  const designTitleFilters = setTableColumnFilters("design", renderItems);

  const designTitleColumn: ColumnType<PositionTreeView> = {
    title: "Проектировщик",
    key: "designTitle",
    align: "center",
    filters: designTitleFilters,
    filterSearch: designTitleFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "design" in record &&
      record.design.title.toUpperCase().includes(value.toUpperCase()),
    render: (_, record) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {"design" in record && record.design.title}
      </Text>
    ),
  };

  const equipmenTypeFilters = setTableColumnFilters("equipment", renderItems);

  const equipmentTypeColumn: ColumnType<PositionTreeView> = {
    title: "Группа",
    key: "equipmentType",
    align: "center",
    filters: equipmenTypeFilters,
    filterSearch: equipmenTypeFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "equipment" in record &&
      record.equipment.title.toUpperCase().includes(value.toUpperCase()),
    render: (_, record) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {"equipment" in record && record.equipment.title}
      </Text>
    ),
  };

  const supplierTitleFilters = setTableColumnFilters("supplier", renderItems);

  const supplierTitleColumn: ColumnType<PositionTreeView> = {
    title: "Поставщик",
    key: "supplierTitle",
    align: "center",
    filters: supplierTitleFilters,
    filterSearch: supplierTitleFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "supplier" in record &&
      record.supplier.title.toUpperCase().includes(value.toUpperCase()),

    render: (_, record) => (
      <Text type="secondary" style={{ fontSize: 12 }}>
        {"supplier" in record && record.supplier.title}
      </Text>
    ),
  };

  const actionsColumn: ColumnType<PositionTreeView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    render: (_blank, record) => (
      <Space size="middle" className="d-flex justify-content-end">
        <EditOutlined
          title="Редактировать информацию"
          className="text-secondary"
          onClick={() => {
            setActionType(FormActions.EDIT_CHILD);
            setFormVisible(true);
          }}
        />

        <DeleteOutlined
          title="Удалить запись"
          className="text-danger"
          onClick={() => {
            setActionType(FormActions.REMOVE_CHILD);
            setFormVisible(true);
          }}
        />
      </Space>
    ),
  };

  const columns: TableColumnsType<PositionTreeView> = [];

  switch (childTarget) {
    case "field": {
      columns.push(numberColumn);
      columns.push(titleColumn);
      columns.push(codeColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);
      break;
    }
    case "project": {
      columns.push(numberColumn);
      columns.push(codeColumn);
      columns.push(titleColumn);
      columns.push(designTitleColumn);
      columns.push(contractColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);
      break;
    }
    case "unit":
    case "sub-unit": {
      columns.push(numberColumn);
      columns.push(positionColumn);
      columns.push(titleColumn);
      columns.push(equipmentTypeColumn);
      columns.push(supplierTitleColumn);
      columns.push(contractColumn);
      columns.push(descriptionColumn);
      columns.push(actionsColumn);
      break;
    }
    default:
      break;
  }

  return columns;
};

export default TableColumns;
