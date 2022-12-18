import { Button, Divider, Form, Input, Select, Space, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { NSIView } from "../../../types";
import { FC } from "react";
import SolutionFormItem from "./SolutionFormItem";

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
}

const CommentFormItem: FC<CommentFormItemProps> = ({
  directionsList,
  criticalitiesList,
  statusesList,
  solutionsList,
}) => {
  return (
    <List name="items">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space direction="vertical" key={key} className="border p-1 mb-2">
              <Space direction="horizontal" align="start" className="mb-0">
                <Space direction="vertical" align="start">
                  <Item
                    className="mb-0"
                    style={{ width: 500 }}
                    label={
                      <Text  >Функциональное направление</Text>
                    }
                    {...restField}
                    name={[name, "directionId"]}
                    initialValue={"1"}
                    rules={[
                      {
                        required: true,
                        message:
                          "Пожалуйста, выберите функциональное направление",
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
                      {directionsList.map(({ id, title }) => (
                        <Option key={id} title={title}>
                          {title}
                        </Option>
                      ))}
                    </Select>
                  </Item>
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
                        <Option
                          key={id}
                          title={`Код критерия: ${id} - ${title}`}
                        >
                          {title}
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
                        <Option key={id} title={`${code}. ${title}`}>
                          {code}. {title}
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

                  />
                </Item>

                <MinusCircleOutlined
                  className="text-danger"
                  onClick={() => remove(name)}
                />
              </Space>
              <Divider className="m-0">
                <Text  >Решения</Text>
              </Divider>

              <Space direction="horizontal">
                <SolutionFormItem
                  fieldName={[name, "solutions"]}
                  statusesList={statusesList}
                  solutionsList={solutionsList}
                />
              </Space>
            </Space>
          ))}

          <Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusCircleOutlined className="text-success" />}
            >
              <Text  >Добавить замечание</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default CommentFormItem;