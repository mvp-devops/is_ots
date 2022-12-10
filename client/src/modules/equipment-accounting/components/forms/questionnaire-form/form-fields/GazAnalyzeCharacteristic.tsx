import React, {FC, useState} from 'react';
import {
  Checkbox,
  Col,
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


const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: "text-secondary text-center"
  }
}

const GazAnalyzeCharacteristic = () => {

  const warmingUpFormField = (
    <Item
      label={<Text type="secondary">Предел времени прогрева газоанализатора, минут (не более)</Text>}
      name={"warmingUp"}
      initialValue={1}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите время реагирования, Т0-9, сек. (не более)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 120}}
      />
    </Item>
  )

  const responseTimeFormField = (
    <Item
      label={<Text type="secondary">Время установления показаний Т0,9 ном., сек. (не более)</Text>}
      name={"responseTime"}
      initialValue={1}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите время установления показаний`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 120}}
      />
    </Item>
  )

  const lowerThresholdFormField = (
    <Item
      label={<Text type="secondary">Выходное реле «Нижний порог», % НКПР</Text>}
      name={"lowerThreshold"}
      initialValue={10}
      className="ms-2 mb-0 d-flex align-content-center-center"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите «Верхний порог»`,
        }
      ]}
    >
      <Radio.Group >
        {[10,20].map((item, index) => {
          return (
            <Radio key={index} value={item} className="text-secondary">{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  const upperThresholdFormField = (
    <Item
      label={<Text type="secondary">Выходное реле «Верхний порог», % НКПР</Text>}
      name={"upperThreshold"}
      initialValue={30}
      className="ms-2 mb-0 d-flex align-content-center-center"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите «Нижний порог»`,
        }
      ]}
    >
      <Radio.Group >
        {[30,40,50].map((item, index) => {
          return (
            <Radio key={index} value={item} className="text-secondary">{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  const faultFormField = (
    <Item
      label={<Text type="secondary">Выходное реле «Неисправность»</Text>}
      name={"fault"}
      className="ms-2 mb-0"
      valuePropName="checked"
    >
      <Checkbox />
    </Item>
  );

  const registrationEventsFormField = (
    <Item
      label={<Text type="secondary">Регистрация событий в энергонезависимой памяти</Text>}
      name={"registrationEvents"}
      className="ms-2 mb-0"
      valuePropName="checked"
    >
      <Checkbox />
    </Item>
  );


  //:
  const adjustmentEventsFormField = (
    <Item
      label={<Text type="secondary">Настройка электроники при замене сенсора</Text>}
      name={"adjustment"}
      className="ms-2 mb-0"
      valuePropName="checked"
    >
      <Checkbox />
    </Item>
  );

  return (
      <Space direction={"vertical"} style={{height: 278, marginLeft: 0}}>
        <Row style={{ marginBottom: 0}} >
          {warmingUpFormField}
        </Row>
        <Row style={{marginLeft: 32, marginBottom: 0}} >
          {responseTimeFormField}
        </Row>
        <Row style={{marginLeft: 132, marginBottom: 0}} >
          {lowerThresholdFormField}
        </Row>
        <Row style={{marginLeft: 132, marginBottom: 0}} >
          {upperThresholdFormField}
        </Row>
        <Row style={{marginLeft: 188, marginBottom: 0}} >
          {faultFormField}
        </Row>
        <Row style={{marginLeft: 70, marginBottom: 0}}>
          {registrationEventsFormField}
        </Row>
        <Row style={{marginLeft: 116, marginBottom: 0}}>
          {adjustmentEventsFormField}
        </Row>
      </Space>
    )
};

export default GazAnalyzeCharacteristic;