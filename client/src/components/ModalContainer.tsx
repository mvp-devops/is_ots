import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../modules/main";

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
      style={{ border: "1px white" }}
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {action === FormActions.ADD ||
            action === FormActions.ADD_CHILD ||
            action === FormActions.ADD_DOCUMENT
              ? `Добавление записи`
              : action === FormActions.EDIT ||
                action === FormActions.EDIT_CHILD ||
                action === FormActions.EDIT_DOCUMENT
              ? "Редактирование записи"
              : action === FormActions.REMOVE ||
                action === FormActions.REMOVE_CHILD ||
                action === FormActions.REMOVE_DOCUMENT
              ? "Удаление записи"
              : action === FormActions.CHECKLIST
              ? "Чек-лист"
              : action === FormActions.USER
              ? "Регистрация пользователя"
              : "Gbpltw"}
          </Text>
        </Space>
      }
      width={600}
      closable
      closeIcon={
        <Text className="text-white">
          <CloseOutlined />
        </Text>
      }
      centered
      visible={show}
      footer={null}
      onCancel={onCancel}
    >
      {child}
    </Modal>
  );
};

export default ModalContainer;
