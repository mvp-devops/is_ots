import TextArea, { TextAreaProps } from "antd/lib/input/TextArea";
import { ChangeEvent, FC } from "react";

interface TextAreaUIComponentProps extends TextAreaProps {
  id: string;
  changeValue: Function;
  itemId?: string | number;
  props?: TextAreaProps;
}

const TextAreaUIComponent: FC<TextAreaUIComponentProps> = ({
  id,
  changeValue,
  itemId,
  props,
}) => {
  return (
    <TextArea
      {...props}
      rows={2}
      id={id}
      className="text-secondary"
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        changeValue(id, e.target.value, itemId)
      }
    />
  );
};

export default TextAreaUIComponent;
