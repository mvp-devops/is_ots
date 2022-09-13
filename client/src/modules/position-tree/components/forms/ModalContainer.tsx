import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../../../main";
import { useTypedSelector } from "../../../../hooks";

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
  const { currentItem } = useTypedSelector((state) => state.positionTree);

  return (
    <Modal
      style={{ border: "1px white" }}
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {action === FormActions.ADD || action === FormActions.ADD_CHILD
              ? `Добавление записи`
              : action === FormActions.EDIT || action === FormActions.EDIT_CHILD
              ? "Редактирование записи"
              : action === FormActions.REMOVE ||
                action === FormActions.REMOVE_CHILD
              ? "Удаление записи"
              : action === FormActions.CHECKLIST
              ? "Чек-лист"
              : action === FormActions.USER
              ? "Регистрация пользователя"
              : ""}
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
