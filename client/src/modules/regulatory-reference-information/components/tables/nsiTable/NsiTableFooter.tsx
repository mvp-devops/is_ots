import { Space, Typography } from "antd";
import { useNsiTable } from "../hooks";

const { Text } = Typography;

const NsiTableFooter = () => {
  const { dataSource } = useNsiTable();

  return (
    <Space className="d-flex justify-content-end ">
      <Text className="text-secondary">Количество записей:</Text>
      <Text strong type="secondary">
        {dataSource.length}
      </Text>
    </Space>
  );
};

export default NsiTableFooter;
