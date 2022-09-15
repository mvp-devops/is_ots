import { Button, Divider, Form, Select, Space, Typography, Upload } from "antd";

import { UploadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import {
  DeleteForm,
  InputUIComponent,
  SelectUIComponent,
} from "../../../../components";
import { FormActions } from "../../../main";
import { usePositionTreeForm } from "./hooks";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

const PositionTreeForm = () => {
  const {
    formTarget,
    parrentsList,
    designsList,
    equipmentsList,
    suppliersList,
    editRow,
    onHandlerChange,
    addNewItem,
    addNewItems,
    updateItem,
    deleteItem,

    setFormVisible,
    actionType,
  } = usePositionTreeForm();

  const parrentFieldItem = (actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD) &&
    editRow &&
    "subsidiaryId" in editRow && (
      <Item label={<Text type="secondary">Дочернее общество</Text>}>
        <SelectUIComponent
          id="subsidiaryId"
          defaultValue={editRow.subsidiaryId as string}
          changeValue={onHandlerChange}
          items={parrentsList}
        />
      </Item>
    );

  const parrentProjectItem = editRow &&
    actionType === FormActions.EDIT &&
    formTarget === "project" &&
    "fieldId" in editRow &&
    editRow.fieldId && (
      <Item label={<Text type="secondary">Месторождение</Text>} className="m-0">
        <Select
          size="small"
          className="text-secondary"
          showSearch
          notFoundContent={<Space>Нет данных</Space>}
          defaultValue={editRow.fieldId.toString()}
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
          onChange={(value: string) => onHandlerChange("fieldId", value)}
        >
          {parrentsList.map((item) => (
            <Option key={item.id}>{item.title}</Option>
          ))}
        </Select>
      </Item>
    );

  const projectDesignItem = editRow && "designId" in editRow && (
    <Item
      label={<Text type="secondary">Проектный институт</Text>}
      className="m-0"
    >
      <SelectUIComponent
        id="designId"
        defaultValue={editRow.designId as string}
        changeValue={onHandlerChange}
        items={designsList}
      />
    </Item>
  );

  const parrentUnitItem = editRow &&
    (actionType === FormActions.EDIT ||
      actionType === FormActions.EDIT_CHILD) &&
    "projectId" in editRow && (
      <Item label={<Text type="secondary">Проект</Text>} className="m-0">
        <SelectUIComponent
          id="projectId"
          defaultValue={editRow.projectId as string}
          changeValue={onHandlerChange}
          items={parrentsList}
        />
      </Item>
    );

  const parrentSubUnitItem = editRow &&
    (actionType === FormActions.EDIT ||
      actionType === FormActions.EDIT_CHILD) &&
    "unitId" in editRow && (
      <Item
        label={<Text type="secondary">Объект строительства</Text>}
        className="m-0"
      >
        <SelectUIComponent
          id="unitId"
          defaultValue={editRow.unitId as string}
          changeValue={onHandlerChange}
          items={parrentsList}
        />
      </Item>
    );

  const contractItem = editRow && "contract" in editRow && (
    <Item label={<Text type="secondary">№ договора</Text>} className="m-0">
      <InputUIComponent
        value={editRow.contract}
        id="contract"
        changeValue={onHandlerChange}
      />
    </Item>
  );

  const fileItem = editRow && "file" in editRow && (
    <Item
      label={
        <Text type="secondary">
          {formTarget === "subsidiary" ? "Логотип" : "Опросный лист"}
        </Text>
      }
      className="m-0"
    >
      <Upload
        className="mb-1"
        onRemove={(file) => {
          onHandlerChange("file", null);
        }}
        beforeUpload={(file) => {
          onHandlerChange("file", file);

          return false;
        }}
      >
        <Button icon={<UploadOutlined />} style={{ width: 232 }}>
          <Text type="secondary">Выбрать файл</Text>
        </Button>
      </Upload>
    </Item>
  );

  const unitSubUnitItems = editRow &&
    "position" in editRow &&
    "equipmentId" in editRow &&
    "supplierId" in editRow && (
      <>
        <Item
          label={<Text type="secondary">Группа оборудования</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="equipmentId"
            defaultValue={editRow.equipmentId as string}
            changeValue={onHandlerChange}
            items={equipmentsList}
          />
        </Item>
        <Item label={<Text type="secondary">Поставщик</Text>} className="m-0">
          <SelectUIComponent
            id="supplierId"
            defaultValue={editRow.supplierId as string}
            changeValue={onHandlerChange}
            items={suppliersList}
          />
        </Item>
        <Item
          label={<Text type="secondary">Позиция по ГП</Text>}
          className="m-0"
        >
          <InputUIComponent
            value={editRow.position}
            id="position"
            changeValue={onHandlerChange}
          />
        </Item>
      </>
    );

  const renderForm = editRow && (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      {parrentFieldItem}
      {parrentProjectItem}
      {parrentUnitItem}
      {parrentSubUnitItem}
      {projectDesignItem}
      {unitSubUnitItems}

      <Item label={<Text type="secondary">Наименование</Text>} className="m-0">
        <InputUIComponent
          value={editRow.title}
          id="title"
          changeValue={onHandlerChange}
        />
      </Item>
      <Item label={<Text type="secondary">Шифр</Text>} className="m-0">
        <InputUIComponent
          value={editRow.code}
          id="code"
          changeValue={onHandlerChange}
        />
      </Item>

      {contractItem}
      {fileItem}

      <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
        <InputUIComponent
          value={editRow.description}
          id="description"
          changeValue={onHandlerChange}
        />
      </Item>
    </Form>
  );

  const deleteMessage =
    formTarget === "subsidiary"
      ? "Удаление ДО/СП приведет к удалению месторождений"
      : formTarget === "field"
      ? "Удаление месторождения приведет к удалению проектов"
      : formTarget === "project"
      ? "Удаление проекта приведет к удалению сводного перечня оборудования, объектов, документации"
      : formTarget === "unit"
      ? "Удаление объекта приведет к удалению сводного перечня оборудования, установок/объектов и документации"
      : "Удаление установки/объекта приведет к удалению сводного перечня оборудования данной установки/объекта";

  const renderDelete = <DeleteForm message={deleteMessage} />;

  const render =
    actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD ||
    actionType === FormActions.ADD ||
    actionType === FormActions.ADD_CHILD
      ? renderForm
      : renderDelete;

  const renderAddActions = (actionType === FormActions.ADD ||
    actionType === FormActions.ADD_CHILD) && (
    <Button
      type="primary"
      className="me-1"
      onClick={() => {
        addNewItem();
        setFormVisible(false);
      }}
    >
      Добавить
    </Button>
  );

  const renderEditActions = (actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD) && (
    <Button
      type="primary"
      className="me-1"
      onClick={() => {
        updateItem();
        setFormVisible(false);
      }}
    >
      Обновить
    </Button>
  );

  const renderRemoveActions = (actionType === FormActions.REMOVE ||
    actionType === FormActions.REMOVE_CHILD) && (
    <Button
      type="primary"
      className="me-1"
      onClick={() => {
        deleteItem();
        setFormVisible(false);
      }}
    >
      Удалить
    </Button>
  );

  return (
    <>
      {render}
      <Divider className="p-0 m-2" />
      <Space className="d-flex justify-content-end mb-2">
        {renderAddActions}
        {renderEditActions}
        {renderRemoveActions}
      </Space>
    </>
  );
};

export default PositionTreeForm;
