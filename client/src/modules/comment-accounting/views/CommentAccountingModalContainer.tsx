import { FC, ReactNode } from "react";
import { Modal, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../../main";

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
      maskClosable={false}
      title={
        <Space className="d-flex justify-content-start">
          <Text strong className="text-white">
            {action === FormActions.CHECKLIST
              ? "Ш-03.01.05.01-01 - ОЦЕНОЧНЫЙ ЛИСТ КОНТРАГЕНТА"
              : "ЛИСТ КОЛЛЕКТИВНОЙ ПРОВЕРКИ"}
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
