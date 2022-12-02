import React, {FC, useState} from "react";

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
  connection,
  connectionScheme, connectionType, converter, converterTypes, FacilityType,
  hartVersion,
  outputSignal,
  settingRange,
  valveBlockType,
  voltage
} from "../questionnaire.consts";


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

interface AdditionallyCharacteristicProps {
  facilityType: string;
}

const AdditionallyCharacteristic: FC<AdditionallyCharacteristicProps> = ({facilityType}) => {
  const [hart, setHart] = useState(false);
  const [connectionTypeTitle, setConnectionTypeTitle] = useState("");
  const [converterType, setConverterType] = useState("");

  /** Местная индикация */
  const localIndicationFormField = (
    <Item
      label={<Text type="secondary">{"Местная индикация"}</Text>}
      name={"localIndication"}
      valuePropName="checked"
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите наличие местной индикации`,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** внутренняя диагностика */
  const internalDiagnosticFormField = (
    <Item
      label={<Text type="secondary">{"Внутренняя диагностика"}</Text>}
      name={"internalDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите наличие внутренней диагностики`,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** Наличие HART-протокола */
  const hartFormField = (
    <Item
      label={<Text type="secondary">HART</Text>}
      name={"hart"}
      initialValue={hart}
      valuePropName="checked"
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите наличие HART`,
        }
      ]}
    >
      <Checkbox onChange={(e) => setHart(e.target.checked)}/>
    </Item>
  );

  /** Версия HART-протокола */
  const hartVersionFormField = (
    <Item

      label={<Text type="secondary">Версия HART-протокола</Text>}
      name={"hartVersion"}
      initialValue={7.5}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
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
            <Option key={index} title={item} value={item} className="text-secondary">
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
      label={<Text type="secondary">Выходной сигнал</Text>}
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
            <Option key={id} title={title} value={value} className="text-secondary">
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
      label={<Text type="secondary">Напряжение питания, В</Text>}
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
            <Radio key={index} value={item} className="text-secondary" >{item}</Radio>
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
        label={<Text type="secondary">Тип присоединения к тех. процессу</Text>}
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
              <Option key={id} title={title} value={value} className="text-secondary"

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
      label={<Text type="secondary"  >Соединение с тех. процессом</Text>}
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
            <Option key={id} title={title} value={value} className="text-secondary">
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
      style={{width: 648}}
      label={<Text type="secondary">Тип вторичного преобразователя</Text>}
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
            <Option key={index} title={item} value={item} className="text-secondary"

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
      label={<Text type="secondary">Вторичный преобразователь</Text>}
      name={"converter"}
      initialValue={24}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип вторичного преобразователя`,
        }
      ]}
    >
      <Radio.Group>
        {converter.map((item, index) => {
          return (
            <Radio key={index} value={item} className="text-secondary" >{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  )


  const zeroDriftFormField = (
    <Item
      label={<Text type="secondary">{"Корректировка дрейфа нуля"}</Text>}
      name={"zeroDrift"}
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



  const opticsCleanlinessFormField = (
    <Item
      label={<Text type="secondary">{" Функция проверки чистоты оптики"}</Text>}
      name={"opticsCleanliness"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** Диаметр трубопровода Ду, мм */
  const pipelineDiameterFormField = (
    <Item
      label={<Text type="secondary">Диаметр трубопровода Ду, мм</Text>}
      name={"pipelineDiameter"}
      initialValue={true}
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
      />
    </Item>
  );

  const pipelineMaterialFormField = (
    <Item
      label={<Text type="secondary">Материал трубопровода</Text>}
      name={"pipelineMaterial"}
      initialValue={true}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите материал трубопровода"
        }
      ]}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  /** Участок трубопровода до прибора, мм */
  /** Диаметр трубопровода Ду, мм */
  const flowMeterDistanceBeforeFormField = (
    <Item
      label={<Text type="secondary">Участок трубопровода до прибора, мм</Text>}
      name={"flowMeterDistanceBefore"}
      initialValue={true}
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
      />
    </Item>
  );
  const flowMeterDistanceAfterFormField = (
    <Item
      label={<Text type="secondary">Участок трубопровода после прибора, мм</Text>}
      name={"flowMeterDistanceAfter"}
      initialValue={true}
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
      />
    </Item>
  );

/** Наличие струевыпрямителей */
  const flowStraightenersFormField = (
    <Item
      label={<Text type="secondary">Наличие струевыпрямителей</Text>}
      name={"flowStraighteners"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** Турбулентность процесса */
  const processTurbulenceFormField = (
    <Item
      label={<Text type="secondary">Турбулентность процесса</Text>}
      name={"processTurbulence"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  /** Причина турбулентности */
  const turbulenceCauseFormField = (
    <Item
      label={<Text type="secondary">Причина турбулентности</Text>}
      name={"turbulenceCause"}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите значение"
        }
      ]}
    >
      <Input.TextArea
       size={"small"}
       className={"text-secondary"}
       rows={4}

      />
    </Item>
  );

  const selfDiagnosticFormField = (
    <Item
      label={<Text type="secondary">Самодиагностика</Text>}
      name={"selfDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );

  const blockageDiagnosticFormField = (
    <Item
      label={<Text type="secondary">Диагностика закупорки</Text>}
      name={"blockageDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );


  const currentLoopIntegrityDiagnosticFormField = (
    <Item
      label={<Text type="secondary">Диагностика целостности токовой цепи</Text>}
      name={"currentLoopIntegrityDiagnostic"}
      valuePropName="checked"
      className="ms-2 mb-0 p-0"
      rules={[
        {
          required: true,
        }
      ]}
    >
      <Checkbox />
    </Item>
  );
  return (
    <Space direction="vertical" style={{width: 666}} className={"border p-1"}>
      <Divider className="m-0" orientation="center"><Text type="secondary">Характеристики</Text> </Divider>
     <Space direction="vertical" style={{width: 666}}>
       {facilityType === FacilityType.GAZ_ANALYZE ? <Row style={{marginLeft: 44}}>{zeroDriftFormField}</Row> : (<Row>{connectionTypeFormField}</Row>)}
       {facilityType === FacilityType.GAZ_ANALYZE ? <Row style={{marginLeft: 0}}>{opticsCleanlinessFormField}</Row> : (<Row style={{marginLeft: 38 }}>{connectionFormField}</Row>)}
       {facilityType !== FacilityType.PRESSURE && (
         <>
           <Row style={{marginLeft: 118 }} className={"p-0"}>
             {converterTypeFormField}
           </Row>
           {   converterType !== "Отсутствует" &&        <Row style={{marginLeft: 118 }} className={"p-0"}>
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
       {facilityType === FacilityType.FLOW && (
         <>
           <Row>
             {pipelineDiameterFormField}
           </Row>
           <Row>
             {pipelineMaterialFormField}
           </Row>
           <Row>
             {flowMeterDistanceBeforeFormField}
           </Row>
           <Row>
             {flowMeterDistanceAfterFormField}
           </Row>
           <Row>
             {flowMeterDistanceAfterFormField}
           </Row>
         </>
       )}
       {facilityType === FacilityType.LEVEL && (
         <>
           <Row>
             {processTurbulenceFormField}
           </Row>
           <Row>
             {turbulenceCauseFormField}
           </Row>
         </>
       )}
       {facilityType === FacilityType.PRESSURE && (
         <>
           <Row>
             {selfDiagnosticFormField}
           </Row>
           <Row>
             {blockageDiagnosticFormField}
           </Row>
           <Row>
             {currentLoopIntegrityDiagnosticFormField}
           </Row>
         </>
       )}
     </Space>

    </Space>
  );
};

export default AdditionallyCharacteristic;