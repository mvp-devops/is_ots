export interface CommentAccountingNSIView {
  id: number | string;
  title: string;
  code: number | string;
  description: string;
}

export interface DesignDocumentCommentSolutionCreationAttrs {
  date: Date;
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
  projectDocumentId: number | string;
  unitDocumentId: number | string;
  subUnitDocumentId: number | string;
  supplierDocumentId: number | string;
  directionId: number | string;
  normativeId: number | string;
  userId: number | string;
  criticalityId: number | string;
  comment: string;
  solutions: DesignDocumentCommentSolutionCreationAttrs[] | null;
}

export interface DesignDocumentCommentView {
  projectCode: string;
  projectTitle: string;
  unitPosition: string | null;
  unitTitle: string | null;
  unitQuestionareTitle: string | null; // Наименование ОЛ, ТТ, ТТТ
  subUnitPosition: string | null;
  subUnitTitle: string | null;
  subUnitQuestionareTitle: string | null; // Наименование ОЛ, ТТ, ТТТ

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
  id: number | string;
  date: Date;
  view: DesignDocumentCommentView;
}
