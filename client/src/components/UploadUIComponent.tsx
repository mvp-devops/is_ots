import { FC } from "react";
import { Button, Typography, Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface UploadUIComponentProps extends UploadProps {
  className?: string;
  id: string;
  changeValue: Function;
  props?: UploadProps;
}

const UploadUIComponent: FC<UploadUIComponentProps> = ({
  id,
  className,
  changeValue,
  ...props
}) => {
  return (
    <Upload
      className={className ? `mb-1 ${className}` : "mb-1"}
      id={id}
      onRemove={(file) => {
        changeValue(id, null);
      }}
      beforeUpload={(file) => {
        changeValue(id, file);
        return false;
      }}
      {...props}
    >
      <Button icon={<UploadOutlined />} style={{ width: 232 }}>
        <Text type="secondary">Выбрать файл</Text>
      </Button>
    </Upload>
  );
};

export default UploadUIComponent;
