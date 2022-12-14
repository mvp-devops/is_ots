import {createRef, FC, useState} from 'react';
import {Button, Divider, Form, Input, notification, Space, Switch, Typography, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {FormInstance} from "antd/es/form";
import {useActions} from "../../../../hooks";
import type {NormativeView} from "../../../../../../server/common/types/file-storage";
import {FormActions, setFilePath, setUrl} from "../../../main";
import {updateNormative} from "../../store/regulatory-reference-information.action-creators";


const {Item} = Form;
const {Text} = Typography

interface NormativeFormProps {
  editRow?: NormativeView;
  action: string;
}

const NormativeForm:FC<NormativeFormProps> = ({editRow, action}) => {
  const [multiple, setMultiple] = useState(false);
  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {setFormVisible, uploadNormative, updateNormative} = useActions()

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
    setMultiple(false);
  };

  const {id, code, title, revision, description} = editRow;

  const onFinish = (values: any) => {
    if(action === FormActions.EDIT_NORMATIVE) {
      updateNormative(values, id.toString())
    } else {
      uploadNormative(values);
    }
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

  const normalizingFileUpload = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const template = setFilePath("templates/template_descriptor_normative.xlsx");

  const switchItem = (
    <Space direction="horizontal" className="d-flex justify-content-end">
      <Item
        name="multiple"
        valuePropName="multiple"
        label={<Text type="secondary">Загрузить несколько</Text>}
        className="mb-0"
      >
        <Switch onChange={() => setMultiple(!multiple)}/>
      </Item>
    </Space>
  );

  const documentsItems = (
    <Item
      name="documents"
      valuePropName="fileList"
      className="mb-0"
      getValueFromEvent={normalizingFileUpload}
      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите документы",
        }
      ]}
    >
      <Upload
        listType="picture-card"
        multiple
        beforeUpload={(file, fileList) => {
          form.setFieldValue("documents", fileList);
          return false;
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
            className="text-secondary"
          >
            Документы
          </div>
        </div>
      </Upload>
    </Item>
  );

  const descriptorItem = (
    <Item
      name="descriptor"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
      style={{maxWidth: 100}}
      className="mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите файл-шаблон загрузки",
        }
      ]}
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
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
            className="text-secondary"
          >Шаблон
          </div>
        </div>
      </Upload>
    </Item>


  );

  const documentItem = (
    <Item
      name="document"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}

      rules={[
        {
          required: action === FormActions.ADD_NORMATIVE,
          message: "Пожалуйста, выберите документ",
        }
      ]}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("document", file);
          return false;
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
            className="text-secondary"
          >
            Документ
          </div>
        </div>
      </Upload>
    </Item>
  );

  const codeItem = (
    <Item
      labelCol={{ span: 10}}
      wrapperCol={{ span: 14 }}
      name="code"
      initialValue={code}
      label={<Text type="secondary">Шифр</Text>}
      className="mb-1"
      style={{marginLeft: -8}}
      rules={[
        {
          required: true,
          message: "Пожалуйста, заполните шифр документа",
        }
      ]}
    >
      <Input
        size="small"
        className="text-secondary"
        style={{width: 241}}
      />
    </Item>
  );

  const titleItem = (
    <Item
      labelCol={{ span: 8}}
      wrapperCol={{ span: 16 }}
      name="title"
      initialValue={title}
      label={<Text type="secondary">Наименование</Text>}
      className="mb-1"
      rules={[
        {
          required: true,
          message:
            "Пожалуйста, заполните наименование документа",
        },
      ]}
    >
      <Input.TextArea
        autoSize={{minRows: 4}}
        className="text-secondary"
        style={{width: 240}}
        placeholder="Наименование"
      />
    </Item>
  );

  const revisionItem = (
    <Item
      labelCol={{ span: 15}}
      wrapperCol={{ span: 9 }}
      initialValue={revision}
      name="revision"
      label={<Text type="secondary">Версия/ревизия</Text>}
      className="mb-1"
    >
      <Input
        size="small"
        type="number"
        className="text-secondary"
        style={{width: 80}}
      />
    </Item>
  );

  const descriptionItem = (
    <Item
      name="description"
      className="mb-1"
      initialValue={description}
    >

      <Input.TextArea
        autoSize={{minRows: 7.2, maxRows: 7.2}}
        className="text-secondary"
        style={{width: 400}}
        placeholder="Примечание"
      />
    </Item>
  );


  const oneDocument = (
       <Space direction="horizontal" align="center" className="d-flex border p-1 mb-2 justify-content-between">
         <Space direction="vertical" align="start">
             {titleItem}
             {codeItem}
             {revisionItem}
         </Space>
         <Divider type="vertical" className="m-0"/>
         <Space direction="vertical" align="start">
           {descriptionItem}
         </Space>
         <Divider type="vertical"/>
         <Space direction="vertical" align="start">
           {documentItem}
         </Space>
       </Space>
  )

  const manyDocuments = (
    <Space
      direction="horizontal"
      align="start"
      className="d-flex justify-content-between align-items-center border p-1 mb-2"
    >
<Space direction="vertical"  >
  {descriptorItem}
  <a href={template} className="mt-0">Скачать шаблон</a>
</Space>
      <Divider type="vertical"/>
      {documentsItems}
    </Space>
  )

  return (
    <Form
      layout="horizontal"
      ref={formRef}
      form={form}
      name="normative-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onReset={onReset}
      autoComplete="on"
      style={{width: 1060}}
    >
      {action !== FormActions.EDIT_NORMATIVE && switchItem}
      {
        multiple ? manyDocuments : oneDocument
      }

      <Space className="d-flex justify-content-end">
        <Item>
          <Button type="primary" htmlType="submit">
            {action === FormActions.EDIT_NORMATIVE ? "Редактировать" : "Добавить"}

          </Button>
        </Item>
        <Item>
          <Button htmlType="reset">
            {action === FormActions.EDIT_NORMATIVE ? "Сбросить" : "Очистить"}
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default NormativeForm;