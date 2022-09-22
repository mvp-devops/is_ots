import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { FormActions } from "../../main";

export const useCommentAccounting = () => {
  const [renderCommentAccountingFormFlag, setRenderCommentAccountingFormFlag] =
    useState(false);
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible, setActionType } = useActions();

  useEffect(() => {
    setRenderCommentAccountingFormFlag(
      formVisible &&
        (actionType === FormActions.ADD_COMMENT ||
          actionType === FormActions.EDIT_COMMENT ||
          actionType === FormActions.REMOVE_COMMENT)
    );

    console.log(
      "renderCommentAccountingFormFlag: ",
      renderCommentAccountingFormFlag
    );
  }, [actionType, formVisible]);

  return {
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    renderCommentAccountingFormFlag,
  };
};
