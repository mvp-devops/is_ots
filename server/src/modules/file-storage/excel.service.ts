import {
  BadRequestException, forwardRef, Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {join} from "path";
import * as uuid from "uuid";
import {Workbook, Font, Alignment} from "exceljs";

import {setCurrentDate} from "../../../common/utils";
import {NsiEntries} from "../../../common/types/regulatory-reference-information";
import {
  CollectiveCheckSheetHeaders,
  DesignDocumentCommentView,
} from "../../../common/types/comments-accounting";

import { readFile, utils } from "xlsx"
import {File} from "../../../common/types/file-storage";
import {NewFileStorageService} from "./new-file-storage.service";

// const readFile = xlsx.readFile;
// const sheetToJSON = xlsx.utils.sheet_to_json;

@Injectable()
export class ExcelService {
  constructor(
    @Inject(forwardRef(() => NewFileStorageService))
    private fileStorageService: NewFileStorageService) {}

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
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const titleColumn = {
      header: "Наименование",
      key: "title",

      width: 150,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const weightColumn = {
      header: "Вес",
      key: "code",
      type: Number,
      width: 15,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const codeColumn = {
      header: "Шифр",
      key: "code",
      width: 20,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const thresholdColumn = {
      header: "Порог",
      key: "threshold",
      type: Number,
      width: 15,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const goalColumn = {
      header: "Цель",
      key: "goal",
      type: Number,
      width: 15,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const tenseGoalColumn = {
      header: "Амцель",
      key: "tenseGoal",
      type: Number,
      width: 15,
      style: {font: tableFontStyle, alignment: alignCenter},
    };

    const descriptionColumn = {
      header: "Примечание",
      key: "description",
      width: 50,
      style: {font: tableFontStyle, alignment: alignCenter},
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

    const fileName = `${uuid.v4()}.xlsx`;

    await workBook.xlsx.writeFile(`${filePath}/${fileName}`).catch((err) => {
      throw new BadRequestException(err);
    });

    const fileLocation = `${filePath}/${fileName}`;

    return fileLocation;
  };

  exportCollectiveCheckSheet = async (
    headers: CollectiveCheckSheetHeaders,
    data: DesignDocumentCommentView[]
  ) => {
    const workBook = new Workbook();

    const templateFilePath = join(
      __dirname,
      "..",
      "..",
      "..",
      "file-storage",
      "templates"
    );

    const templateFileName = "collective-check-sheet.xlsx";

    const outputFilePath = join(
      __dirname,
      "..",
      "..",
      "..",
      "file-storage",
      "imports"
    );

    const outputFileName = `${uuid.v4()}.xlsx`;

    const {
      projectTitleRender,
      unitTitleRender,
      unitQuestionareRender,
      subUnitTitleRender,
      subUnitQuestionareRender,
    } = headers;

    await workBook.xlsx
      .readFile(`${templateFilePath}\\${templateFileName}`)
      .then(async () => {
        const workSheet = workBook.getWorksheet(1);

        const projectTitleRow = workSheet.getRow(4);
        projectTitleRow.getCell("E").value = projectTitleRender;

        const unitTitleRow = workSheet.getRow(5);
        unitTitleRow.getCell("B").value = unitTitleRender
          ? "Объект строительства:"
          : null;
        unitTitleRow.getCell("E").value = unitTitleRender
          ? unitTitleRender
          : null;

        const unitQuestionareRenderRow = workSheet.getRow(6);
        unitQuestionareRenderRow.getCell("B").value = unitQuestionareRender
          ? "ОЛ, ТТ, ТЗ:"
          : null;
        unitQuestionareRenderRow.getCell("E").value = unitQuestionareRender
          ? `${unitQuestionareRender.code}. ${unitQuestionareRender.title}`
          : null;

        const subUnitTitleRow = workSheet.getRow(7);
        subUnitTitleRow.getCell("B").value = subUnitTitleRender
          ? "Установка/объект:"
          : null;
        subUnitTitleRow.getCell("E").value = subUnitTitleRender
          ? subUnitTitleRender
          : null;

        const subUnitQuestionareRenderRow = workSheet.getRow(8);
        subUnitQuestionareRenderRow.getCell("B").value =
          subUnitQuestionareRender ? "ОЛ, ТТ, ТЗ:" : null;
        subUnitQuestionareRenderRow.getCell("E").value =
          subUnitQuestionareRender
            ? `${subUnitQuestionareRender.code}. ${subUnitQuestionareRender.title}`
            : null;

        data.map((item, index) => {
          const {
            id,
            documentSection,
            documentCode,
            documentTitle,
            documentPage,
            comment,
            normative,
            criticalityId,
            expertSubdivision,
            expertContacts,
            solutions,
          } = item;

          const row = workSheet.getRow(14 + index);
          row.getCell("B").value = id;
          row.getCell("C").value = documentSection;
          row.getCell("D").value = documentCode;
          row.getCell("E").value = documentTitle;
          row.getCell("F").value = documentPage;
          row.getCell("G").value = comment;
          row.getCell("H").value = normative;
          row.getCell("I").value = criticalityId;
          row.getCell("J").value = expertSubdivision;
          row.getCell("K").value = expertContacts;
        });
      })
      .then(() =>
        workBook.xlsx
          .writeFile(`${outputFilePath}\\${outputFileName}`)
          .catch((err) => {
            throw new BadRequestException(err);
          })
      );

    return `${outputFilePath}\\${outputFileName}`;
  };

  convertExcelFileToJson = (file: File) => {

    const {destination, fileName} = this.fileStorageService.fileUpload('temp', file);
    const pathToFile = this.fileStorageService.getPath([destination,fileName]);
    const fileData = readFile(pathToFile);
    const sheetNames = fileData.SheetNames;
    const totalSheets = sheetNames.length;
    let parsedData = [];

    for (let i = 0; i < totalSheets; i++) {
      const tempData = utils.sheet_to_json(fileData.Sheets[sheetNames[i]]);
      // tempData.shift();
      parsedData.push(...tempData);
    }
    this.fileStorageService.removeDirectoryOrFile(pathToFile)
    return parsedData
  }

  /** Для ЛКП */
  convertExcelFileToJson2 = (file: File) => {
    file.originalname = "temp_import.xlsx";

    const {destination, fileName} = this.fileStorageService.fileUpload('temp', file);
    const pathToFile = this.fileStorageService.getPath([destination,fileName]);
    const fileData = readFile(pathToFile);
    const sheetNames = fileData.SheetNames;
    const totalSheets = sheetNames.length;
    let parsedData = [];

    const tempData = utils.sheet_to_json(fileData.Sheets[sheetNames[0]]);
    tempData.shift();
    tempData.shift();
    tempData.shift();
    tempData.shift();
    tempData.shift();
    parsedData.push(...tempData);

    // for (let i = 0; i < totalSheets; i++) {
    //   const tempData = utils.sheet_to_json(fileData.Sheets[sheetNames[i]]);
    //     tempData.shift();
    //     tempData.shift();
    //     tempData.shift();
    //     tempData.shift();
    //     tempData.shift();
    //   parsedData.push(...tempData);
    // }
    this.fileStorageService.removeDirectoryOrFile(pathToFile);
    return parsedData
  }

  /** Для Свода */
  convertExcelFileToJsonFromConsolidatedList = (file: File) => {
    file.originalname = "temp_import_consolidated_list.xlsx";

    const {destination, fileName} = this.fileStorageService.fileUpload('temp', file);
    const pathToFile = this.fileStorageService.getPath([destination,fileName]);
    const fileData = readFile(pathToFile);
    const sheetNames = fileData.SheetNames;
    const totalSheets = sheetNames.length;
    let parsedData = [];

    const tempData = utils.sheet_to_json(fileData.Sheets[sheetNames[0]]);
    tempData.shift();
    tempData.shift();

    parsedData.push(...tempData);

    this.fileStorageService.removeDirectoryOrFile(pathToFile);
    return parsedData
  }
}