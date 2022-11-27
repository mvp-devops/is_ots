import {createRef, FC, useEffect, useLayoutEffect, useState} from 'react';
import {Button, Divider, Form, Input, notification, Select, Space, Switch, Typography, Upload} from "antd";
import {ExclamationCircleOutlined, UploadOutlined} from "@ant-design/icons";
import {FormInstance} from "antd/es/form";
import {DesignDocumentView, NSIView} from "../../../types"
import {useActions, useTypedSelector} from "../../../../../hooks";
import {FormActions, setFilePath} from "../../../../main";
import {getAllItems as getNsi}  from "../../../../regulatory-reference-information/api"

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;

interface DesignDocumentFormProps {
  editRow?: DesignDocumentView;
}

const flag = "design-document";

const DesignDocumentForm:FC<DesignDocumentFormProps> = ({editRow}) => {
  const [multiple, setMultiple] = useState(false);
  const [stagesList, setStagesList] = useState<NSIView[]>([]);
  const [sectionsList, setSectionsList] = useState<NSIView[]>([]);
  const [suppliersList, setSuppliersList] = useState<NSIView[]>([]);
  const [sectionFieldVisible, setSectionFieldVisible] = useState(false);
  const [supplierFieldVisible, setSupplierFieldVisible] = useState(false);

  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {setFormVisible, uploadDesignDocument, updateDesignDocument, setFolderPath} = useActions();

  const {target: parentTarget, currentItemFolderPath: parentFolder, currentItem: {id: parentId}} = useTypedSelector(state => state.positionTree);
  const {actionType: action, formVisible} = useTypedSelector(state => state.main);

  //FIXME: перенести переиспользуемый компонент в директорию общих компонентов
  const notFoundContent = (
    <Space className="d-flex justify-content-center p-3">
      <Text type="warning">
        <ExclamationCircleOutlined style={{fontSize: 20, marginBottom: 2}}/>
      </Text>
      <Text type="secondary" style={{fontSize: 12, marginBottom: 2}}>
        Нет данных для отображения. Уточнить поиск
      </Text>
    </Space>
  );

  useLayoutEffect(() => {
    setFolderPath(parentTarget, parentId);
    getNsi("stage").then((data) => {
      switch (parentTarget) {
        case "project": {
          setStagesList(data.slice(0, 4));
          break;
        }
        case "unit":
        case "sub-unit": {
          setStagesList([...data.slice(4, 8), ...data.slice(10)]);
          break;
        }
        default:
          break;
      }
    });
    getNsi("section").then((data) => setSectionsList(data));
    getNsi("counterparty").then((data) => setSuppliersList(data));
  }, []);



  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
    setMultiple(false);
  };

  const {id, supplierId, stageId, sectionId, code, title, revision, description} = editRow;


  const onFinish = (values: any) => {
    if(action === FormActions.EDIT_DOCUMENT) {
      updateDesignDocument({...values, flag}, id)
    } else {
      uploadDesignDocument({...values, flag});
    }
    setFormVisible(false);
    onReset();
  }

  useEffect(() => {onReset()}, [formVisible]);

  const onStageChange =(value: any) => {
    if(value === 5) {
      setSectionFieldVisible(false);
      setSupplierFieldVisible(true);
      form.setFieldValue("sectionId", 57);
    } else {
      setSectionFieldVisible(true);
      setSupplierFieldVisible(false);
    }
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

  const template = setFilePath("templates/template_descriptor_design_document.xlsx");

  const switchFormField = (
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

  const parentTargetFormField = (
    <Item
      name="parentTarget"
      initialValue={parentTarget}
      className="mb-0 d-none"
    >
      <Input
        size="small"
        className="text-secondary"
      />
    </Item>
  );

  const parentIdFormField = (
    <Item
      name="parentId"
      initialValue={parentId}
      className="mb-0 d-none"
    >
      <Input
        size="small"
        className="text-secondary"
      />
    </Item>
  );

  const parentFolderFormField = (
    <Item
      name="parentFolder"
      initialValue={parentFolder}
      className="mb-0 d-none"
    >
      <Input
        size="small"
        className="text-secondary"
      />
    </Item>
  );

  const parentFormField = (
    <Space direction="horizontal">
      {parentTargetFormField}
      {parentIdFormField}
      {parentFolderFormField}
    </Space>
  )

  const stageFormField = (
    <Item
      labelCol={{ span: 4}}
      className="mb-0 text-secondary"
      label={
        <Text type="secondary">Стадия проектирования</Text>
      }
      name="stageId"
      initialValue={stageId}
      rules={[
        {
          required: true,
          message:
            "Пожалуйста, выберите стадию проектирования",
        },
      ]}
    >
      <Select
        size={"small"}
        className={"text-secondary"}
        notFoundContent={notFoundContent}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            ?.toUpperCase()
            ?.includes(input?.toUpperCase())
        }
        onChange={(value) => onStageChange(value)}
      >
        {stagesList.map(({id, code, title}) => {
          const render = `${code}. ${title}`
          return (
            <Option key={id} title={render} value={id} className="text-secondary">
              {render}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const sectionFormField = (
    <Item
      labelCol={{ span: 4}}
      className="mb-0text-secondary"
      label={
        <Text type="secondary">Марка/раздел</Text>
      }
      name="sectionId"
      initialValue={sectionId}
      rules={[
        {
          required: true,
          message:
            "Пожалуйста, выберите маркуу/раздел",
        },
      ]}
    >
      <Select
        size={"small"}
        className={"text-secondary"}
        notFoundContent={notFoundContent}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            ?.toUpperCase()
            ?.includes(input?.toUpperCase())
        }
      >
        {sectionsList.map(({id, code, title}) => {
          const render = `${code}. ${title}`
          return (
            <Option key={id} title={title} value={id} className="text-secondary">
              {render}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const supplierFormField = (
    <Item
      labelCol={{ span: 4}}
      className="mb-0 text-secondary"
      label={
        <Text type="secondary">Контрагент</Text>
      }
      name="supplierId"
      initialValue={supplierId}
      rules={[
        {
          required: true,
          message:
            "Пожалуйста, выберите контрагента",
        },
      ]}
    >
      <Select
        size={"small"}
        className={"text-secondary"}
        notFoundContent={notFoundContent}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            ?.toUpperCase()
            ?.includes(input?.toUpperCase())
        }
      >
        {suppliersList.map(({id, title}) => {
          return (
            <Option key={id} title={title} value={id} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const stageSectionSupplierFormField = (
    <Space direction="vertical" className="w-100">
      {stageFormField}
      {sectionFieldVisible && sectionFormField}
      {supplierFieldVisible && supplierFormField}
    </Space>
  )

  const documentsFormField = (
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

  const descriptorFormField = (
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

  const documentFormField = (
    <Item
      name="document"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}

      rules={[
        {
          required: action === FormActions.ADD_DOCUMENT,
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

  const codeFormField = (
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

  const titleFormField = (
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

  const revisionFormField = (
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

  const descriptionFormField = (
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
             {titleFormField}
             {codeFormField}
             {revisionFormField}
         </Space>
         <Divider type="vertical" className="m-0"/>
         <Space direction="vertical" align="start">
           {descriptionFormField}
         </Space>
         <Divider type="vertical"/>
         <Space direction="vertical" align="start">
           {documentFormField}
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
  {descriptorFormField}
  <a href={template} className="mt-0">Скачать шаблон</a>
</Space>
      <Divider type="vertical"/>
      {documentsFormField}
    </Space>
  );

  const renderFields = (
    <Space direction="vertical" className="w-100">
      {action !== FormActions.EDIT_DOCUMENT && switchFormField}
      {stageSectionSupplierFormField}
      {
        multiple ? manyDocuments : oneDocument
      }
      {parentFormField}
    </Space>
  )

  return (
    <Form
      layout="horizontal"
      ref={formRef}
      form={form}
      name="document-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onReset={onReset}
      autoComplete="on"
      style={{width: 1060}}
    >
      {renderFields}

      <Space className="d-flex justify-content-end">
        <Item>
          <Button type="primary" htmlType="submit">
            {action === FormActions.EDIT_DOCUMENT ? "Редактировать" : "Добавить"}

          </Button>
        </Item>
        <Item>
          <Button htmlType="reset">
            {action === FormActions.EDIT_DOCUMENT ? "Сбросить" : "Очистить"}
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default DesignDocumentForm;