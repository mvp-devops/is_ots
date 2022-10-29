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
  value?: string | number;
  defaultValue?: string | number;
  changeValue: Function;
  status?: "warning" | "error" | undefined;
  itemId?: string | number | null;
  addonAfter?: string | null;
  props?: InputProps;
  style?: Object;
}

const InputUIComponent: FC<InputUIComponentProps> = ({
  size,
  className,
  type,
  id,
  value,
  changeValue,
  status,
  itemId,
  addonAfter,
  style,
  defaultValue,
  props,
}) => {
  const prop = {
    size: size ? size : "small",
    className: className ? className + " text-secondary" : "text-secondary",
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(id, e.target.value, itemId),
    status,
    postfix: status === "error" ? <ClockCircleOutlined /> : null,
    type,
    addonAfter:
      addonAfter !== undefined ? (
        <Text type="secondary">{addonAfter}</Text>
      ) : null,
    style,
    ...props,
  };
  return type === "password" ? (
    <Input.Password
      {...prop}
      className={className ? className : "text-secondary"}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  ) : (
    <Input {...prop} />
  );
};

export default InputUIComponent;
