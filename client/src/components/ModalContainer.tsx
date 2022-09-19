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
  const addActionsFlag =
    action === FormActions.ADD ||
    action === FormActions.ADD_CHILD ||
    action === FormActions.ADD_DOCUMENT ||
    action === FormActions.ADD_COMMENT;

  const editActionsFlag =
    action === FormActions.EDIT ||
    action === FormActions.EDIT_CHILD ||
    action === FormActions.EDIT_DOCUMENT ||
    action === FormActions.EDIT_COMMENT;

  const removeActionsFlag =
    action === FormActions.REMOVE ||
    action === FormActions.REMOVE_CHILD ||
    action === FormActions.REMOVE_DOCUMENT ||
    action === FormActions.REMOVE_COMMENT;

  const containerWidth =
    action === FormActions.ADD_COMMENT || action === FormActions.EDIT_COMMENT
      ? 900
      : 600;

  return (
    <Modal
      style={{ border: "1px white" }}
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {addActionsFlag
              ? `Добавление записи`
              : editActionsFlag
              ? "Редактирование записи"
              : removeActionsFlag
              ? "Удаление записи"
              : action === FormActions.CHECKLIST
              ? "Чек-лист"
              : action === FormActions.ADD_USER
              ? "Регистрация пользователя"
              : "Другое"}
          </Text>
        </Space>
      }
      width={containerWidth}
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
