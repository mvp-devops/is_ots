import { Module } from "@nestjs/common";
import { FileStorageModule } from "../file-storage";
import { PositionTreeController } from "./position-tree.controller";
import { PositionTreeService } from "./position-tree.service";

@Module({
  controllers: [PositionTreeController],
  providers: [PositionTreeService],
  exports: [FileStorageModule],
})
export class PositionTreeModule {}
