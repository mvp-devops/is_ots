import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { FormActions } from "./form.settings";

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
          target === "signal")
          ? 1200
          : target === "monitoring"
          ? "auto"
          : target === "metrology"
          ? 1000
          : 600
      }
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

export default ModalContainer;
