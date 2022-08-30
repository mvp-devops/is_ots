export interface CommentAccountingNSIView {
  id: number | string;
  title: string;
  code: number | string;
  description: string;
}

export interface DesignDocumentCommentSolutionCreationAttrs {
  key: string;
  commentId: string | number;
  userId: string | number;
  statusId: string | number;
  answer: string;
  designContacts: string;
  solutionId: string | number;
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
  pdcId: string | number | null;
  udcId: string | number | null;
  sudcId: string | number | null;
  sdcId: string | number | null;
  directionId: string | number | null;
  normativeId: string | number | null;
  userId: string | number | null;
  criticalityId: string | number | null;
  comment: string;
  solutions: DesignDocumentCommentSolutionCreationAttrs[];
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

export interface CheckListCoefficient {
  count: number;
  eliminated: number;
  coef: number;
  reductionFactor: number;
  feedbackFactor: number;
  result: number;
}

export interface CheckListCommentCriterions {
  count: number;
  eliminated: number;
}

export interface CheckListDocumentCriterions
  extends CheckListCommentCriterions {
  criticalityTitle: string;
}

export interface CheckListCriticalityCriterions
  extends CheckListDocumentCriterions {
  weight: number;
  coef: number;
  reductionFactor: number;
  feedbackFactor: number;
  result: number;
}

export interface CheckListStageCriterions {
  stageTitle: string;
  stageTotal: number;
  criterions: CheckListCriticalityCriterions[];
}

interface CheckListSettings {
  stage: CommentAccountingNSIView;
  stageFactor: string | number;
  criticalities: CommentAccountingNSIView[];
  tenseGoal: string;
  goal: string;
  threshold: string;
}

export interface CheckListSets {
  satisfactorily: number;
  okay: number;
  great: number;
  settings: CheckListSettings[];
}

export interface ProjectCheckListView {
  design: string;
  code: string;
  title: string;
  contract: string;
  user: string;
  date: string;
  result: number;
  grade: string;
  criterions: CheckListStageCriterions[];
}

export interface UnitCheckListView {
  supplier: string;
  code: string;
  title: string;
  contract: string;
  user: string;
  date: string;
  result: number;
  grade: string;
  criterions: CheckListStageCriterions[];
}
