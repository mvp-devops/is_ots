import { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";

export const useRegulatoryReferenceInformationList = () => {
  const { dictionaryTarget } = useTypedSelector((state) => state.nsi);

  const { setNsiItems, setDictionaryTarget, setBaseTarget } = useActions();

  const onItemSelected = (id: string) => {
    setBaseTarget("REGULATORY_REFERENCE_INFORMATION");
    setDictionaryTarget(id);
  };

  useEffect(() => {
    setNsiItems(dictionaryTarget);
  }, [dictionaryTarget]);

  return {
    dictionaryTarget,
    onItemSelected,
  };
};
