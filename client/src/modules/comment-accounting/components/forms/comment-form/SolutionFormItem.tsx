import { Button, Divider, Form, Input, Select, Space, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  DesignDocumentCommentSolutionCreationAttrs,
  NSIView,
} from "../../../types";
import { FC } from "react";

const { Item, List } = Form;
const { Text } = Typography;
const { Option } = Select;

const notFoundContent = (
  <Space className="d-flex justify-content-center p-3">
    <Text type="warning">
      <ExclamationCircleOutlined style={{ fontSize: 20, marginBottom: 2 }} />
    </Text>

    <Text style={{ fontSize: 12, marginBottom: 2 }}>
      Нет данных для отображения. Уточнить поиск
    </Text>
  </Space>
);

interface SolutionFormItemProps {
  initialValues: DesignDocumentCommentSolutionCreationAttrs[];
  fieldName: any;
  statusesList: NSIView[];
  solutionsList: NSIView[];
}

const SolutionFormItem: FC<SolutionFormItemProps> = ({
  statusesList,
  solutionsList,
  fieldName,
}) => {
  return (
    <List name={fieldName}>
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              direction="horizontal"
              key={key}
              align="start"
              className="p-1 mb-2"
              style={{ border: "dashed 1px #999" }}
            >
              <Space direction="vertical" align="start">
                <Item
                  initialValue="Нет данных"
                  className="m-0"
                  style={{ width: 500 }}
                  label={
                    <Text >
                      Контактные данные проектировщика
                    </Text>
                  }
                  name={[name, "designContacts"]}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите текст контактные данные",
                    },
                  ]}
                >
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder="Контактные данные"
                  />
                </Item>
                <Item
                  className="m-0"
                  style={{ width: 500 }}
                  label={<Text >Статус ответа</Text>}
                  {...restField}
                  name={[name, "statusId"]}
                  initialValue="1"
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, выберите статус ответа",
                    },
                  ]}
                >
                  <Select
                    size={"small"}
                    notFoundContent={notFoundContent}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option!.children as unknown as string)
                        ?.toUpperCase()
                        ?.includes(input?.toUpperCase())
                    }
                  >
                    {statusesList.map(({ id, title }) => (
                      <Option
                        key={id}
                        title={`Код статуса ответа: ${id} - ${title}`}
                      >
                        {title}
                      </Option>
                    ))}
                  </Select>
                </Item>
                <Item
                  initialValue="1"
                  className="m-0"
                  style={{ width: 500 }}
                  label={<Text >Статус решения</Text>}
                  {...restField}
                  name={[name, "solutionId"]}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, статус решения",
                    },
                  ]}
                >
                  <Select
                    placeholder="Статус решения"
                    size={"small"}
                    allowClear={true}
                    notFoundContent={notFoundContent}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option!.children as unknown as string)
                        ?.toUpperCase()
                        ?.includes(input?.toUpperCase())
                    }
                  >
                    {solutionsList.map(({ id, title }) => (
                      <Option
                        key={id}
                        title={`Код статуса решения: ${id} - ${title}`}
                      >
                        {title}
                      </Option>
                    ))}
                  </Select>
                </Item>
              </Space>
              <Space direction="vertical" align="start">
                <Item
                  className="mb-0"
                  style={{ width: 600 }}
                  initialValue="Принято. Будет устранено в следущем драфте документации"
                  label={<Text >Ответ проектировщика</Text>}
                  name={[name, "answer"]}
                  rules={[
                    {
                      required: true,
                      message:
                        "Пожалуйста, введите текст ответа проектировщика",
                    },
                  ]}
                >
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    placeholder="Ответ проектировщика"
                  />
                </Item>
                <Item
                  className="mb-0"
                  style={{ width: 600 }}
                  initialValue="Замечание снято"
                  label={<Text >Комментарий эксперта</Text>}
                  name={[name, "solution"]}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, введите текст комментарий",
                    },
                  ]}
                >
                  <Input.TextArea
                    autoSize={{ minRows: 4, maxRows: 4 }}
                    placeholder="Комментарий эксперта"
                  />
                </Item>
              </Space>

              <MinusCircleOutlined
                className="text-danger"
                onClick={() => remove(name)}
              />
            </Space>
          ))}

          <Item className="mt-2" style={{ minWidth: 1150 }}>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusCircleOutlined className="text-success" />}
            >
              <Text >Добавить решение</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default SolutionFormItem;