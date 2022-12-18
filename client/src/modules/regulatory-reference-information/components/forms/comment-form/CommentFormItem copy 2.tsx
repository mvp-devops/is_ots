import { Button, Divider, Form, Input, Select, Space, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { NSIView } from "../../../types";
import { FC } from "react";
import SolutionFormItem from "./SolutionFormItem";
import { FormListFieldData } from "antd/es/form";

const { Item, List } = Form;
const { Text } = Typography;
const { Option } = Select;

const notFoundContent = (
  <Space className="d-flex justify-content-center p-3">
    <Text type="warning">
      <ExclamationCircleOutlined style={{ fontSize: 20, marginBottom: 2 }} />
    </Text>

    <Text   style={{ fontSize: 12, marginBottom: 2 }}>
      Нет данных для отображения. Уточнить поиск
    </Text>
  </Space>
);

interface CommentFormItemProps {
  directionsList: NSIView[];
  criticalitiesList: NSIView[];
  statusesList: any[] | NSIView[];
  solutionsList: any[] | NSIView[];
  field: FormListFieldData;
  remove: Function;
}

const CommentFormItem: FC<CommentFormItemProps> = ({
  field,
  remove,
  directionsList,
  criticalitiesList,
  statusesList,
  solutionsList,
}) => {
  const { key, name, ...restField } = field;
  return (
    <Item>
      <Space direction="vertical" key={key} className="border p-1 mb-2">
        <Space direction="horizontal" align="start">
          <Space direction="vertical" align="start">
            <Item
              className="mb-0"
              style={{ width: 500 }}
              label={<Text  >Критерий критичности</Text>}
              {...restField}
              name={[name, "criticalityId"]}
              initialValue={"1"}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите критерий критичности",
                },
              ]}
            >
              <Select
                placeholder="Критерий критичности"
                size={"small"}
                className={" "}
                notFoundContent={notFoundContent}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    ?.toUpperCase()
                    ?.includes(input?.toUpperCase())
                }
              >
                {criticalitiesList.map(({ id, title, code }) => (
                  <Option key={id}>
                    <Text

                      title={`${id}. ${title}`}
                    >{`${id}. ${title}`}</Text>
                  </Option>
                ))}
              </Select>
            </Item>
            <Item
              className="mb-0"
              style={{ width: 500 }}
              label={<Text  >Функциональное направление</Text>}
              {...restField}
              name={[name, "directionId"]}
              initialValue={"1"}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите функциональное направление",
                },
              ]}
            >
              <Select
                size={"small"}
                className={" "}
                notFoundContent={notFoundContent}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    ?.toUpperCase()
                    ?.includes(input?.toUpperCase())
                }
              >
                {directionsList.map(({ id, title }) => (
                  <Option key={id}>
                    <Text   title={`${id}. ${title}`}>
                      {title}
                    </Text>
                  </Option>
                ))}
              </Select>
            </Item>
            <Item
              style={{ width: 500 }}
              label={<Text  >Нормативная ссылка</Text>}
              {...restField}
              name={[name, "normativeId"]}
              initialValue={"1"}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите нормативную ссылку",
                },
              ]}
            >
              <Select
                placeholder="Нормативная ссылка"
                size={"small"}
                className={" "}
                notFoundContent={notFoundContent}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    ?.toUpperCase()
                    ?.includes(input?.toUpperCase())
                }
              >
                {criticalitiesList.map(({ id, title, code }) => (
                  <Option key={id}>
                    <Text

                      title={`${code}. ${title}`}
                    >{`${code}. ${title}`}</Text>
                  </Option>
                ))}
              </Select>
            </Item>
          </Space>

          <Item
            className="mb-0"
            style={{ width: 600 }}
            label={<Text  >Замечание</Text>}
            name={[name, "comment"]}
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите текст замечания",
              },
            ]}
          >
            <Input.TextArea
              autoSize={{ minRows: 7.2, maxRows: 7.2 }}
              placeholder="Замечание"
              className=" "
            />
          </Item>

          <MinusCircleOutlined
            className="text-danger"
            onClick={() => remove(name)}
          />
        </Space>
        <Divider className="mt-1">
          <Text  >Решения</Text>
        </Divider>

        <Space direction="horizontal">
          <List name={[name, "solutions"]}>
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space direction="horizontal" key={key} align="start">
                      <Space direction="vertical" align="start">
                        <Item
                          initialValue="Нет данных"
                          className="m-0"
                          style={{ width: 500 }}
                          label={
                            <Text  >
                              Контактные данные проектировщика
                            </Text>
                          }
                          name={[name, "designContacts"]}
                          rules={[
                            {
                              required: true,
                              message:
                                "Пожалуйста, введите текст контактные данные",
                            },
                          ]}
                        >
                          <Input.TextArea
                            autoSize={{ minRows: 3, maxRows: 5 }}
                            placeholder="Контактные данные"
                            className=" "
                          />
                        </Item>
                        <Item
                          className="m-0"
                          style={{ width: 500 }}
                          label={<Text  >Статус ответа</Text>}
                          {...restField}
                          name={[name, "statusId"]}
                          // initialValue="1"
                          rules={[
                            {
                              required: true,
                              message: "Пожалуйста, выберите статус ответа",
                            },
                          ]}
                        >
                          <Select
                            size={"small"}
                            className={" "}
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
                              <Option key={id}>
                                <Text

                                  title={`Код статуса ответа: ${id}`}
                                >{`${id}. ${title}`}</Text>
                              </Option>
                            ))}
                          </Select>
                        </Item>
                        <Item
                          className="m-0"
                          style={{ width: 500 }}
                          label={<Text  >Статус решения</Text>}
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
                            className={" "}
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
                              <Option key={id}>
                                <Text

                                  title={`Код статуса решения: ${id}`}
                                >{`${id}. ${title}`}</Text>
                              </Option>
                            ))}
                          </Select>
                        </Item>
                      </Space>
                      <Space direction="vertical" align="start">
                        <Item
                          className="mb-0"
                          style={{ width: 600 }}
                          // initialValue="Принято. Будет устранено в следущем драфте документации"
                          label={
                            <Text  >Ответ проектировщика</Text>
                          }
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
                            className=" "
                          />
                        </Item>
                        <Item
                          className="mb-0"
                          style={{ width: 600 }}
                          // initialValue="Замечание снято"
                          label={
                            <Text  >Комментарий эксперта</Text>
                          }
                          name={[name, "answer"]}
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
                            className=" "
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
                      <Text  >Добавить решение</Text>
                    </Button>
                  </Item>
                </>
              );
            }}
          </List>
        </Space>
      </Space>
    </Item>
  );
};

export default CommentFormItem;