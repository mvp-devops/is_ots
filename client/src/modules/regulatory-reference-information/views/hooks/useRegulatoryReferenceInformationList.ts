import { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";

export const useRegulatoryReferenceInformationList = () => {
  const { dictionaryTarget } = useTypedSelector((state) => state.nsi);
  const { baseTarget } = useTypedSelector((state) => state.main);

  const { setNsiItems, setDictionaryTarget, setBaseTarget } = useActions();

  const onItemSelected = (id: string) => {
    setBaseTarget("REGULATORY_REFERENCE_INFORMATION");
    setDictionaryTarget(id);
  };
  useEffect(() => {
    baseTarget === "REGULATORY_REFERENCE_INFORMATION" &&
      dictionaryTarget &&
      setNsiItems(dictionaryTarget);
  }, [baseTarget, dictionaryTarget]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    dictionaryTarget,
    onItemSelected,
  };
};
