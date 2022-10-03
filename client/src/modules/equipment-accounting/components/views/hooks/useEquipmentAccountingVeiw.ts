import { ChangeEventHandler, useState } from "react";
import { useActions, useTypedSelector } from "../../../../../hooks";

export const useEquipmentAccountingVeiw = () => {
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { formVisible } = useTypedSelector((state) => state.main);
  const { setActionType, setFormVisible } = useActions();

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.target.value);

  return {
    unitId,
    subUnitId,
    onSearch,
    searchValue,
    formVisible,
    setFormVisible,
    setActionType,
  };
};
