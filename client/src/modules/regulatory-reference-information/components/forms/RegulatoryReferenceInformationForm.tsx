import { Button, Divider, Form, Space, Typography } from "antd";
import {
  DeleteForm,
  InputUIComponent,
  UploadUIComponent,
} from "../../../../components";
import { FormActions } from "../../../main";
import { useRegulatoryReferenceInformationForm } from "./hooks";

const { Item } = Form;
const { Text } = Typography;

const RegulatoryReferenceInformationForm = () => {
  const {
    editRow,
    dictionaryTarget,
    actionType,
    onHandlerChange,
    setFormVisible,
    addNewItem,
    updateItem,
    deleteItem,
  } = useRegulatoryReferenceInformationForm();

  const fileItem = (dictionaryTarget === "counterparty" ||
    dictionaryTarget === "design") && (
    <Item label={<Text  >Логотип</Text>} className="m-0">
      <UploadUIComponent id="file" changeValue={onHandlerChange} />
    </Item>
  );

  const titleItem = editRow && (
    <Item label={<Text  >Наименование</Text>} className="m-0">
      <InputUIComponent
        value={editRow.title}
        id="title"
        changeValue={onHandlerChange}
      />
    </Item>
  );

  const codeItem = editRow && (
    <Item
      label={
        <Text  >
          {dictionaryTarget === "criticality" ? "Вес" : "Шифр"}
        </Text>
      }
      className="m-0"
    >
      <InputUIComponent
        value={editRow.code as string}
        id="code"
        changeValue={onHandlerChange}
      />
    </Item>
  );

  const thresholdItem = editRow &&
    "threshold" in editRow &&
    dictionaryTarget === "criticality" && (
      <Item label={<Text  >Порог</Text>} className="m-0">
        <InputUIComponent
          value={editRow.threshold as string}
          type="number"
          addonAfter="%"
          id="threshold"
          changeValue={onHandlerChange}
        />
      </Item>
    );

  const goalItem = editRow &&
    "goal" in editRow &&
    dictionaryTarget === "criticality" && (
      <Item label={<Text  >Цель</Text>} className="m-0">
        <InputUIComponent
          value={editRow.goal as string}
          type="number"
          addonAfter="%"
          id="goal"
          changeValue={onHandlerChange}
        />
      </Item>
    );

  const tenseGoalItem = editRow &&
    "tenseGoal" in editRow &&
    dictionaryTarget === "criticality" && (
      <Item label={<Text  >Амцель</Text>} className="m-0">
        <InputUIComponent
          value={editRow.tenseGoal as string}
          type="number"
          addonAfter="%"
          id="tenseGoal"
          changeValue={onHandlerChange}
        />
      </Item>
    );

  const descriptionItem = editRow && (
    <Item label={<Text  >Примечание</Text>} className="m-0">
      <InputUIComponent
        value={editRow.description as string}
        id="description"
        changeValue={onHandlerChange}
      />
    </Item>
  );

  const renderDelete = actionType === FormActions.REMOVE_DICTIONARY_ITEM && (
    <DeleteForm message="Удалить запись?" />
  );

  const renderAddActions = actionType === FormActions.ADD_DICTIONARY_ITEM && (
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

  const renderEditActions = actionType === FormActions.EDIT_DICTIONARY_ITEM && (
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

  const renderRemoveActions = actionType ===
    FormActions.REMOVE_DICTIONARY_ITEM && (
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

  const renderForm = (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      {titleItem}
      {codeItem}
      {thresholdItem}
      {goalItem}
      {tenseGoalItem}
      {fileItem}
      {descriptionItem}
    </Form>
  );

  const render =
    actionType === FormActions.ADD_DICTIONARY_ITEM ||
    actionType === FormActions.EDIT_DICTIONARY_ITEM
      ? renderForm
      : renderDelete;

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

export default RegulatoryReferenceInformationForm;