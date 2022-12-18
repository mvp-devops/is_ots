import { Space, Typography } from "antd";
import {DesignDocumentView} from "../../../../../../../server/common/types/file-storage"

const { Text } = Typography;

const TableFooter = (data: DesignDocumentView[]) => {
  return (
    <Space className="d-flex justify-content-end ">
      <Text className="text-secondary">Количество записей:</Text>
      <Text strong   >
        {data.length}
      </Text>
    </Space>
  );
};

export default TableFooter;