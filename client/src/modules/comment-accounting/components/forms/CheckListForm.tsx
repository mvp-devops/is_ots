import {
  Button,
  Divider,
  Input,
  Select,
  Space,
  Typography,
  Col,
  Row,
  Tabs,
} from "antd";

import { ChangeEvent } from "react";
import { CheckListSettings } from "../../../../../../server/common/types/comments-accounting";
import { DeleteOutlined } from "@ant-design/icons";

import { useCommentAccountingFormData } from "./hooks/useCommentAccountingFormData";

const { Text } = Typography;
const { Option } = Select;

const CheckListForm = () => {
  const {
    target,
    sets,
    stages,
    settings,
    addItem,
    removeItem,
    checkList,
    onHandlerChange,
    setCheckListSets,
    counterpartiesList,
    equipmentsList,
  } = useCommentAccountingFormData();

  const formItems = (item: CheckListSettings) => (
    <Space
      key={item.key}
      direction="vertical"
      className=" m-1 p-1 border"
      style={{
        width: 550,
      }}
    >
      <Row justify="start" align="middle" wrap gutter={10}>
        <Col flex="80px">
          <Text type="secondary">Стадия:</Text>
        </Col>
        <Col flex="300px">
          <Select
            size="small"
            className="text-secondary"
            style={{ width: 300 }}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare(
                  (optionB!.children as unknown as string).toLowerCase()
                )
            }
            onChange={(value: string) =>
              onHandlerChange("stage", value, item.key)
            }
          >
            {stages.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Col>
        {item.stage && (
          <Col flex="120px" className="text-secondary">
            <Input
              size="small"
              style={{ minWidth: 120 }}
              placeholder="Вес стадии"
              addonAfter="%"
              className="text-secondary"
              value={item.stageFactor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("stageFactor", e.target.value, item.key)
              }
            />
          </Col>
        )}
        <Col offset={item.stage ? 0 : 4}>
          <DeleteOutlined
            style={{
              color: "red",
              cursor: "pointer",
              marginBottom: 8,
              fontSize: 16,
            }}
            onClick={() => removeItem(item.key)}
          />
        </Col>
      </Row>
    </Space>
  );

  const tabs = (
    <Tabs defaultActiveKey="project-unit">
      <Tabs.TabPane tab="Проект/объект" key="project-unit">
        {/* <Divider className="m-0 p-0" /> */}
        <Space className="d-flex justify-content-center mt-2 mb-2 ">
          <Button
            type="ghost"
            title="Добавить новую строку"
            onClick={() => addItem()}
          >
            <Text type="secondary">Добавить стадию</Text>
          </Button>
        </Space>
        {settings.map((item) => formItems(item))}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Контрагент" key="counterparty">
        <Row justify="start" align="middle" wrap gutter={10}>
          <Col flex="180px">
            <Text type="secondary">
              {target === "project" ? "Проектный институт:" : "Поставщик:"}
            </Text>
          </Col>
          <Col flex="300px">
            <Select
              size="small"
              className="text-secondary"
              style={{ width: 300 }}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              // onChange={(value: string) =>
              //   onHandlerChange("stage", value, item.key)
              // }
            >
              {counterpartiesList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        {(target === "unit" || target === "sub-unit") && (
          <Row justify="start" align="middle" wrap gutter={10} className="mt-1">
            <Col flex="180px">
              <Text type="secondary">Группа оборудования:</Text>
            </Col>
            <Col flex="200px">
              <Select
                size="small"
                className="text-secondary"
                style={{ width: 300 }}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option!.children as unknown as string).includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA!.children as unknown as string)
                    .toLowerCase()
                    .localeCompare(
                      (optionB!.children as unknown as string).toLowerCase()
                    )
                }
                // onChange={(value: string) =>
                //   onHandlerChange("stage", value, item.key)
                // }
              >
                {equipmentsList.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        )}
        <Divider className="m-0 p-0 mt-3" />
        <Space className="d-flex justify-content-center mt-2 mb-2 ">
          <Button
            type="ghost"
            title="Добавить новую строку"
            onClick={() => addItem()}
          >
            <Text type="secondary">Добавить стадию</Text>
          </Button>
        </Space>
        {settings.map((item) => formItems(item))}
      </Tabs.TabPane>
    </Tabs>
  );

  return (
    <div className="container ">
      <Divider orientation="center" className="text-secondary m-0 p-0">
        Шкала оценки
      </Divider>
      <Space direction="horizontal" className="d-flex justify-content-end mb-3">
        <Space>
          <Text type="secondary">Не удовлетворительно: &lt;</Text>
        </Space>
        <Space>
          <Input
            size="small"
            style={{ width: 100, color: "red" }}
            addonAfter={<Text type="secondary">%</Text>}
            className="text-secondary"
            value={sets.satisfactorily}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCheckListSets("satisfactorily", e.target.value)
            }
          />
        </Space>
      </Space>
      <Space direction="horizontal" className="d-flex justify-content-end mb-3">
        <Space>
          <Text type="secondary">Удовлетворительно: &ge;</Text>
        </Space>
        <Space>
          <Input
            size="small"
            style={{ width: 100 }}
            addonAfter={<Text type="secondary">%</Text>}
            className="text-secondary"
            value={sets.okay}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCheckListSets("okay", e.target.value)
            }
          />
        </Space>
      </Space>
      <Space direction="horizontal" className="d-flex justify-content-end mb-3">
        <Space>
          <Text type="secondary">Хорошо: &ge;</Text>
        </Space>
        <Space>
          <Input
            size="small"
            style={{ width: 100 }}
            addonAfter={<Text type="secondary">%</Text>}
            className="text-secondary"
            value={sets.great}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCheckListSets("great", e.target.value)
            }
          />
        </Space>
      </Space>
      {tabs}
      <Divider className="p-0 m-2" />
      <Space className="d-flex justify-content-end mb-0">
        <Button
          type="primary"
          className="me-1 "
          onClick={() => checkList()}
          disabled={settings.length > 0 ? false : true}
        >
          Сформировать
        </Button>
      </Space>
    </div>
  );
};

export default CheckListForm;
