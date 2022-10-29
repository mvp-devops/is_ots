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

const EquipmentAccountingModalContainer: FC<ModalContainerProps> = ({
  show,
  action,
  child,
  onCancel,
}) => {
  return (
    <Modal
      maskClosable={false}
      title={
        <Space className="d-flex justify-content-start">
          <Text strong className="text-white">
            СВОДНЫЙ ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ
          </Text>
        </Space>
      }
      style={{ maxHeight: "920px", width: "1900px", border: "1px white" }}
      bodyStyle={{ minHeight: "800px", maxWidth: "1800px" }}
      width={1980}
      closable
      centered
      visible={show}
      closeIcon={
        <Text className="text-white">
          <CloseOutlined />
        </Text>
      }
      footer={[]}
      onCancel={onCancel}
    >
      {child}
    </Modal>
  );
};

export default EquipmentAccountingModalContainer;
