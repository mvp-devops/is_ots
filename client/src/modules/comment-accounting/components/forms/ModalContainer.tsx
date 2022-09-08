import { Modal, Space, Typography } from "antd";
import React, { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface ModalContainerProps {
  show: boolean;
  onCancel: () => void;
  action: string;
  child: ReactNode;
}

const ModalContainer: FC<ModalContainerProps> = ({
  show,
  action,
  child,
  onCancel,
}) => {
  return (
    <Modal
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {action === "POST"
              ? "Добавление нового замечания"
              : "Редактирование замечания"}
          </Text>
        </Space>
      }
      width={1000}
      closable
      closeIcon={
        <Text className="text-white">
          <CloseOutlined />
        </Text>
      }
      centered
      visible={show}
      footer={[]}
      onCancel={onCancel}
    >
      {child}
    </Modal>
  );
};

export default ModalContainer;
