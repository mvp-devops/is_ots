import { FC } from "react";
import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface DeleteDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteDialog: FC<DeleteDialogProps> = ({ onCancel, onConfirm }) => {
  return (
    <Popconfirm
      title="Удалить запись?"
      cancelText="Отмена"
      okText="Удалить"
      icon={<DeleteOutlined type="danger" />}
      onCancel={onCancel}
      onConfirm={onConfirm}
    ></Popconfirm>
  );
};

export default DeleteDialog;
