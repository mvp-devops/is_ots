import {
  CreateDesignOrCounterpartyDto,
  CreateNSIDto,
} from "./create-regulatory-reference-information.dto";
import {
  UpdateFDesignOrCounterpartyDto,
  UpdateNSIDto,
} from "./update-regulatory-reference-information.dto";

type CreateRegulatoryReferenceInformationDto = CreateDesignOrCounterpartyDto;
CreateNSIDto;

type UpdateRegulatoryReferenceInformationDto =
  | UpdateFDesignOrCounterpartyDto
  | UpdateNSIDto;

export {
  CreateRegulatoryReferenceInformationDto,
  UpdateRegulatoryReferenceInformationDto,
};
