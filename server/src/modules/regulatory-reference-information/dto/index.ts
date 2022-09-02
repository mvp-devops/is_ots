import {
  CreateCriticalityDto,
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
} from "./create-regulatory-reference-information.dto";
import {
  UpdateCriticalityDto,
  UpdateDesignOrCounterpartyDto,
  UpdateNSIDto,
} from "./update-regulatory-reference-information.dto";

type CreateRegulatoryReferenceInformationDto =
  | CreateDesignOrCounterpartyDto
  | CreateNSIDto
  | CreateCriticalityDto;

type UpdateRegulatoryReferenceInformationDto =
  | UpdateDesignOrCounterpartyDto
  | UpdateNSIDto
  | UpdateCriticalityDto;

export {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
};
