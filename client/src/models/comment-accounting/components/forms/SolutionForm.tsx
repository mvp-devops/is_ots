import { Button, Form, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ChangeEvent, FC } from "react";
import { DesignDocumentCommentSolutionCreationAttrs } from "../../../../../../common/types/comments-accounting";
import {
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import { changeItems, removeItem } from "./form.actions";
import { CloseOutlined } from "@ant-design/icons";

const { Item } = Form;

interface SolutionFormProps {
  items: DesignDocumentCommentSolutionCreationAttrs[];
  setItems: Function;
  item: DesignDocumentCommentSolutionCreationAttrs;
}

const SolutionForm: FC<SolutionFormProps> = ({ items, setItems, item }) => {
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      className="m-1 p-1 border"
      style={{ width: items.length > 1 ? "410px" : "900px" }}
    >
      <div className="row d-flex justify-content-end mt-1 mx-3">
        <Button
          className="border-0 mb-3 mt-0"
          style={{ background: "transparent", width: "5%" }}
        >
          <CloseOutlined
            title="Удалить строку"
            onClick={() => removeItem(items, setItems, item.key)}
            style={{ fontSize: " 20px" }}
            className="text-danger"
          />
        </Button>
      </div>
      <Item label="Статус ответа" className="m-1 p-1">
        <Select
          size="small"
          showSearch
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          onChange={(value: string) =>
            changeItems(items, setItems, "statusId", value, item.key)
          }
        >
          {statusRequestData.map(({ id, title }) => (
            <Select.Option key={id} value={id}>
              {title}
            </Select.Option>
          ))}
        </Select>
      </Item>
      <Item label="Ответ" className="m-1 p-1">
        <TextArea
          rows={4}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            changeItems(items, setItems, "answer", e.target.value, item.key)
          }
        />
      </Item>
      <Item label="Статус решения" className="m-1 p-1">
        <Select
          size="small"
          showSearch
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {solutionRequestData.map(({ id, title }) => (
            <Select.Option key={id} value={id}>
              {title}
            </Select.Option>
          ))}
        </Select>
      </Item>
      <Item label="Решение" className="m-1 p-1">
        <TextArea
          rows={4}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            changeItems(items, setItems, "solution", e.target.value, item.key)
          }
        />
      </Item>
    </Form>
  );
};

export default SolutionForm;
