import React, {FC, useEffect, useState} from 'react';
import {DatePicker, Divider, Form, Input, Radio, Select, SelectProps, Space, Typography, Upload} from "antd";
import {NotFoundComponent} from "../../../../../components";
import {getAllItems} from "../../../../regulatory-reference-information";
import {UploadOutlined} from "@ant-design/icons";
import {metrologyDocumentType, metrologyStatus, sgroei} from "./equipment-form.consts";
import locale from "antd/es/date-picker/locale/ru_RU";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;


interface MetrologyFormItemsProps {
  data?: any;
  form: any
}


//   fromDate: values.fromDate,
//   toDate: values.toDate,

const dateFormat = "DD.MM.YYYY"


const selectProps: SelectProps = {
  size: "small",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) => (option!.children as unknown as string)?.toUpperCase()?.includes(input?.toUpperCase())
}

const MetrologyFormItems: FC<MetrologyFormItemsProps> = ({data, form}) => {

  const [counterpartyId, setCounterpartyId] = useState(null);
  const [counterpartyList, setCounterpartyList] = useState([]);

  useEffect(() => {getAllItems("counterparty").then((data) => {setCounterpartyList(data)})}, []);

  const sgroeiFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>СГРОЕИ</Text>}
      name="sgroei"
      initialValue={data?.sgroei}
      rules={[{required: true, message: "Пожалуйста, выберите СГРОЕИ"}]}
    >
      <Select
        {...selectProps}
      >
        {sgroei.map(({id, title}) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
    </Item>
  )

  const minFormField = (
    <Item
      className="mb-0"
      label={<Text>мин.</Text>}
      name="min"
      initialValue={data?.min}
      rules={[{required: true, message: "Пожалуйста, введите значение"}]}
    >
      <Input
        size="small"
        type="number"
        style={{maxWidth: 100}}
      />
    </Item>
  );

  const maxFormField = (
    <Item
      className="mb-0"
      label={<Text>макс.</Text>}
      name="max"
      initialValue={data?.max}
      rules={[{required: true, message: "Пожалуйста, введите значение"}]}
    >
      <Input
        size="small"
        type="number"
        style={{maxWidth: 100}}
      />
    </Item>
  );

  const rangeFormField = (
    <Item
      className="mb-0"
      label={<Text>Ед. изм.</Text>}
      name="range"
      initialValue={data?.range}
      rules={[{required: true, message: "Пожалуйста, введите значение"}]}
    >
      <Input
        size="small"
        style={{maxWidth: 100}}
      />
    </Item>
  );

  const accuracyFormField = (
    <Item

      className="mb-0"
      label={<Text>Погрешность/класс точности</Text>}
      name="accuracy"
      initialValue={data?.accuracy}
      rules={[{required: true, message: "Пожалуйста, введите значение"}]}
    >
      <Input
        size="small"
        style={{maxWidth: 100, marginLeft: 74}}
      />
    </Item>
  );

  const mpiFormField = (
    <Item

      className="mb-0"
      label={<Text>МПИ, мес.</Text>}
      name="mpi"
      initialValue={data?.mpi}
      rules={[{required: true, message: "Пожалуйста, введите МПИ"}]}
    >
      <Input
        size="small"
        type="number"
        style={{maxWidth: 100}}
      />
    </Item>
  );

  const metrologyTypeField = (
    <Item

      className="mb-0"
      label={<Text>Вид работ</Text>}
      name="metrologyType"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите вид работ`,
        }
      ]}
    >
      <Radio.Group>
        {["Калибровка", "Поверка"].map((item, index) => {
          return (
            <Radio key={index} value={item}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  const documentTypeField = (
    <Item

      className="mb-0"
      label={<Text>Вид документа</Text>}
      name="documentType"
    >
      <Select
        {...selectProps}
        style={{width: 210}}
      >
        {metrologyDocumentType.map(({id, title}) => (
          <Option key={id} value={title}>
            {title}
          </Option>
        ))}
      </Select>
    </Item>
  );

  const fromDateFormField = (<Item
    className="mb-0"
    label={<Text>Дата поверки</Text>}
    name="fromDate"
    initialValue={data?.fromDate}
    valuePropName="dateString"
  >
    <DatePicker
      format={dateFormat}
      onChange={(date, dateString) =>
        form.setFieldValue("fromDate", dateString)
      }
    />
  </Item>
  );

  const toDateFormField = (<Item
      className="mb-0"
      label={<Text>Дата след. поверки</Text>}
      name="toDate"
      initialValue={data?.toDate}
      valuePropName="dateString"
    >
      <DatePicker
        format={dateFormat}
        onChange={(date, dateString) =>
          form.setFieldValue("toDate", dateString) }
      />
    </Item>
  );

  const documentNumberFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>№ документа</Text>}
      name="documentNumber"
      initialValue={data?.documentNumber}
    >
      <Input
        size="small"
      />
    </Item>
  );

  const grsiFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>№ ГРСИ</Text>}
      name="grsi"
      initialValue={data?.grsi}
    >
      <Input
        size="small"
      />
    </Item>
  );

  const verificationProcedureFormField = (
    <Item

      className="mb-0"
      label={<Text>Методика поверки</Text>}
      name="verificationProcedure"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("verificationProcedure", file);
          return false;
        }}
        onRemove={(file) => {
          form.setFieldValue("verificationProcedure", null);
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
          >
            Документ
          </div>
        </div>
      </Upload>
    </Item>
  );

  const typeApprovalCertificateFormField = (
    <Item

      className="mb-0"
      label={<Text>Описание типа СИ</Text>}
      name="typeApprovalCertificate"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("typeApprovalCertificate", file);
          return false;
        }}
        onRemove={(file) => {
          form.setFieldValue("typeApprovalCertificate", null);
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
          >
            Документ
          </div>
        </div>
      </Upload>
    </Item>
  );

  const documentFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Документ</Text>}
      name="document"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("document", file);
          return false;
        }}
        onRemove={(file) => {
          form.setFieldValue("document", null);
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
          >
            Документ
          </div>
        </div>
      </Upload>
    </Item>
  );

  const counterpartyFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Организация</Text>}
      name="counterpartyId"
      initialValue={data?.counterpartyId}
    >
      <Select
        {...selectProps}
        onChange={(value) => setCounterpartyId(value)}
      >
        <Option key={"NEW"} value={"NEW"} className="text-success">
          + Добавить новую организацию
        </Option>
        {counterpartyList.map(({id, title}) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
    </Item>
  )

  const arshinFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>ФГИС «АРШИН»</Text>}
      name="arshin"
      initialValue={data?.status}
    >
     <Input size="small"/>
    </Item>
  )

  const statusFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Статус</Text>}
      name="status"
      initialValue={data?.status}
    >
      <Select
        {...selectProps}
      >
        {metrologyStatus.map(({id, title}) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
    </Item>
  )




  const render = (
    <Space direction="horizontal" className="d-flex justify-content-between">
      <Space direction="vertical" className="border p-1" style={{width: 800}}>
        {sgroeiFormField}
        <Space
        className="d-flex justify-content-between"
          style={{marginLeft: 80}}>
          Диапазон измерений:
          {minFormField}
          {maxFormField}
          {rangeFormField}
        </Space>
        <Space
        className="d-flex justify-content-between"
          style={{marginLeft: 16}}>
          {accuracyFormField}
          {mpiFormField}
        </Space>


        <Space direction="vertical" className="d-flex border p-1">
          <Divider className="m-0">Сведения о поверке</Divider>
    <Space
      className="d-flex justify-content-between"
      style={{marginLeft: 140}}>
      {metrologyTypeField}
      {documentTypeField}
    </Space>
          <Space
            className="d-flex justify-content-between"
            style={{marginLeft: 128}}
          >
            {fromDateFormField}
            {toDateFormField}
          </Space>
          {counterpartyFormField}
          {documentNumberFormField}
          {documentFormField}

        </Space>
        <Space direction="vertical" className="d-flex border p-1">
          <Divider className="m-0">Сведения о СИ</Divider>

          {grsiFormField}
          {arshinFormField}
 <Space className="d-flex justify-content-between" style={{marginLeft: 92}}>
   {verificationProcedureFormField}
   {typeApprovalCertificateFormField}
 </Space>

        </Space>
        {statusFormField}
      </Space>
    </Space>
  )


  return render
};

export default MetrologyFormItems;