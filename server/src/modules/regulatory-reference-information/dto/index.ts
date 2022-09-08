import {
  CreateCriticalityDto,
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
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
  | CreateUserDto;

type UpdateRegulatoryReferenceInformationDto =
  | UpdateDesignOrCounterpartyDto
  | UpdateNSIDto
  | UpdateCriticalityDto
  | UpdateUserDto;

export {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
};
