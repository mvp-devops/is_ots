import { Input, Space, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";

import { useNsiTable } from "../hooks";
import { FormActions } from "../../../../main";

const { Text } = Typography;

const NsiTableTitle = () => {
  const {
    dictionaryTarget,
    tableTitle,
    searchValue,
    onSearch,
    setActionType,
    setFormVisible,
    exportData,
  } = useNsiTable();

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

  return (
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
};

export default NsiTableTitle;
