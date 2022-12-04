import React, {FC, useState} from 'react';
import {Checkbox, Form, FormItemProps, Input, InputProps, Radio, Select, SelectProps, Typography} from "antd";
import {NotFoundComponent} from "../../../../../components";
import {
  cableEntry,
  connection, connectionScheme,
  connectionType, explosionType, hartVersion, heating,
  measuredArea,
  measureType, mountingBracket, mtbf, outputSignal, protection,
  questionnaireType, reserveCableEntryStub, safety, settingRange, thermBox, thermCase,
  valveBlockType, voltage
} from "./questionnaire.consts";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {QuestionnaireFormData} from "./questionnaire.types";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;


interface QuestionnaireFormItemsProps {
  target?: string;
  data?: QuestionnaireFormData;
  onConnectionTypeChange?: (value) => void;
  connectionTypeId?: number
}

const QuestionnaireFormItems: FC<QuestionnaireFormItemsProps> = ({
                                                                   target,
                                                                   data,
                                                                   onConnectionTypeChange,
                                                                   connectionTypeId
                                                                 }) => {

  const [heatingValue, setHeatingValue] = useState("Не предусмотрено");




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

  /** Внутренняя диагностика */
  const internalDiagnosticFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Внутренняя диагностика", "internalDiagnostic")}
    >
      <Checkbox />
    </Item>
  );





  /** Самодиагностика */
  const selfDiagnosticStampFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Самодиагностика", "selfDiagnostic")}
    >
      <Checkbox />
    </Item>
  );

  /** Диагностика закупорки */
  const blockageDiagnosticFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Диагностика закупорки", "blockageDiagnostic")}
    >
      <Checkbox />
    </Item>
  );

  /** Диагностика целостности токовой петли */
  const currentLoopIntegrityDiagnosticFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Диагностика целостности токовой петли", "currentLoopIntegrityDiagnostic")}
    >
      <Checkbox />
    </Item>
  );





  /** Степень безопасности SIL */
  const safetyFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={"Не предусмотрено"}
      // style={{width: 256}}
      {...itemProps("Степень безопасности SIL", "safety")}
    >
      <Radio.Group>
        {safety.map((item, index) => {
          return (
            <Radio key={index} value={item}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );




   return (
    <div>

    </div>
  );
};

export default QuestionnaireFormItems;