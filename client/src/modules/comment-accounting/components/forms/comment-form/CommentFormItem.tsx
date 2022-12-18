import { Button, Divider, Form, Input, Select, Space, Typography } from "antd";
import {
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { DesignDocumentCommentCreationAttrs, NSIView } from "../../../types";
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

    <Text style={{ fontSize: 12, marginBottom: 2 }}>
      Нет данных для отображения. Уточнить поиск
    </Text>
  </Space>
);

interface CommentFormItemProps {
  initialValues?: DesignDocumentCommentCreationAttrs;
  directionsList: NSIView[];
  criticalitiesList: NSIView[];
  normativesList: any[];
  statusesList: any[] | NSIView[];
  solutionsList: any[] | NSIView[];
}

const CommentFormItem: FC<CommentFormItemProps> = ({
  initialValues,
  directionsList,
  criticalitiesList,
  normativesList,
  statusesList,
  solutionsList,
}) => {
  const {
    directionId,
    criticalityId,
    normativeId,
    userId,
    pdcId,
    udcId,
    sudcId,
    sdcId,
    comment,
    solutions,
  } = initialValues;

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
                      <Text >Функциональное направление</Text>
                    }
                    {...restField}
                    name={[name, "directionId"]}
                    initialValue={directionId || "1"}
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
                      {directionsList.map(({ id, title }) => {
                        const render = `${id}. ${title}`;
                        return (
                          <Option key={id} title={title}>
                            {render}
                          </Option>
                        );
                      })}
                    </Select>
                  </Item>
                  <Item
                    className="mb-0"
                    style={{ width: 500 }}
                    label={<Text >Критерий критичности</Text>}
                    {...restField}
                    name={[name, "criticalityId"]}
                    initialValue={criticalityId || "1"}
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
                      {criticalitiesList.map(({ id, title, code }) => {
                        const render = `${id} - ${title}`;
                        return (
                          <Option
                            key={id}
                            title={`Код критерия: ${id} - ${title}`}
                          >
                            {render}
                          </Option>
                        );
                      })}
                    </Select>
                  </Item>

                  <Item
                    style={{ width: 500 }}
                    label={<Text >Нормативная ссылка</Text>}
                    {...restField}
                    name={[name, "normativeId"]}
                    initialValue={normativeId || "1"}
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
                      {normativesList.map(({ id, title, code, revision }) => {
                        const render = `${code}. ${title} (v. ${revision})`;
                        return (
                          <Option
                            key={id}
                            title={`${code}. ${title} (v. ${revision})`}
                          >
                            {render}
                          </Option>
                        );
                      })}
                    </Select>
                  </Item>
                </Space>

                <Item
                  className="mb-0"
                  style={{ width: 600 }}
                  label={<Text >Замечание</Text>}
                  name={[name, "comment"]}
                  initialValue={comment}
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
                <Text >Решения</Text>
              </Divider>

              <Space direction="horizontal">
                <SolutionFormItem
                  fieldName={[name, "solutions"]}
                  initialValues={solutions}
                  statusesList={statusesList}
                  solutionsList={solutionsList}
                />
              </Space>
              <Space direction="horizontal" className="d-none">
                <Item
                  className="m-0"
                  {...restField}
                  name={[name, "pdcId"]}
                  initialValue={pdcId}
                >
                  <Input size="small" />
                </Item>
                <Item
                  className="m-0 d-none"
                  {...restField}
                  name={[name, "udcId"]}
                  initialValue={udcId}
                >
                  <Input size="small" />
                </Item>
                <Item
                  className="m-0 d-none"
                  {...restField}
                  name={[name, "sudcId"]}
                  initialValue={sudcId}
                >
                  <Input size="small" />
                </Item>
                <Item
                  className="m-0 d-none"
                  {...restField}
                  name={[name, "sdcId"]}
                  initialValue={sdcId}
                >
                  <Input size="small" />
                </Item>
                <Item
                  className="m-0 d-none"
                  {...restField}
                  name={[name, "userId"]}
                  initialValue={userId}
                >
                  <Input size="small" />
                </Item>
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
              <Text >Добавить замечание</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default CommentFormItem;