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

  const [hart, setHart] = useState(false);
  const [heatingValue, setHeatingValue] = useState("Не предусмотрено");

  const toggleCheckBox = (e: CheckboxChangeEvent, setValue) => {
    setValue(!e.target.checked);
  };

  const {tag, fda, accuracy, parameter, subUnit, title, mpi, lifeTime} = data

  //FIXME: получать с сервера
  const subUnitsList = [];
  const fdaList = [];
  const facilityTypesList = []

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





  /** Тип присоединения к тех. процессу */
    //FIXME: переделать в radio-buttons-group?
  const connectionTypeFormField = (
      <Item
        labelCol={{span: 10}}
        wrapperCol={{span: 14}}
        className="ms-2 mb-0"
        // style={{width: 256}}
        {...itemProps("Тип присоединения к тех. процессу", "connectionType")}
      >
        <Select
          {...selectProps}
          onChange={(value) => onConnectionTypeChange(value)}
        >
          {connectionType.map(({id, title, value}) => {
            return (
              <Option key={id} title={title} value={value} className="text-secondary">
                {title}
              </Option>
            );
          })}
        </Select>
      </Item>
    );

  /** Соединение с тех. процессом
   * Список связан с полем connectionType
   */
  const connectionFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Соединение с тех. процессом", "connection")}
    >
      <Select
        {...selectProps}
        onChange={(value) => onConnectionTypeChange(value)}
      >
        {connection.filter(item => item.connectionTypeId === connectionTypeId).map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );







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



  /** Предел допускаемой основной приведенной погрешности, %
   * Если ОЛ формируется по существующее единице оборудования данные получены от сервера и поле нередактируемо
   * Если формируется новый ОЛ - ручной ввод
   */
  const accuracyFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={accuracy}
      // style={{width: 256}}
      {...itemProps("мин.", "accuracy")}
    >
      <Input
        {...inputProps("number")}
        disabled={!!accuracy}
      />
    </Item>
  );







  /** Штамп заводской калибровки */
  const calibrationStampFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Штамп заводской калибровки", "calibrationStamp")}
    >
      <Checkbox />
    </Item>
  );

  /** Межповерочный интервал, мес. */
  const mpiFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={mpi}
      // style={{width: 256}}
      {...itemProps("Межповерочный интервал, мес.", "mpi")}
    >
      <Input
        {...inputProps("number")}
      />
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



  /** Блок настроек принадлежностей */
  /** Кабельный ввод */
  const cableEntryFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Кабельный ввод", "cableEntry")}
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
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={"Не предусмотрено"}
      // style={{width: 256}}
      {...itemProps("Заглушка резервного кабельного ввода", "reserveCableEntryStub")}
    >
      <Radio.Group>
        {reserveCableEntryStub.map((item, index) => {
          return (
            <Radio key={index} value={item}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Обогрев */
  const heatingFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={"Не предусмотрено"}
      // style={{width: 256}}
      {...itemProps("Степень безопасности SIL", "heating")}
    >
      <Radio.Group onChange={(e) => {
        setHeatingValue(e.target.value)
      } }>
        {heating.map((item, index) => {
          return (
            <Radio key={index} value={item}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Если выбран термочехол */
  const thermCaseFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={"С электрообогревом"}
      // style={{width: 256}}
      {...itemProps("Термочехол", "thermCase")}
    >
      <Radio.Group>
        {thermCase.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value}>{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Если выбран термобокс */
  const thermBoxFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      initialValue={"С электрообогревом"}
      // style={{width: 256}}
      {...itemProps("Термобокс", "thermBox")}
    >
      <Radio.Group>
        {thermBox.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value}>{title}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  /** Монтажный кронштейн */
  const mountingBracketFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("Монтажный кронштейн", "mountingBracket")}
    >
      <Radio.Group>
        {mountingBracket.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value}>{title}</Radio>
          );
        })}
      </Radio.Group>
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