import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import {
  CommentAccountingModule,
  DesignDocumentCommentEntity,
  CapitalConstructionUnitSupervisionCommentEntity,
} from "./sub-systems/comment-accounting";

import {
  PositionTreeModule,
  SubsidiaryEntity,
  FieldEntity,
  ProjectEntity,
  UnitEntity,
  SubUnitEntity,
} from "./sub-systems/position-tree";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, "..", "..", `.development.env`),
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../file-storage"),
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST || "http://localhost",
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || "postgres",
      password: process.env.DB_PASSWORD || "541229",
      database: process.env.DB_DATABASE || "ots_test",
      // logging: false,
      autoLoadModels: true,
      synchronize: true,
      models: [
        SubsidiaryEntity,
        FieldEntity,
        ProjectEntity,
        UnitEntity,
        SubUnitEntity,
      ],
    }),
    PositionTreeModule,
    // MulterModule.register({
    //   dest: `.${process.env.NODE_ENV}.env`,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
