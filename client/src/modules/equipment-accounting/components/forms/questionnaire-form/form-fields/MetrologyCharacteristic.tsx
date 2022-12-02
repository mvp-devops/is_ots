import {
  Checkbox, Col, Divider,
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
import {
  connectionScheme,
  FacilityType,
  hartVersion,
  sensorCalibration,
  settingRange,
  valveBlockType, verificationMethod, voltage
} from "../questionnaire.consts";
import React, {FC, useState} from "react";

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

interface MetrologyCharacteristicProps {
  facilityType: string;
  accuracy?: number
}

const MetrologyCharacteristic: FC<MetrologyCharacteristicProps> = ({facilityType, accuracy}) => {

  /** Предел допускаемой основной приведенной погрешности, %
   * Если ОЛ формируется по существующее единице оборудования данные получены от сервера и поле нередактируемо
   * Если формируется новый ОЛ - ручной ввод
   */
  const accuracyFormField = (
    <Item
      label={<Text type="secondary">Предел допускаемой основной приведенной погрешности, %</Text>}
      name={"accuracy"}
      initialValue={accuracy}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите предел допускаемой основной приведенной погрешности`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        disabled={!!accuracy}
      />
    </Item>
  );

  /** Предел относительной погрешности измерения нормирующего преобразователя, % */

  const relativeAccuracyFormField = (
    <Item
      label={<Text type="secondary">Предел относительной погрешности измерения нормирующего преобразователя, %</Text>}
      name={"relativeAccuracy"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите предел относительной погрешности измерения нормирующего преобразователя`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}

      />
    </Item>
  );

  //Предел допускаемой вариации выходного сигнала, в долях от пределов допускаемой основной
  const permissibleFormField = (
    <Item
      label={<Text type="secondary">Предел допускаемой вариации выходного сигнала</Text>}
      name={"permissible"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите предел допускаемой вариации выходного сигнала`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  //Предел допускаемой погрешности от изменения температуры окружающей среды от нормальной на каждые 10  ℃, в долях от пределов допускаемой основной погрешности

  const ambientPermissibleFormField = (
    <Item
      label={<Text type="secondary">Предел допускаемой погрешности от изменения температуры окружающей среды</Text>}
      name={"ambientPermissible"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите предел допускаемой погрешности от изменения температуры окружающей среды`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  )

  const sensorAccuracyFormField = (
    <Item
      label={<Text type="secondary">Класс точности сенсора</Text>}
      name={"sensorAccuracy"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, введите класс точности сенсора`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{width: 94}}
      >
        {["AA", "A", "B", "C"].map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="text-secondary">
              {item}
            </Option>
          );
        })}
      </Select>
    </Item>
  )

const sensorCalibrationFormField = (
  <Item
    label={<Text type="secondary">Градуировка сенсора</Text>}
    name={"sensorCalibration"}
    className="ms-2 mb-0"
    rules={[
      {
        required: true,
        message: `Пожалуйста, выберите градуировку сенсора`,
      }
    ]}
  >
    <Select
      {...selectProps}
      style={{width: 94}}
    >
      {sensorCalibration.map(({id, title, value}) => {
        return (
          <Option key={id} title={title} value={value} className="text-secondary">
            {title}
          </Option>
        );
      })}
    </Select>
  </Item>
)

  const verificationMethodFormField = (
    <Item
      label={<Text type="secondary">Метод поверки</Text>}
      name={"verificationMethod"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите метод поверки`,
        }
      ]}
    >
      <Radio.Group>
        {verificationMethod.map((item, index) => {
          return (
            <Radio key={index} value={item} className="text-secondary" >{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )


  /** Штамп заводской калибровки */
  const calibrationStampFormField = (
    <Item
      label={<Text type="secondary">Штамп заводской калибровки</Text>}
      name={"calibrationStamp"}
      initialValue={true}
      valuePropName="checked"
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  const verificationFormField = (
    <Item
      label={<Text type="secondary">Первичная поверка</Text>}
      name={"verification"}
      initialValue={true}
      valuePropName="checked"
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** Межповерочный интервал, мес. */
  const mpiFormField = (
    <Item
      label={<Text type="secondary">Межповерочный интервал, мес.</Text>}
      name={"mpi"}
      initialValue={true}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите межповерочный интервал"
        }
      ]}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );
  return (
    <Space direction="vertical" style={{width: 666 }} className={"border p-1"}>
     <Space direction={"vertical"} style={{width: 666}}>
       <Divider className={"m-0"} orientation="center"><Text type={"secondary"}>Метрологические характеристики</Text></Divider>
       <Row>
         {accuracyFormField}
       </Row>
       {
         facilityType === FacilityType.TEMPERATURE && (
           <>
             <Row>{relativeAccuracyFormField}</Row>
             <Row>{sensorAccuracyFormField }</Row>
             <Row>{sensorCalibrationFormField}</Row>
           </>
         )
       }
       {
         facilityType === FacilityType.GAZ_ANALYZE && (
           <>
             <Row>{ambientPermissibleFormField}</Row>
             <Row>{permissibleFormField }</Row>
           </>
         )
       }
       {
         facilityType === FacilityType.FLOW && (

           <Row>{verificationMethodFormField}</Row>

         )
       }
       <Row>
         <Col>
           {calibrationStampFormField}
         </Col>
         <Col>
           {verificationFormField}
         </Col>
       </Row>
       <Row>
         {mpiFormField}
       </Row>

     </Space>
      <Space direction={"vertical"} style={{width: 666}}>
        <Divider className={"m-0"} orientation="center"><Text type={"secondary"}>Принадлежности</Text></Divider>
        <Row>
          {accuracyFormField}
        </Row>
        {
          facilityType === FacilityType.TEMPERATURE && (
            <>
              <Row>{relativeAccuracyFormField}</Row>
              <Row>{sensorAccuracyFormField }</Row>
              <Row>{sensorCalibrationFormField}</Row>
            </>
          )
        }
        {
          facilityType === FacilityType.GAZ_ANALYZE && (
            <>
              <Row>{ambientPermissibleFormField}</Row>
              <Row>{permissibleFormField }</Row>
            </>
          )
        }
        {
          facilityType === FacilityType.FLOW && (

            <Row>{verificationMethodFormField}</Row>

          )
        }
        <Row>
          <Col>
            {calibrationStampFormField}
          </Col>
          <Col>
            {verificationFormField}
          </Col>
        </Row>
        <Row>
          {mpiFormField}
        </Row>

      </Space>
    </Space>
  );
};

export default MetrologyCharacteristic;