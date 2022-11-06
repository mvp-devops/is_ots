import React, {createRef, useState} from 'react';
import {createNormative} from "../../../file-storage/api/file-storage.api";
import {Button, Form, Input, Space, Switch, Typography} from "antd";
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
  const [multiple, setMultiple] = useState(false);


  const onFinish = (values: any) => {
    createNormative(values).then((data => console.log(data)));
    console.log("Success:", values);
    onReset();
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
    setMultiple(false)
  };

  const normalizingFileUpload = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };



  const switchItem = (
    <Item name="multiple" label="Загрузить несколько ?" valuePropName="multiple">
      <Switch onChange={() => setMultiple(!multiple)}/>
    </Item>
  )

  const filesItem =  (
    <Item name="documents" label={<Text type="secondary">Файлы</Text>} className="m-0" valuePropName="fileList" getValueFromEvent={normalizingFileUpload}>

      <Upload
        listType="picture-card"
        multiple
        beforeUpload={(file, fileList) => {
          form.setFieldValue("documents", fileList);
          return false;
        }}
      >
        <div>
          <UploadOutlined />
          <div style={{ marginTop: 8 }}>Добавить</div>
        </div>
      </Upload>

    </Item>
  );

  const descriptorItem =  (
    <Item
      name="descriptor"
      label={<Text type="secondary">Файл-дескриптор</Text>}
      className="m-0"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("descriptor", file);
          return false;
        }}
      >
        <div>
          <UploadOutlined />
          <div style={{ marginTop: 8 }}>Добавить</div>
        </div>
      </Upload>
    </Item>
  );
  const fileItem =  (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Item name="document" label={<Text type="secondary">Документ</Text>} className="m-0" valuePropName="file" getValueFromEvent={(e) => e.file}>
        <Upload
          maxCount={1}
          listType="picture-card"
          beforeUpload={(file, fileList) => {
            form.setFieldValue("document", file);
            return false;
          }}
        >
          <div>
            <UploadOutlined />
            <div style={{ marginTop: 8 }}>Добавить</div>
          </div>
        </Upload>
      </Item>
    </Space>

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


  const oneDocument = (
<>
  {codeItem}
  {titleItem}
  {revisionItem}
  {descriptionItem}
  {fileItem}
</>
  )


    const manyDocuments = (
      <>
        {descriptorItem}
        {filesItem}
      </>
    )



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
      {switchItem}
      {
        multiple ? manyDocuments : oneDocument
      }



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