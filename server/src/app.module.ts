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
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      logging: false,
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
    // MulterModule.register({
    //   dest: `.${process.env.NODE_ENV}.env`,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
