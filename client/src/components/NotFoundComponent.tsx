import {Space, Typography} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";

const {Text} = Typography;

const NotFoundComponent = () => {
  return (
    <Space className="d-flex justify-content-center p-3">
      <Text type="warning">
        <ExclamationCircleOutlined style={{fontSize: 20, marginBottom: 2}}/>
      </Text>
      <Text style={{fontSize: 12, marginBottom: 2}}>
        Нет данных для отображения. Уточнить поиск
      </Text>
    </Space>
  );
};

export default  NotFoundComponent;