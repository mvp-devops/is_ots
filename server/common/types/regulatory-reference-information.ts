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

export interface UserCreateOrUpdateAttrs {
  subsidiaryId: string | number | null;
  designId: string | number | null;
  counterpartyId: string | number | null;
  fieldId: string | number | null;
  firstName: string;
  secondName: string;
  lastName: string;
  subdivision: string;
  position: string;
  email: string;
  phone: string;
  password: string;
  file: any;
}
