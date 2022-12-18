import {ApiProperty} from "@nestjs/swagger";
import {ExportToAtlasCreateOrUpdateAttrs} from "../../../../common/types/equipment-accounting";
import {Column, DataType, ForeignKey} from "sequelize-typescript";
import {SummaryListOfEquipmentEntity} from "../entities";

export class CreateExportToAtlasDto implements ExportToAtlasCreateOrUpdateAttrs {

  @ApiProperty({example: 1, description: "Уникальный идентификатор единицы оборудования"})
readonly  sloeId: number;

  @ApiProperty({example: 1, description: "Флаг синхронизации"})
  readonly sync_flag: number;

  @ApiProperty({example: "", description: "Наименование ДО"})
  readonly company: string;

  @ApiProperty({example: "", description: "Структурное подразделение"})
  readonly subdivision: string;

  @ApiProperty({example: "", description: "Месторождение"})
  readonly field: string;

  @ApiProperty({example: "", description: "Производственная площадка (объект)"})
  readonly facility: string;

  @ApiProperty({example: "", description: "Технологическая установка (система)"})
  readonly prod_area: string;

  @ApiProperty({example: "", description: "Место установки"})
  readonly place_install: string;

  @ApiProperty({example: "", description: "Позиционное обозначение по проекту (тэг)"})
  readonly position_tag: string;

  @ApiProperty({example: "", description: "Участие в СБиПАЗ (ПАЗ, РСУ)"})
  readonly partic_sbpaz: string;

  @ApiProperty({example: "", description: "Измеряемый параметр"})
  readonly phys_quantity: string;

  @ApiProperty({example: "", description: "Уточнение"})
  readonly clarification: string;

  @ApiProperty({example: "", description: "Вид (СИ, СА)"})
  readonly category: string;

  @ApiProperty({example: "", description: "Наименование оборудования"})
  readonly name: string;

  @ApiProperty({example: "", description: "Тип"})
  readonly type_eq: string;

  @ApiProperty({example: "", description: "Модель, модификация"})
  readonly model_eq: string;

  @ApiProperty({example: "Российская Федерация", description: "Страна производитель"})
  readonly country: string;

  @ApiProperty({example: "", description: "Фирма производитель"})
  readonly factory: string;

  @ApiProperty({example: "", description: "Вид взрывозащиты"})
  readonly type_protection: string;

  @ApiProperty({example: "", description: "Зав. №"})
  readonly sn: string;

  @ApiProperty({example: "", description: "Дата выпуска"})
  readonly prod_dt: Date;

  @ApiProperty({example: "", description: "Срок эксплуатации (по паспорту)"})
  readonly life_time: string;

  @ApiProperty({example: "", description: "Тип элемента в составе СИ"})
  readonly set_type: string;

  @ApiProperty({example: "", description: "Зав. № элемента"})
  readonly set_sn: string;

  @ApiProperty({example: "", description: "Вид работ для СИ (поверка/ калибровка)"})
  readonly actual_mc: string;

  @ApiProperty({example: "", description: "Дата последней поверки / калибровки"})
  readonly dt: Date;

  @ApiProperty({example: "", description: "МПИ"})
  readonly m_range: string;

  @ApiProperty({example: "", description: "Дата следующей поверки / калибровки"})
  readonly dt_next: Date;

  @ApiProperty({example: "", description: "Вид документа по результатам поверки / калибровки (СП, ИН, СК, паспорт, клеймо)"})
  readonly type_doc: string;

  @ApiProperty({example: "", description: "№ документа по результатам поверки / калибровки"})
  readonly number_doc: string;

  @ApiProperty({example: "", description: "Организация, выполнившая поверку / калибровку"})
  readonly organization: string;

  @ApiProperty({example: "", description: "Предел измерения от"})
  readonly low_limit: string;

  @ApiProperty({example: "", description: "Предел измерения до"})
  readonly upper_limit: string;

  @ApiProperty({example: "", description: "Ед. измерения"})
 readonly  units: string;

  @ApiProperty({example: "", description: "Погрешность, класс точности"})
  readonly acc: string;

  @ApiProperty({example: "", description: "Номер в гос. Реестре СИ"})
  readonly num_registry: string;

  @ApiProperty({example: "", description: "Методика поверки"})
  readonly method_mc: string;

  @ApiProperty({example: "", description: "Область измерений"})
 readonly measur_area: string;

  @ApiProperty({example: "", description: "Вид измерений"})
  readonly type_measur: string;

  @ApiProperty({example: "", description: "Группа (для СИ)"})
  readonly group_eq: string;

  @ApiProperty({example: "", description: "Сфера гос.регулирования"})
  readonly sgroei: string;

  @ApiProperty({example: "", description: "Примечание"})
  readonly remark: string;

  @ApiProperty({example: "", description: "Текущее состояние"})
  readonly actual_tech_condition: string;

  @ApiProperty({example: "", description: "Удалёность объекта, дистанция (км)"})
  readonly distance: number;

  @ApiProperty({example: "", description: "Договор (Код услуги/наименование)"})
  readonly contract: string;

  @ApiProperty({example: "", description: "Принадлежность к ОПО"})
  readonly opo: string;

  @ApiProperty({example: "", description: "Признак РПО"})
  readonly rpo: number;

  @ApiProperty({example: "", description: "Признак эксплуатации"})
  readonly flag_rtk: number;

  @ApiProperty({example: "", description: "Тех.Карты (Номер каталога/номер карты)"})
  readonly tko: string;

  @ApiProperty({example: "", description: "Путь к документу со сведениями о поверке/калибровке"})
  readonly path_to_doc: string;

  @ApiProperty({example: "", description: "Путь к файлу методики поверки"})
  readonly path_to_method_mc: string;

  @ApiProperty({example: "", description: "Путь к файлу св-ва об утв. типа СИ"})
  readonly path_to_type_app_cert: string;

}