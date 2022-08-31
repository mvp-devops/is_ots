import { useEffect, useState } from "react";
import {
  CheckListSets,
  CheckListSettings,
} from "../../../../../../../server/common/types/comments-accounting";
import { NSIView } from "../../../../../../../server/common/types/regulatory-reference-information";
import { useTypedSelector } from "../../../../../hooks";
import { getItems } from "../../../../regulatory-reference-information";
import { initCheckListSets, initCheckListSettingsItem } from "../form.settings";

export const useCommentAccountingFormData = () => {
  const [stages, setStages] = useState<NSIView[]>([]);
  const [criticalities, setCriticalities] = useState<NSIView[]>([]);
  const [currentCriticalities, setCurrentCriticalities] = useState<NSIView[]>(
    []
  );

  const [sets, setSets] = useState<CheckListSets>(initCheckListSets);
  const [settings, setSettings] = useState<CheckListSettings[]>([]);

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const target = currentItem?.target;
  const id = currentItem?.id;

  useEffect(() => {
    getItems("stage").then((data) => {
      switch (target) {
        case "project": {
          setStages(data.slice(1, 4));
          break;
        }
        case "unit":
        case "sub-unit": {
          setStages([...data.slice(4, 8), ...data.slice(9, 10)]);
          break;
        }
        default:
          break;
      }
    });
  }, [target]);

  useEffect(() => {
    getItems("criticality").then((data) =>
      setCriticalities(data.sort((a, b) => (a.id > b.id ? 1 : -1)))
    );
  }, []);

  useEffect(() => setSets({ ...sets, settings }), [settings]);

  const addItem = () => {
    setSettings([
      ...settings,
      { ...initCheckListSettingsItem, key: Math.random() },
    ]);
  };

  const removeItem = (index: string | number | null | undefined) => {
    setSettings(settings.filter((i) => i.key !== index));
  };

  const changeItems = (
    key: string,
    value: string | number | null | NSIView | NSIView[],
    index: string | number | null | undefined
  ) => {
    setSettings(
      settings.map((item) =>
        item.key === index ? { ...item, [key]: value } : item
      )
    );
  };

  const onHandlerChange = (
    key: string,
    value: string | number | null | NSIView | NSIView[],
    index: string | number | null | undefined
  ) => {
    if (key === "stage") {
      const stage = stages.filter((item) => item.id === value)[0];
      changeItems(key, stage, index);
      setCurrentCriticalities(getCriticalities(value));
    } else {
      changeItems(key, value, index);
    }
  };

  const setCheckListSets = (key: string, value: string | number | null) => {
    setSets({ ...sets, [key]: value });
  };

  const getCriticalities = (
    value: string | number | null | NSIView | NSIView[]
  ): NSIView[] => {
    let crits: NSIView[] = [];

    switch (value) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6: {
        crits = criticalities.slice(1, 11);
        break;
      }
      case 7: {
        crits = criticalities.slice(16, 22);
        break;
      }

      case 8: {
        crits = criticalities.slice(22, 29);

        break;
      }
      case 10: {
        crits = criticalities.slice(29);

        break;
      }
      default:
        break;
    }
    return crits;
  };

  const getCheckList = () => {};

  useEffect(() => {
    console.log(currentCriticalities);
    console.log("settings: ", settings);
  }, [settings]);

  return {
    addItem,
    removeItem,
    onHandlerChange,
    setCheckListSets,
    target,
    id,
    stages,
    criticalities,
    sets,
    settings,
  };
};
