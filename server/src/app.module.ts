import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MulterModule } from "@nestjs/platform-express";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import {
  CommentAccountingModule,
  DesignDocumentCommentEntity,
  CapitalConstructionUnitSupervisionCommentEntity,
  DesignDocumentSolutionEntity,
} from "./modules/comment-accounting";

import {
  FacilityEntity,
  SummaryListOfEquipmentEntity,
  CableLogEntity,
  ImpulseLineLogEntity,
  SignalEntity,
  MetrologyEntity,
  MonitoringEntity,
  EquipmentAccountingModule,
} from "./modules/equipment-accounting";

import {
  FileStorageModule,
  LogoEntity,
  NormativeEntity,
  DesignDocumentEntity,
} from "./modules/file-storage";

import {
  PositionTreeModule,
  SubsidiaryEntity,
  FieldEntity,
  ProjectEntity,
  UnitEntity,
  SubUnitEntity,
} from "./modules/position-tree";

import {
  CounterpartyEntity,
  DesignEntity,
  EquipmentEntity,
  DirectionEntity,
  CriticalityEntity,
  UserEntity,
  SectionEntity,
  StageEntity,
  RegulatoryReferenceInformationModule,
  TechnicalCardEntity,
  TechnicalCardOperationEntity,
} from "./modules/regulatory-reference-information";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, "..", "..", `.development.env`),
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "file-storage"),
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST || "http://localhost",
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "541229",
      database: process.env.DB_DATABASE || "ots_test",
      logging: false,
      autoLoadModels: true,
      // synchronize: true,
      models: [
        CapitalConstructionUnitSupervisionCommentEntity,
        DesignDocumentCommentEntity,
        DesignDocumentSolutionEntity,
        FacilityEntity,
        SummaryListOfEquipmentEntity,
        CableLogEntity,
        ImpulseLineLogEntity,
        SignalEntity,
        MetrologyEntity,
        MonitoringEntity,
        LogoEntity,
        SectionEntity,
        StageEntity,
        NormativeEntity,
        DesignDocumentEntity,
        SubsidiaryEntity,
        FieldEntity,
        ProjectEntity,
        UnitEntity,
        SubUnitEntity,
        CounterpartyEntity,
        DesignEntity,
        EquipmentEntity,
        DirectionEntity,
        CriticalityEntity,
        TechnicalCardEntity,
        TechnicalCardOperationEntity,
        UserEntity,
      ],
    }),
    CommentAccountingModule,
    EquipmentAccountingModule,
    PositionTreeModule,
    FileStorageModule,
    RegulatoryReferenceInformationModule,
    MulterModule.register({
      // dest: `.${process.env.NODE_ENV}.env`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
