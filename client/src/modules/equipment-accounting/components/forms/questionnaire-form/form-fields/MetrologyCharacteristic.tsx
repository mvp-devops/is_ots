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
import AttachmentCharacteristic from "./AttachmentCharacteristic";

const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
  className: "  ",
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
    className: "   text-center"
  }
}

interface MetrologyCharacteristicProps {
  facilityType: string;
  accuracy?: number
  mpi?: number
}

const MetrologyCharacteristic: FC<MetrologyCharacteristicProps> = ({facilityType, accuracy, mpi}) => {

  /** Предел допускаемой основной приведенной погрешности, %
   * Если ОЛ формируется по существующее единице оборудования данные получены от сервера и поле нередактируемо
   * Если формируется новый ОЛ - ручной ввод
   */
  const accuracyFormField = (
    <Item
      label={<Text   >Предел допускаемой основной приведенной погрешности, %</Text>}
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
        style={{width: 100}}
      />
    </Item>
  );

  /** Предел относительной погрешности измерения нормирующего преобразователя, % */

  const relativeAccuracyFormField = (
    <Item
      label={<Text   >Предел относит. погрешности измерения нормирующего преобразователя, %</Text>}
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
        style={{width: 100}}

      />
    </Item>
  );

  //Предел допускаемой вариации выходного сигнала, в долях от пределов допускаемой основной
  const permissibleFormField = (
    <Item
      label={<Text   >Предел допускаемой вариации выходного сигнала</Text>}
      name={"relativeAccuracy"}
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
        style={{width: 100}}
      />
    </Item>
  );

  //Предел допускаемой погрешности от изменения температуры окружающей среды от нормальной на каждые 10  ℃, в долях от пределов допускаемой основной погрешности

  const ambientPermissibleFormField = (
    <Item
      label={<Text   >Предел допускаемой погрешности от изменения температуры окр. среды</Text>}
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
        style={{width: 100}}
      />
    </Item>
  )

  const sensorAccuracyFormField = (
    <Item
      label={<Text   >Класс точности сенсора</Text>}
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
        style={{width: 120}}
      >
        {["AA", "A", "B", "C"].map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="  ">
              {item}
            </Option>
          );
        })}
      </Select>
    </Item>
  )

const sensorCalibrationFormField = (
  <Item
    style={{width: 466}}
    label={<Text   >Градуировка сенсора</Text>}
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

    >
      {sensorCalibration.map(({id, title, value}) => {
        return (
          <Option key={id} title={title} value={value} className="  ">
            {title}
          </Option>
        );
      })}
    </Select>
  </Item>
)

  const verificationMethodFormField = (
    <Item
      label={<Text   >Метод поверки</Text>}
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
            <Radio key={index} value={item} className="  " >{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )


  /** Штамп заводской калибровки */
  const calibrationStampFormField = (
    <Item
      label={<Text   >Штамп заводской калибровки</Text>}
      name={"calibrationStamp"}
      initialValue={true}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  const verificationFormField = (
    <Item
      label={<Text   >Первичная поверка</Text>}
      name={"verification"}
      initialValue={true}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  /** Межповерочный интервал, мес. */
  const mpiFormField = (
    <Item
      label={<Text   >Межповерочный интервал, мес.</Text>}
      name={"mpi"}
      initialValue={mpi}
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
        style={{width: 100}}
      />
    </Item>
  );
  return (
    <Space direction="vertical" style={{width: 666, height: 580 }} className={"border p-1"}>
     <Space direction={"vertical"} style={{width: 666}}>
       <Divider className={"m-0"} orientation="center"><Text >Метрологические характеристики</Text></Divider>
       <Row style={{marginLeft: 122}}>
         {accuracyFormField}
       </Row>
       <Row style={{marginLeft: 122}} >
<Col>
  {calibrationStampFormField}
</Col>
         <Col style={{marginLeft: 30}}>
           {verificationFormField}
         </Col>
         {
           facilityType === FacilityType.TEMPERATURE && (
             <>
               <Row style={{marginLeft: 42}}>{sensorAccuracyFormField }</Row>
               <Row style={{marginLeft: 58}}>{sensorCalibrationFormField}</Row>
             </>
           )
         }

       </Row>
       <Row style={{marginLeft: 314}}>
         {mpiFormField}
       </Row>



       {
         (facilityType === FacilityType.TEMPERATURE ) &&  (
         <Row style={{marginLeft: 16}}>{relativeAccuracyFormField}</Row>
         )
       }
       {
         (facilityType === FacilityType.GAZ_ANALYZE ) &&  (
           <Row>{permissibleFormField}</Row>
         )
       }

       {
         facilityType === FacilityType.GAZ_ANALYZE && (
           <>

             <Row style={{marginLeft: 192}}>{permissibleFormField }</Row>
             <Row style={{marginLeft: 42}}>{ambientPermissibleFormField}</Row>
           </>
         )
       }
       {
         facilityType === FacilityType.FLOW && (

           <Row     style={{marginLeft: 216}}>{verificationMethodFormField}</Row>

         )
       }


     </Space>
      <Space direction={"vertical"} style={{width: 666, marginTop: 0}}>
        <Divider className={"m-0"} orientation="center"><Text>Принадлежности</Text></Divider>
        <AttachmentCharacteristic facilityType={facilityType}/>

      </Space>
    </Space>
  );
};

export default MetrologyCharacteristic;