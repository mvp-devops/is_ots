export interface RegulatoryReferenceInformationCreationAttrs {
  title: string;
  code: number | string | null;
  description: string | null;
}

export interface CriticalityCreationAttrs {
  title: string;
  code: number | string;
  description: string;
  threshold: number | string;

  goal: number | string;
  tenseGoal: number | string;
}

export interface NSIView {
  id: string | number;
  title: string;
  code: string;
  description: string;
  logo?: string | null;
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
  roles: string[];
  file?: File | null;
}

export interface UserView {
  id: string | number | null;
  subsidiaryId: string | number | null;
  subsidiaryTitle: string | null;
  designId: string | number | null;
  designTitle: string | null;
  counterpartyId: string | number | null;
  counterpartyTitle: string | null;
  fieldId: string | number | null;
  fieldTitle: string | null;
  firstName: string;
  secondName: string;
  lastName: string;
  subdivision: string;
  position: string;
  email: string;
  phone: string;
  roles: string[];
  token: string | null;
  avatar?: string | null;
}
