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

const CommentAccountingModalContainer: FC<ModalContainerProps> = ({
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
            ФОРМА
            {/* ЛИСТ КОЛЛЕКТИВНОЙ ПРОВЕРКИ */}
          </Text>
        </Space>
      }
      closeIcon={
        <Text className="text-white">
          <CloseOutlined />
        </Text>
      }
      width={1980}
      closable
      centered
      visible={show}
      footer={[]}
      onCancel={onCancel}
    >
      {child}
    </Modal>
  );
};

export default CommentAccountingModalContainer;
