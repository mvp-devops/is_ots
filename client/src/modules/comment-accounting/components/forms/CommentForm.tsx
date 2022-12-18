import { Button, Divider, Form, notification, Space, Typography } from "antd";
import React, { FC, useLayoutEffect, useState } from "react";
import { FormInstance } from "antd/es/form";
import { InfoCircleOutlined } from "@ant-design/icons";

import { useActions, useTypedSelector } from "../../../../hooks";
import { DesignDocumentCommentCreationAttrs, NSIView } from "../../types";
import { getAllItems } from "../../../regulatory-reference-information";
import CommentFormItem from "./comment-form/CommentFormItem";
import {
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import { findAllNormatives } from "../../../file-storage/api/file-storage.api";
import { FormActions } from "../../../main";

const { Item } = Form;

const { Text } = Typography;

interface CommentFormProps {
  rows?:
    | DesignDocumentCommentCreationAttrs
    | DesignDocumentCommentCreationAttrs[];
}

const CommentForm: FC<CommentFormProps> = ({ rows }) => {
  const [form] = Form.useForm();

  const formRef = React.createRef<FormInstance>();

  const { currentDesignDocument } = useTypedSelector(
    (state) => state.fileStorage
  );
  const { actionType, currentUser } = useTypedSelector((state) => state.main);

  const { currentComment } = useTypedSelector(
    (state) => state.commentAccounting
  );

  const { target } = useTypedSelector((state) => state.positionTree);

  const [buttonTitle, setButtonTitle] = useState("");

  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<NSIView[]>([]);

  const [normativesList, setNormativesList] = useState<any[]>([]);

  //TODO: продумать как оптимизировать проверку сдалии документа, чтобы отдавать корректный список критериев критичности
  const stages = [1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"];

  const { stageId, projectId, unitId, subUnitId, supplierId } =
    currentDesignDocument;

  const userId = currentUser.id;
  const documentId = currentDesignDocument.id;

  const { createManyComments, setFormVisible, updateComment, deleteComment } =
    useActions();

  useLayoutEffect(() => {
    getAllItems("criticality").then((data) => {
      stages.includes(stageId) &&
        setCriticalitiesList(
          data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 11)
        );
      stageId === 7 &&
        setCriticalitiesList([
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(16, 22),
        ]);
      stageId === 8 &&
        setCriticalitiesList([
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(22, 29),
        ]);
      stageId === 10 &&
        setCriticalitiesList([
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
          ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(29),
        ]);
    });
    getAllItems("direction").then((data) => setDirectionsList(data));

    findAllNormatives().then((data) => setNormativesList(data));

    switch (actionType) {
      case FormActions.ADD_COMMENT:
        setButtonTitle("Добавить");
        break;
      case FormActions.EDIT_COMMENT:
        setButtonTitle("Обновить");
        break;
      case FormActions.REMOVE_COMMENT:
        setButtonTitle("Удалить");
        break;
      default:
        break;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onFinish = (values: any) => {
    actionType === FormActions.REMOVE_COMMENT &&
      deleteComment(target, currentComment.id.toString());
    actionType === FormActions.EDIT_COMMENT &&
      updateComment(currentComment.id.toString(), values);
    actionType === FormActions.ADD_COMMENT && createManyComments(values);
    onReset();
    setFormVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "Ошибка",
      description: "Ошибка ввода данных. Проверьте все поля формы",
    });
  };

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  const commentItem: DesignDocumentCommentCreationAttrs = {
    pdcId: projectId !== null ? documentId : null,
    udcId: unitId !== null ? documentId : null,
    sudcId: subUnitId !== null ? documentId : null,
    sdcId: supplierId !== null ? documentId : null,
    userId,
    directionId: "1",
    criticalityId: "1",
    normativeId: "1",
    comment: "",
    solutions: [],
  };

  return (
    <Form
      layout="vertical"
      ref={formRef}
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      {actionType === FormActions.REMOVE_COMMENT ? (
        <Space className="d-flex justify-content-start ">
          <InfoCircleOutlined
            style={{ fontSize: 30 }}
            className="text-warning me-3"
          />
          <Text>Удалить замечание?</Text>
        </Space>
      ) : (
        <CommentFormItem
          initialValues={commentItem}
          directionsList={directionsList}
          criticalitiesList={criticalitiesList}
          normativesList={normativesList}
          statusesList={statusRequestData}
          solutionsList={solutionRequestData}
        />
      )}

      <Space className="d-flex justify-content-end">
        <Item>
          <Button
            type="primary"
            htmlType="submit"
            title={`${buttonTitle} замечание`}
          >
            {buttonTitle}
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default CommentForm;