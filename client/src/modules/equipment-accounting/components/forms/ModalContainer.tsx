import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../../../main";

const { Text } = Typography;

interface ModalContainerProps {
  target?: string;
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
  target,
}) => {
  return (
    <Modal
      style={{ border: "1px white" }}
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {action === FormActions.ADD
              ? "Добавление записи"
              : "Редактирование записи"}
          </Text>
        </Space>
      }
      width={
        action === FormActions.ADD &&
        (target === "cable-log" ||
          target === "impulse-line-log" ||
          target === "signal" ||
          target === "monitoring" ||
          target === "summary-list-of-equipment")
          ? 1200
          : target === "metrology" || target === "general-information"
          ? 1000
          : target === "monitoring"
          ? 1200
          : 600
      }
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
