import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import {ExportToAtlasCreateOrUpdateAttrs} from "../../../../../common/types/equipment-accounting";
import {SummaryListOfEquipmentEntity} from "./summary-list-of-facility.entity";

@Table({ tableName: "atlas-exports" })
export class ExportToAtlasEntity extends Model<
  ExportToAtlasEntity,
  ExportToAtlasCreateOrUpdateAttrs
  > {
  @ApiProperty({example: 1, description: "Уникальный идентификатор"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 1, description: "Уникальный идентификатор единицы оборудования"})
  @ForeignKey(() => SummaryListOfEquipmentEntity)
  @Column({type: DataType.INTEGER, allowNull: false})
  sloeId: number;

  @ApiProperty({example: 1, description: "Флаг синхронизации"})
  @Column({type: DataType.INTEGER, defaultValue: 0})
  sync_flag: number;

  @ApiProperty({example: "", description: "Наименование ДО"})
  @Column({type: DataType.STRING, allowNull: false,})
  company: string;

  @ApiProperty({example: "", description: "Структурное подразделение"})
  @Column({type: DataType.STRING})
  subdivision: string;

  @ApiProperty({example: "", description: "Месторождение"})
  @Column({type: DataType.STRING, allowNull: false})
  field: string;

  @ApiProperty({example: "", description: "Производственная площадка (объект)"})
  @Column({type: DataType.TEXT, allowNull: false})
  facility: string;

  @ApiProperty({example: "", description: "Технологическая установка (система)"})
  @Column({type: DataType.TEXT, allowNull: false})
  prod_area: string;

  @ApiProperty({example: "", description: "Место установки"})
  @Column({type: DataType.TEXT})
  place_install: string;

  @ApiProperty({example: "", description: "Позиционное обозначение по проекту (тэг)"})
  @Column({type: DataType.STRING})
  position_tag: string;

  @ApiProperty({example: "", description: "Участие в СБиПАЗ (ПАЗ, РСУ)"})
  @Column({type: DataType.STRING})
  partic_sbpaz: string;

  @ApiProperty({example: "", description: "Измеряемый параметр"})
  @Column({type: DataType.TEXT})
  phys_quantity: string;

  @ApiProperty({example: "", description: "Уточнение"})
  @Column({type: DataType.TEXT})
  clarification: string;

  @ApiProperty({example: "", description: "Вид (СИ, СА)"})
  @Column({type: DataType.STRING})
  category: string;

  @ApiProperty({example: "", description: "Наименование оборудования"})
  @Column({type: DataType.TEXT})
  name: string;

  @ApiProperty({example: "", description: "Тип"})
  @Column({type: DataType.TEXT})
  type_eq: string;

  @ApiProperty({example: "", description: "Модель, модификация"})
  @Column({type: DataType.TEXT})
  model_eq: string;

  @ApiProperty({example: "Российская Федерация", description: "Страна производитель"})
  @Column({type: DataType.STRING})
  country: string;

  @ApiProperty({example: "", description: "Фирма производитель"})
  @Column({type: DataType.TEXT})
  factory: string;

  @ApiProperty({example: "", description: "Вид взрывозащиты"})
  @Column({type: DataType.STRING})
  type_protection: string;

  @ApiProperty({example: "", description: "Зав. №"})
  @Column({type: DataType.STRING})
  sn: string;

  @ApiProperty({example: "", description: "Дата выпуска"})
  @Column({type: DataType.DATEONLY})
  prod_dt: Date;

  @ApiProperty({example: "", description: "Срок эксплуатации (по паспорту)"})
  @Column({type: DataType.STRING})
  life_time: string;

  @ApiProperty({example: "", description: "Тип элемента в составе СИ"})
  @Column({type: DataType.STRING})
  set_type: string;

  @ApiProperty({example: "", description: "Зав. № элемента"})
  @Column({type: DataType.STRING})
  set_sn: string;

  @ApiProperty({example: "", description: "Вид работ для СИ (поверка/ калибровка)"})
  @Column({type: DataType.STRING})
  actual_mc: string;

  @ApiProperty({example: "", description: "Дата последней поверки / калибровки"})
  @Column({type: DataType.DATEONLY})
  dt: Date;

  @ApiProperty({example: "", description: "МПИ"})
  @Column({type: DataType.STRING})
  m_range: string;

  @ApiProperty({example: "", description: "Дата следующей поверки / калибровки"})
  @Column({type: DataType.DATEONLY})
  dt_next: Date;

  @ApiProperty({example: "", description: "Вид документа по результатам поверки / калибровки (СП, ИН, СК, паспорт, клеймо)"})
  @Column({type: DataType.STRING})
  type_doc: string;

  @ApiProperty({example: "", description: "№ документа по результатам поверки / калибровки"})
  @Column({type: DataType.STRING})
  number_doc: string;

  @ApiProperty({example: "", description: "Организация, выполнившая поверку / калибровку"})
  @Column({type: DataType.TEXT})
  organization: string;

  @ApiProperty({example: "", description: "Предел измерения от"})
  @Column({type: DataType.STRING})
  low_limit: string;

  @ApiProperty({example: "", description: "Предел измерения до"})
  @Column({type: DataType.STRING})
  upper_limit: string;

  @ApiProperty({example: "", description: "Ед. измерения"})
  @Column({type: DataType.STRING})
  units: string;

  @ApiProperty({example: "", description: "Погрешность, класс точности"})
  @Column({type: DataType.STRING})
  acc: string;

  @ApiProperty({example: "", description: "Номер в гос. Реестре СИ"})
  @Column({type: DataType.STRING})
  num_registry: string;

  @ApiProperty({example: "", description: "Методика поверки"})
  @Column({type: DataType.TEXT})
  method_mc: string;

  @ApiProperty({example: "", description: "Область измерений"})
  @Column({type: DataType.TEXT})
  measur_area: string;

  @ApiProperty({example: "", description: "Вид измерений"})
  @Column({type: DataType.TEXT})
  type_measur: string;

  @ApiProperty({example: "", description: "Группа (для СИ)"})
  @Column({type: DataType.TEXT})
  group_eq: string;

  @ApiProperty({example: "", description: "Сфера гос.регулирования"})
  @Column({type: DataType.TEXT})
  sgroei: string;

  @ApiProperty({example: "", description: "Примечание"})
  @Column({type: DataType.TEXT})
  remark: string;

  @ApiProperty({example: "", description: "Текущее состояние"})
  @Column({type: DataType.STRING})
  actual_tech_condition: string;

  @ApiProperty({example: "", description: "Удалёность объекта, дистанция (км)"})
  @Column({type: DataType.FLOAT})
  distance: number;

  @ApiProperty({example: "", description: "Договор (Код услуги/наименование)"})
  @Column({type: DataType.TEXT})
  contract: string;

  @ApiProperty({example: "", description: "Принадлежность к ОПО"})
  @Column({type: DataType.STRING})
  opo: string;

  @ApiProperty({example: "", description: "Признак РПО"})
  @Column({type: DataType.INTEGER})
  rpo: number;

  @ApiProperty({example: "", description: "Признак эксплуатации"})
  @Column({type: DataType.INTEGER})
  flag_rtk: number;

  @ApiProperty({example: "", description: "Тех.Карты (Номер каталога/номер карты)"})
  @Column({type: DataType.STRING})
  tko: string;

  @ApiProperty({example: "", description: "Путь к документу со сведениями о поверке/калибровке"})
  @Column({type: DataType.TEXT})
  path_to_doc: string;

  @ApiProperty({example: "", description: "Путь к файлу методики поверки"})
  @Column({type: DataType.TEXT})
  path_to_method_mc: string;

  @ApiProperty({example: "", description: "Путь к файлу св-ва об утв. типа СИ"})
  @Column({type: DataType.TEXT})
  path_to_type_app_cert: string;

  @BelongsTo(() => SummaryListOfEquipmentEntity, { foreignKey: "sloeId" })
  sloe: SummaryListOfEquipmentEntity;
}