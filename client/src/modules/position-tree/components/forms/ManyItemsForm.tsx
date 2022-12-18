import React, {createRef, useState} from 'react';
import {Button, Divider, Form, notification, Space, Upload} from "antd";
import {FormInstance} from "antd/es/form";
import {useActions} from "../../../../hooks";
import {FormActions, setFilePath} from "../../../main";
import {UploadOutlined} from "@ant-design/icons";

import {getTemplate} from "../../api/position-tree.api"

const {Item} = Form;

const ManyItemsForm = () => {

  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {setFormVisible, createStructure} = useActions()

  const onReset = () => {
    formRef.current!.resetFields();
  };


  const onFinish = (values: any) => {
    createStructure(values.descriptor)
    setFormVisible(false);
    onReset();
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "Ошибка",
      description: "Ошибка ввода данных. Проверьте все поля формы",
    });
  };

  return (
    <div>
      <Form
        layout="horizontal"
        ref={formRef}
        form={form}
        name="create-position-tree-items-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        autoComplete="on"
      >
        <Space direction={"vertical"} className="d-flex justify-content-end" >
          <Item
            name="descriptor"
            valuePropName="file"
            getValueFromEvent={(e) => e.file}
            // style={{width: 200}}
            className="mb-0 d-flex justify-content-center"
            rules={[
              {
                required: true,
                message: "Пожалуйста, выберите файл-шаблон загрузки",
              }
            ]}
          >
            <Upload
              maxCount={1}
              style={{width: 200}}
              listType="picture-card"
              beforeUpload={(file, fileList) => {
                form.setFieldValue("descriptor", file);
                return false;
              }}
            >
              <div >
                <UploadOutlined />
                <div
                  style={{marginTop: 8}}
                >Шаблон
                </div>
              </div>
            </Upload>
          </Item>
<Item className="mb-0 d-flex justify-content-center">
  <Button  onClick={() => getTemplate()} >Скачать шаблон</Button>
</Item>
        </Space>
        <Divider/>
        <Space className="d-flex justify-content-end">

          <Item className={"mb-0"}>
            <Button type="primary" htmlType="submit">
              Загрузить
            </Button>
          </Item>
          <Item className={"mb-0"}>
            <Button htmlType="reset">
              Очистить
            </Button>
          </Item>
        </Space>
      </Form>

    </div>
  );
};

export default ManyItemsForm;