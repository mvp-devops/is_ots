import { Button, Form, Input, Select, Space, Typography } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/es/form";
import { SelectUIComponent, TextAreaUIComponent } from "../../../../components";
import { useCommentAccountingFormData } from "../../../comment-accounting";
import { useTypedSelector } from "../../../..";
import { FormActions } from "../../../main";
import { NSIView } from "../../types";
import { useRegulatoryReferenceInformation } from "../../hooks";
import {
  solutionRequestData,
  statusRequestData,
} from "../../../comment-accounting/utils/comment-accounting.consts";
import CommentFormItem from "./comment-form/CommentFormItem";
const { Item, List } = Form;
const { Text } = Typography;
const { Option } = Select;
const NewCommentForm = () => {
  const [form] = Form.useForm();

  const formRef = React.createRef<FormInstance>();

  // const { currentDesignDocument } = useTypedSelector(
  //   (state) => state.fileStorage
  // );
  const { actionType, formVisible } = useTypedSelector((state) => state.main);

  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<NSIView[]>([]);

  const [normativesList, setNormativesList] = useState<NSIView[]>([]); //TODO: Релизовать подгрузку листа нормативных документов

  const { getAllItems } = useRegulatoryReferenceInformation();

  const stages = [1, 2, 3, 4, 5, 6];

  const stageId = 1;

  const statusesList = statusRequestData;
  const solutionsList = solutionRequestData;

  useLayoutEffect(
    () => {
      getAllItems("criticality").then((data) => {
        stages.includes(stageId) &&
          setCriticalitiesList(
            data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 11)
          );
        // stageId === 7 &&
        //   setCriticalitiesList([
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(16, 22),
        //   ]);
        // stageId === 8 &&
        //   setCriticalitiesList([
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(22, 29),
        //   ]);
        // stageId === 10 &&
        //   setCriticalitiesList([
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
        //     ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(29),
        //   ]);
      });
      getAllItems("direction").then((data) => setDirectionsList(data));
    },

    //   getItems("normative").then((data) =>
    //   setCriticalities(data)
    // );
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps

  const onFinish = (values: any) => {
    console.log("Success:", values);
    onReset();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        directionsList={directionsList}
        criticalitiesList={criticalitiesList}
        statusesList={statusesList}
        solutionsList={solutionsList}
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

export default NewCommentForm;
