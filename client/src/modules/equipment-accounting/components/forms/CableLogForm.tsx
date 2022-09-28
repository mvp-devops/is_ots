import { Button, Divider, Form, Space, Typography } from "antd";
import { FC } from "react";
import {
  CableLogCreateOrUpdateAttrs,
  CableLogView,
} from "../../../../../../server/common/types/equipment-accounting";
import { InputUIComponent, UploadUIComponent } from "../../../../components";
import { useCableLogForm } from "./hooks";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: CableLogView;
  data?: CableLogCreateOrUpdateAttrs[];
  setData?: Function;
}

const CableLogForm: FC<FormProps> = ({ row, data, setData }) => {
  const { addItem, removeItem, onHandlerChange, editRow } = useCableLogForm(
    row,
    data,
    setData
  );

  const formItems = (item: CableLogCreateOrUpdateAttrs) => (
    <Form
      key={item.id}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
      style={{ maxWidth: 1200 }}
    >
      <Item
        label={<Text type="secondary">Номер кабельной линии</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.numberOfTrace}
          id="numberOfTrace"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text type="secondary">Марка кабеля</Text>} className="m-0">
        <InputUIComponent
          value={item.cableMark}
          id="cableMark"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text type="secondary">Сечение кабеля</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.cableSection}
          id="cableSection"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>

      <Item
        label={<Text type="secondary">Место монтажа, от</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.fromUnit}
          id="fromUnit"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text type="secondary">Точка подключения, от</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.fromPlace}
          id="fromPlace"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text type="secondary">Место монтажа, до</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.toUnit}
          id="toUnit"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text type="secondary">Точка подключения, до</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.toPlace}
          id="toPlace"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>
      <Item
        label={<Text type="secondary">Длина кабельной линии</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={item.cableLenght}
          id="cableLenght"
          itemId={item.id}
          type="number"
          addonAfter="м"
          changeValue={onHandlerChange}
        />
      </Item>

      <Item
        label={<Text type="secondary">схема подключения:</Text>}
        className="m-0"
      >
        <UploadUIComponent
          id="wiringDiagram"
          itemId={item.id}
          changeValue={onHandlerChange}
        />
      </Item>

      <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
        <InputUIComponent
          value={item.description}
          id="description"
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
            <Divider className="p-0 m-1" />
            {formItems(item)}
          </div>
        ))}
    </div>
  );
};

export default CableLogForm;
