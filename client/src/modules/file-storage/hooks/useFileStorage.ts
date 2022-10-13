import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { FormActions } from "../../main";

export const useFileStorage = () => {
  const {
    loading,
    error,
    page,
    limit,
    designDocuments,
    currentDesignDocument,
    checkedDesignDocuments,
  } = useTypedSelector((state) => state.fileStorage);

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const {
    setFormVisible,
    setActionType,
    setCheckedDocuments,
    setCurrentDocument,
  } = useActions();

  const [renderFileStorageFormFlag, setRenderFileStorageFormFlag] =
    useState(false);

  useEffect(
    () =>
      setRenderFileStorageFormFlag(
        formVisible &&
          (actionType === FormActions.ADD_DOCUMENT ||
            actionType === FormActions.REMOVE_DOCUMENT ||
            actionType === FormActions.EDIT_DOCUMENT)
      ),
    [actionType] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return {
    loading,
    error,
    page,
    limit,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    designDocuments,
    checkedDesignDocuments,
    setCheckedDocuments,
    currentDesignDocument,
    setCurrentDocument,
    renderFileStorageFormFlag,
  };
};
