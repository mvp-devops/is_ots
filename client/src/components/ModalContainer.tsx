import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../modules/main";
import { useActions, useTypedSelector } from "../hooks";

const { Text } = Typography;

interface ModalContainerProps {
  child: ReactNode;
  target?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({ child, target }) => {
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible } = useActions();

  const addActionsFlag =
    actionType === FormActions.ADD ||
    actionType === FormActions.ADD_CHILD ||
    actionType === FormActions.ADD_DOCUMENT ||
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.ADD_DICTIONARY_ITEM ||
    actionType === FormActions.ADD_EQUIPMENT;

  const editActionsFlag =
    actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD ||
    actionType === FormActions.EDIT_DOCUMENT ||
    actionType === FormActions.EDIT_COMMENT ||
    actionType === FormActions.EDIT_DICTIONARY_ITEM ||
    actionType === FormActions.EDIT_EQUIPMENT;

  const removeActionsFlag =
    actionType === FormActions.REMOVE ||
    actionType === FormActions.REMOVE_CHILD ||
    actionType === FormActions.REMOVE_DOCUMENT ||
    actionType === FormActions.REMOVE_COMMENT ||
    actionType === FormActions.REMOVE_DICTIONARY_ITEM ||
    actionType === FormActions.REMOVE_EQUIPMENT;

  const containerWidth =
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.EDIT_COMMENT
      ? 1200
      : actionType === FormActions.ADD_EQUIPMENT &&
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
      : actionType === FormActions.REPORT ? 600 : 1200;

  return (
    <Modal
      maskClosable={false}
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
              : actionType === FormActions.REPORT ? "Отчет" : "Другое"}
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