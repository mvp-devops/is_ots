import { TableColumnsType, Typography } from "antd";
import {CloseCircleOutlined, SyncOutlined, CheckCircleOutlined} from "@ant-design/icons";
import { ColumnType } from "antd/lib/table";
import {setTableColumnFilters} from "./table.settings";

const { Text } = Typography;

const TableColumns = (data): TableColumnsType<any> => {

  const syncColumn: ColumnType<any> = {
    title: "Синхр-ция",
    dataIndex: "sync_flag",
    key: "sync_flag",
    align: "center",
    width: 80,
    render: (value) =>
value === 0 ? <CloseCircleOutlined className="text-danger"/>
        :  value === 1 ? <SyncOutlined className="text-info"/>
          : <CheckCircleOutlined  className="text-success"/>


  };

  const companyFilters = setTableColumnFilters("company", data);
  const companyColumn: ColumnType<any> = {
    title: "ДО",
    dataIndex: "company",
    key: "company",
    filters: companyFilters,
    filterSearch: companyFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.company?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.company < b?.company ? -1 : a?.company > b?.company ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const fieldFilters = setTableColumnFilters("field", data);
  const fieldColumn: ColumnType<any> = {
    title: "Месторождение",
    dataIndex: "field",
    key: "field",
    filters: fieldFilters,
    filterSearch: fieldFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.field?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.field < b?.field ? -1 : a?.field > b?.field ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const facilityFilters = setTableColumnFilters("facility", data);
  const facilityColumn: ColumnType<any> = {
    title: "Объект",
    dataIndex: "facility",
    key: "facility",
    filters: facilityFilters,
    filterSearch: facilityFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.facility?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.facility < b?.facility ? -1 : a?.facility > b?.facility ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const prod_areaFilters = setTableColumnFilters("prod_area", data);
  const prod_areaColumn: ColumnType<any> = {
    title: "Установка",
    dataIndex: "prod_area",
    key: "prod_area",
    filters: prod_areaFilters,
    filterSearch: prod_areaFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.prod_area?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.prod_area < b?.prod_area ? -1 : a?.prod_area > b?.prod_area ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const tagFilters = setTableColumnFilters("position_tag", data);
  const tagColumn: ColumnType<any> = {
    title: "TAG",
    dataIndex: "position_tag",
    key: "position_tag",
    filters: tagFilters,
    filterSearch: tagFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.tag?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.tag < b?.tag ? -1 : a?.tag > b?.tag ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const nameFilters = setTableColumnFilters("name", data);
  const nameColumn: ColumnType<any> = {
    title: "Наименование",
    dataIndex: "name",
    key: "name",
    filters: nameFilters,
    filterSearch: nameFilters.length > 5 ? true : false,
    onFilter: (value: any, record) => record?.name?.toUpperCase()?.includes(value?.toUpperCase()),
    sorter: (a, b) => a?.name < b?.name ? -1 : a?.name > b?.name ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };

  const docColumn: ColumnType<any> = {
    title: "Документ",
    key: "path_to_doc",
    dataIndex: "path_to_doc",
    align: "center",
    render: (value: boolean) => value ? <CheckCircleOutlined  className="text-success"/> : <CloseCircleOutlined className="text-danger"/>
  };

  const verificationProcedureColumn: ColumnType<any> = {
    title: "Методика поверки",
    key: "path_to_method_mc",
    dataIndex: "path_to_method_mc",
    align: "center",
    render: (value: boolean) => value  ? <CheckCircleOutlined  className="text-success"/> : <CloseCircleOutlined className="text-danger"/>
  };

  const typeApprovalCertificateColumn: ColumnType<any> = {
    title: "Св-во об утв. типа СИ",
    key: "path_to_type_app_cert",
    dataIndex: "path_to_type_app_cert",
    align: "center",
    render: (value: boolean) => value ? <CheckCircleOutlined  className="text-success"/> : <CloseCircleOutlined className="text-danger"/>
  };

  const dateCreateColumn: ColumnType<any> = {
    title: "Дата создания",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 120,
    align: "center",
    sorter: (a, b) => a?.createdAt < b?.createdAt ? -1 : a?.createdAt > b?.createdAt ? 1 : 0,
    render: (value: string) =><Text>{value}</Text>
  };

  const dateUpdateColumn: ColumnType<any> = {
    title: "Дата синхр-ции",
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: 120,
    align: "center",
    sorter: (a, b) => a?.updatedAt < b?.updatedAt ? -1 : a?.updatedAt > b?.updatedAt ? 1 : 0,
    render: (value: string) => <Text>{value}</Text>
  };


  const columns: TableColumnsType<any> = [
    syncColumn,
    companyColumn,
    fieldColumn,
    facilityColumn,
    prod_areaColumn,
    tagColumn,
    nameColumn,
    dateCreateColumn,
    dateUpdateColumn,
    docColumn,
    verificationProcedureColumn,
    typeApprovalCertificateColumn
  ];


  return columns;
};

export default TableColumns;