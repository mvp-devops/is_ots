import { FC } from "react";
import { Button, Form, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import {
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";

import { useCommentAccountingForm } from "./hooks/useCommentAccountingForm";
import { SelectUIComponent, TextAreaUIComponent } from "../../../../components";

const { Item } = Form;
const { Text } = Typography;

export interface SolutionFormProps {
  id: string | number;
  onRemove: () => void;
  changeValue: Function;
}

const SolutionForm: FC<SolutionFormProps> = ({ id, onRemove, changeValue }) => {
  const { solutions: items } = useCommentAccountingForm();

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className="m-0 p-1 border"
      style={{ width: items.length > 1 ? 400 : 800 }}
    >
      <Space className="d-flex justify-content-end">
        <Button
          className="border-0 mb-3 mt-0"
          style={{ background: "transparent", width: "5%" }}
        >
          <CloseOutlined
            title="Удалить строку"
            onClick={onRemove}
            style={{ fontSize: " 14px" }}
            className="text-danger"
          />
        </Button>
      </Space>
      <Item label={<Text >Статус ответа</Text>} className="m-0">
        <SelectUIComponent
          id="statusId"
          itemId={id}
          items={statusRequestData}
          changeValue={changeValue}
        />
      </Item>
      <Item label={<Text >Ответ</Text>} className="m-0 mb-1">
        <TextAreaUIComponent
          id="answer"
          itemId={id}
          changeValue={changeValue}
        />
      </Item>
      <Item label={<Text >Контакты</Text>} className="m-0">
        <TextAreaUIComponent
          id="designContacts"
          itemId={id}
          changeValue={changeValue}
        />
      </Item>
      <Item
        label={<Text >Статус решения</Text>}
        className="m-0"
      >
        <SelectUIComponent
          id="solutionId"
          itemId={id}
          items={solutionRequestData}
          changeValue={changeValue}
        />
      </Item>
      <Item label={<Text >Решение</Text>} className="m-0">
        <TextAreaUIComponent
          id="solution"
          itemId={id}
          changeValue={changeValue}
        />
      </Item>
    </Form>
  );
};

export default SolutionForm;