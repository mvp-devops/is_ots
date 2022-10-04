import { useEffect, useState } from "react";
import { RcFile } from "antd/lib/upload";

import { NsiCreateOrUpdateAttrs } from "../../..";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { initFormData } from "../form.settings";

export const useRegulatoryReferenceInformationForm = () => {
  const [editRow, setEditRow] = useState<NsiCreateOrUpdateAttrs>(null);

  const { dictionaryTarget, currentNsiItem } = useTypedSelector(
    (state) => state.nsi
  );
  const { actionType } = useTypedSelector((state) => state.main);

  const { setFormVisible, createNsiItem, updateNsiItem, deleteNsiItem } =
    useActions();

  useEffect(() => {
    actionType === FormActions.ADD_DICTIONARY_ITEM &&
      setEditRow(initFormData());
    currentNsiItem &&
      actionType === FormActions.EDIT_DICTIONARY_ITEM &&
      setEditRow(initFormData(currentNsiItem));
  }, [actionType, currentNsiItem]);

  const onHandlerChange = (
    key: string,
    value: string | number | RcFile | null
  ) => {
    editRow && setEditRow({ ...editRow, [key]: value });
  };

  const addNewItem = () => createNsiItem(dictionaryTarget, editRow);
  const updateItem = () =>
    updateNsiItem(dictionaryTarget, currentNsiItem?.id as string, editRow);
  const deleteItem = () =>
    deleteNsiItem(dictionaryTarget, currentNsiItem?.id as string);

  return {
    setFormVisible,
    addNewItem,
    updateItem,
    deleteItem,
    editRow,
    actionType,
    dictionaryTarget,
    onHandlerChange,
  };
};
