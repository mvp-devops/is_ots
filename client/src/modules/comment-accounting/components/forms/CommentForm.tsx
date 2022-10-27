import { Button, Divider, Form, Space, Typography } from "antd";
import { DesignDocumentCommentCreationAttrs } from "../../types";
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
    editRow,
  } = useCommentAccountingForm();

  const renderAddActions = (
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

  const renderEditActions = (
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

  const renderRemoveActions = (
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

  const renderDelete = (
    <>
      <DeleteForm message="Удалить замечание?" />
      <Divider className="m-1" />
      <Space className="d-flex justify-content-end mb-2">
        {renderRemoveActions}
      </Space>
    </>
  );

  const renderAction =
    actionType === FormActions.ADD_COMMENT
      ? renderAddActions
      : renderEditActions;

  const renderForm =
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.EDIT_COMMENT ? (
      <>
        {editRow && (
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
                defaultValue={editRow.directionId as string}
                items={directionsList}
                changeValue={onHandlerChange}
              />
            </Item>
            <Item
              label={<Text type="secondary">Замечание</Text>}
              className="m-0"
            >
              <TextAreaUIComponent
                id="comment"
                defaultValue={editRow.comment}
                changeValue={onHandlerChange}
                showCount
              />
            </Item>
            {/* <Item
              label={<Text type="secondary">Нормативная ссылка</Text>}
              className="m-0"
            >
              <SelectUIComponent
                id="normativeId"
                items={[]}
                changeValue={onHandlerChange}
              />
            </Item> */}
            <Item
              label={<Text type="secondary">Код критерия критичности</Text>}
              className="m-0"
            >
              <SelectUIComponent
                id="criticalityId"
                defaultValue={editRow.criticalityId as string}
                items={criticalitiesList}
                changeValue={onHandlerChange}
              />
            </Item>
          </Form>
        )}
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
        <Divider className="m-1" />
        <Space className="d-flex justify-content-end mb-2">
          {renderAction}
        </Space>
      </>
    ) : (
      renderDelete
    );

  return renderForm;
};

export default CommentForm;
