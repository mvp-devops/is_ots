import { Button, Divider, Form, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, ReactNode } from "react";
import {
  ImpulseLineLogCreateOrUpdateAttrs,
  ImpulseLineLogView,
} from "../../../../../../common/types/equipment-accounting";
import { ImpulseLineLogItem } from "./form.settings";
import { useImpulseLineLogData } from "./hooks/useImpulseLineLogData";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: ImpulseLineLogView;
  data?: ImpulseLineLogCreateOrUpdateAttrs[];
  setData?: Function;
}

const ImpulseLineLogForm: FC<FormProps> = ({ row, data, setData }) => {
  const { addItem, removeItem, onHandlerChange, editRow } =
    useImpulseLineLogData(row, data, setData);

  const formItems = (item: ImpulseLineLogCreateOrUpdateAttrs): ReactNode => (
    <Form
      key={item.id}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      <Item
        label={<Text type="secondary">Номер импульсной линии</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Номер импульсной линии"
          className="text-secondary"
          value={item.numberOfTrace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("numberOfTrace", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Тип импульсной линии</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Тип импульсной линии"
          className="text-secondary"
          value={item.impulseLineType}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("cableSection", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Точка подключения, от</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Точка подключения, от"
          className="text-secondary"
          value={item.fromPlace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("fromPlace", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Точка подключения, до</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Точка подключения, до"
          className="text-secondary"
          value={item.toPlace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("toPlace", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Длина импульсной линии</Text>}
        className="m-0"
      >
        <Input
          size="small"
          type={"number"}
          placeholder="Длина импульсной линии"
          addonAfter="м"
          className="text-secondary"
          value={item.impulseLineLenght}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("cableLenght", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
        <Input
          size="small"
          className="text-secondary"
          value={item.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("description", e.target.value, item.id)
          }
        />
      </Item>

      {row ? (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            <Button type="primary" className="me-1">
              Обновить
            </Button>

            <Button type="default" className="me-2">
              Отмена
            </Button>
          </Space>
        </>
      ) : (
        <Space className="d-flex justify-content-end my-2">
          <Button
            type="default"
            className="me-1"
            onClick={() => removeItem(item.id)}
          >
            <Text type="danger">Удалить</Text>
          </Button>
        </Space>
      )}
    </Form>
  );

  const editItem = editRow && formItems(editRow);

  return row ? (
    <>{editItem}</>
  ) : (
    <div className="container pt-0">
      <Space className="d-flex justify-content-center ">
        <Button
          type="ghost"
          title="Добавить новую строку"
          onClick={() => addItem()}
        >
          <Text type="secondary">Добавить новую строку</Text>
        </Button>
      </Space>
      {data &&
        data.map((item, index) => (
          <div
            key={item.id}
            className="d-inline-block justify-content-between"
            style={{ width: 550 }}
          >
            <Divider />
            {formItems(ImpulseLineLogItem)}
          </div>
        ))}
      {data && data.length > 0 && (
        <>
          <Divider />
          <Space className="d-flex justify-content-end ">
            <Button type="primary">Отправить</Button>
            <Button>Отмена</Button>
          </Space>
        </>
      )}
    </div>
  );
};

export default ImpulseLineLogForm;
