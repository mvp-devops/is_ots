import { useEffect, useState } from "react";
import {
  CommentAccountingNSIView,
  DesignDocumentCommentView,
} from "../../../..";
import { useActions, useTypedSelector } from "../../../../../..";
import { getAllItems as getNsiItems } from "../../../../../regulatory-reference-information";

export const useCommentTable = () => {
  const [dataSource, setDataSource] = useState<DesignDocumentCommentView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<
    CommentAccountingNSIView[]
  >([]);

  const { actionType, formVisible } = useTypedSelector((state) => state.main);

  const { target } = useTypedSelector((state) => state.positionTree);
  const { checkedDesignDocuments, currentDesignDocument } = useTypedSelector(
    (state) => state.fileStorage
  );
  const { loading, renderComments } = useTypedSelector(
    (state) => state.commentAccounting
  );

  const { setActionType, setFormVisible, getManyComments, setCurrentComment } =
    useActions();

  useEffect(() => {
    if (checkedDesignDocuments.length > 0) {
      let parrentIds: string[] = [];
      for (let i = 0; i < checkedDesignDocuments.length; i++) {
        parrentIds.push(checkedDesignDocuments[i].id);
      }
      getManyComments(target, undefined, parrentIds);
    } else {
      currentDesignDocument &&
        getManyComments(target, currentDesignDocument.id);
    }
  }, [checkedDesignDocuments, currentDesignDocument, actionType, formVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setDataSource(renderComments);
  }, [renderComments]);

  useEffect(() => {
    if (currentDesignDocument) {
      getNsiItems("criticality").then((data) => {
        currentDesignDocument.stageId !== 7 &&
          currentDesignDocument.stageId !== 8 &&
          currentDesignDocument.stageId !== 10 &&
          setCriticalitiesList(
            data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 11)
          );
        currentDesignDocument.stageId === 7 &&
          setCriticalitiesList([
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(16, 22),
          ]);
        currentDesignDocument.stageId === 8 &&
          setCriticalitiesList([
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(22, 29),
          ]);
        currentDesignDocument.stageId === 10 &&
          setCriticalitiesList([
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(0, 1),
            ...data.sort((a, b) => (a.id < b.id ? -1 : 0)).slice(29),
          ]);
      });
    }
  }, [currentDesignDocument, actionType]);

  return {
    dataSource,
    currentDesignDocument,
    setActionType,
    setFormVisible,
    criticalitiesList,
    setCurrentComment,
    loading,
  };
};
