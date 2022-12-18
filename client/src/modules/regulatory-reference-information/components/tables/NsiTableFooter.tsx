import { Space, Typography } from "antd";
import { useNsiTable } from ".";

const { Text } = Typography;

const NsiTableFooter = (data: any[]) => {
  return (
    <Space className="d-flex justify-content-end ">
      <Text >Количество записей:</Text>
      <Text strong>
        {data.length}
      </Text>
    </Space>
  );
};

export default NsiTableFooter;