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
import PressureCharacteristic from "./PressureCharacteristic";
import GazAnalyzeCharacteristic from "./GazAnalyzeCharacteristic";
import TemperatureCharacteristic from "./TemperatureCharacteristic";
import FlowCharacteristic from "./FlowCharacteristic";
import LevelCharacteristic from "./LevelCharacteristic";

const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
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
    label: <Text>{title}</Text>,
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
    className: "text-center"
  }
}

interface EnvironmentCharacteristicProps {
  facilityType: string
}

const EnvironmentCharacteristic:FC<EnvironmentCharacteristicProps> = ({facilityType}) => {
  const [phasePartition, setPhasePartition] = useState(false);

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

  const environmentSettings = (
    <Space direction={"vertical"} style={{height: 280}}>
        <Row className="d-flex align-items-center justify-content-between">
          <Col  style={{marginLeft: 10}}>
            {facilityType !== FacilityType.LEVEL ? <Text >Давление измеряемой среды (изб.), МПа:</Text> : <Text style={{marginLeft: 110}}>Рабочее давление, МПа:</Text>}
          </Col>
          <Col >
            {pressureMeasureAreaMinFormField}
          </Col>
          <Col>
            {pressureMeasureAreaMaxFormField}
          </Col>
        </Row>

      {facilityType !== FacilityType.TEMPERATURE && (
        <Row className="d-flex align-items-center justify-content-between" >
        <Col  style={{marginLeft: 42}}>
          Температура измеряемой среды, ℃:
        </Col>
        <Col >
          {tempMeasureAreaMinFormField}
        </Col>
        <Col>
          {tempMeasureAreaMaxFormField}
        </Col>
      </Row>
      )}
      {
        facilityType === FacilityType.TEMPERATURE ? <TemperatureCharacteristic/>
          : facilityType === FacilityType.PRESSURE ? <PressureCharacteristic/>
          : facilityType === FacilityType.FLOW ? <FlowCharacteristic/> :
            facilityType === FacilityType.LEVEL ? <LevelCharacteristic/> : <></>
      }
    </Space>
  );


  return (
    <Space direction="vertical" className="d-flex border p-1" style={{width: 666}}>
      {
        facilityType === FacilityType.GAZ_ANALYZE ? <GazAnalyzeCharacteristic/> : environmentSettings
      }

    </Space>
  );
};

export default EnvironmentCharacteristic;