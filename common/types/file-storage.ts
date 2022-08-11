export interface LogoCreationAttrs {
  subsidiaryId: number | string | null;
  counterpartyId: number | string | null;
  designId: number | string | null;
  userId: number | string | null;
  filePath: string;
  fileName: string;
  fileType: string;
}

export interface DesignDocumentCreateOrUpdateAttrs {
  projectId: string | number | null;
  unitId: string | number | null;
  subUnitId: string | number | null;
  supplierId: string | number | null;
  stageId: string | number;
  sectionId: string | number;
  code: string;
  title: string;
  revision: string;
  description: string;
  file: any;
}
