import React, {createRef, FC, useEffect, useState} from 'react';
import {
  Button, Checkbox, Col, Divider,
  Form,
  FormItemProps,
  Input,
  InputProps,
  notification, Radio, Row,
  Select,
  SelectProps,
  Space,
  Spin, TreeSelect,
  Typography
} from "antd";
import {FormInstance} from "antd/es/form";
import {useActions, useTypedSelector} from "../../../../../hooks";
import {LoadingOutlined} from "@ant-design/icons";
import {NotFoundComponent} from "../../../../../components";
import {
  connectionScheme,
  controlledGases, explosionType,
  FacilityType,
  facilityTypesList, hartVersion,
  measuredArea,
  measureType, mtbf, outputSignal, protection,
  questionnaireType, safety, settingRange, voltage
} from "./questionnaire.consts";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import GeneralInformation from "./form-fields/GeneralInformation";
import PerformanceCharacteristic from "./form-fields/PerformanceCharacteristic";
import BaseInformation from "./form-fields/BaseInformation";
import EnvironmentCharacteristic from "./form-fields/EnvironmentCharacteristic";
import MetrologyCharacteristic from "./form-fields/MetrologyCharacteristic";
import AdditionallyCharacteristic from "./form-fields/AdditionallyCharacteristic";
const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;

/**
 * Получаем id единицы оборудования
 * По id получаем от сервера единицу оборудования
 * Передаем на сервер значения:
 * - Заказчик (ДО);
 * - Месторождение;
 * - Объект строительства;
 * Поля ввода данных:
 * - Наименование единицы оборудования (например, "Интеллектуальный датчик абсолютного давления") - получаем из ответа сервера. Поле disabled
 * - Вид ОЛ - выпадающий список (Проектная документация, рабочая документация, ремонтно-эксплуатационные нужды)
 * - Год формирования. По умолчанию текущий год
 * - Позиция на схеме (TAG) - получаем из ответа сервера (tag). Поле disabled
 * - Измеряемый параметр  - получаем из ответа сервера (parameter). Поле disabled
 * - Количество, шт.
 * - Номер аппарата или линии - получаем из ответа сервера (subUnit). Поле disabled
 * - № схемы автоматизации функциональной - получаем из ответа сервера (monitoring.fsa.code + title). Поле disabled
 * - Тип прибора - получаем из ответа сервера (facility.type). Поле disabled
 * ***Давление***
 * - Измеряемая среда - выпадающий список (азот, воздух и т.д.)
 * - Температура измеряемой среды - диапазон от (-100...0) ... до (0...1100)
 * - Давление измеряемой среды, ${получаем от сервера} (изб.) - диапазон от (-40...-0,1) ... до (0,1...40)
 * - Тип присоединения к тех. процессу - выпадающий список (резьбовое, через клапанный блок резьбовое, фланцевое, фланцевое с выносной мембраной)
 * - Соединение с тех. процессом - связанный выпадающий список - зависит от типа присоединения (взять из справочника)
 * - Клапанный блок - чекбокс
 *   - Если выбран клапанный блок:
 *   - Исполнение клапанного блока - список (2ч, 3х, 4ч, 5ти вентильный)
 *   - Наличие клапана для стравливания воздуха
 * - Выходной сигнал - список (взять из справочника)
 * - Схема подключения вторичного преобразователя (не предусмотрено, 2х проводная)
 * - Напряжение питания, В - радиокнопки (24В, 220В)
 * - Блок настроек для преобразователя:
 *   - Наличие HART-протокола - чекбокс
 *   - Если выбран HART - версия HART-протокола - список (взять из справочника)
 *   - Внутренняя диагностика - чекбокс
 *   - Диапазон настройки - радиокнопки 100:1, 50:1, 20:1, 10:1
 * - Предел допускаемой основной приведенной погрешности, % - получаем из ответа сервера (accuracy). Поле disabled
 * - Температура окружающей среды - диапазон от (-100...0) ... до (0...100)
 * - Наличие местной индикации - чекбокс
 * - Материал корпуса - ручной ввод
 * - Степень защиты корпуса, не ниже - список (взять из справочника)
 * - Вид взрывозащиты - список (взять из справочника)
 * - Маркировка взрывозащиты - зависимый список взять из справочника (добавить таблицы в БД, перенос из старой БД)
 * - Наличие штампа заводской калибровки - чекбокс
 * - Межповерочный интервал, мес. - получаем из ответа сервера (mpi). Поле disabled
 * - Наличие самодиагностики - чекбокс
 * - Наличие диагностики закупорки - чекбокс
 * - Наличие диагностики целосности токовой петли - чекбокс
 * - Средний срок службы, мес. - получаем из ответа сервера (period). Поле можно редактировать
 * - Средняя наработка на отказ, часов (не менее) - список (взять из справочника)
 * - Блок настроек принадлежностей:
 *   - Кабельный ввод - список (взять из справочника)
 *   - Заглушка резервного кабельного ввода - радио Взрывозащищенная металлическая / не предусмотрено
 *   - Термочехол/Термобокс - чекбокс
 *     - Если выбран термочехол - радиокнопки (взять из справочника)
 *     - Если выбран термобокс - с электрообогревом для датчика с клапанным блоком и подводящей импульсной линией. Напряжение питания нагревательного элемента 220В, 50Гц.
 *   - Монтажный кронштейн - список (взять из справочника)
 *   - Степень безопасности SIL - радио SIL1, SIL2, SIL3
 *   - Если выбран SIL - в комплект сопроводительной документации необходимо добавить сертификат SIL (необходима правильная формулировка)
 */

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



interface QuestionnaireFormProps {
  target: string;
  id?: string
}

const QuestionnaireForm: FC<QuestionnaireFormProps> = ({target, id}) => {

  /**  */


  const [facilityType, setFacilityType] = useState("");

  const [heatingValue, setHeatingValue] = useState("Не предусмотрено");

  const toggleCheckBox = (e: CheckboxChangeEvent, setValue) => {
    setValue(!e.target.checked);
  };

  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();

  const {actionType} = useTypedSelector(state => state.main);

  const {setFormVisible} = useActions();
  const [loading, setLoading] = useState(false);

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  const onFinish = (values: any) => {
    // const {
    //   direction,
    //   month,
    //   year,
    //   expertsCount,
    //   costsPerMonth,
    //   customerPosition,
    //   customerFio,
    //   executorPosition,
    //   executorFio
    // } = values
    // const id = currentItem.id;
    // const title = currentItem.title;
    //
    // const reportData = {
    //   direction,
    //   period: `${months.filter(({id, title}) => title === month)[0].id}.${year}`,
    //   costs: costsPerMonth * expertsCount,
    //   customerPosition,
    //   customerFio,
    //   executorPosition,
    //   executorFio
    // }
    //
    // setLoading(true);
    // buildReportPerMonth(target, id, reportData, title).then(() => {
    //   setLoading(false);
    //   setFormVisible(false);
    // })
    console.log(values);

    onReset()
  }


  //FIXME: получать как-то
  const title = "";
  const tag = "";
  const parameter = "";
  const subUnit = "";
  const subUnitsList = [];
  const fda = "";
  const fdaList = [];
  const lifeTime = 0

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "Ошибка",
      description: "Ошибка при формировании отчета",
    });
  };


  return (
    <>
      <div>
        {target}
      </div>
      <Form
        layout="horizontal"
        ref={formRef}
        form={form}
        name="report-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        autoComplete="on"
        className=" p-1"

      >
     <Space direction="vertical">
       <BaseInformation title={title} setFacilityType={setFacilityType} resetForm={onReset}/>
       <GeneralInformation tag={tag} subUnit={subUnit} subUnitsList={subUnitsList} parameter={parameter} fda={fda} facilityType={facilityType}/>
       <Divider className="m-0" orientation="left"><Text type="secondary">Эксплуатационные характеристики</Text> </Divider>
       <Space direction="horizontal" >
         <PerformanceCharacteristic lifeTime={lifeTime}/>
         <EnvironmentCharacteristic facilityType={facilityType}/>
       </Space>
       <Space direction="horizontal" >
         <MetrologyCharacteristic facilityType={facilityType} accuracy={0}/>
         <AdditionallyCharacteristic facilityType={facilityType}/>
       </Space>
     </Space>
        <Space className="d-flex justify-content-end mt-2" style={{marginRight: 4}}>
          <Item>
            <Button type={loading ? "default" : "primary"} htmlType="submit" >
              {loading ?
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
                  Загрузка отчета</Spin> :

                "Сформировать"}

            </Button>
          </Item>
          <Item>
            <Button htmlType="reset" disabled={loading}>
              Очистить
            </Button>
          </Item>
        </Space>
      </Form>
    </>
  );
};

export {QuestionnaireForm};