import {createRef, FC, useEffect, useLayoutEffect, useState} from 'react';
import {Button, Divider, Form, Input, notification, Select, Space, Spin, Switch, Typography, Upload} from "antd";
import {ExclamationCircleOutlined, LoadingOutlined, UploadOutlined} from "@ant-design/icons";
import {FormInstance} from "antd/es/form";
import {useActions, useTypedSelector} from "../../../../../hooks";
import {FormActions, setFilePath} from "../../../../main";
import {getAllItems as getNsi}  from "../../../../regulatory-reference-information/api"
import {importDataFromSummaryListOfEquipment} from "../../../store/equipment-accounting.action-creators";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;


const ImportDataForm = () => {

  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {setFormVisible, importDataFromSummaryListOfEquipment} = useActions();

  const {target: parentTarget, currentItemFolderPath: parentFolderPath, currentItem: {id: parentId}} = useTypedSelector(state => state.positionTree);
  const {actionType: action, formVisible} = useTypedSelector(state => state.main);
  const {loading} = useTypedSelector(state => state.equipmentAccounting);



  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);


  const onFinish = (values: any) => {
    importDataFromSummaryListOfEquipment({parentTarget, parentId: +parentId, parentFolderPath, ...values})
   !loading && setFormVisible(false);
    onReset();
  }

  useEffect(() => {onReset()}, [formVisible]);


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

  const template = setFilePath("templates/template_summary_list_of_equipment.xlsx");



  const documentsFormField = (
    <Item
      name="documents"
      valuePropName="fileList"
      className="mb-0"
      getValueFromEvent={normalizingFileUpload}
      rules={[
        {
          required: true,
          message: "Выберите документы",
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
          <div style={{marginTop: 8}}>
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
      className="mb-0 text-center"
      rules={[
        {
          required: true,
          message: "Выберите шаблон загрузки",
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
          >Шаблон
          </div>
        </div>
      </Upload>
    </Item>
  );




  return (
    <Form
      layout="horizontal"
      ref={formRef}
      form={form}
      name="import-data-from-sloe"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onReset={onReset}
      autoComplete="on"
      style={{width: 1060}}
    >
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

      <Space className="d-flex justify-content-end">
        <Item>
          <Button type={loading ? "default" : "primary"} htmlType="submit" >
            {loading ?
              <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
                Загрузка данных</Spin> : "Импорт"}

          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default ImportDataForm;