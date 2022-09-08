import { ChangeEvent, FC } from "react";
import { Input, InputProps, Typography } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { SizeType } from "antd/lib/config-provider/SizeContext";

const { Text } = Typography;

interface InputUIComponentProps extends InputProps {
  size?: SizeType;
  className?: string;
  type?: string;
  id: string;
  value: string;
  changeValue: Function;
  status?: "warning" | "error" | undefined;
}

const InputUIComponent: FC<InputUIComponentProps> = ({
  size,
  className,
  type,
  id,
  value,
  changeValue,
  status,
}) => {
  const props = {
    size: size ? size : "small",
    className: className ? className : "text-secondary",
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(id, e.target.value),
    status,
    postfix: status === "error" ? <ClockCircleOutlined /> : null,
  };
  return type === "password" ? (
    <Input.Password
      {...props}
      className={className ? className : "text-secondary"}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  ) : (
    <Input {...props} />
  );
};

export default InputUIComponent;
