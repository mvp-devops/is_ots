import React, {FC} from 'react';
import {Form, FormItemProps, Input, InputProps, Radio, Select, SelectProps, Space, Typography} from "antd";
import {NotFoundComponent} from "../../../../../../components";
import {explosionType, mtbf, protection, safety} from "../questionnaire.consts";

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

const itemProps = (title: string, name: string): FormItemProps => {
  return {
    label: <Text type="secondary">{title}</Text>,
    name,
    rules: [
      {
        required: true,
        message:
          `Пожалуйста, выберите ${title.toLowerCase()}`,
      }
    ]
  }
}
const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: "text-secondary text-center"
  }
}

interface PerformanceCharacteristicProps {
  lifeTime: number;
}

const PerformanceCharacteristic:FC<PerformanceCharacteristicProps> = ({lifeTime}) => {

  /** Материал корпуса */
  const corpsMaterialFormField = (
    <Item
      labelCol={{span: 9}}
      wrapperCol={{span: 15}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Материал корпуса", "corpsMaterial")}
    >
      <Input
        {...inputProps()}
        className="text-start text-secondary"
      />
    </Item>
  );

  /** Степень защиты корпуса, не ниже */
  const protectionFormField = (
    <Item
      labelCol={{span: 9}}
      wrapperCol={{span: 15}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Степень защиты корпуса, не ниже", "protection")}
    >
      <Select
        {...selectProps}
      >
        {protection.map(({id, title}) => {
          return (
            <Option key={id} title={title} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Вид взрывозащиты */

  const explosionTypeFormField = (
    <Item
      labelCol={{span: 9}}
      wrapperCol={{span: 15}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Вид взрывозащиты", "explosionType")}
    >
      <Select
        {...selectProps}
      >
        {explosionType.map(({id, title}) => {
          return (
            <Option key={id} title={title} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Маркировка взрывозащиты */
  const explosionMarkFormField = (
    <Item
      labelCol={{span: 9}}
      wrapperCol={{span: 15}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Маркировка взрывозащиты", "explosionMark")}
    >
      <Input
        {...inputProps()}
        className="text-start text-secondary"
      />
    </Item>
  );

  /** Средний срок службы, мес. */
  const lifeTimeFormField = (
    <Item
      labelCol={{span: 16}}
      wrapperCol={{span: 8}}
      className="ms-2 mb-0"
      initialValue={lifeTime}
      // style={{width: 256}}
      {...itemProps("Средний срок службы, мес.", "lifeTime")}
    >
      <Input
        {...inputProps("number")}
        className="text-left text-secondary"
      />
    </Item>
  );

  /** Средняя наработка на отказ, тыс. часов (не менее) */
  const mtbfFormField = (
    <Item
      labelCol={{span: 16}}
      wrapperCol={{span: 8}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Средняя наработка на отказ, тыс. часов (не менее)", "mtbf")}
    >
      <Select
        {...selectProps}
      >
        {mtbf.map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="text-secondary">
              {item}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Степень безопасности SIL */
  const safetyFormField = (
    <Item
      labelCol={{span: 9}}
      wrapperCol={{span: 15}}
      className="ms-2 mb-0"
      initialValue={"Не предусмотрено"}
      // style={{width: 256}}
      {...itemProps("Степень безопасности SIL", "safety")}
    >
      <Radio.Group className="d-flex justify-content-around">
        {safety.map((item, index) => {
          return (
            <Radio key={index} value={item} className="text-secondary">{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );


  return (
    <Space direction="vertical" className="d-flex border p-1" style={{width: 666}}>
      {corpsMaterialFormField}
      {protectionFormField}
      {explosionTypeFormField}
      {explosionMarkFormField}
      {safetyFormField}
      {lifeTimeFormField}
      {mtbfFormField}
    </Space>
  );
};

export default PerformanceCharacteristic;