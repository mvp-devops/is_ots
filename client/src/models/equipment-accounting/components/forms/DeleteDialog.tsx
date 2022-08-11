import React, { FC, ReactNode } from "react";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface DeleteDialogProps {
  children: ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteDialog: FC<DeleteDialogProps> = ({
  onCancel,
  onConfirm,
  children,
}) => {
  return (
    <Popconfirm
      title="Удалить запись?"
      cancelText="Отмена"
      okText="Удалить"
      icon={<QuestionCircleOutlined className="text-danger" />}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      {children}
    </Popconfirm>
  );
};

export default DeleteDialog;
