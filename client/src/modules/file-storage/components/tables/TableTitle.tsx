import { Input, Space, Typography } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { FormActions } from "../../../main";
import { useFileStorageTable } from "./hooks";

const { Text } = Typography;

const TableTitle = () => {
  const { setActionType, setFormVisible, searchValue, onSearch } =
    useFileStorageTable();

  return (
    <Space className="d-flex align-items-center justify-content-between">
      <Text strong >
        ДОКУМЕНТАЦИЯ
      </Text>
      <Space
        direction="horizontal"
        className="d-flex align-items-center justify-content-between"
      >
        <Input
          size="small"

          style={{ minWidth: 300 }}
          placeholder="Поиск..."
          title="Поиск записей по шифру/наименованию и др."
          value={searchValue}
          suffix={<SearchOutlined  />}
          onChange={onSearch}
        />
        <Space>
          <PlusOutlined
            key="ADD_DOCUMENT"
            className="text-success mr-3 mb-2"
            style={{ fontSize: 16, cursor: "pointer" }}
            title="Добавить документ"
            onClick={() => {
              setActionType(FormActions.ADD_DOCUMENT);
              setFormVisible(true);
            }}
          />
        </Space>
      </Space>
    </Space>
  );
};

export default TableTitle;