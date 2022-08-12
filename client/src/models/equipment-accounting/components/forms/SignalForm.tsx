import { Button, Divider, Form, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import {
  SignalCreateOrUpdateAttrs,
  SignalView,
} from "../../../../../../common/types/equipment-accounting";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: SignalView;
  data?: SignalCreateOrUpdateAttrs[];
  setData?: Function;
}

const item: SignalCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: "",
  signalType: "",
  signalProtocol: "",
  signalTag: "",
  ll: "",
  l: "",
  h: "",
  hh: "",
  emergenceProtocol: "",
};

const SignalForm: FC<FormProps> = ({ row, data, setData }) => {
  const [editRow, setEditRow] = useState<SignalCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: Math.random(),
        sloeId: row.sloeId,
        signalType: row.signalType,
        signalProtocol: row.signalProtocol,
        signalTag: row.signalTag,
        ll: row.ll,
        l: row.l,
        h: row.h,
        hh: row.hh,
        emergenceProtocol: row.emergenceProtocol,
      }),
    [row]
  );

  const addItem = () => {
    data && setData && setData([...data, { ...item, id: Math.random() }]);
  };

  const removeItem = (index: string | number) => {
    data && setData && setData(data.filter((i) => i.id !== index));
  };

  const changeItems = (
    key: string,
    value: string | number,
    id: string | number
  ) => {
    data &&
      setData &&
      setData(data.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const formItems = (item: SignalCreateOrUpdateAttrs): ReactNode => (
    <Form
      key={item.id}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      <Item label={<Text type="secondary">Тип сигнала</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Тип сигнала"
          className="text-secondary"
          value={editRow ? editRow.signalType : item.signalType}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, signalType: e.target.value })
              : changeItems("numberOfTrace", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Протокол</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Протокол"
          className="text-secondary"
          value={editRow ? editRow.signalProtocol : item.signalProtocol}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, signalProtocol: e.target.value })
              : changeItems("numberOfTrace", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Авария, min</Text>} className="m-0">
        <Input
          size="small"
          type="number"
          placeholder="Авария, min"
          className="text-secondary"
          value={editRow ? editRow.h : item.h}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, h: e.target.value })
              : changeItems("fromPlace", e.target.value, item.id)
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
          value={editRow ? editRow.l : item.l}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, signalProtocol: e.target.value })
              : changeItems("cableSection", e.target.value, item.id)
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
          value={editRow ? editRow.ll : item.ll}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, ll: e.target.value })
              : changeItems("toPlace", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Авария, max</Text>} className="m-0">
        <Input
          size="small"
          type="number"
          placeholder="Авария, max"
          className="text-secondary"
          value={editRow ? editRow.hh : item.hh}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, hh: e.target.value })
              : changeItems("cableLenght", e.target.value, item.id)
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
          value={editRow ? editRow.emergenceProtocol : item.emergenceProtocol}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, emergenceProtocol: e.target.value })
              : changeItems("description", e.target.value, item.id)
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
            {formItems(item)}
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

export default SignalForm;
