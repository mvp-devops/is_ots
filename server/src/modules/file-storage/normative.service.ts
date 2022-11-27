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

//FIXME: комментарий для фиксации изменений
//TODO: комментарий для задачи

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
      updatedAt: formattedDate(updatedAt, true)
    }
  };

  findAllNormative = async (): Promise<NormativeView[]> => {
    try {
      const items = await this.normativeRepository.findAll();
      const data: NormativeView[] = [];
      for(let i =0, len = items.length; i < len; i++) {
        const item = items[i];
        data.push(this.normativeView(item))
      }
      return data;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  findOneNormative = async (id: string): Promise<NormativeView> => {
    try {
      const item = await this.normativeRepository.findOne({where: {id}});
      return this.normativeView(item);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  uploadOneNormative = async (data: any, file: File): Promise<NormativeView> => {
    try {

      const code = data ? data.code : undefined;
      const title = data ? data.title : undefined;
      const revision = data ? data.revision : undefined;
      const description = data ? data.description : undefined;

      const {fileName, nameWithoutExt, extName} = this.fileStorageService.fileUpload(this.path, file);

      const nameSpace = nameWithoutExt.split(".")
      const docCode = code ? code : nameSpace[0];
      const docTitle = title ? title : nameSpace[1].slice(1);
      const docRevision = revision ? revision : nameSpace[2].slice(1) ? nameSpace[2] : " ";

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
  };

  uploadManyNormative = async (data: any, files: {
      document?: File,
      descriptor?: File,
      documents?: File[]
    }): Promise<NormativeView[]> => {
    try {
      const {multiple} = data;
      const {descriptor, documents, document} = files;



   const flag = multiple === "true" ? true : false

      const items: NormativeView[] = [];
      if(flag) {

        const filesDescription: NormativeCreateOrUpdateAttrs[] = this.excelService.convertExcelFileToJson(descriptor[0]);

        for(let i = 0, len = documents.length; i < len; i++) {
          const data = filesDescription[i]
          const file = documents[i];
          const item = await this.uploadOneNormative(data, file);
          items.push(item)
        }

      } else {

        const item = await this.uploadOneNormative(data, document[0]);
        items.push(item)
      }
      return items

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeOneNormative = async (id: string): Promise<NormativeView> => {
    try {
      const item = await this.findOneNormative(id);
      if(item) {
        const {filePath, fileName} = item;
        const pathToFile = this.fileStorageService.getPath([filePath, fileName])
        await this.normativeRepository.destroy({where: {id}});
        this.fileStorageService.removeDirectoryOrFile(pathToFile)
      }
      return item;

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  removeManyNormative = async (ids: string): Promise<NormativeView[]> => {
    try {
      const params = JSON.parse(ids)
      let items: NormativeView[] = [];
      for(let i = 0, len = params.length; i < len; i++) {
        const id = params[i];
        const item = await this.removeOneNormative(id);
        items.push(item)
      }

      return items

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  };

  /* Сервис обновления данных нормативного документа */

  updateNormative = async (data: any, id: string, document?: File): Promise<NormativeView> => {
    try {
      let item = await this.findOneNormative(id);
      const {code, title,revision, description} = data;

      if(item) {
        const {
          code: oldCode,
          title: oldTitle,
          revision: oldRevision,
          description: oldDescription,
          fileType: oldFileType,
          filePath,
          fileName: oldFileName
        } = item;

        const doc: NormativeCreateOrUpdateAttrs = {
          code: code ? code : oldCode,
          title: title ? title : oldTitle,
          revision: revision ? revision : oldRevision,
          description: description ? description : oldDescription,
          filePath: this.path,
          fileName: oldFileName,
          fileType: oldFileType,
        }

        const oldFile = this.fileStorageService.getPath([filePath, oldFileName]);

        if(document) {
          this.fileStorageService.removeDirectoryOrFile(oldFile);
          const {fileName, extName} = this.fileStorageService.fileUpload(this.path, document);
          doc.fileName = fileName;
          doc.fileType = extName;
        }

        await this.normativeRepository.update(doc, {where: {id}});
        item = await this.findOneNormative(id);
      }
      return item;

    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}