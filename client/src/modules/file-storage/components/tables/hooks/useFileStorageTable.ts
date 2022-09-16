import { ChangeEventHandler, useEffect, useState } from "react";
import { DesignDocumentView } from "../../../../../../../server/common/types/file-storage";
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
  }, [documentationView, currentItem]);

  useEffect(() => setDataSource(designDocuments), [designDocuments]);

  const [searchValue, setSearchValue] = useState("");
  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setDataSource(
      designDocuments.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
          item?.code?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
          item?.createdAt?.toLowerCase()?.includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

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
