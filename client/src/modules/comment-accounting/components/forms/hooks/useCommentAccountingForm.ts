import { useEffect, useState } from "react";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
  NSIView,
} from "../../../types";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";
import { FormActions } from "../../../../main";
import { useFileStorage } from "../../../../file-storage";
import { initFormData, solutionItem } from "../form.settings";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { usePositionTree } from "../../../../position-tree";

export const useCommentAccountingForm = () => {
  const [editRow, setEditRow] =
    useState<DesignDocumentCommentCreationAttrs | null>(null);
  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<NSIView[]>([]);

  const [normativesList, setNormativesList] = useState<NSIView[]>([]); //TODO: Релизовать подгрузку листа нормативных документов
  const [solutions, setSolutions] = useState<
    DesignDocumentCommentSolutionCreationAttrs[]
  >([]);

  const { currentUser, actionType, formVisible } = useTypedSelector(
    (state) => state.main
  );

  const { currentComment } = useTypedSelector(
    (state) => state.commentAccounting
  );

  const { currentDesignDocument } = useFileStorage();

  const { target } = usePositionTree();

  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();

  const { createComment, updateComment, deleteComment, setFormVisible } =
    useActions();

  const renderCommentAccountingFormFlag =
    formVisible &&
    (actionType === FormActions.ADD_COMMENT ||
      actionType === FormActions.EDIT_COMMENT ||
      actionType === FormActions.REMOVE_COMMENT);

  useEffect(() => {
    if (currentDesignDocument && currentUser) {
      actionType === FormActions.ADD_COMMENT &&
        setEditRow(
          initFormData(currentDesignDocument, currentUser.id as string)
        );

      actionType === FormActions.EDIT_COMMENT &&
        currentComment &&
        setEditRow(
          initFormData(
            currentDesignDocument,
            currentUser.id as string,
            currentComment
          )
        );
    }
  }, [actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      currentDesignDocument &&
      (actionType === FormActions.ADD_COMMENT ||
        actionType === FormActions.EDIT_COMMENT)
    ) {
      getNSIList("criticality").then((data) => {
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
      getNSIList("direction").then((data) => setDirectionsList(data));
    }

    //   getItems("normative").then((data) =>
    //   setCriticalities(data)
    // );
  }, [currentDesignDocument, actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    editRow && setEditRow({ ...editRow, solutions });
  }, [solutions]); // eslint-disable-line react-hooks/exhaustive-deps

  //Обновление данных полей формы
  const onHandlerChange = (key: string, value: string | number | null) => {
    editRow &&
      setEditRow({
        ...editRow,
        [key]: value,
      });
  };

  const addItem = () => {
    currentUser &&
      setSolutions([
        ...solutions,
        {
          ...solutionItem,
          key: Math.random().toString(),
          userId: currentUser.id as string,
        },
      ]);
  };

  const removeItem = (index: string | number) => {
    setSolutions(solutions.filter((i) => i.key !== index));
  };

  const changeItems = (key: string, value: string, recordKey: string) => {
    setSolutions(
      solutions.map((i) => (i.key === recordKey ? { ...i, [key]: value } : i))
    );
  };

  //отправка данных на back-end
  const addNewItem = () => {
    editRow && createComment(editRow);
  };

  const addNewItems = () => {
    // actionType === FormActions.ADD_CHILD
    //   ? createManyPositionTreeItems(childTarget, data)
    //   : actionType === FormActions.ADD
    //   ? createManyPositionTreeItems(target, data)
    //   : notification["error"]({
    //       message: "Ошибка добавления записи!",
    //       description: "Несоответствие типов actions",
    //     });
  };

  const updateItem = () => {
    editRow &&
      currentComment &&
      updateComment(currentComment.id as string, editRow);
  };

  const deleteItem = () => {
    currentComment && deleteComment(target, currentComment.id as string);
  };

  return {
    actionType,
    setFormVisible,
    directionsList,
    criticalitiesList,
    editRow,
    onHandlerChange,
    normativesList,
    solutions,
    addItem,
    addNewItems,
    removeItem,
    changeItems,
    addNewItem,
    updateItem,
    deleteItem,
    renderCommentAccountingFormFlag,
  };
};
