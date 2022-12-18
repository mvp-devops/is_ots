import { Space, TableColumnsType, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import { PositionTreeView } from "../../types";
import { FormActions, setFilePath } from "../../../main";
import { usePositionTreeTable } from "./hooks";
import { setTableColumnFilters } from "./table.settings";
import { positionSorter, stringSorter } from "../../../main/utils/main.utils";
import {Roles} from "../../../main/utils/main.consts";
import {useTypedSelector} from "../../../../hooks";

const { Text } = Typography;

const TableColumns = (): TableColumnsType<PositionTreeView> => {
  const {
    childTarget,
    renderItems,
    setFormVisible,
    setActionType,
    dataSource,
    setSummaryListOfEquipmentView,
  } = usePositionTreeTable();

  const numberColumn: ColumnType<PositionTreeView> = {
    title: "№ п/п",

    key: "number",
    width: 50,
    render: (_, __, ind: number) => (
      <Text   style={{ fontSize: 12 }}>
        {ind + 1}
      </Text>
    ),
  };

  const titleFilters = setTableColumnFilters("title", dataSource);

  const titleColumn: ColumnType<PositionTreeView> = {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
    filters: titleFilters,

    filtered: true,
    filterSearch: titleFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.title?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      a?.title?.toUpperCase() < b?.title?.toUpperCase()
        ? -1
        : a?.title?.toUpperCase() > b?.title?.toUpperCase()
        ? 1
        : 0,

    render: (value: string) => (
      <Text

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
    width: 100,
    filters: codeFilters,
    filterSearch: codeFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      record?.code?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      a?.code?.toUpperCase() < b?.code?.toUpperCase()
        ? -1
        : a?.code?.toUpperCase() > b?.code?.toUpperCase()
        ? 1
        : 0,
    render: (value: string) => (
      <Text   style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const descriptionColumn: ColumnType<PositionTreeView> = {
    title: "Примечание",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) =>
      a?.description?.toUpperCase() < b?.description?.toUpperCase()
        ? -1
        : a?.description?.toUpperCase() > b?.description?.toUpperCase()
        ? 1
        : 0,
    render: (value: string) => (
      <Text   style={{ fontSize: 12 }}>
        {value}
      </Text>
    ),
  };

  const contractFilters = setTableColumnFilters("contract", renderItems);

  const contractColumn: ColumnType<PositionTreeView> = {
    title: "№ договора",
    dataIndex: "contract",
    key: "contract",
    filters: contractFilters,
    filterSearch: contractFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "contract" in record &&
      record?.contract?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      "contract" in a &&
      "contract" in b &&
      (a?.contract?.toUpperCase() < b?.contract?.toUpperCase()
        ? -1
        : a?.contract?.toUpperCase() > b?.contract?.toUpperCase()
        ? 1
        : 0),
    render: (_, record) => (
      <Text   style={{ fontSize: 12 }}>
        {"contract" in record && record?.contract}
      </Text>
    ),
  };

  const fff = (n: number, m: number): number => {
    return n < m ? -1 : n > m ? 1 : 0;
  };

  const positionFilters = setTableColumnFilters("position", renderItems);

  const positionColumn: ColumnType<PositionTreeView> = {
    title: "Позиция по ГП",
    dataIndex: "position",
    key: "position",
    sorter: (a, b) =>
      "position" in a &&
      "position" in b &&
      positionSorter(a.position, b.position),

    filtered: true,
    filters: positionFilters,
    filterSearch: positionFilters ? true : false,
    onFilter: (value: any, record) =>
      "position" in record &&
      record?.position?.toUpperCase()?.includes(value.toUpperCase()),
    render: (_, record) => (
      <Text   style={{ fontSize: 12 }}>
        {"position" in record && record?.position !== "0" ? record?.position : " - "}
      </Text>
    ),
  };

  const designTitleFilters = setTableColumnFilters("design", renderItems);

  const designTitleColumn: ColumnType<PositionTreeView> = {
    title: "Проектировщик",
    key: "designTitle",
    filters: designTitleFilters,
    filterSearch: designTitleFilters.length > 5 ? true : false,
    onFilter: (value: any, record) =>
      "design" in record &&
      record?.design?.title?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      "design" in a &&
      "design" in b &&
      stringSorter(a?.design?.title, b?.design?.title),
    render: (_, record) => (
      <Text   style={{ fontSize: 12 }}>
        {"design" in record && record?.design?.title}
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
      record?.equipment.title?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      "equipment" in a &&
      "equipment" in b &&
      (a?.equipment?.title?.toUpperCase() < b?.equipment?.title?.toUpperCase()
        ? -1
        : a?.equipment?.title?.toUpperCase() >
          b?.equipment?.title?.toUpperCase()
        ? 1
        : 0),

    render: (_, record) => (
      <Text   style={{ fontSize: 12 }}>
        {"equipment" in record && record?.equipment.title}
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
      record?.supplier.title?.toUpperCase()?.includes(value.toUpperCase()),
    sorter: (a, b) =>
      "supplier" in a &&
      "supplier" in b &&
      (a?.supplier?.title?.toUpperCase() < b?.supplier?.title?.toUpperCase()
        ? -1
        : a?.supplier?.title?.toUpperCase() > b?.supplier?.title?.toUpperCase()
        ? 1
        : 0),

    render: (_, record) => (
      <Text   style={{ fontSize: 12 }}>
        {"supplier" in record && record?.supplier.title}
      </Text>
    ),
  };

  const {currentUser} = useTypedSelector(state => state.main);

  const actionsColumn: ColumnType<PositionTreeView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    render: (_blank, record) => (
      <Space size="middle" className="d-flex justify-content-end">
        {"unitQuestionare" in record && record?.unitQuestionare && (
          <a
            href={setFilePath(
              `${record?.unitQuestionare?.filePath}/${record?.unitQuestionare?.fileName}`
            )}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FileSearchOutlined className="text-primary" title="ОЛ, TT, ТЗ" />
          </a>
        )}
        {(childTarget === "project" ||
          childTarget === "unit" ||
          childTarget === "sub-unit") && (
          <AppstoreOutlined
            key="SUMMARY_LIST_OF_EQUIPMENT"
            className="text-info"
            title="Перечень оборудования"
            onClick={() => {
              setSummaryListOfEquipmentView(true);
              setActionType(FormActions.SUMMARY_LIST_OF_EQUIPMENT);
            }}
          />
        )}
        {"subUnitQuestionare" in record && record?.subUnitQuestionare && (
          <a
            href={setFilePath(
              `${record?.subUnitQuestionare?.filePath}/${record?.subUnitQuestionare?.fileName}`
            )}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FileSearchOutlined className="text-primary" title="ОЛ, TT, ТЗ" />
          </a>
        )}
        {currentUser.roles.includes(Roles.ESCORT) && (
          <>
            <EditOutlined
              title="Редактировать информацию"
              className=" "
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
          </>
        )}
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
    case "unit": {
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