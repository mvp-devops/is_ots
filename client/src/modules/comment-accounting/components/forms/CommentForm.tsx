import { Button, Divider, Form, Select, Space, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
} from "../../../../../../server/common/types/comments-accounting";
import {
  criticalityRequestData,
  directionRequestData,
} from "../../utils/comment-accounting.consts";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { addItem } from "./form.actions";
import { initCommentFormData } from "./form.settings";
import { useCommentAccountingFormData } from "./hooks/useCommentAccountingFormData";
import SolutionForm from "./SolutionForm";

const { Item } = Form;
const { Text } = Typography;

export interface CommentFormProps {
  target: string;
  currentId: string;
  onCancel: () => void;
  data?: DesignDocumentCommentCreationAttrs;
}

const CommentForm: FC<CommentFormProps> = ({
  target,
  currentId,
  data,
  onCancel,
}) => {
  const [requestData, setRequestData] = useState(
    initCommentFormData(target, currentId, data ? data : null)
  );
  const [solutions, setSolutions] = useState<
    DesignDocumentCommentSolutionCreationAttrs[]
  >([]);

  const { criticalities } = useCommentAccountingFormData();

  const solution = {
    key: "",
    commentId: "",
    userId: "",
    statusId: "",
    answer: "",
    designContacts: "",
    solutionId: "",
    solution: "",
  };

  useEffect(() => setRequestData({ ...requestData, solutions }), [solutions]);

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      <Item
        label={<Text type="secondary">Функциональное направление</Text>}
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
            setRequestData({ ...requestData, directionId: value })
          }
        >
          {directionRequestData.map(({ id, title }) => (
            <Select.Option key={id} value={id}>
              {title}
            </Select.Option>
          ))}
        </Select>
      </Item>
      <Item label={<Text type="secondary">Замечание</Text>} className="m-1 p-1">
        <TextArea
          rows={4}
          className="text-secondary"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setRequestData({ ...requestData, comment: e.target.value })
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Нормативная ссылка</Text>}
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
            setRequestData({ ...requestData, normativeId: value })
          }
        >
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Item>
      <Item
        label={<Text type="secondary">Код критерия критичности</Text>}
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
            setRequestData({ ...requestData, criticalityId: value })
          }
        >
          {criticalities.slice(1, 11).map(({ id, title }) => (
            <Select.Option key={id} value={id}>
              {title}
            </Select.Option>
          ))}
        </Select>
      </Item>

      <div className="d-flex justify-content-around ">
        <Button
          type="primary"
          className="m-1"
          title="Добавить новое решение"
          onClick={() => addItem(solutions, setSolutions, solution)}
        >
          Добавить новое решение
        </Button>
      </div>
      {solutions.map((item) => (
        // newSolution(item)
        <Space
          key={item.key}
          direction="horizontal"
          className="d-inline-block mt-2 mx-4"
        >
          <SolutionForm items={solutions} setItems={setSolutions} item={item} />
        </Space>
      ))}
      <Divider />
      <div className="d-flex justify-content-end mb-2">
        <Button
          type="primary"
          className="m-1"
          title="Добавить новое замечание"
          onClick={() => console.log("Отправка данных: ", requestData)}
        >
          Добавить
        </Button>
        <Button
          type="ghost"
          className="m-1"
          title="Отменить внесение изменений"
          onClick={onCancel}
        >
          Отмена
        </Button>
      </div>
    </Form>
  );
};

export default CommentForm;
