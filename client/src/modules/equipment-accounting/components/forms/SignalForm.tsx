import { Button, Divider, Form, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { SignalCreateOrUpdateAttrs, SignalView } from "../../types";
import { InputUIComponent } from "../../../../components";
import { useSignalForm } from "./hooks";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: SignalView;
  data?: SignalCreateOrUpdateAttrs[];
  setData?: Function;
}

const SignalForm: FC<FormProps> = ({ row, data, setData }) => {
  const { addItem, removeItem, onHandlerChange, editRow } = useSignalForm(
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
      <Item label={<Text   >Тип сигнала</Text>} className="m-0">
        <InputUIComponent
          value={item.signalType}
          id="signalType"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text   >Протокол</Text>} className="m-0">
        <InputUIComponent
          value={item.signalProtocol}
          id="signalProtocol"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text   >TAG сигнала</Text>} className="m-0">
        <InputUIComponent
          value={item.signalTag}
          id="signalTag"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text   >Контр. параметр</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.signalParameter}
          id="signalParameter"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text   >Авария, min</Text>} className="m-0">
        <InputUIComponent
          type="number"
          value={item.h}
          id="h"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text   >Сигнализация, min</Text>}
        className="m-0"
      >
        <InputUIComponent
          type="number"
          value={item.l}
          id="l"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>

      <Item
        label={<Text   >Сигнализация, max</Text>}
        className="m-0"
      >
        <InputUIComponent
          type="number"
          value={item.ll}
          id="ll"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text   >Авария, max</Text>} className="m-0">
        <InputUIComponent
          type="number"
          value={item.hh}
          id="hh"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text   >Аварийный протокол</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.emergencyProtocol}
          id="emergencyProtocol"
          itemId={item.id}
          changeValue={onHandlerChange}
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
            onClick={() => removeItem(item.id as number)}
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
          <Text   >Добавить новую строку</Text>
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