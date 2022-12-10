import React, {createRef, FC, useEffect, useState} from 'react';
import {
  Button,   Divider,
  Form,

  notification,
  Space,
  Spin,
  Typography
} from "antd";
import {FormInstance} from "antd/es/form";
import {useActions, useTypedSelector} from "../../../../../hooks";
import {LoadingOutlined} from "@ant-design/icons";

import {CheckboxChangeEvent} from "antd/es/checkbox";
import GeneralInformation from "./form-fields/GeneralInformation";
import PerformanceCharacteristic from "./form-fields/PerformanceCharacteristic";
import BaseInformation from "./form-fields/BaseInformation";
import EnvironmentCharacteristic from "./form-fields/EnvironmentCharacteristic";
import MetrologyCharacteristic from "./form-fields/MetrologyCharacteristic";
import AdditionallyCharacteristic from "./form-fields/AdditionallyCharacteristic";
import {FacilityType} from "./questionnaire.consts";
import {createQuestionnaire} from "../../../api/equipment-accounting.api";
import {getOneItem} from "../../../../position-tree";
const {Item} = Form;
const {Text} = Typography;

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



interface QuestionnaireFormProps {
  target: string;
  data?: any

}

const QuestionnaireForm: FC<QuestionnaireFormProps> = ({target,  data}) => {


  const [facilityType, setFacilityType] = useState("");
  const [subUnitsList, setSubUnitsList] = useState([]);
  const [parent, setParent] = useState(null);


  const {currentItem} = useTypedSelector(state => state.positionTree);


  useEffect(() => {

    if (currentItem?.target === "unit") {
      setSubUnitsList(currentItem?.children)
    }
    if(currentItem?.target === "project") {

      const subUnits = [];
      for (let i = 0; i < currentItem?.children?.length; i++) {
        const unit = currentItem?.children[i];
        unit.children && subUnits.push(...unit?.children);
      }
      setSubUnitsList(subUnits);
    }
  }, [currentItem]);

  useEffect(() => {
!data && currentItem.target === "unit"  &&     getOneItem("unit", currentItem.id).then(data => {
  setParent({
    subsidiary: "project" in data && data.project.field.subsidiary.title,
    field: "project" in data && data.project.field.title,
    project: "project" in data && `${data.project.code}. ${data.project.title}`,
    unit: "position" in data && `${data.title} (поз. ${data.position})`,
    subUnit: " ",
    cipher: "project" in data && "position" in data && `${data.project.field.subsidiary.code}. ${data && data.project.field.code}. ${data.project.code}. ${data.position}`
  })
})

    !data && currentItem.target === "project"  &&     getOneItem("project", currentItem.id).then(data => {
      setParent({
        subsidiary: "field" in data && data.field.subsidiary.title,
        field: "field" in data && data.field.title,
        project: `${data.code}. ${data.title}`,
        unit: " ",
        subUnit: " ",
        cipher: "field" in data && `${data.field.subsidiary.code}. ${data && data.field.code}. ${data.code}`
      })
    })
  }, [currentItem]);


  useEffect(() => {
data ? setFacilityType(data.facilityType) : setFacilityType("");
  }, []);

  useEffect(() => {
    console.log("facilityType: ", facilityType);
  }, [facilityType]);









  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();

  const {setFormVisible} = useActions();
  const [loading, setLoading] = useState(false);

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  const onFinish = (values: any) => {

    const formData = {
      ...values,
      subsidiary: data ? data.subsidiary.title : parent.subsidiary,
      field: data ? data.field.title : parent.field,
      project:  data ? `${data.project.code}. ${data.project.title}` : parent.project,
      unit: data ? `${data.unit.title} (поз. ${data.unit.position})` : parent.unit,
      subUnit: data ? `${data.subUnit.title} (поз. ${data.subUnit.position})` : parent.subUnit,
      cipher: `${data ? `${data.subsidiary.code}.${data.field.code}.${data.project.code}.${data.unit.position}.${data.subUnit.position}` : parent.cipher}-${
        values.questionnaireType === "Проектная документация" ? "ПД"
          : values.questionnaireType === "Рабочая документация" ? "РД"
            : "РЭ"
      }-${values.tag}-ОЛ`,
      target: facilityType === FacilityType.FLOW ? "flow"
              : facilityType === FacilityType.TEMPERATURE ? "temperature"
            : facilityType === FacilityType.LEVEL ? "level"
           : facilityType === FacilityType.PRESSURE ? "pressure"
              : facilityType === FacilityType.GAZ_ANALYZE ? "gaz-analyze" : ""
    }

    setLoading(true);
    createQuestionnaire(formData).then(() => {
      setLoading(false);
      setFormVisible(false);
    })


    onReset()
  }



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
       <Space direction="horizontal"><BaseInformation title={data?.title} setFacilityType={setFacilityType} resetForm={onReset}/></Space>

  {facilityType && (
    <>
      <GeneralInformation
        tag={data?.tag} location={data?.location}
        subUnitsList={subUnitsList} parameter={data?.parameter}
        fda={data?.fda} facilityType={facilityType} range={data?.range}
        measureRangeMin={data?.measureRangeMin}
      measureRangeMax={data?.measureRangeMax}
      />
      <Divider className="m-0" orientation="left"><Text type="secondary">Эксплуатационные характеристики</Text> </Divider>
      <Space direction="horizontal" >
        <PerformanceCharacteristic lifeTime={data?.lifeTime}/>
        <EnvironmentCharacteristic facilityType={facilityType}/>
      </Space>
      <Space direction="horizontal" >
        <MetrologyCharacteristic facilityType={facilityType} accuracy={data?.accuracy} mpi={data?.mpi}/>
        <AdditionallyCharacteristic facilityType={facilityType}/>
      </Space>
    </>
  )}

     </Space>
        <Space className="d-flex justify-content-end mt-2" style={{marginRight: 4}}>
          <Item>
            <Button type={loading ? "default" : "primary"} htmlType="submit" >
              {loading ?
                <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
                  Генерация ОЛ</Spin> :

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