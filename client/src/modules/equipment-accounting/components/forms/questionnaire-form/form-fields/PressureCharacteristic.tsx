import React, {useState} from "react";
import {Checkbox, Form, FormItemProps, Input, InputProps, Radio, Row, Select, SelectProps, Typography} from "antd";
import {NotFoundComponent} from "../../../../../../components";
import {connectionScheme, settingRange, valveBlockType} from "../questionnaire.consts";

const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
  className: "  ",
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
    className: "   text-center"
  }
}

const PressureCharacteristic = () => {

  const [valveBlock, setValveBlock] = useState(false);


  /** Схема подключения вторичного преобразователя */
  const connectionSchemeFormField = (
    <Item
      label={<Text   >Схема подключения втор. преобр.</Text>}
      name={connectionScheme}
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
            <Option key={index} title={item} value={item} className="  ">
              {item}
            </Option>
          );
        })}
      </Select>

    </Item>
  )

  const settingRangeFormField = (
    <Item
      label={<Text   >Диапазон настройки</Text>}
      name={"settingRange"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите диапазон настройки`,
        }
      ]}
    >
      <Radio.Group >
        {settingRange.map((item, index) => {
          return (
            <Radio key={index} value={item} className="  " style={{width: 80}}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  /** Клапанный блок */
  const valveBlockFormField = (
    <Item
      label={<Text   >Клапанный блок</Text>}
      name={"valveBlock"}
      initialValue={valveBlock}
      className="ms-2 mb-0"
      valuePropName="checked"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите наличие клапанного блока`,
        }
      ]}
    >
      <Checkbox checked={valveBlock} onChange={(e) => setValveBlock(e.target.checked)}/>
    </Item>
  );

  /** Исполнение клапанного блока
   * Если valveBlock === true
   */
  const valveBlockTypeFormField = (
    <Item
      labelCol={{span: 10}}
      className="ms-2 mb-0 d-flex align-content-center-center"
      label={<Text   >Исполнение клапанного блока</Text>}
      name={"valveBlockType"}
    rules={[
      {
        required: valveBlock,
        message:
          `Пожалуйста, выберите исполнение клапанного блока`,
      }
    ]}
    >
      <Radio.Group disabled={!valveBlock} >
        {valveBlockType.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value} className="  ">{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  /** Наличие клапана для стравливания воздуха
   * Если valveBlock === true
   */
  const airBleedValveFormField = (
    <Item
      label={<Text   >Клапан для стравливания воздуха</Text>}
      name={"airBleedValve"}
      className="ms-2 mb-0"
      valuePropName="checked"
      rules={[
        {
          required: valveBlock,
          message:
            `Пожалуйста, выберите клапан для стравливания воздуха`,
        }
      ]}
    >
      <Checkbox  disabled={!valveBlock}/>
    </Item>
  );

  const valveBlockCorpMaterialFormField  = (
    <Item
      className="ms-2 mb-0 d-flex align-content-center-center"
      label={<Text   >Материал клапанного блока</Text>}
      name={"valveBlockCorpMaterial"}
      rules={[
        {
          required: valveBlock,
          message:
            `Пожалуйста, введите материал клапанного блока`,
        }
      ]}
    >
      <Input
        {...inputProps()}
        className="text-left   "
        style={{width: 370}}
      />
    </Item>
  )

  const pressureSettings = (
    <>
      <Row style={{marginLeft: 30}}>
          {connectionSchemeFormField}
      </Row>
      <Row style={{marginLeft: 120}} >
        {settingRangeFormField}
      </Row>
      <Row style={{marginLeft: 148}}>
        {valveBlockFormField}
      </Row>
      <Row style={{marginLeft: 14}} >
        {valveBlock && valveBlockTypeFormField}
      </Row>
      <Row style={{marginLeft: 38}} >
        {valveBlock && airBleedValveFormField}
      </Row>
      <Row style={{marginLeft: 72}}>
        {valveBlock && valveBlockCorpMaterialFormField}
      </Row>
    </>
  )



  return pressureSettings
};

export default PressureCharacteristic;