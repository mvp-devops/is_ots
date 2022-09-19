import { Button, Divider, Form, Select, Space, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
} from "../../../../../../server/common/types/comments-accounting";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { addItem } from "./form.actions";
import { initCommentFormData } from "./form.settings";
import { useCommentAccountingFormData } from "./hooks/useCommentAccountingFormData";
import SolutionForm from "./SolutionForm";
import { useCommentAccountingForm } from "./hooks/useCommentAccountingForm";
import {
  DeleteForm,
  SelectUIComponent,
  TextAreaUIComponent,
} from "../../../../components";
import { FormActions } from "../../../main";

const { Item } = Form;
const { Text } = Typography;

export interface CommentFormProps {
  target: string;
  currentId: string;
  onCancel: () => void;
  data?: DesignDocumentCommentCreationAttrs;
}

const CommentForm = () => {
  const {
    actionType,
    directionsList,
    criticalitiesList,
    setFormVisible,
    onHandlerChange,
    solutions,
    addItem,
    removeItem,
    changeItems,
    addNewItem,
    updateItem,
    deleteItem,
  } = useCommentAccountingForm();

  const renderAddActions = actionType === FormActions.ADD_COMMENT && (
    <Button
      type="primary"
      className="m-1"
      title="Добавить новое замечание"
      onClick={() => {
        addNewItem();
        setFormVisible(false);
      }}
    >
      Добавить
    </Button>
  );

  const renderEditActions = FormActions.EDIT_COMMENT && (
    <Button
      type="primary"
      className="m-1"
      title="Редактировать замечание"
      onClick={() => {
        updateItem();
        setFormVisible(false);
      }}
    >
      Обновить
    </Button>
  );

  const renderRemoveActions = FormActions.REMOVE_COMMENT && (
    <Button
      type="primary"
      className="m-1"
      title="Удалить замечание"
      onClick={() => {
        deleteItem();
        setFormVisible(false);
      }}
    >
      Удалить
    </Button>
  );

  const renderForm = (actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.EDIT_COMMENT) && (
    <>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        className="m-1 p-1 border"
      >
        <Item
          label={<Text type="secondary">Функциональное направление</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="directionId"
            items={directionsList}
            changeValue={onHandlerChange}
          />
        </Item>
        <Item label={<Text type="secondary">Замечание</Text>} className="m-0">
          <TextAreaUIComponent id="comment" changeValue={onHandlerChange} />
        </Item>
        <Item
          label={<Text type="secondary">Нормативная ссылка</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="normativeId"
            items={[]}
            changeValue={onHandlerChange}
          />
        </Item>
        <Item
          label={<Text type="secondary">Код критерия критичности</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="criticalityId"
            items={criticalitiesList}
            changeValue={onHandlerChange}
          />
        </Item>
      </Form>
      <Divider orientation="right">
        <Text type="secondary">Добавить новое решение</Text>
        <Button
          type="primary"
          className="m-1"
          title="Добавить новое решение"
          onClick={() => addItem()}
        >
          +
        </Button>
      </Divider>

      <Space direction="horizontal" className="d-inline-block mt-2">
        {solutions.map((item) => (
          <Space key={item.key}>
            <SolutionForm
              id={item.key}
              changeValue={changeItems}
              onRemove={() => removeItem(item.key)}
            />
          </Space>
        ))}
      </Space>
    </>
  );

  const renderDelete = actionType === FormActions.REMOVE_COMMENT && (
    <DeleteForm message="Удалить замечание?" />
  );

  return (
    <>
      {renderForm}
      {renderDelete}

      <Divider className="m-1" />
      <Space className="d-flex justify-content-end mb-2">
        {renderAddActions}
        {renderEditActions}
        {renderRemoveActions}
      </Space>
    </>
  );
};

export default CommentForm;
