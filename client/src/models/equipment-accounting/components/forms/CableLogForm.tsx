import { Button, Divider, Form, Input, Space, Typography } from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
} from "../../../../../../common/types/equipment-accounting";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: CableLogView;
  data?: CableLogCreateOrUpdateAttrs[];
  setData?: Function;
}

const item: CableLogCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: "",
  wiringDiagram: null,
  numberOfTrace: "",
  cableMark: "",
  cableSection: "",
  fromUnit: "",
  fromPlace: "",
  toUnit: "",
  toPlace: "",
  cableLenght: "",
  range: "м",
  description: "",
};

const CableLogForm: FC<FormProps> = ({ row, data, setData }) => {
  const [editRow, setEditRow] = useState<CableLogCreateOrUpdateAttrs>();

  useEffect(
    () =>
      row &&
      setEditRow({
        id: Math.random(),
        sloeId: row.sloeId,
        wiringDiagram: null,
        numberOfTrace: row.numberOfTrace,
        cableMark: row.cableMark,
        cableSection: row.cableSection,
        fromUnit: row.fromUnit,
        fromPlace: row.fromPlace,
        toUnit: row.toUnit,
        toPlace: row.toPlace,
        cableLenght: row.cableLenght,
        range: "м",
        description: row.description,
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

  const formItems = (item: CableLogCreateOrUpdateAttrs): ReactNode => (
    <Form
      key={item.id}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      <Item
        label={<Text type="secondary">Номер кабельной линии</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Номер кабельной линии"
          className="text-secondary"
          value={editRow ? editRow.numberOfTrace : item.numberOfTrace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, numberOfTrace: e.target.value })
              : changeItems("numberOfTrace", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Марка кабеля</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Марка кабеля"
          className="text-secondary"
          value={editRow ? editRow.cableMark : item.cableMark}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, cableMark: e.target.value })
              : changeItems("cableMark", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Сечение кабеля</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Сечение кабеля"
          className="text-secondary"
          value={editRow ? editRow.cableSection : item.cableSection}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, cableSection: e.target.value })
              : changeItems("cableSection", e.target.value, item.id)
          }
        />
      </Item>

      <Item
        label={<Text type="secondary">Место монтажа, от</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Место монтажа, от"
          className="text-secondary"
          value={editRow ? editRow.fromUnit : item.fromUnit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, fromUnit: e.target.value })
              : changeItems("fromUnit", e.target.value, item.id)
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
          value={editRow ? editRow.fromPlace : item.fromPlace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, fromPlace: e.target.value })
              : changeItems("fromPlace", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Место монтажа, до</Text>}
        className="m-0"
      >
        <Input
          size="small"
          placeholder="Место монтажа, до"
          className="text-secondary"
          value={editRow ? editRow.toUnit : item.toUnit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, toUnit: e.target.value })
              : changeItems("toUnit", e.target.value, item.id)
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
          value={editRow ? editRow.toPlace : item.toPlace}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, toPlace: e.target.value })
              : changeItems("toPlace", e.target.value, item.id)
          }
        />
      </Item>
      <Item
        label={<Text type="secondary">Длина кабельной линии</Text>}
        className="m-0"
      >
        <Input
          size="small"
          type={"number"}
          placeholder="Длина кабельной линии"
          addonAfter="м"
          className="text-secondary"
          value={editRow ? editRow.cableLenght : item.cableLenght}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, cableLenght: e.target.value })
              : changeItems("cableLenght", e.target.value, item.id)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
        <Input
          size="small"
          placeholder="Длина кабельной линии"
          className="text-secondary"
          value={editRow ? editRow.description : item.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? setEditRow({ ...editRow, description: e.target.value })
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

export default CableLogForm;
