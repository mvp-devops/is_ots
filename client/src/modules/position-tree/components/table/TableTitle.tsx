import { Input, Space, Typography } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { FormActions } from "../../../main";
import { usePositionTreeTable } from "./hooks";

const { Text } = Typography;

const TableTitle = () => {
  const {
    addChildButtonTitle,
    tableTitle,
    searchValue,
    onSearch,
    setActionType,
    setFormVisible,
  } = usePositionTreeTable();
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
        <Space>
          <PlusOutlined
            key="ADD_CHILD"
            className="text-success mr-3 mb-2"
            style={{ fontSize: 16, cursor: "pointer" }}
            title={`Добавить ${addChildButtonTitle}`}
            onClick={() => {
              setActionType(FormActions.ADD_CHILD);
              setFormVisible(true);
            }}
          />
        </Space>
      </Space>
    </Space>
  );
};

export default TableTitle;
