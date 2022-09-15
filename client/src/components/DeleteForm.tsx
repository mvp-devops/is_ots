import React, { FC } from "react";
import { Space, Typography } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";

interface DeleteFormProps {
  message: string;
}

const { Text } = Typography;
const DeleteForm: FC<DeleteFormProps> = ({ message }) => {
  return (
    <Space className="d-flex justify-content-start ">
      <InfoCircleOutlined
        style={{ fontSize: 30 }}
        className="text-warning me-3"
      />
      <Text type="secondary">{message}</Text>
    </Space>
  );
};

export default DeleteForm;
