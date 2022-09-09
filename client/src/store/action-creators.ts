import { equipmentAccountingActionCreators } from "../modules/equipment-accounting";
import { mainActionCreators } from "../modules/main";
import { positionTreeActionCreators } from "../modules/position-tree";
import { nsiActionCreators } from "../modules/regulatory-reference-information";
import { commentAccountingActionCreators } from "../modules/comment-accounting";
import { fileStorageActionCreators } from "../modules/file-storage";

const ActionCreators = {
  ...equipmentAccountingActionCreators,
  ...positionTreeActionCreators,
  ...nsiActionCreators,
  ...mainActionCreators,
  ...commentAccountingActionCreators,
  ...fileStorageActionCreators,
};

export default ActionCreators;
