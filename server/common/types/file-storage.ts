import { DesignDocumentCommentView } from "./comments-accounting";
import {ApiProperty} from "@nestjs/swagger";
import {Column, DataType} from "sequelize-typescript";


export interface File  extends Express.Multer.File {};

export enum FileTypes {
  "JSON" = "JSON",
  "PDF" = "PDF",
  "XLS" = "XLS",
  "XLSX" = "XLSX",
  "DOC" = "DOC",
  "DOCX" = "DOCX"
}

export interface DocumentCreateOrUpdateAttrs {
  multiple?: boolean;
  code?: string;
  title?: string;
  revision?: number;
  description?: string;
  document?: File;
  descriptor?: File
  documents?: File[]
}

export interface NormativeView {
  readonly id: number;
  readonly code: string;
  readonly title: string;
  readonly revision: string;
  readonly fileType: string;
  readonly filePath: string;
  readonly fileName: string;
  readonly description: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface FileProperties {
  destination?: string;  //путь к файлу в хранилище
  fileName: string; //имя файла для записи в БД
  nameWithoutExt: string; // имя файла без расширения
  extName: string;  //расширение файла
  size: string; //размер файла
  mimeType: string // тип заголовка ответа HTTP-запроса
  buffer: Buffer // содержимое файла
}




export interface LogoCreationAttrs {
  subsidiaryId: number | string | null;
  counterpartyId: number | string | null;
  designId: number | string | null;
  userId: number | string | null;
  filePath: string;
  fileName: string;
  fileType: string;
}



export interface DesignDocumentCreateOrUpdateAttrs extends NormativeCreateOrUpdateAttrs{
  projectId: string | number | null;
  unitId: string | number | null;
  subUnitId: string | number | null;
  supplierId: string | number | null;
  stageId: string | number | null;
  sectionId: string | number | null;
  uqstId: string | number | null;
  suqstId: string | number | null;
  sloeId: string | number | null;
  cableLogId: string | number | null;
  monitoringId: string | number | null;
  file?: any;
}

export interface OperationalDocumentCreateOrUpdateAttrs {
  sloeId: string | number | null;
  metrologyDocumentId: string | number | null;
  verificationProcedureId: string | number | null;
  typeApprovalCertificateId: string | number | null;
  mountDocumentId: string | number | null;
  connectDocumentId: string | number | null;
  testDocumentId: string | number | null;
  awpDocumentId: string | number | null;
  commisionDocumentId: string | number | null;
  title: string;
  description: string;
  filePath: string;
  fileName: string;
  fileType: string;
  file?: any;
}

export interface OperationalDocumentView {
  sloeId: string | number | null;
  metrologyDocumentId: string | number | null;
  verificationProcedureId: string | number | null;
  typeApprovalCertificateId: string | number | null;
  mountDocumentId: string | number | null;
  connectDocumentId: string | number | null;
  testDocumentId: string | number | null;
  awpDocumentId: string | number | null;
  commisionDocumentId: string | number | null;
  title: string;
  description: string;
  filePath: string;
  fileName: string;
  fileType: string;
  file: any;
}

export interface NormativeCreateOrUpdateAttrs {
  code: string;
  title: string;
  revision: string;
  description: string;
  filePath: string;
  fileName: string;
  fileType: string;
}

export interface DesignDocumentView {
  id: string;
  projectId: string | number | null;
  projectTitle: string;
  unitId: string | number | null;
  unitTitle: string;
  subUnitId: string | number | null;
  subUnitTitle: string;
  stageId: string | number | null;
  stageTitle: string;
  sectionId: string | number | null;
  sectionTitle: string;
  supplierId: string | number | null;
  supplierTitle: string;
  code: string;
  title: string;
  revision: string;
  description: string;
  filePath: string;
  fileName: string;
  fileType: string;
  createdAt: string;
  updatedAt: string;
  comments: DesignDocumentCommentView[];
}

export interface FacilityDocumentCreateOrUpdateAttrs {
  sloeId: string | number | null;
  counterpartyId: string | number | null;
  title: string;
  filePath: string;
  file: any;
}