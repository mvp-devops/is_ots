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
import {FacilityType, valveBlockType} from "../questionnaire.consts";

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

interface EnvorimentCaracteristicProps {
  facilityType: string
}

const EnvironmentCharacteristic:FC<EnvorimentCaracteristicProps> = ({facilityType}) => {
  const [valveBlock, setValveBlock] = useState(false);
  const [phasePartition, setPhasePartition] = useState(false);
  const [particulateMatter, setParticulateMatter] = useState(false);

  /** Температура измеряемой среды мин. (в диапазоне от -100 до 0) */
  const tempMeasureAreaMinFormField = (
    <Item

      className="ms-2 mb-0"
      style={{width: 150}}
      {...itemProps("мин.", "tempMeasureAreaMin")}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  /** Температура измеряемой среды макс. (в диапазоне от 0 до 1100) */
  const tempMeasureAreaMaxFormField = (
    <Item
      className="ms-2 mb-0"
      style={{width: 150}}
      {...itemProps("макс.", "tempMeasureAreaMax")}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  /** Давление измеряемой среды, МПа (изб.) макс. (в диапазоне от 0,1 до 40) */
  const pressureMeasureAreaMaxFormField = (
    <Item
      style={{width: 150}}
      className="ms-2 mb-0"
      // style={{width: 256}}
      {...itemProps("макс.", "pressureMeasureAreaMax")}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  /** Давление измеряемой среды, МПа (изб.) мин. (в диапазоне от -40 до -0,1) */
  const pressureMeasureAreaMinFormField = (
    <Item

      className="ms-2 mb-0"
      style={{width: 150}}
      {...itemProps("мин.", "pressureMeasureAreaMin")}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  const warmingUpFormField = (
    <Item
      initialValue={0}
      className="ms-2 mb-0"
      {...itemProps("Предел времени прогрева газоанализатора, минут (не более)", "warmingUp")}
    >
      <Input
        {...inputProps("number")}
        style={{width: 120}}
      />
    </Item>
  )

  const responseTimeFormField = (
    <Item
      className="ms-2 mb-0"
      {...itemProps("Время реагирования, Т0-9, сек. (не более)", "responseTime")}
    >
      <Input
        {...inputProps("number")}
        style={{width: 120}}
      />
    </Item>
  )

  const densityFormField = (
    <Item
      labelCol={{span: 20}}
      initialValue={997}
      className="ms-2 mb-0"
      label={<Text type="secondary">Плотность среды, кг/м³</Text>}
name={"density"}
rules={[
  {
    required: true,
    message:
      `Пожалуйста, введите плотность среды, кг/м³}`,
  }
]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 94, marginLeft: 14}}
      />
    </Item>
  )

  /** Кинематическая вязкость, при температуре 20°C, сСт */
  const viscosityFormField = (
    <Item
  labelCol={{span: 20}}
  initialValue={0}
  className="ms-2 mb-0"
  label={<Text type="secondary">{
    facilityType === FacilityType.LEVEL ? "Кинематическая вязкость, при температуре 20°C, сСт"
      : "Динамическая вязкость среды в рабочих условиях, сПз"}
    </Text>}
  name={"viscosity"}
  rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите кинематическую вязкость}`,
        }
        ]}
    >
    <Input
  {...inputProps("number")}
  style={{width: 94, marginLeft: 14}}
  />
</Item>
  )

  /** Клапанный блок */
  const valveBlockFormField = (
    <Item
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Клапанный блок", "valveBlock")}
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

      // style={{width: 256}}
      {...itemProps("Исполнение клапанного блока", "valveBlockType")}
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
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Клапан для стравливания воздуха", "airBleedValve")}
    >
      <Checkbox  disabled={!valveBlock}/>
    </Item>
  );

  const valveBlockSettings = (
    <>
      <Row style={{marginLeft: 146}} className="d-flex justify-content-between">
        <Col>
          {valveBlockFormField}
        </Col>
        <Col>
          {valveBlock && airBleedValveFormField}
        </Col>
      </Row>
      <Row style={{marginLeft: 14}} >
        {valveBlock && valveBlockTypeFormField}
      </Row>
    </>
  )

  const lowerThresholdFormField = (
    <Item
      className="ms-2 mb-0 d-flex align-content-center-center"

      // style={{width: 256}}
      {...itemProps("Выходное реле «Нижний порог», % НКПР", "lowerThreshold")}
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
      className="ms-2 mb-0 d-flex align-content-center-center"
      {...itemProps("Выходное реле «Верхний порог», % НКПР", "upperThreshold")}
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

  const phasePartitionControlFormField = (
    <Item
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Контроль раздела фаз", "phasePartition")}
    >
      <Checkbox checked={phasePartition} onChange={(e) => setPhasePartition(e.target.checked)}/>
    </Item>
  );

  const particulateMatterFormField = (
    <Item
      className="ms-2 mb-0"
      valuePropName="checked"
      // style={{width: 256}}
      {...itemProps("Присутствие твердых частиц", "particulateMatter")}
    >
      <Checkbox checked={particulateMatter} onChange={(e) => setParticulateMatter(e.target.checked)}/>
    </Item>
  );

  const environmentSettings = (
    <>
      <Row className="d-flex align-items-center justify-content-between">
        <Col className="text-secondary" span={10} style={{marginLeft: 10}}>
          {facilityType !== FacilityType.LEVEL ? <Text type={"secondary"}>Давление измеряемой среды (изб.), МПа:</Text> : <Text type={"secondary"} style={{marginLeft: 110}}>Рабочее давление, МПа:</Text>}
        </Col>
        <Col>
          {pressureMeasureAreaMinFormField}
        </Col>
        <Col>
          {pressureMeasureAreaMaxFormField}
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-between" >
        <Col className="text-secondary" span={9} style={{marginLeft: 42}}>
          Температура измеряемой среды, ℃:
        </Col>
        <Col>
          {tempMeasureAreaMinFormField}
        </Col>
        <Col>
          {tempMeasureAreaMaxFormField}
        </Col>
      </Row>
      {facilityType === FacilityType.FLOW ? particulateMatterFormField :
      facilityType === FacilityType.LEVEL ? phasePartitionControlFormField : <></>
      }
      {
        facilityType === FacilityType.PRESSURE ? valveBlock
          : facilityType === FacilityType.FLOW ? <>{densityFormField} {viscosityFormField}</>
          : facilityType === FacilityType.LEVEL ? !phasePartition ? <>{}{densityFormField} {viscosityFormField}</> : <>по две среды</>
            :  <>Для температуры</>
      }

    </>
  );

  const gazAnalyzeSettings = (
    <>
      {warmingUpFormField}
      <Row style={{marginLeft: 130}}>
      {responseTimeFormField}
      </Row>
<Row style={{marginLeft: 130}}>
  {lowerThresholdFormField}
  {upperThresholdFormField}
</Row>
    </>
  )

  return (
    <Space direction="vertical" className="d-flex border p-1" style={{width: 666}}>
      {
        facilityType === FacilityType.GAZ_ANALYZE ? gazAnalyzeSettings : environmentSettings
      }

    </Space>
  );
};

export default EnvironmentCharacteristic;