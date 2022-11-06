export interface Remarks {
  issued: number; //выдано
  repeated: number; //повторно
  critical: number; //критично
  eliminated: number; //снято
}
export interface ReportRow {
  index?: string; //номер п/п
  date: string; //дата выдачи замечаний
  code: string; //шифр проекта
  title: string; //наименование проекта
  documents: string; //наименование объекта проектирования/строительства, документа/документов
  typeOfWork: string; //вид работ
  remarks: Remarks; // замечания;
  laborCosts?: number; //трудозатраты
}

export interface SignerData {
  position: string;
  fio: string;
}

export interface ReportView {
  fields: string[];
  direction: string; //Промышленная автоматизация или Метрологическое обеспечение
  period: string; //Месяц ГГГГ г.
  rows: ReportRow[]; //Строки отчета
  totalRemarks: Remarks; // Суммарные замечания;
  costs: number; //Трудозатраты;
  customer: SignerData; //Заказчик
  executor: SignerData; //Исполнитель
}

export interface ReportRequestParams {
  direction: string;
  period: string;
  costs: number;
  customerPosition: string;
  customerFio: string;
  executorPosition: string;
  executorFio: string;
}