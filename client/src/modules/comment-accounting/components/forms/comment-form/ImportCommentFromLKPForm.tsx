
import React, {createRef, useState} from 'react';
import {Button, Divider, Form, notification, Space, Upload} from "antd";
import {FormInstance} from "antd/es/form";
import {UploadOutlined} from "@ant-design/icons";
import {useActions} from "../../../../../hooks";
import {uploadCommentsFromLkp} from "../../../store/comment-accounting.action-creators";


const {Item} = Form;

const ImportCommentFromLKPForm = () => {

  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {uploadCommentsFromLkp, setFormVisible} = useActions()

  const onReset = () => {
    formRef.current!.resetFields();
  };


  const onFinish = (values: any) => {
    uploadCommentsFromLkp(values)
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
        name="IMPORT_COMMENTS_FROM_LKP"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        autoComplete="on"
      >
        <Space direction={"vertical"} className="d-flex justify-content-center" >
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
                <UploadOutlined className="text-secondary"/>
                <div
                  style={{marginTop: 8}}
                  className="text-secondary"
                >Загрузить ЛКП
                </div>
              </div>
            </Upload>
          </Item>
          {/*<Item className="mb-0 d-flex justify-content-center">*/}
          {/*  <Button  onClick={() => getTemplate()} className={"text-secondary"}>Скачать шаблон</Button>*/}
          {/*</Item>*/}
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

export default ImportCommentFromLKPForm;