import {
  Column,
  DataType,
  HasMany,
  BelongsTo,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { UnitCreationAttrs } from "../../../../../common/types/position-tree";

@Table({ tableName: "units" })
export class UnitEntity extends Model<UnitEntity, UnitCreationAttrs> {}
