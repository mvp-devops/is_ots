import {
  CreateCriticalityDto,
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
  CreateTechnicalCardDto,
  CreateUserDto,
} from "./create-regulatory-reference-information.dto";
import {
  UpdateCriticalityDto,
  UpdateDesignOrCounterpartyDto,
  UpdateNSIDto,
  UpdateUserDto,
} from "./update-regulatory-reference-information.dto";

type CreateRegulatoryReferenceInformationDto =
  | CreateDesignOrCounterpartyDto
  | CreateNSIDto
  | CreateCriticalityDto
  | CreateUserDto
  | CreateTechnicalCardDto;

type UpdateRegulatoryReferenceInformationDto =
  | UpdateDesignOrCounterpartyDto
  | UpdateNSIDto
  | UpdateCriticalityDto
  | UpdateUserDto;

export type {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
};
