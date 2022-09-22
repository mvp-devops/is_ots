import { ChangeEventHandler, useEffect, useState } from "react";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { FormActions } from "../../../../main";
import { exportData } from "./../../../api";

export const useNsiTable = () => {
  const [dataSource, setDataSource] = useState<NSIView[]>([]);
  const [tableTitle, setTableTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { loading, renderNsiItems, dictionaryTarget } = useTypedSelector(
    (state) => state.nsi
  );
  const { actionType, formVisible, baseTarget } = useTypedSelector(
    (state) => state.main
  );

  const { setActionType, setFormVisible, setCurrentNsiItem } = useActions();

  useEffect(() => {
    if (baseTarget === "REGULATORY_REFERENCE_INFORMATION") {
      switch (dictionaryTarget) {
        case "equipment": {
          setTableTitle("Группы оборудования");
          break;
        }
        case "counterparty": {
          setTableTitle("Контрагенты");
          break;
        }
        case "criticality": {
          setTableTitle("Критерии критичности");
          break;
        }
        case "section": {
          setTableTitle("Марки/разделы документации");
          break;
        }
        case "facility": {
          setTableTitle("Оборудование");
          break;
        }

        case "user": {
          setTableTitle("Пользователи");
          break;
        }
        case "design": {
          setTableTitle("Проектные институты");
          break;
        }

        case "stage": {
          setTableTitle("Стадии проектирования");
          break;
        }
        case "direction": {
          setTableTitle("Функциональные направления");
          break;
        }
        default:
          break;
      }
    }
  }, [dictionaryTarget, baseTarget]);

  const renderNsiFormFlag =
    actionType === FormActions.ADD_DICTIONARY_ITEM ||
    actionType === FormActions.EDIT_DICTIONARY_ITEM ||
    actionType === FormActions.REMOVE_DICTIONARY_ITEM;

  useEffect(() => {
    setDataSource(renderNsiItems);
  }, [renderNsiItems]);

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setDataSource(
      renderNsiItems.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
          item?.code?.toLowerCase()?.includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return {
    renderNsiFormFlag,
    dictionaryTarget,
    tableTitle,
    loading,
    actionType,
    setActionType,
    formVisible,
    setFormVisible,
    renderNsiItems,
    dataSource,
    setCurrentNsiItem,
    searchValue,
    onSearch,
    exportData,
  };
};
