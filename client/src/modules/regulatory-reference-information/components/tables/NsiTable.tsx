import { Input, Layout, Space, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";

import { ModalContainer } from "../../../../components";
import { FormActions, tableLocale } from "../../../main";
import { RegulatoryReferenceInformationForm } from "../forms";
import { useNsiTable, NsiTableColumns, NsiTableFooter } from ".";

const { Text } = Typography;

const NsiTable = () => {
  const {
    dictionaryTarget,
    renderNsiFormFlag,
    tableTitle,
    loading,
    setActionType,
    setFormVisible,
    dataSource,
    setCurrentNsiItem,
    searchValue,
    onSearch,
    exportData,
  } = useNsiTable();

  const columns = NsiTableColumns();

  const menuItems = (
    <>
      <PlusOutlined
        key="ADD_DICTIONARY_ITEM"
        className="text-success mr-3 mb-2"
        style={{ fontSize: 16, cursor: "pointer" }}
        title={`Добавить запись`}
        onClick={() => {
          setActionType(FormActions.ADD_DICTIONARY_ITEM);
          setFormVisible(true);
        }}
      />
      <FileExcelOutlined
        key="DOWNLOAD_DICTIONARY"
        className="text-success mr-3 mb-2"
        style={{ fontSize: 16, cursor: "pointer" }}
        title={`Выгрузить в формате MS Excel`}
        onClick={() => {
          exportData(dictionaryTarget);
        }}
      />
    </>
  );

  const title = (
    <Space className="d-flex align-items-center justify-content-between">
      <Text strong type="secondary">
        {tableTitle}
      </Text>
      <Space
        direction="horizontal"
        className="d-flex align-items-center justify-content-between"
      >
        <Input
          size="small"
          className="text-secondary"
          style={{ minWidth: 300 }}
          placeholder="Поиск..."
          title="Поиск записей по шифру/наименованию и др."
          value={searchValue}
          suffix={<SearchOutlined className="text-secondary" />}
          onChange={onSearch}
        />
        {menuItems}
      </Space>
    </Space>
  );

  const renderForm = renderNsiFormFlag && (
    <ModalContainer child={<RegulatoryReferenceInformationForm />} />
  );

  return (
    <Layout>
      <Table
        className="border p-1 m-0"
        style={{ fontSize: 12 }}
        size="small"
        locale={tableLocale}
        loading={loading}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: (event) => setCurrentNsiItem(record),
          };
        }}
        title={() => title}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataSource}
        footer={() => NsiTableFooter()}
      />

      {renderForm}
    </Layout>
  );
};

export default NsiTable;
