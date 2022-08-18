import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { LogoEntity } from "./entities";
import { FileStorageController } from "./file-storage.controller";
import { FileStorageService } from "./file-storage.service";

@Module({
  controllers: [FileStorageController],
  providers: [FileStorageService],
  exports: [FileStorageService],
  imports: [SequelizeModule.forFeature([LogoEntity])],
})
export class FileStorageModule {}
