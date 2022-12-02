import {
  Checkbox, Col,
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
import {connectionScheme, FacilityType, settingRange, valveBlockType} from "../questionnaire.consts";
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

const LevelCharacteristic = () => {
  const [phasePartition, setPhasePartition] = useState(false);

  /** Кинематическая вязкость, при температуре 20°C, сСт */
  const viscosity1FormField = (
    <Item
      initialValue={0}
      className="ms-2 mb-0"
      label={<Text type="secondary" >{`Кинематическая вязкость, при температуре 20°C, сСт${phasePartition ? " (Среда 1)" : ""}`}
      </Text>}
      name={"viscosity_1"}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите кинематическую вязкость для среды 1`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 94}}
      />
    </Item>
  )
  const viscosity2FormField = (
    <Item
      initialValue={0}
      className="ms-2 mb-0"
      label={<Text type="secondary" >{`Кинематическая вязкость, при температуре 20°C, сСт (Среда 2)`}
      </Text>}
      name={"viscosity_2"}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите кинематическую вязкость для среды 2`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 94}}
      />
    </Item>
  )

  const density1FormField = (
    <Item
      initialValue={997}
      name={"density_1"}
      label={<Text type="secondary">{`Плотность среды${phasePartition ? " 1" : ""}, кг/м³`}</Text>}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите плотность среды)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 95}}
      />
    </Item>
  )

  const density2FormField = (
    <Item
      initialValue={997}
      name={"density_2"}
      label={<Text type="secondary">Плотность среды 2, кг/м³</Text>}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите плотность среды 2)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 95}}
      />
    </Item>
  )

  const phasePartitionControlFormField = (
    <Item
      label={<Text type="secondary">Контроль раздела фаз</Text>}
      name={"phasePartition"}
      initialValue={phasePartition}
      className="ms-2 mb-0"
      valuePropName="checked"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите наличие контроля раздела фаз`,
        }
      ]}
    >
      <Checkbox style={{marginLeft: 30}} checked={phasePartition} onChange={(e) => setPhasePartition(e.target.checked)}/>
    </Item>
  );


  return (
    <Space direction="vertical">
      <Row style={{marginLeft: 388}}>
        {phasePartitionControlFormField}
      </Row>
      {phasePartition ? (
<>
  <Row style={{marginLeft: 368}}>
  {density1FormField}
</Row>
  <Row style={{marginLeft: 368}}>
    {density2FormField}
  </Row>
  <Row style={{marginLeft: 124}}>
    {viscosity1FormField}
  </Row>
  <Row style={{marginLeft: 124}}>
    {viscosity2FormField}
  </Row>
</>
      ) : (
<>
  <Row style={{marginLeft: 378}}>
    {density1FormField}
  </Row>
  <Row style={{marginLeft: 188}}>
    {viscosity1FormField}
  </Row>
</>
      )
      }
    </Space>
  );
};

export default LevelCharacteristic;