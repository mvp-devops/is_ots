import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../modules/main";
import { useActions, useTypedSelector } from "../hooks";

const { Text } = Typography;

interface ModalContainerProps {
  child: ReactNode;
  show?: boolean;
  onCancel?: () => void;
  action?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({
  show,
  action,
  child,
  onCancel,
}) => {
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible } = useActions();

  const addActionsFlag =
    actionType === FormActions.ADD ||
    actionType === FormActions.ADD_CHILD ||
    actionType === FormActions.ADD_DOCUMENT ||
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.ADD_DICTIONARY_ITEM;

  const editActionsFlag =
    actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD ||
    actionType === FormActions.EDIT_DOCUMENT ||
    actionType === FormActions.EDIT_COMMENT ||
    actionType === FormActions.EDIT_DICTIONARY_ITEM;

  const removeActionsFlag =
    actionType === FormActions.REMOVE ||
    actionType === FormActions.REMOVE_CHILD ||
    actionType === FormActions.REMOVE_DOCUMENT ||
    actionType === FormActions.REMOVE_COMMENT ||
    actionType === FormActions.REMOVE_DICTIONARY_ITEM;

  const containerWidth =
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.EDIT_COMMENT
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
              : actionType === FormActions.CHECKLIST
              ? "Чек-лист"
              : actionType === FormActions.ADD_USER
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
      visible={formVisible}
      footer={null}
      onCancel={() => setFormVisible(false)}
    >
      {child}
    </Modal>
  );
};

export default ModalContainer;
