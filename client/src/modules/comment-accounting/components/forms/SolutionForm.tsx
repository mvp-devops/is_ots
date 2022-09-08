import { Button, Form, Select, Space, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ChangeEvent, FC } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { DesignDocumentCommentSolutionCreationAttrs } from "../../../../../../server/common/types/comments-accounting";
import {
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import { changeItems, removeItem } from "./form.actions";
import { CloseOutlined } from "@ant-design/icons";

const { Item } = Form;
const { Text } = Typography;

export interface SolutionFormProps {
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
            style={{ fontSize: " 14px" }}
            className="text-danger"
          />
        </Button>
      </div>
      <Item
        label={<Text type="secondary">Статус ответа</Text>}
        className="m-1 p-1"
      >
        <Select
          size="small"
          className="text-secondary"
          showSearch
          notFoundContent={
            <Space className="d-flex justify-content-center p-3">
              <Text type="warning">
                <ExclamationCircleOutlined
                  style={{ fontSize: 20, marginBottom: 2 }}
                />
              </Text>

              <Text type="secondary">
                Нет данных для отображения. Уточнить поиск
              </Text>
            </Space>
          }
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
            <Select.Option key={id}>{title}</Select.Option>
          ))}
        </Select>
      </Item>
      <Item label={<Text type="secondary">Ответ</Text>} className="m-1 p-1">
        <TextArea
          rows={2}
          className="text-secondary"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            changeItems(items, setItems, "answer", e.target.value, item.key)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Контакты</Text>} className="m-1 p-1">
        <TextArea
          rows={2}
          className="text-secondary"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            changeItems(
              items,
              setItems,
              "designContacts",
              e.target.value,
              item.key
            )
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Статус решения</Text>}
        className="m-1 p-1"
      >
        <Select
          size="small"
          showSearch
          className="text-secondary"
          notFoundContent={
            <Space className="d-flex justify-content-center p-3">
              <Text type="warning">
                <ExclamationCircleOutlined
                  style={{ fontSize: 20, marginBottom: 2 }}
                />
              </Text>

              <Text type="secondary">
                Нет данных для отображения. Уточнить поиск
              </Text>
            </Space>
          }
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          onChange={(value: string) =>
            changeItems(items, setItems, "solutionId", value, item.key)
          }
        >
          {solutionRequestData.map(({ id, title }) => (
            <Select.Option key={id}>{title}</Select.Option>
          ))}
        </Select>
      </Item>
      <Item label={<Text type="secondary">Решение</Text>} className="m-1 p-1">
        <TextArea
          rows={2}
          className="text-secondary"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            changeItems(items, setItems, "solution", e.target.value, item.key)
          }
        />
      </Item>
    </Form>
  );
};

export default SolutionForm;
