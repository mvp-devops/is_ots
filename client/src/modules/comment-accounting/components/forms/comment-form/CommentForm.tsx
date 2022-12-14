import {
  Button,
  Form,
  Input,
  notification,
  Select,
  Space,
  Typography,
} from "antd";
import React, { useLayoutEffect, useState } from "react";
import { FormInstance } from "antd/es/form";

import CommentFormItem from "./CommentFormItem";
import { useActions, useTypedSelector } from "../../../../..";
import {
  getAllItems,
  NSIView,
} from "../../../../regulatory-reference-information";
import {
  solutionRequestData,
  statusRequestData,
} from "../../../utils/comment-accounting.consts";

const { Item } = Form;

const CommentForm = () => {
  const [form] = Form.useForm();

  const formRef = React.createRef<FormInstance>();

  const { currentDesignDocument } = useTypedSelector(
    (state) => state.fileStorage
  );
  const { actionType, formVisible } = useTypedSelector((state) => state.main);

  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<NSIView[]>([]);

  const [normativesList, setNormativesList] = useState<NSIView[]>([]); //TODO: Релизовать подгрузку листа нормативных документов

  const stages = [1, 2, 3, 4, 5, 6, "1", "2", "3", "4", "5", "6"];

  const { stageId } = currentDesignDocument;

  const { createManyComments, setFormVisible } = useActions();

  useLayoutEffect(
    () => {
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
    },

    //   getItems("normative").then((data) =>
    //   setCriticalities(data)
    // );
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  const onFinish = (values: any) => {
    createManyComments(values);
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
      <CommentFormItem
        normativesList={[]}
        directionsList={directionsList}
        criticalitiesList={criticalitiesList}
        statusesList={statusRequestData}
        solutionsList={solutionRequestData}
      />

      <Space className="d-flex justify-content-end">
        <Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default CommentForm;