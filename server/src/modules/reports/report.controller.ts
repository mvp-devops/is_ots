import {
  Controller,
  Get
} from "@nestjs/common";
import {ReportService} from "./report.service";
import {reportRows} from "./tests/test.data";
import {ReportView} from "../../../common/types/report.types";

@Controller("api/report")
export class ReportController {
  constructor(
    private readonly service: ReportService
  ) {}


  // @Get()
  // createReport(): ReportView {
  //   return this.service.createReport(reportRows, 167*5);
  // }

}