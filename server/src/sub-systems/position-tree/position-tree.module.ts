import { Module } from "@nestjs/common";
import { PositionTreeController } from "./position-tree.controller";
import { PositionTreeService } from "./position-tree.service";

@Module({
  controllers: [PositionTreeController],
  providers: [PositionTreeService],
})
export class PositionTreeModule {}
