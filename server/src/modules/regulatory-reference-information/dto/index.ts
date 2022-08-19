import {
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
} from "./create-regulatory-reference-information.dto";
import {
  UpdateDesignOrCounterpartyDto,
  UpdateNSIDto,
} from "./update-regulatory-reference-information.dto";

type CreateRegulatoryReferenceInformationDto =
  | CreateDesignOrCounterpartyDto
  | CreateNSIDto;

type UpdateRegulatoryReferenceInformationDto =
  | UpdateDesignOrCounterpartyDto
  | UpdateNSIDto;

export {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
};
