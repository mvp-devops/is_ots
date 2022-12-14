// company: string; //sloe.subUnit.unit.project.field.subsidiary.title
// subdivision: string; //у нас нет ставим н/д
// field: string; //sloe.subUnit.unit.project.field.title
// facility: string; //sloe.subUnit.unit.title
// prod_area: string; //sloe.subUnit.title
// place_install: string; //installationLocation
// position_tag: string; //tag
// partic_sbpaz: string;//systemType.includes("ПАЗ") ? "Да" : "Нет"
// phys_quantity: string; // измеряемый параметр в зависимости от вида измерений прописывать
// clarification: string; //controlledParameter
// category: string; //facility.equipmentType
// type_protection: string; //explosionMark - ручной ввод??
// sn: string;   // factoryNumber
// prod_dt: Date; // new Date(year, month)
// life_time: number; // +period/12
// set_type: string; //у нас нет ставим н/д
// set_sn: string; //у нас нет ставим н/д
// actual_mc: string; //metrology.metrologyType
// dt: Date; // metrology.fromDate
// dt_next: Date; // metrology.toDate
// m_range: string; //metrology.mpi
// type_doc: string; //metrology.documentType
// number_doc: string; //metrology.documentNumber
// num_registry: string; // metrology.grsi
// name: string; // facility.title - например массовый расходомер
// type_eq: string; // нужно подумать конкретная модель оборудования
// model_eq: string; //facilityModification
// method_mc: string; //metrology.verificationProcedure
// country: string; //facility.country
// factory: string; //facility.vendor
// measur_area: string; //facility.meansurementArea
// group_eq: string; //facility.meansureGroup
// organization: string; //metrology.counterparty.title
// low_limit: string; //metrology.min
// upper_limit: string; //metrology.max
// units: string;//metrology.range
// acc: string; //metrology.accuracy
// type_measur: string; //facility.meansurementType
// sgroei: string; //metrology.sgroei
// remark: string; // примечание
// actual_tech_condition: string; //metrology.status
// distance: string; //удаленность объекта у нас нет
// contract: string; //договор у нас нет
// opo: string; // ОПО у нас нет
// rpo: number; //0 или 1 Признак РПО
// flag_rtk:number; //0 или 1 Признак эксплуатации
// tko: string; //Тех карта МО/ТО
// path_to_doc: string; //путь к документу
// path_to_method_mc: string; // путь к методике поверки
// path_to_type_app_cert: string // путь к СоП

import { Column, DataType,  Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import {AtlasCreateOrUpdateAttrs} from "../../../../../common/types/equipment-accounting";

@Table({ tableName: "atlas-exports" })
export class ExportToAtlasEntity extends Model<
  ExportToAtlasEntity,
  AtlasCreateOrUpdateAttrs
  > {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор",
  })
  @Column({
    type: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({
    example: "",
    description: "Наименование ДО",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company: string;

  @ApiProperty({
    example: "",
    description: "Структурное подразделение",
  })
  @Column({
    type: DataType.STRING,
  })
  subdivision: string;

  @ApiProperty({
    example: "",
    description: "Месторождение",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  field: string;

  @ApiProperty({
    example: "",
    description: "Производственная площадка (объект)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  facility: string;

  @ApiProperty({
    example: "",
    description: "Технологическая установка (система)",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prod_area: string;

  @ApiProperty({example: "", description: "Место установки"})
  @Column({type: DataType.STRING})
  place_install: string;

  @ApiProperty({example: "", description: "Позиционное обозначение по проекту (тэг)"})
  @Column({type: DataType.STRING})
  position_tag: string;

  @ApiProperty({example: "", description: "Участие в СБиПАЗ (ПАЗ, РСУ)"})
  @Column({type: DataType.STRING})
  partic_sbpaz: string;

  @ApiProperty({example: "", description: "Измеряемый параметр"})
  @Column({type: DataType.STRING})
  phys_quantity: string;

  @ApiProperty({example: "", description: "Уточнение"})
  @Column({type: DataType.STRING})
  clarification: string;

  @ApiProperty({example: "", description: "Вид (СИ, СА)"})
  @Column({type: DataType.STRING})
  category: string;

  @ApiProperty({example: "", description: "Наименование оборудования"})
  @Column({type: DataType.STRING})
  name: string;

  @ApiProperty({example: "", description: "Тип"})
  @Column({type: DataType.STRING})
  type_eq: string;

  @ApiProperty({example: "", description: "Модель, модификация"})
  @Column({type: DataType.STRING})
  model_eq: string;

  @ApiProperty({example: "Российская Федерация", description: "Страна производитель"})
  @Column({type: DataType.STRING})
  country: string;

  @ApiProperty({example: "", description: "Фирма производитель"})
  @Column({type: DataType.STRING})
  factory: string;

  @ApiProperty({example: "", description: "Вид взрывозащиты"})
  @Column({type: DataType.STRING})
  type_protection: string;

}