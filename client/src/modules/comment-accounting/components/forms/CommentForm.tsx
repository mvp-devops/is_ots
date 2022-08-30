import { Button, Divider, Form, Select, Space } from "antd";
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
import { addItem } from "./form.actions";
import { initCommentFormData } from "./form.settings";
import SolutionForm from "./SolutionForm";

const { Item } = Form;

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
      <Item label="Функциональное направление" className="m-1 p-1">
        <Select
          size="small"
          showSearch
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
      <Item label="Замечание" className="m-1 p-1">
        <TextArea
          rows={4}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setRequestData({ ...requestData, comment: e.target.value })
          }
        />
      </Item>
      <Item label="Нормативная ссылка" className="m-1 p-1">
        <Select
          size="small"
          showSearch
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
      <Item label="Код критерия критичности" className="m-1 p-1">
        <Select
          size="small"
          showSearch
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          onChange={(value: string) =>
            setRequestData({ ...requestData, criticalityId: value })
          }
        >
          {criticalityRequestData.slice(1, 11).map(({ id, title }) => (
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
