import { ChangeEventHandler, useEffect, useState } from "react";
import { DesignDocumentView } from "../../../../../../../server/common/types/file-storage";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { setFilePath } from "../../../../main";
import { setTableColumnFilters } from "../table.settings";

export const useFileStorageTableData = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dataSource, setDataSource] = useState<DesignDocumentView[]>([]);

  const {
    designDocuments,
    currentDesignDocument,
    checkedDesignDocuments,
    loading,
  } = useTypedSelector((state) => state.fileStorage);
  const { currentItem } = useTypedSelector((state) => state.positionTree);
  const { documentationView } = useTypedSelector((state) => state.main);

  const {
    getAllDesignDocuments,
    setCurrentDocument,
    setCheckedDocuments,
    setDocumentationView,
  } = useActions();

  useEffect(() => {
    documentationView &&
      currentItem &&
      getAllDesignDocuments(currentItem.target, currentItem.id);
  }, [documentationView, currentItem]);

  useEffect(() => setDataSource(designDocuments), [designDocuments]);

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
    loading,
    setTableColumnFilters,
    dataSource,
    searchValue,
    onSearch,
    setCurrentDocument,
    checkedDesignDocuments,
    setCheckedDocuments,

    setFilePath,
  };
};
