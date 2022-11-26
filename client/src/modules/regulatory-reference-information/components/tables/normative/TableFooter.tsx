import { Space, Typography } from "antd";
import {NormativeView} from "../../../../../../../server/common/types/file-storage"

const { Text } = Typography;

const TableFooter = (data: NormativeView[]) => {
  return (
    <Space className="d-flex justify-content-end ">
      <Text className="text-secondary">Количество записей:</Text>
      <Text strong type="secondary">
        {data.length}
      </Text>
    </Space>
  );
};

export default TableFooter;