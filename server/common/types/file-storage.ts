import { DesignDocumentCommentView } from "./comments-accounting";

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
  uqstId: string | number | null;
  suqstId: string | number | null;
  sloeId: string | number | null;
  cableLogId: string | number | null;
  monitoringId: string | number | null;
  code: string;
  title: string;
  revision: string;
  description: string;
  filePath: string;
  fileName: string;
  fileType: string;
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
  unitId?: string | number | null;
  unitTitle?: string;
  subUnitId?: string | number | null;
  subUnitTitle?: string;
  stageId: string | number | null;
  stageTitle: string;
  sectionId: string | number | null;
  sectionTitle: string;
  supplierId?: string | number | null;
  supplierTitle?: string;
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
