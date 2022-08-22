import { Button, Divider, Form, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, ReactNode } from "react";
import {
  SignalCreateOrUpdateAttrs,
  SignalView,
} from "../../../../../../server/common/types/equipment-accounting";
import { useSignalData } from "./hooks/useSignalData";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: SignalView;
  data?: SignalCreateOrUpdateAttrs[];
  setData?: Function;
}

const SignalForm: FC<FormProps> = ({ row, data, setData }) => {
  const { addItem, removeItem, onHandlerChange, editRow } = useSignalData(
    row,
    data,
    setData
  );

  const formItems = (item: SignalCreateOrUpdateAttrs): ReactNode => (
    <Form
      key={item.id}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
      style={{ maxWidth: 1200 }}
    >
      <Item label={<Text type="secondary">Тип сигнала</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Тип сигнала"
          className="text-secondary"
          value={item.signalType}
          onChange={
            (e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("signalType", e.target.value, item.id)
            // console.log(e.target.value)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Протокол</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Протокол"
          className="text-secondary"
          value={item.signalProtocol}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("signalProtocol", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">TAG сигнала</Text>} className="m-0">
        <Input
          size="small"
          placeholder="TAG сигнала"
          className="text-secondary"
          value={item.signalTag}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("signalTag", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Авария, min</Text>} className="m-0">
        <Input
          size="small"
          type="number"
          placeholder="Авария, min"
          className="text-secondary"
          value={item.h}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("h", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Сигнализация, min</Text>}
        className="m-0"
      >
        <Input
          size="small"
          type="number"
          placeholder="Сигнализация, min"
          className="text-secondary"
          value={item.l}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("l", e.target.value, item.id)
          }
        />
      </Item>

      <Item
        label={<Text type="secondary">Сигнализация, max</Text>}
        className="m-0"
      >
        <Input
          size="small"
          type="number"
          placeholder="Сигнализация, max"
          className="text-secondary"
          value={item.ll}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("ll", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Авария, max</Text>} className="m-0">
        <Input
          size="small"
          type="number"
          placeholder="Авария, max"
          className="text-secondary"
          value={item.hh}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("hh", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Аварийны протокол</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Аварийны протокол"
          className="text-secondary"
          value={item.emergenceProtocol}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("emergenceProtocol", e.target.value, item.id)
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
      <Space className="d-flex justify-content-center">
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
            <Divider className="p-0 m-1" />
            {formItems(item)}
          </div>
        ))}
    </div>
  );
};

export default SignalForm;
