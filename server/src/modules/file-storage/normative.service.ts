/*
** Шифр проектной документации по ГОСТ Р 21-101-2020. Основные требования к проектной и рабочей документации
** {шифр проекта/номер договора/код объекта}-
** {Шифр раздела (Приложение Б ГОСТ Р 21-101-2020} -
** {Раздел {Номер раздела}. {Наименование}}.
** [{Подраздел {Номер подраздела}. {Наименование}}].
** [{Часть {Номер части}}].
** [{Книга {Номер книги}}]
 */

/*
** Маска наименования нормативного документа: {Шифр} -- {Наименование} -- [{рев./в./версия/v./version} {Номер ревизии/версии документа}]
 */

import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {NormativeEntity} from "./entities";
import {NewFileStorageService} from "./new-file-storage.service";
import {File, NormativeCreateOrUpdateAttrs, NormativeView} from "../../../common/types/file-storage";
import {formattedDate} from "../../../common/utils/formatDate.pipe";
import {ExcelService} from "./excel.service";



@Injectable()
export class NormativeService {
  constructor(
    @InjectModel(NormativeEntity)
    private normativeRepository: typeof NormativeEntity,
    @Inject(forwardRef(() => NewFileStorageService))
    private fileStorageService: NewFileStorageService,
    @Inject(forwardRef(() => ExcelService))
    private excelService: ExcelService,
  ) {
  }

  private path = 'normative'

  normativeView = (item: NormativeEntity): NormativeView => {
    const {id, code, title, revision, description, filePath, fileName, fileType, createdAt, updatedAt} = item;

    return {
      id,
      code,
      title,
      revision,
      description,
      filePath,
      fileName,
      fileType,
      createdAt: formattedDate(createdAt, true),
      updatedAt: formattedDate(createdAt, true)
    }
  }

  uploadOneNormative = async (file: File, data?: NormativeCreateOrUpdateAttrs): Promise<NormativeView> => {
    try {
      const code = data ? data.code : undefined;
      const title = data ? data.title : undefined;
      const revision = data ? data.revision : undefined;
      const description = data ? data.description : undefined;

      const {fileName, nameWithoutExt, extName} = this.fileStorageService.fileUpload(this.path, file);

      const nameSpace = nameWithoutExt.split(".")
      const docCode = code ? code : nameSpace[0];
      const docTitle = title ? title : nameSpace[1];
      const docRevision = revision ? revision : nameSpace[2] ? nameSpace[2] : " ";

      const doc: NormativeCreateOrUpdateAttrs = {
        code: docCode,
        title: docTitle,
        revision: docRevision,
        description: description ? description : "",
        filePath: this.path,
        fileName,
        fileType: extName,
      }

      const item = await this.normativeRepository.create(doc);

      return this.normativeView(item)

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  uploadManyNormative = async (files: {descriptor: File, documents: File[]}): Promise<NormativeView[]> => {
    try {
      const {descriptor, documents} = files;
      const filesDescription: NormativeCreateOrUpdateAttrs[] = this.excelService.convertExcelFileToJson(descriptor[0]);


      const items: NormativeView[] = [];
     for(let i = 0, len = documents.length; i < len; i++) {
       const data = filesDescription[i]
       const file = documents[i];
       const item = await this.uploadOneNormative(file, data);
       items.push(item)
     }
      return items
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}