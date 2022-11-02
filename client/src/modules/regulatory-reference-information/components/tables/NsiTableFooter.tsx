import { Space, Typography } from "antd";
import { useNsiTable } from ".";

const { Text } = Typography;

const NsiTableFooter = (data: any[]) => {
  return (
    <Space className="d-flex justify-content-end ">
      <Text className="text-secondary">Количество записей:</Text>
      <Text strong type="secondary">
        {data.length}
      </Text>
    </Space>
  );
};

export default NsiTableFooter;
