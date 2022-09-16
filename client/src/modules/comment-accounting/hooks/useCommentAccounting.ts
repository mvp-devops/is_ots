import React from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { FormActions } from "../../main";

export const useCommentAccounting = () => {
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible, setActionType } = useActions();

  const renderCommentAccountingFormFlag =
    formVisible &&
    (actionType === FormActions.ADD_COMMENT ||
      actionType === FormActions.EDIT_COMMENT);

  return {
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    renderCommentAccountingFormFlag,
  };
};
