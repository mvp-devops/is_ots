import { equipmentAccountingActionCreators } from "../modules/equipment-accounting";
import { mainActionCreators } from "../modules/main";
import { positionTreeActionCreators } from "../modules/position-tree";
import { nsiActionCreators } from "../modules/regulatory-reference-information";
import { commentAccountingActionCreators } from "../modules/comment-accounting";
// import * as UnitActionCreators from "../../models/position-tree/unit/unit.action-creators";
// import * as MainActionCreators from "../../models/main/main.action-creators";
// import * as FieldActionCreators from "../../models/position-tree/field/field.action-creators";
// import * as ProjectActionCreators from "../../models/position-tree/project/project.action-creators";
// import * as SubUnitActionCreators from "../../models/position-tree/sub-unit/sub-unit.action-creators";
// import * as DesignDocumentActionCreators from "../../models/file-storage/design-document/design-document.action-creators";
// import * as DesignDocumentCommentActionCreators from "../../models/comment-accounting/design-document-comments/design-document-comments.action-creators";
// import * as EquipmentAccountingActionCreators from "../../models/equipment-accounting/store/equipment-accounting.action-creators";

const ActionCreators = {
  ...equipmentAccountingActionCreators,
  ...positionTreeActionCreators,
  ...nsiActionCreators,
  ...mainActionCreators,
  ...commentAccountingActionCreators,
  //   ...UnitActionCreators,
  // ...MainActionCreators,
  //   ...FieldActionCreators,
  //   ...ProjectActionCreators,
  //   ...SubUnitActionCreators,
  //   ...DesignDocumentActionCreators,
  //   ...DesignDocumentCommentActionCreators,
  //   ...EquipmentAccountingActionCreators,
};

export default ActionCreators;
