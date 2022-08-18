export interface RegulatoryReferenceInformation {}

export interface RegulatoryReferenceInformationCreationAttrs {
  title: string;
  code: number | string | null;
  description: string | null;
}

export interface DesignOrCounterpartyCreationAttrs
  extends RegulatoryReferenceInformationCreationAttrs {
  file: any;
}
