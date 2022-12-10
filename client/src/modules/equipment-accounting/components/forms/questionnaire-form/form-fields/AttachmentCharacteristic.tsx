import React, {FC, useState} from 'react';
import {Checkbox, Form, InputProps, Radio, Row, Select, SelectProps, Typography} from "antd";
import {NotFoundComponent} from "../../../../../../components";
import {
  cableEntry, FacilityType,
  heating,
  mountingBracket,
  reserveCableEntryStub,
  thermBox,
  thermCase
} from "../questionnaire.consts";

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


interface AttachmentCharacteristicProps {
  facilityType: string;
}

const AttachmentCharacteristic:FC<AttachmentCharacteristicProps> = ({facilityType}) => {
  const [heatingValue, setHeatingValue] = useState("Не предусмотрено");

  /** Блок настроек принадлежностей */
  /** Кабельный ввод */
  const cableEntryFormField = (
    <Item
style={{width: 648}}
      name={"cableEntry"}
      className="ms-2 mb-0"
      label={<Text type="secondary">Кабельный ввод</Text>}
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип кабельного ввода`,
        }
      ]}
    >
      <Select
        {...selectProps}
      >
        {cableEntry.map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Заглушка резервного кабельного ввода */
  const reserveCableEntryStubFormField = (
    <Item

      initialValue={"Не предусмотрено"}
      name={"reserveCableEntryStub"}
      className="ms-2 mb-0"
      label={<Text type="secondary">Заглушка резервного кабельного ввода</Text>}
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип заглушки резервного кабельного ввода`,
        }
      ]}
    >
      <Radio.Group>
        {reserveCableEntryStub.map((item, index) => {
          return (
            <Radio key={index} value={item} className={"text-secondary"}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Обогрев */
  const heatingFormField = (
    <Item
      initialValue={"Не предусмотрено"}
      name={"heating"}
      className="ms-2 mb-0"
      label={<Text type="secondary">{facilityType === FacilityType.GAZ_ANALYZE ? "Подогрев оптики" : "Электрообогрев"}</Text>}

      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип электрообогрева`,
        }
      ]}

    >
      <Radio.Group onChange={(e) => setHeatingValue(e.target.value)}>
        {(facilityType !== FacilityType.GAZ_ANALYZE ? heating.slice(0,3) : heating.slice(3, 5)).map((item, index) => {
          return (
            <Radio key={index} value={item} className={"text-secondary"}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Если выбран термочехол */
  const thermCaseFormField = (
    <Item
      name={"thermCase"}
      className="ms-2 mb-0"
      initialValue={"С электрообогревом"}
      label={<Text type="secondary">Тип термочехла</Text>}

      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип термочехла`,
        }
      ]}
    >
      <Radio.Group>
        {thermCase.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value} className={"text-secondary"}>{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Если выбран термобокс */
  const thermBoxFormField = (
    <Item
      name={"thermBox"}
      className="ms-2 mb-0"
      initialValue={"С электрообогревом"}
      label={<Text type="secondary">Тип термобокса</Text>}

      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип термобокса`,
        }
      ]}
    >
      <Radio.Group>
        {thermBox.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value} className={"text-secondary"}>{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Монтажный кронштейн */
  const mountingBracketFormField = (
    <Item
      label={<Text type="secondary">Монтажный кронштейн</Text>}
      name={"mountingBracket"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Radio.Group>
        {mountingBracket.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value} className={"text-secondary"}>{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  const flangesFormField = (
    <Item
      label={<Text type="secondary">Ответные фланцы, вкл. прокладки, крепежи и болты</Text>}
      name={"flanges"}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  //Пылезащита, брызгозащита, фильтр по влаге
  const dustProofFormField = (
    <Item
      label={<Text type="secondary">Пылезащита, брызгозащита, фильтр по влаге</Text>}
      name={"dustProof"}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  return (
    <>
      <Row style={{ marginBottom: 10}}>
        {cableEntryFormField}
      </Row>
      <Row style={{marginLeft: 100, marginBottom: 10}}>
        {reserveCableEntryStubFormField}
      </Row>
      {facilityType !== FacilityType.FLOW && facilityType !== FacilityType.GAZ_ANALYZE &&   <Row style={{marginLeft: 200, marginBottom: 10}}>{mountingBracketFormField}</Row>}
      {facilityType === FacilityType.FLOW && <Row style={{marginLeft: 18, marginBottom: 10}}>{flangesFormField}</Row>}
      {facilityType === FacilityType.GAZ_ANALYZE && <Row style={{marginLeft: 66, marginBottom: 10}}>{dustProofFormField}</Row>}
      {
        facilityType !== FacilityType.GAZ_ANALYZE ? (
          <Row style={{marginLeft: 250, marginBottom: 10}}>
            {heatingFormField}
          </Row>
        ) : (
          <Row style={{marginLeft: 246, marginBottom: 10}}>
            {heatingFormField}
          </Row>
        )
      }

      <Row style={{marginLeft: 250, marginBottom: 10}}>
        {heatingValue === "Термочехол" ? thermCaseFormField : heatingValue === "Термобокс" ? thermBoxFormField : <></> }
      </Row>


   </>
  );
};

export default AttachmentCharacteristic;