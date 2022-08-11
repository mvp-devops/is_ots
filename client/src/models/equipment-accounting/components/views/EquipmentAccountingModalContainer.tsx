import { Modal, Space, Typography } from "antd";
import React, { FC, ReactNode } from "react";

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
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            СВОДНЫЙ ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ
          </Text>
        </Space>
      }
      style={{ maxHeight: "920px", width: "1900px", border: "1px solid" }}
      bodyStyle={{ minHeight: "800px", maxWidth: "1800px" }}
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

export default EquipmentAccountingModalContainer;
