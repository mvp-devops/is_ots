import { useEffect, useState } from "react";
import {
  DesignDocumentCommentCreationAttrs,
  DesignDocumentCommentSolutionCreationAttrs,
} from "../../../../../../../server/common/types/comments-accounting";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { usePositionTree } from "../../../../position-tree";
import { useRegulatoryReferenceInformation } from "../../../../regulatory-reference-information";
import { useCommentAccounting } from "../../..";
import { FormActions } from "../../../../main";
import { useFileStorage } from "../../../../file-storage";
import { initFormData, solutionItem } from "../form.settings";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { useCommentAccountingTable } from "../../tables/hooks/useCommentAccountingTable";

export const useCommentAccountingForm = () => {
  const [editRow, setEditRow] =
    useState<DesignDocumentCommentCreationAttrs | null>(null);
  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [criticalitiesList, setCriticalitiesList] = useState<NSIView[]>([]);
  const [normativesList, setNormativesList] = useState<NSIView[]>([]);
  const [solutions, setSolutions] = useState<
    DesignDocumentCommentSolutionCreationAttrs[]
  >([]);

  const { currentUser } = useTypedSelector((state) => state.main);

  const { currentDesignDocument } = useFileStorage();

  const { currentItem, renderOneItem, target } = usePositionTree();

  const { getAllItems: getNSIList } = useRegulatoryReferenceInformation();
  const { actionType } = useCommentAccounting();

  const { selectedRow } = useCommentAccountingTable();

  const { createComment, updateComment, deleteComment, setFormVisible } =
    useActions();

  useEffect(() => {
    if (currentDesignDocument && currentUser) {
      actionType === FormActions.ADD_COMMENT &&
        setEditRow(
          initFormData(currentDesignDocument, currentUser.id as string)
        );

      actionType === FormActions.EDIT_COMMENT &&
        selectedRow &&
        setEditRow(
          initFormData(
            currentDesignDocument,
            currentUser.id as string,
            selectedRow
          )
        );
    }
  }, [actionType]);

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
  }, []);

  useEffect(() => {
    editRow && setEditRow({ ...editRow, solutions });
  }, [solutions]);

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
    editRow && editRow.id && updateComment(editRow.id as string, editRow);
  };

  const deleteItem = () => {
    editRow && editRow.id && deleteComment(editRow.id as string);
  };

  useEffect(() => console.log(selectedRow), [selectedRow]);

  return {
    actionType,
    setFormVisible,
    directionsList,
    criticalitiesList,
    editRow,
    onHandlerChange,
    solutions,
    addItem,
    removeItem,
    changeItems,
    addNewItem,
    updateItem,
    deleteItem,
  };
};
