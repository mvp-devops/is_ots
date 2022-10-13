import { Button, Divider, Form, Space, Typography } from "antd";
import { useFileStorageForm } from "./hooks";
import {
  DeleteForm,
  InputUIComponent,
  SelectUIComponent,
  UploadUIComponent,
} from "../../../../components";
import { FormActions } from "../../../main";

const { Item } = Form;
const { Text } = Typography;

const DesignDocumentForm = () => {
  const {
    editRow,
    onHandlerChange,
    stagesList,
    sectionsList,
    suppliersList,
    actionType,
    setFormVisible,
    addNewItem,
    // addNewItems,
    deleteItem,
    updateItem,
  } = useFileStorageForm();

  const fileItem = editRow && "file" in editRow && (
    <Item label={<Text type="secondary">Документ</Text>} className="m-0">
      <UploadUIComponent id="file" changeValue={onHandlerChange} />
    </Item>
  );

  const stageItem = editRow && "stageId" in editRow && (
    <Item label={<Text type="secondary">Стадия</Text>} className="m-0">
      <SelectUIComponent
        id="stageId"
        defaultValue={(editRow.stageId as string) || "Выбрать"}
        changeValue={onHandlerChange}
        items={stagesList}
      />
    </Item>
  );

  const sectionItem = editRow && "sectionId" in editRow && (
    <Item label={<Text type="secondary">Марка/раздел</Text>} className="m-0">
      <SelectUIComponent
        id="sectionId"
        defaultValue={(editRow.sectionId as string) || "Выбрать"}
        changeValue={onHandlerChange}
        items={sectionsList}
      />
    </Item>
  );

  const supplierItem = editRow && "supplierId" in editRow && (
    <Item label={<Text type="secondary">Поставщик</Text>} className="m-0">
      <SelectUIComponent
        id="supplierId"
        defaultValue={(editRow.supplierId as string) || "Выбрать"}
        changeValue={onHandlerChange}
        items={suppliersList}
      />
    </Item>
  );

  const renderForm = (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      {editRow && (
        <>
          {stageItem}
          {sectionItem}
          {editRow && editRow.stageId === 5 && supplierItem}
          <Item label={<Text type="secondary">Шифр</Text>} className="m-0">
            <InputUIComponent
              value={editRow.code}
              id="code"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item
            label={<Text type="secondary">Наименование</Text>}
            className="m-0"
          >
            <InputUIComponent
              value={editRow.title}
              id="title"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item label={<Text type="secondary">Ревизия</Text>} className="m-0">
            <InputUIComponent
              value={editRow.revision}
              id="revision"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item
            label={<Text type="secondary">Примечание</Text>}
            className="m-0"
          >
            <InputUIComponent
              value={editRow.description}
              id="description"
              changeValue={onHandlerChange}
            />
          </Item>
          {fileItem}
        </>
      )}
    </Form>
  );

  const render =
    actionType !== FormActions.REMOVE_DOCUMENT ? (
      renderForm
    ) : (
      <DeleteForm message="Удаление документа приведет к удалению всех замечаний, выданных к данному документу" />
    );

  const renderAddActions = actionType === FormActions.ADD_DOCUMENT && (
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

  const renderEditActions = actionType === FormActions.EDIT_DOCUMENT && (
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

  const renderRemoveActions = actionType === FormActions.REMOVE_DOCUMENT && (
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

export default DesignDocumentForm;
