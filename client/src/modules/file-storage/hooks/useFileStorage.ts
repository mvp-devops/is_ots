import { useActions, useTypedSelector } from "../../../hooks";

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
  };
};
