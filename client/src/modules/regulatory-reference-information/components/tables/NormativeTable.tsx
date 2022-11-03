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
import SearchPanel from "../../../../components/search-panel/SearchPanel";
import { useState } from "react";
import { useSearch } from "../../../../hooks/useSearch";
import NewCommentForm from "../forms/NewCommentForm";

const { Text } = Typography;

const NormativeTable = () => {
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

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // const suffix = <SearchOutlined className="text-primary" />;

  const searchItems = (data: any[], searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const title = (
    <Space className="d-flex align-items-center justify-content-between">
      <Text strong type="secondary">
        {tableTitle}
      </Text>
      <Space
        direction="horizontal"
        className="d-flex align-items-center justify-content-between"
      >
        {/* <SearchPanel data={dataSource} /> */}
        <Input
          placeholder="Поиск..."
          className="text-secondary mt-2 mb-2"
          style={{ color: "red", maxWidth: 600 }}
          size="small"
          suffix={<SearchOutlined className="text-primary" />}
          onChange={(e) => searchItems(dataSource, e.target.value)}
        />
        {/* <Input
          size="small"
          className="text-secondary"
          style={{ minWidth: 300 }}
          placeholder="Поиск..."
          title="Поиск записей по шифру/наименованию и др."
          value={searchValue}
          suffix={<SearchOutlined className="text-secondary" />}
          onChange={onSearch}
        /> */}
        {menuItems}
      </Space>
    </Space>
  );

  const renderForm = renderNsiFormFlag && (
    <ModalContainer child={<NewCommentForm />} />
  );

  return (
    <Layout>
      {/* <SearchPanel data={ } /> */}
      <Table
        className="border p-1 m-0"
        style={{ fontSize: 12 }}
        size="small"
        pagination={{
          locale: {
            // Options.jsx
            items_per_page: "/ стр.",
            jump_to: "Перейти",
            jump_to_confirm: "подтвердить",
            page: "Страница",
            // Pagination.jsx
            prev_page: "Назад",
            next_page: "Вперед",
            prev_5: "Предыдущие 5",
            next_5: "Следующие 5",
            prev_3: "Предыдущие 3",
            next_3: "Следующие 3",
            // page_size: 'размер страницы'
          },
        }}
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
        dataSource={
          // dictionaryTarget !== "design"
          searchInput.length > 1 ? filteredResults : dataSource
          // : dataSource.sort((a, b) => (a.id < b.id ? -1 : 0))
        }
        footer={() => NsiTableFooter(filteredResults)}
      />

      {renderForm}
    </Layout>
  );
};

export default NormativeTable;
