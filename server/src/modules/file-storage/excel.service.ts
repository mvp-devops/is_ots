import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { join } from "path";
import { Workbook, Font, Alignment } from "exceljs";

import { setCurrentDate } from "../../../common/utils";
import { NsiEntries } from "../../../common/types/regulatory-reference-information";
import { DesignDocumentCommentView } from "../../../common/types/comments-accounting";

@Injectable()
export class ExcelService {
  exportNsiToExcel = async (target: string, data: any[]) => {
    const workBook = new Workbook();
    const sheet = workBook.addWorksheet("data");

    const tableFontStyle: Partial<Font> = {
      name: "Arial",
      size: 12,
    };
    const alignCenter: Partial<Alignment> = {
      vertical: "middle",
      horizontal: "left",
    };

    const idColumn = {
      header: "#",
      key: "id",
      type: Number,
      width: 10,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const titleColumn = {
      header: "Наименование",
      key: "title",

      width: 150,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const weightColumn = {
      header: "Вес",
      key: "code",
      type: Number,
      width: 15,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const codeColumn = {
      header: "Шифр",
      key: "code",
      width: 20,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const thresholdColumn = {
      header: "Порог",
      key: "threshold",
      type: Number,
      width: 15,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const goalColumn = {
      header: "Цель",
      key: "goal",
      type: Number,
      width: 15,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const tenseGoalColumn = {
      header: "Амцель",
      key: "tenseGoal",
      type: Number,
      width: 15,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    const descriptionColumn = {
      header: "Примечание",
      key: "description",
      width: 50,
      style: { font: tableFontStyle, alignment: alignCenter },
    };

    switch (target) {
      case "criticality": {
        sheet.columns = [
          idColumn,
          titleColumn,
          weightColumn,
          thresholdColumn,
          goalColumn,
          tenseGoalColumn,
          descriptionColumn,
        ];
        break;
      }

      case "counterparty":
      case "design":
      case "direction":
      case "equipment":
      case "section":
      case "stage": {
        sheet.columns = [idColumn, titleColumn, codeColumn, descriptionColumn];
        break;
      }

      default:
        break;
    }

    if (!data) {
      throw new NotFoundException("Отсутствует данные");
    }

    data
      .sort((a, b) => (a.id < b.id ? -1 : 0))
      .map((item: NsiEntries) => {
        sheet.addRow(item);
      });

    const filePath: string = join(
      __dirname,
      "..",
      "..",
      "..",
      "file-storage",
      "imports"
    );

    const fileName = `${target}_import_${setCurrentDate()}.xlsx`;

    await workBook.xlsx
      .writeFile(`${filePath}/${fileName}`)
      .then((_) => `${filePath}/${fileName}`)
      .catch((err) => {
        throw new BadRequestException(err);
      });

    const fileLocation = `${filePath}/${fileName}`;

    return fileLocation;
  };

  exportCollectiveCheckSheet = async (data: DesignDocumentCommentView) => {
    const workBook = new Workbook();
    const sheet = workBook.addWorksheet("ЛКП");
  };
}
