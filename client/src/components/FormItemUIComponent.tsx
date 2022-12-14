import { FC, ReactNode } from "react";


import { Form, FormItemProps, Typography } from "antd";

interface ItemProps extends FormItemProps {
  title: string;
  children: ReactNode;
  className?: string;
  style?: Object;
  props?: FormItemProps;
}

const { Item } = Form;
const { Text } = Typography;

const FormItemUIComponent: FC<ItemProps> = ({
  title,
  children,
  className,
  style,
  props,
}) => {
  return (
    <Item
      label={<Text type="secondary">{title}</Text>}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Item>
  );
};

export default FormItemUIComponent;