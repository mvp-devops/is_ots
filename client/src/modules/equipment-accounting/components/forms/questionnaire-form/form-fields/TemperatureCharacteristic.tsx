import {
  Checkbox,
  Form,
  FormItemProps,
  Input,
  InputProps,
  Radio,
  Row,
  Select,
  SelectProps,
  Space,
  Typography
} from "antd";
import {NotFoundComponent} from "../../../../../../components";
import {connectionScheme, settingRange, valveBlockType} from "../questionnaire.consts";
import React, {useState} from "react";

const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
  className: "text-secondary",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) =>
    (option!.children as unknown as string)
      ?.toUpperCase()
      ?.includes(input?.toUpperCase()),
}


const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: "text-secondary text-center"
  }
}

const TemperatureCharacteristic = () => {

  const [protectiveSleeve, setProtectiveSleeve] = useState(false);

  /** Схема подключения вторичного преобразователя */
  const connectionSchemeFormField = (
    <Item
      label={<Text type="secondary">Схема подключения втор. преобр.</Text>}
      name={"connectionScheme"}
      initialValue={"Не предусмотрено"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите схему подключения вторичного преобразователя`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{width: 370}}
      >
        {connectionScheme.map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="text-secondary">
              {item}
            </Option>
          );
        })}
      </Select>

    </Item>
  )

  //Длина чувствительного элемента / глубина погружения защитной гильзы, мм
  const sensorLengthFormField = (
    <Item
      label={<Text type="secondary">Длина чувствительного элемента/глубина погружения защитной гильзы, мм</Text>}
      name={"sensorLength"}
      initialValue={1}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите длину чувствительного элемента / глубина погружения защитной гильзы)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 92, marginLeft: 6}}
      />
    </Item>
  )

  //Длина чувствительного элемента / глубина погружения защитной гильзы, мм
  const sensorDiameterFormField = (
    <Item
      label={<Text type="secondary">Диаметр сенсора, мм</Text>}
      name={"sensorDiameter"}
      initialValue={100}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите диаметр сенсора)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 100, marginLeft: 1}}
      />
    </Item>
  )

  const protectiveSleeveFormField = (
    <Item
      label={<Text type="secondary">Защитная гильза</Text>}
      name={"protectiveSleeve"}
      initialValue={protectiveSleeve}
      className="ms-2 mb-0"
      valuePropName="checked"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите наличие защитной гильзы`,
        }
      ]}
    >
      <Checkbox checked={protectiveSleeve} onChange={(e) => setProtectiveSleeve(e.target.checked)}/>
    </Item>
  );

  //Материал защитной гильзы
  const protectiveSleeveMaterialFormField = (
    <Item
      label={<Text type="secondary">Материал защитной гильзы</Text>}
      name={"protectiveSleeveMaterial"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите материал защитной гильзы)`,
        }
      ]}
    >
      <Input
        {...inputProps()}
        style={{width: 370}}
      />
    </Item>
  )


  return (
<>
  <Row style={{marginLeft: 30}}>
    {sensorLengthFormField}
  </Row>
  <Row style={{marginLeft: 114}}>
    {sensorDiameterFormField}
  </Row>
  <Row style={{marginLeft: 30}} >
    {connectionSchemeFormField}
  </Row>

  <Row style={{marginLeft: 146}} >
    {protectiveSleeveFormField}
  </Row>
  <Row style={{marginLeft: 74}} >
    {protectiveSleeve && protectiveSleeveMaterialFormField}
  </Row>
  {/*<Row>*/}
  {/*  {controlCableConnectionFormField}*/}
  {/*</Row>*/}
</>
  );
};

export default TemperatureCharacteristic;