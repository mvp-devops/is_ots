import { ChangeEventHandler, useEffect, useState } from "react";
import { DesignDocumentView } from "../../../types";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { useFileStorage } from "../../../hooks";

export const useFileStorageTable = () => {
  const [dataSource, setDataSource] = useState<DesignDocumentView[]>([]);
  const { currentItem } = useTypedSelector((state) => state.positionTree);
  const { documentationView, collectiveCheckSheetView } = useTypedSelector(
    (state) => state.main
  );

  const {
    getAllDesignDocuments,
    setCurrentDocument,
    setCheckedDocuments,
    setDocumentationView,
    setCollectiveCheckSheetView,
  } = useActions();

  const {
    loading,
    currentDesignDocument,
    checkedDesignDocuments,
    renderFileStorageFormFlag,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    designDocuments,
  } = useFileStorage();

  useEffect(() => {
    documentationView &&
      currentItem &&
      getAllDesignDocuments(currentItem.target, currentItem.id);
  }, [documentationView, currentItem, formVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDataSource(designDocuments);
  }, [designDocuments]);

  const [searchValue, setSearchValue] = useState("");
  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    designDocuments &&
      designDocuments.length > 0 &&
      setDataSource(
        designDocuments?.filter(
          (item) =>
            (item &&
              item?.title &&
              item?.title
                ?.toLowerCase()
                ?.includes(searchValue.toLowerCase())) ||
            (item &&
              item?.code &&
              item?.code?.toLowerCase()?.includes(searchValue.toLowerCase())) ||
            (item &&
              item?.description &&
              item?.createdAt
                ?.toLowerCase()
                ?.includes(searchValue.toLowerCase()))
        )
      );
  }, [searchValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    renderFileStorageFormFlag,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    designDocuments,
    onSearch,
    searchValue,
    dataSource,
    getAllDesignDocuments,
    setCurrentDocument,
    setCheckedDocuments,
    setDocumentationView,
    loading,
    currentDesignDocument,
    checkedDesignDocuments,
    collectiveCheckSheetView,
    setCollectiveCheckSheetView,
  };
};
