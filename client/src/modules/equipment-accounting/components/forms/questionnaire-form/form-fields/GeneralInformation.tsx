import {FC} from 'react';
import {Col, Divider, Form, FormItemProps, Input, InputProps, Row, Select, SelectProps, Space, Typography} from "antd";
import {controlledGases, FacilityType, measuredArea, measureType} from "../questionnaire.consts";
import {NotFoundComponent} from "../../../../../../components";

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
    className: "ms-2 mb-0"
  }
}
const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: "text-secondary"
  }
}

interface GeneralInformationProps {
  tag: string;
  subUnit: string;
  subUnitsList: any[];
  parameter: string;
  fda: string;
  facilityType: string;
}

const GeneralInformation: FC<GeneralInformationProps> = ({facilityType, tag, subUnit, subUnitsList, parameter, fda}) => {

  const tagFormField = (
    <Item
      labelCol={{span: 8}}
      initialValue={tag}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите позицию на схеме (TAG)`,
        }
      ]}
      {...itemProps("Позиция на схеме (TAG)", "tag")}
    >
      <Input
        {...inputProps()}
        disabled={!!tag}
      />
    </Item>
  );

  /** Номер аппарата или линии
   * Если ОЛ формируется по существующее единице оборудования данные получены от сервера и поле нередактируемо
   * Если формируется новый ОЛ - выбирается из выпадающего списка
   */
    //FIXME: реализовать фильтр списка
  const subUnitFormField = (
      <Item
        labelCol={{span: 8}}
        initialValue={subUnit}
        rules={[
          {
            required: true,
            message:
              `Пожалуйста, выберите установку/аппарат/линию`,
          }
        ]}
        {...itemProps("Установка/аппарат/линия", "subUnit")}
      >
        {subUnit ? (
          <Input
            {...inputProps()}
            disabled={!!subUnit}
          />
        ) : (
          <Select
            {...selectProps}
            // onChange={(value) => onStageChange(value)}
          >
            {subUnitsList.map(({id, title}) => {
              return (
                <Option key={id} title={title} value={title} className="text-secondary">
                  {title}
                </Option>
              );
            })}
          </Select>
        )}
      </Item>
    );

  const parameterFormField = (
    <Item
      labelCol={{span: 8}}
      initialValue={facilityType !== FacilityType.GAZ_ANALYZE ? parameter: "Загазованность"}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите контроллируемый параметр`,
        }
      ]}
      {...itemProps("Контроллируемый параметр", "parameter")}
    >
      <Input
        {...inputProps()}
        disabled={!!parameter}
      />
    </Item>
  );


  /** № схемы автоматизации функциональной
   * Если ОЛ формируется по существующее единице оборудования данные получены от сервера и поле нередактируемо
   * Если формируется новый ОЛ - выбирается из списка или указывается вручную с возможностью загрузки документа в систему
   */
    //TODO: реализовать выборку из базы всех ФСА для данного объекта/установки. Продумать реализацию
    // FIXME: добавить в выпадающий список добавление нового документа
    //FIXME: реализовать фильтр списка
  const fdaFormField = (
      <Item
        labelCol={{span: 8}}
        initialValue={fda}
        rules={[
          {
            required: true,
            message:
              `Пожалуйста, введите № схемы автоматизации`,
          }
        ]}
        {...itemProps("№ схемы автоматизации", "fda")}
      >
        {fda ? (
          <Input
            {...inputProps()}
            disabled={!!fda}
          />
        ) : (
          <Input
            {...inputProps()}
          />
          //   <Select
          // {...selectProps}
          //   // onChange={(value) => onStageChange(value)}
          //   >
          // {fdaList.map(({id, code, title}) => {
          //   const render = `${code}. ${title}`
          //   return (
          //   <Option key={id} title={render} value={render} className="text-secondary">
          // {render}
          //   </Option>
          //   );
          // })}
          //   </Select>
        )
        }
      </Item>
    );

  /** Измеряемая среда */
  const measuredAreaFormField = (
    <Item
      labelCol={{span: 10}}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите ${facilityType !== FacilityType.GAZ_ANALYZE ? "измеряемую среду" : "контроллируемые газы"}`,
        }
      ]}
      {...itemProps(facilityType !== FacilityType.GAZ_ANALYZE ? "Измеряемая среда" : "Контроллируемые газы", "measuredArea")}
    >
      <Select
        {...selectProps}
        // onChange={(value) => onStageChange(value)}
        mode={"multiple"}
        maxTagCount={facilityType !== FacilityType.GAZ_ANALYZE && 1}
      >
        {(facilityType !== FacilityType.GAZ_ANALYZE ? measuredArea : controlledGases).map((item, index) => {
          return (
            <Option key={index} title={item} value={item} className="text-secondary">
              {item}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Тип измеряемого значения (для датчиков давления) */
  const measureTypeFormField = (
    <Item
      labelCol={{span: 10}}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, выберите ${facilityType === FacilityType.PRESSURE ? "вид измерений" :
              facilityType === FacilityType.TEMPERATURE ? "тип чувствительного элемента" :
                facilityType === FacilityType.LEVEL ? "измерительный зонд"  :  "принцип измерений"}`,
        }
      ]}
      {...itemProps(
        facilityType === FacilityType.PRESSURE ? "Вид измерений" :
          facilityType === FacilityType.TEMPERATURE ? "Тип чувствительного элемента" :
            facilityType === FacilityType.LEVEL ? "Измерительный зонд" : "Принцип измерений", "measureType"
      )}
    >
      <Select
        {...selectProps}
      >
        {(facilityType === FacilityType.GAZ_ANALYZE ? measureType.slice(0, 4)
          : facilityType === FacilityType.PRESSURE ? measureType.slice(4, 8) :
            facilityType === FacilityType.TEMPERATURE ? measureType.slice(8, 11) :
              facilityType === FacilityType.LEVEL ? measureType.slice(11, 19)
              : []
        ).map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value} className="text-secondary">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  /** Температура окружающей среды мин. (в диапазоне от -100 до 0) */
  const tempAmbientMinFormField = (
    <Item
      style={{width: 150}}
      initialValue={-50}
      {...itemProps("мин.", "tempAmbientMin")}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите минимальное значение температуры окружайщей среды`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        className="text-secondary text-center"
      />
    </Item>
  );

  /** Температура окружающей среды макс. (в диапазоне от 0 до 100) */
  const tempAmbientMaxFormField = (
    <Item
      style={{width: 150}}
      initialValue={50}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите максимальное значение температуры окружайщей среды`,
        }
      ]}
      {...itemProps(`макс.`, "tempAmbientMax")}

    >
      <Input
        {...inputProps("number")}
        className="text-secondary text-center"
      />
    </Item>
  );

  /** Диапазон измерения, мин.*/
  const measureRangeMinFormField = (
    <Item
      style={{width: 150}}
      {...itemProps("мин.", "measureRangeMin")}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите минимальное значение температуры окружайщей среды`,
        }
      ]}
    >
      <Input
        {...inputProps("number")}
        className="text-secondary text-center"
      />
    </Item>
  );

  /** Диапазон измерения, макс. (в диапазоне от 0 до 100) */
  const measureRangeMaxFormField = (
    <Item
      style={{width: 150}}
      rules={[
        {
          required: true,
          message:
            `Пожалуйста, введите максимальное значение температуры окружайщей среды`,
        }
      ]}
      {...itemProps(`макс.`, "measureRangeMax")}

    >
      <Input
        {...inputProps("number")}
        className="text-secondary text-center"
      />
    </Item>
  );

  return (
    <>
      <Divider className="m-0" orientation="left"><Text type="secondary">Основная информация</Text> </Divider>
      <Space direction="horizontal">
        <Space direction="vertical" className="d-flex border p-1" style={{width: 666}}>
          {tagFormField}
          {subUnitFormField}
          {fdaFormField}
          {parameterFormField}
        </Space>
        <Space direction="vertical" className="d-flex border p-1" style={{width: 666}}>
          <Row className="d-flex align-items-center justify-content-between">
            <Col className="text-secondary" span={9} style={{marginLeft: 30}}>
              Температура окружающей среды, ℃:
            </Col>
            <Col>
              {tempAmbientMinFormField}
            </Col>
            <Col>
              {tempAmbientMaxFormField}
            </Col>
          </Row>
          {facilityType !== FacilityType.FLOW && measureTypeFormField }
          {measuredAreaFormField}
          <Row className="d-flex align-items-center justify-content-between">
            <Col className="text-secondary"  style={{marginLeft: 130}}>
       Диапазон измерения:
            </Col>
            <Col>
              {measureRangeMinFormField}
            </Col>
            <Col>
              {measureRangeMaxFormField}
            </Col>
          </Row>
        </Space>
      </Space>

    </>
  );
};

export default GeneralInformation;