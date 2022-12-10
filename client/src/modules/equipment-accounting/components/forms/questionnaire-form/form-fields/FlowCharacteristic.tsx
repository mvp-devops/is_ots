import {Checkbox, Form, Input, InputProps, Row, Space, Typography} from "antd";
import React, {useState} from "react";
import {FacilityType} from "../questionnaire.consts";

const {Text} = Typography;
const {Item} = Form;

const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: "text-secondary text-center"
  }
}

const FlowCharacteristic = () => {
  const [particulateMatter, setParticulateMatter] = useState(false);

  /** Динамическая вязкость среды в рабочих условиях, сПз */
  const viscosityFormField = (
    <Item
      initialValue={0}
      className="ms-2 mb-0"
      label={<Text type="secondary" >{"Динамическая вязкость среды в рабочих условиях, сПз"}
      </Text>}
      name={"viscosity_1"}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите динамическую вязкость`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 94}}
      />
    </Item>
  )

  const densityFormField = (
    <Item
      initialValue={997}
      name={"density_1"}
      label={<Text type="secondary">Плотность среды, кг/м³</Text>}
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

  const particulateMatterFormField = (
    <Item
      label={<Text type="secondary">Присутствие твердых частиц</Text>}
      name={"particulateMatter"}
      valuePropName="checked"
      initialValue={particulateMatter}
      className="ms-2 mb-0"
    >
      <Checkbox style={{marginLeft: 30}} checked={particulateMatter} onChange={(e) => setParticulateMatter(e.target.checked)}/>
    </Item>
  );

  const conductivityFormField = (
    <Item
      initialValue={0}
      name={"conductivity"}
      label={<Text type="secondary">Электропроводность среды, См</Text>}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите электропроводность среды)`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 95}}
      />
    </Item>
  )

  const corrosiveImpuritiesFormField = (
    <Item
      initialValue={0}
      name={"corrosiveImpurities"}
      label={<Text type="secondary">Коррозионные примеси, %</Text>}
      className="ms-2 mb-0"
    >
      <Input
        {...inputProps("number")}
        style={{width: 95}}
      />
    </Item>
  )

  return (
    <Space direction="vertical" >
      <Row style={{marginLeft: 174}}>
        {viscosityFormField}
      </Row>
    <Row style={{marginLeft: 380}}>
      {densityFormField}
    </Row>
      <Row style={{marginLeft: 326}}>
        {conductivityFormField}
      </Row>
      <Row style={{marginLeft: 354}}>
        {corrosiveImpuritiesFormField}
      </Row>
      <Row style={{marginLeft: 346}}>
        {particulateMatterFormField}
      </Row>
    </Space>
  );
};

export default FlowCharacteristic;