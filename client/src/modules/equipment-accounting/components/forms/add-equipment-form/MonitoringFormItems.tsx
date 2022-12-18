import  {FC} from 'react';
import {DatePicker, Divider, Form,  Space, Typography, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";

const {Item} = Form;
const {Text} = Typography;

interface MonitoringFormItemsProps {
  data?: any;
  form: any
}

const dateFormat = "DD.MM.YYYY"

const MonitoringFormItems: FC<MonitoringFormItemsProps> = ({data, form}) => {

  const dateFormField = (title: string, name: string, initialValue: any) => (
    <Item
      labelCol={{ span: 4}}
      style={{marginLeft: 160}}
    className="mb-0"
    label={<Text>{title}</Text>}
    name={name}
    initialValue={initialValue}
    valuePropName="dateString"
  >
    <DatePicker
      format={dateFormat}
      onChange={(date, dateString) =>
        form.setFieldValue(name, dateString)
      }
    />
  </Item>
  );

  const documentFormField = (title: string, name: string, span: number) => (
    <Item
      labelCol={{ span }}
      className="mb-0"
      label={<Text>{title}</Text>}
      name={name}
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue(name, file);
          return false;
        }}
        onRemove={(file) => {
          form.setFieldValue(name, null);
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

  const render = (
    <Space direction="vertical">
      <Space direction="vertical" style={{ width: 1200}}  className="d-flex justify-content-end">
      {documentFormField("ФСА", "functionalDiagram", 14)}
      </Space>
      <Space direction="horizontal" className="d-flex justify-content-around" style={{width: 1200}}>
        <Space direction="vertical" className="border p-1" style={{width: 580}}>
          <Divider>Смонтировано:</Divider>
          {dateFormField("Дата", "mountDate", data?.mountDate)}
          {documentFormField("Ведомость смонтированного оборудования", "mountDocument", 14)}
        </Space>
        <Space direction="vertical" className="border p-1" style={{width: 580}}>
          <Divider>Подключено:</Divider>
          {dateFormField("Дата", "connectDate", data?.connectDate)}
          {documentFormField("Ведомость смонтированного оборудования", "connectDocument", 14)}
        </Space>
      </Space>
      <Space direction="horizontal" className="d-flex justify-content-around" style={{width: 1200}}>
      <Space direction="vertical" className="border p-1" style={{width: 580}}>
        <Divider>Проведены индивидуальные испытания (ПНР):</Divider>
        {dateFormField("Дата", "testDate", data?.testDate)}
        {documentFormField("Пролокол ИИ", "testDocument", 14)}
      </Space>
      <Space direction="vertical" className="border p-1" style={{width: 580}}>
        <Divider>Сигналы выведены на АРМ оператора:</Divider>
        {dateFormField("Дата", "awpDate", data?.awpDate)}
        {documentFormField("Пролокол проверки сигналов", "awpDocument", 14)}
      </Space>

      </Space>
      <Space direction="horizontal" className="d-flex justify-content-center" style={{width: 1200}}>
        <Space direction="vertical" className="border p-1" style={{width: 580}}>
          <Divider>Введено в эксплуатацию:</Divider>
          {dateFormField("Дата", "commissionDate", data?.commissionDate)}
          {documentFormField("Акт о вводе в эксплуатацию", "commissionDocument", 14)}
        </Space>
      </Space>
    </Space>

  )


  return render
};

export default MonitoringFormItems;