export interface CommentAccountingNSIView {
  id: number | string;
  title: string;
  code: number | string;
  description: string;
}

export interface DesignDocumentCommentSolutionCreationAttrs {
  commentId: number | string;
  userId: number | string;
  statusId: number | string;
  answer: string;
  solutionId: number | string;
  solution: string;
}

export interface DesignDocumentCommentSolutionView {
  statusId: number | string;
  answer: string;
  designContacts: string;
  solutionId: number | string;
  solution: string;
  expertContacts: string;
}

export interface DesignDocumentCommentCreationAttrs {
  projectDocumentId: number | string | null;
  unitDocumentId: number | string | null;
  subUnitDocumentId: number | string | null;
  supplierDocumentId: number | string | null;
  directionId: number | string | null;
  normativeId: number | string | null;
  userId: number | string | null;
  criticalityId: number | string | null;
  comment: string;
}

export interface DesignDocumentCommentView {
  number: number | string;
  documentSection: string; // марка/раздел документации
  documentCode: string;
  documentTitle: string;
  documentPage: number | string;
  comment: string;
  normative: string; // наименование нормативного документа
  criticalityId: number | string;
  expertSubdivision: string;
  expertContacts: string;
  solutions: DesignDocumentCommentSolutionView[];
}

export interface DesignDocumentCommentRequestData {
  projectCode: string;
  projectTitle: string;
  unitPosition: string | null;
  unitTitle: string | null;
  unitQuestionareTitle: string | null; // Наименование ОЛ, ТТ, ТТТ
  subUnitPosition: string | null;
  subUnitTitle: string | null;
  subUnitQuestionareTitle: string | null; // Наименование ОЛ, ТТ, ТТТ
  view: DesignDocumentCommentView[];
}

export interface CapitalConstructionUnitSupervisionCommentCreationAttrs {
  projectId: number | string | null;
  unitId: number | string | null;
  subUnitId: number | string | null;
  directionId: number | string | null;
  normativeId: number | string | null;
  userId: number | string | null;
  criticalityId: number | string | null;
  comment: string;
}
