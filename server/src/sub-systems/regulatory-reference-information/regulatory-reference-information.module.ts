import { Module } from "@nestjs/common";
import { RegulatoryReferenceInformationController } from "./regulatory-reference-information.controller";
import { RegulatoryReferenceInformationService } from "./regulatory-reference-information.service";

@Module({
  controllers: [RegulatoryReferenceInformationController],
  providers: [RegulatoryReferenceInformationService],
})
export class RegulatoryReferenceInformationModule {}
