import {useState} from "react";
import {Checkbox, Form, FormItemProps,  Radio, Row,  Select,  SelectProps,  Typography} from "antd";
import {NotFoundComponent} from "../../../../../../components";
import {connectionScheme, settingRange, valveBlockType} from "../questionnaire.consts";

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


const PressureCharacteristic = () => {

  const [valveBlock, setValveBlock] = useState(false);


  /** Схема подключения вторичного преобразователя */
  const connectionSchemeFormField = (
    <Item
      label={<Text type="secondary">Схема подключения втор. преобр.</Text>}
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
            <Option key={index} title={item} value={item} className="text-secondary">
              {item}
            </Option>
          );
        })}
      </Select>

    </Item>
  )

  const settingRangeFormField = (
    <Item
      label={<Text type="secondary">Диапазон настройки</Text>}
      name={"settingRange"}
      className="ms-2 mb-0"
      valuePropName="checked"
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
            <Radio key={index} value={item} className="text-secondary" style={{width: 80}}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  /** Клапанный блок */
  const valveBlockFormField = (
    <Item
      label={<Text type="secondary">Клапанный блок</Text>}
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
      label={<Text type="secondary">Исполнение клапанного блока</Text>}
      name={"valveBlockType"}
    rules={[
      {
        required: true,
        message:
          `Пожалуйста, выберите исполнение клапанного блока`,
      }
    ]}
    >
      <Radio.Group disabled={!valveBlock} >
        {valveBlockType.map(({id, title, value}) => {
          return (
            <Radio key={id} value={value} className="text-secondary">{title}</Radio>
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
      label={<Text type="secondary">Клапан для стравливания воздуха</Text>}
      name={"airBleedValve"}
      className="ms-2 mb-0"
      valuePropName="checked"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите клапан для стравливания воздуха`,
        }
      ]}
    >
      <Checkbox  disabled={!valveBlock}/>
    </Item>
  );

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
    </>
  )



  return pressureSettings
};

export default PressureCharacteristic;