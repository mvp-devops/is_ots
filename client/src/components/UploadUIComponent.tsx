import { FC } from "react";
import { Button, Typography, Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface UploadUIComponentProps extends UploadProps {
  className?: string;
  id: string;
  changeValue: Function;
  itemId?: any;
  props?: UploadProps;
}

const UploadUIComponent: FC<UploadUIComponentProps> = ({
  id,
  className,
  changeValue,
  itemId,
  ...props
}) => {
  return (
    <Upload
      className={className ? `mb-1 ${className}` : "mb-1"}
      id={id}
      onRemove={(file) => {
        changeValue(id, null, itemId);
      }}
      beforeUpload={(file) => {
        changeValue(id, file, itemId);
        return false;
      }}
      {...props}
    >
      <Button icon={<UploadOutlined />} style={{ width: 232 }}>
        <Text>Выбрать файл</Text>
      </Button>
    </Upload>
  );
};

export default UploadUIComponent;