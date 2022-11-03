import React, {createRef} from 'react';
import {createNormative} from "../../../file-storage/api/file-storage.api";
import {Button, Form, Input, Space, Typography} from "antd";
import {FormInstance} from "antd/es/form";
import CommentFormItem from "./comment-form/CommentFormItem";
import {InputUIComponent, UploadUIComponent} from "../../../../components";
import {UploadOutlined} from "@ant-design/icons";

import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const {Item} = Form;
const {Text} = Typography

const { Dragger } = Upload;







const NormativeForm = () => {
  const [form] = Form.useForm();

  const formRef = createRef<FormInstance>();



  const onFinish = (values: any) => {
    // createNormative(values).then((data => console.log(data)));
    console.log("Success:", values);
    onReset();
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  const fileItem =  (
    <Item name="documents" label={<Text type="secondary">Файлы</Text>} className="m-0" valuePropName="fileList">
      <Dragger
        multiple
        beforeUpload={(file, fileList) => {
          form.setFieldValue("documents", fileList);
          return false;
        }}

        //TODO: реализовать удаление файлов из списка
        // onRemove={(file) => {
        //   form.setFieldValue("documents", null)
        // }}

      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Нажмите или перетащите файл в эту область, чтобы загрузить</p>
        <p className="ant-upload-hint">
          Поддержка одиночной или массовой загрузки. Строго запретить загружать данные компании или другие групповые файлы
        </p>
      </Dragger>

    </Item>
  );
  const infoItem =  (
    <Item name="descriptor" label={<Text type="secondary">Файл-дескриптор</Text>} className="m-0" valuePropName="file">
      <Upload
        className="mb-1"
        onRemove={(file) => {
          form.setFieldValue("descriptor", null)
        }}
        beforeUpload={(file, fileList) => {
          form.setFieldValue("descriptor", file)
          return false;
        }}
      >
        <Button icon={<UploadOutlined />} style={{ width: 232 }}>
          <Text type="secondary">Выбрать файл</Text>
        </Button>
      </Upload>
    </Item>
  );

  const titleItem = (
    <Item name="title" label={<Text type="secondary">Наименование</Text>} className="m-0">
      <Input
        placeholder="Замечание"
        className="text-secondary"
      />
    </Item>
  );


  const codeItem = (
    <Item name="code" label={<Text type="secondary">Шифр</Text>} className="m-0">
      <Input
        placeholder="Шифр документа"
        className="text-secondary"
      />
    </Item>
  );

  const revisionItem = (
    <Item name="revision" label={<Text type="secondary">Версия/ревизия</Text>} className="m-0">
      <Input
        placeholder="№ ревизии/версии"
        className="text-secondary"
      />
    </Item>
  );

  const descriptionItem = (
    <Item name="description" label={<Text type="secondary">Примечание</Text>} className="m-0">
      <Input.TextArea
        placeholder="Примечание"
        className="text-secondary"
      />
    </Item>
  );



  return (
    <Form
      layout="vertical"
      ref={formRef}
      form={form}
      name="normative-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      {codeItem}
      {titleItem}
      {revisionItem}
      {descriptionItem}
      {infoItem}
      {fileItem}


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

export default NormativeForm;