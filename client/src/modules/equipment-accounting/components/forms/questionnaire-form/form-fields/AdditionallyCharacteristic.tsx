import React, {FC, useState} from "react";

import {
  Checkbox,
  Col,
  Divider,
  Form,
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
  connection,
  connectionType,
  controlCableConnectionList,
  converter,
  converterTypes,
  FacilityType,
  hartVersion,
  outputSignal, thermCase,
  voltage
} from "../questionnaire.consts";


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

interface AdditionallyCharacteristicProps {
  facilityType: string;
}

const AdditionallyCharacteristic: FC<AdditionallyCharacteristicProps> = ({facilityType}) => {
  const [hart, setHart] = useState(false);
  const [connectionTypeTitle, setConnectionTypeTitle] = useState("");
  const [converterType, setConverterType] = useState("");
  const [processTurbulence, setProcessTurbulence] = useState(false);

  /** Местная индикация */
  const localIndicationFormField = (
    <Item
      label={<Text   >{"Местная индикация"}</Text>}
      name={"localIndication"}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  /** внутренняя диагностика */
  const internalDiagnosticFormField = (
    <Item
      label={<Text   >{"Внутренняя диагностика"}</Text>}
      name={"internalDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );

  /** Наличие HART-протокола */
  const hartFormField = (
    <Item
      label={<Text   >HART</Text>}
      name={"hart"}
      initialValue={hart}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox onChange={(e) => setHart(e.target.checked)}/>
    </Item>
  );

  /** Версия HART-протокола */
  const hartVersionFormField = (
    <Item

      label={<Text   >Версия HART-протокола</Text>}
      name={"hartVersion"}
      initialValue={7.5}
      className="ms-2 mb-0"
      rules={[
        {
          required: hart,
          message: `Пожалуйста, выберите версию HART-протокола`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{width: 94}}
      >
        {hartVersion.map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="  ">
              {item}
            </Option>
          );
        })}
      </Select>

    </Item>
  )

  /** Выходной сигнал */
  const outputSignalFormField = (
    <Item
        style={{width: 530}}
      label={<Text   >Выходной сигнал</Text>}
      name={"outputSignal"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите выходной сигнал`,
        }
      ]}
    >

      <Select
        {...selectProps}
      >
        {outputSignal.map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value} className="  ">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Напряжение питания, В */
  const voltageFormField = (
    <Item
      style={{width: 570}}
      label={<Text   >Напряжение питания, В</Text>}
      name={"voltage"}
      initialValue={24}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите напряжение питания`,
        }
      ]}
    >
      <Radio.Group>
        {voltage.map((item, index) => {
          return (
            <Radio key={index} value={item} className="  " >{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )

  /** Тип присоединения к тех. процессу */
    //FIXME: переделать в radio-buttons-group?
  const connectionTypeFormField = (
      <Item
        style={{width: 648}}
        label={<Text   >Тип присоединения к тех. процессу</Text>}
        name={"connectionType"}
        className="ms-2 mb-0"
        rules={[
          {
            required: true,
            message: `Пожалуйста, выберите тип присоединения к тех. процессу`,
          }
        ]}
      >
        <Select
          {...selectProps}
          onSelect={(value) => setConnectionTypeTitle(value)}
        >
          {connectionType.map(({id, title, value}) => {
            return (
              <Option key={id} title={title} value={value} className="  "

              >
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
      style={{width: 610}}
      label={<Text     >Соединение с тех. процессом</Text>}
      name={"connection"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите соединение с тех. процессом`,
        }
      ]}

    >
      <Select
        {...selectProps}
      >
        {connection.filter(item => connectionTypeTitle.toLowerCase().includes(item.connectionTypeId.toLowerCase().slice(0,4)) ).map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value} className="  ">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );


  // Вторичный преобразователь
  const converterTypeFormField = (
    <Item
      style={{width: 638}}
      label={<Text   >Тип вторичного преобразователя</Text>}
      name={"converterType"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип вторичного преобразователя`,
        }
      ]}
    >
      <Select
        {...selectProps}
        onSelect={(value) => setConverterType(value)}
      >
        {converterTypes.map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="  "

            >
              {item}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const converterFormField = (
    <Item
      style={{width: 570}}
      label={<Text   >Вторичный преобразователь</Text>}
      name={"converter"}
      initialValue={24}
      className="ms-2 mb-0"
      rules={[
        {
          required: converterType && converterType !== "Отсутствует",
          message: `Пожалуйста, выберите тип вторичного преобразователя`,
        }
      ]}
    >
      <Radio.Group>
        {converter.map((item, index) => {
          return (
            <Radio key={index} value={item} className="  " >{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )


  const zeroDriftFormField = (
    <Item
      label={<Text   >{"Корректировка дрейфа нуля"}</Text>}
      name={"zeroDrift"}
      valuePropName="checked"
      className="ms-2 mb-0"
    >
      <Checkbox />
    </Item>
  );



  const opticsCleanlinessFormField = (
    <Item
      label={<Text   >{" Функция проверки чистоты оптики"}</Text>}
      name={"opticsCleanliness"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
    >
      <Checkbox />
    </Item>
  );

  /** Диаметр трубопровода Ду, мм */
  const pipelineDiameterFormField = (
    <Item
      label={<Text   >Диаметр трубопровода Ду, мм</Text>}
      name={"pipelineDiameter"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите диаметр трубопровода"
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 100}}
      />
    </Item>
  );

  const pipelineMaterialFormField = (
    <Item
      style={{width: 574}}
      label={<Text   >Материал трубопровода</Text>}
      name={"pipelineMaterial"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите материал трубопровода"
        }
      ]}
    >
      <Input
        {...inputProps()}
        className={"   text-left"}
      />
    </Item>
  );

  /** Участок трубопровода до прибора, мм */
  /** Диаметр трубопровода Ду, мм */
  const flowMeterDistanceBeforeFormField = (
    <Item
      label={<Text   >Участок трубопровода до прибора, мм</Text>}
      name={"flowMeterDistanceBefore"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите значение"
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 100}}
      />
    </Item>
  );
  const flowMeterDistanceAfterFormField = (
    <Item

      label={<Text   >Участок трубопровода после прибора, мм</Text>}
      name={"flowMeterDistanceAfter"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите значение"
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        style={{width: 100}}
      />
    </Item>
  );

/** Наличие струевыпрямителей */
  const flowStraightenersFormField = (
    <Item
      label={<Text   >Струевыпрямители</Text>}
      name={"flowStraighteners"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
    >
      <Checkbox />
    </Item>
  );

  /** Турбулентность процесса */
  const processTurbulenceFormField = (
    <Item
      label={<Text   >Турбулентность процесса</Text>}
      name={"processTurbulence"}
      valuePropName="checked"
      initialValue={processTurbulence}
      className="ms-2 mb-0 p-0"
    >
      <Checkbox onChange={(e) => setProcessTurbulence(e.target.checked)}/>
    </Item>
  );

  /** Причина турбулентности */
  const turbulenceCauseFormField = (
    <Item
      style={{width: 580}}
      label={<Text   >Причина турбулентности</Text>}
      name={"turbulenceCause"}
      className="ms-2 mb-0"
      rules={[
        {
          required: processTurbulence,
          message: "Пожалуйста, введите причину турбулентрости процесса"
        }
      ]}
    >
      <Input.TextArea
       size={"small"}
       className={"  "}
       autoSize={{minRows: 6.5, maxRows: 6.5}}

      />
    </Item>
  );

  const selfDiagnosticFormField = (
    <Item
      label={<Text   >Самодиагностика</Text>}
      name={"selfDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
    >
      <Checkbox />
    </Item>
  );

  const blockageDiagnosticFormField = (
    <Item
      label={<Text   >Диагностика закупорки</Text>}
      name={"blockageDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
    >
      <Checkbox />
    </Item>
  );

  const controlCableConnectionFormField = (
    <Item
      label={<Text   >{facilityType === FacilityType.GAZ_ANALYZE ? "Подключение контрольного кабеля" : "Тип монтажа"}</Text>}
      name={"controlCableConnection"}
      className="ms-2 mb-0"
      initialValue={"С электрообогревом"}

      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип термочехла`,
        }
      ]}
    >
      <Radio.Group>
        {(facilityType === FacilityType.GAZ_ANALYZE ? controlCableConnectionList.slice(0,2) : controlCableConnectionList.slice(2,4)).map((item, index) => {
          return (
            <Radio key={index} value={item} className={"  "}>{item}</Radio>          );
        })}
      </Radio.Group>
    </Item>
  );



  const currentLoopIntegrityDiagnosticFormField = (
    <Item
      label={<Text   >Диагностика целостности токовой цепи</Text>}
      name={"currentLoopIntegrityDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
    >

      <Checkbox />
    </Item>
  );


  const gazAnalyzeAdditionallyCharacteristic = (
    <>
      <Row style={{marginLeft: 44}}>{zeroDriftFormField}</Row>
      <Row style={{marginLeft: 0}}>{opticsCleanlinessFormField}</Row>
      <Row>{controlCableConnectionFormField}</Row>
      <Row style={{marginLeft: 10 }} className={"p-0"}>
        {converterTypeFormField}
      </Row>
      { converterType !== "Отсутствует" &&
        <Row style={{marginLeft: 40 }} className={"p-0"}>
        {converterFormField}
      </Row>
      }
      <Row style={{marginLeft: 118 }} className={"p-0"}>
        {outputSignalFormField}
      </Row>
      <Row style={{marginLeft: 78 }}>
        {voltageFormField}
      </Row>
      <Row style={{marginLeft: 196 }}>
        <Col>  {hartFormField}</Col><Col>{hart && hartVersionFormField}</Col>
      </Row>
      <Row style={{marginLeft: 102 }}>
        {localIndicationFormField}
        {internalDiagnosticFormField}
      </Row>
    </>
  )

  const first = (
    <>
      <Row>{connectionTypeFormField}</Row>
      <Row style={{marginLeft: 38 }}>{connectionFormField}</Row>
      {facilityType === FacilityType.TEMPERATURE &&       <Row style={{marginLeft: 146}}>{controlCableConnectionFormField}</Row>}
      {facilityType !== FacilityType.PRESSURE && (
        <>
          <Row style={{marginLeft: 10 }} className={"p-0"}>
            {converterTypeFormField}
          </Row>
          {   (converterType !== "Отсутствует" || converterTypeFormField) &&        <Row style={{marginLeft: 40 }} className={"p-0"}>
            {converterFormField}
          </Row>}
        </>
      )}
      <Row style={{marginLeft: 118 }} className={"p-0"}>
        {outputSignalFormField}
      </Row>
      <Row style={{marginLeft: 78 }}>
        {voltageFormField}
      </Row>
      <Row style={{marginLeft: 196 }}>
        <Col>  {hartFormField}</Col><Col>{hart && hartVersionFormField}</Col>
      </Row>
      <Row style={{marginLeft: 102 }}>
        {localIndicationFormField}
        {internalDiagnosticFormField}
      </Row>
      {facilityType === FacilityType.PRESSURE ? (
        <>
          <Row style={{marginLeft: 116}}>
            {selfDiagnosticFormField}      {currentLoopIntegrityDiagnosticFormField}

          </Row>
          <Row style={{marginLeft: 76}}>
            {blockageDiagnosticFormField}
          </Row>
        </>
      ) : facilityType === FacilityType.FLOW ? (
        <>
          <Row style={{marginLeft: 74}}>
            {pipelineMaterialFormField}
          </Row>
          <Row style={{marginLeft: 324}}>
            {pipelineDiameterFormField}
          </Row>

          <Row style={{marginLeft: 272}}>
            {flowMeterDistanceBeforeFormField}
          </Row>
          <Row style={{marginLeft: 250}}>
            {flowMeterDistanceAfterFormField}
          </Row>
          <Row style={{marginLeft: 400}}>
            {flowStraightenersFormField}
          </Row>
        </>
      ) : facilityType === FacilityType.LEVEL ? (
        <>
          <Row style={{marginLeft: 64}}>
            {processTurbulenceFormField}
          </Row>
          <Row style={{marginLeft: 68}}>
            {processTurbulence && turbulenceCauseFormField}
          </Row>
        </>
      ) : <></>
      }

    </>
  )




  return (
    <Space direction="vertical" style={{width: 666, height: 580}} className={"border p-1"}>
      <Divider className="m-0" orientation="center"><Text   >Характеристики</Text> </Divider>
     <Space direction="vertical" style={{width: 666}}>
       {facilityType === FacilityType.GAZ_ANALYZE ? gazAnalyzeAdditionallyCharacteristic : first}
     </Space>

    </Space>
  );
};

export default AdditionallyCharacteristic;