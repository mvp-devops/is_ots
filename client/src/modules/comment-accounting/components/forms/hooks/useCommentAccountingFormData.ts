import { useEffect, useState } from "react";
import { CheckListSets, CheckListSettings } from "../../../types";
import { NSIView } from "../../../types";
import { useTypedSelector, useActions } from "../../../../../hooks";
import { getItems } from "../../../../regulatory-reference-information";
import { initCheckListSets, initCheckListSettingsItem } from "../form.settings";

export const useCommentAccountingFormData = () => {
  const [stages, setStages] = useState<NSIView[]>([]);
  const [criticalities, setCriticalities] = useState<NSIView[]>([]);
  const [stage, setStage] = useState<NSIView | null>(null);
  const [counterpartiesList, setCounterpartiesList] = useState<NSIView[]>([]);
  const [equipmentsList, setEquipmentsList] = useState<NSIView[]>([]);
  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);

  const [normativesList, setNormativesList] = useState<NSIView[]>([]);

  const [currentCriticalities, setCurrentCriticalities] = useState<{
    criticalities: NSIView[];
    index: string | number | null | undefined;
  } | null>(null);

  const [sets, setSets] = useState<CheckListSets>(initCheckListSets);
  const [settings, setSettings] = useState<CheckListSettings[]>([]);

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const { setCheckListView, setFormVisible, getCheckListData } = useActions();

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
          setStages([...data.slice(4, 8), ...data.slice(10)]);
          break;
        }
        default:
          break;
      }
    });
    getItems("direction").then((data) => setDirectionsList(data));
  }, []);

  useEffect(() => {
    switch (target) {
      case "project": {
        getItems("design").then((data) => setCounterpartiesList(data));
        break;
      }
      case "unit":
      case "sub-unit": {
        getItems("counterparty").then((data) => setCounterpartiesList(data));
        getItems("equipment").then((data) => setEquipmentsList(data));
        break;
      }
      default:
        break;
    }
    getItems("stage").then((data) => {
      switch (target) {
        case "project": {
          setStages(data.slice(1, 4));
          break;
        }
        case "unit":
        case "sub-unit": {
          setStages([...data.slice(4, 8), ...data.slice(10)]);
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
      setStage(stage);
      setCurrentCriticalities(getCriticalities(value, index));
      changeItems(key, stage, index);
    } else {
      changeItems(key, value, index);
    }
  };

  const setCheckListSets = (key: string, value: string | number | null) => {
    setSets({ ...sets, [key]: value });
  };

  const getCriticalities = (
    value: string | number | null | NSIView | NSIView[],
    index: string | number | null | undefined
  ): {
    criticalities: NSIView[];
    index: string | number | null | undefined;
  } => {
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
    return {
      criticalities: crits,
      index,
    };
  };

  const checkList = () => {
    target && id && getCheckListData(target, id, sets);
    // getCheckList(target, id, sets).then((data) => setCheckListData(data));
    setCheckListView(true);
    setFormVisible(false);
  };

  useEffect(() => {
    currentCriticalities &&
      changeItems(
        "criticalities",
        currentCriticalities.criticalities,
        currentCriticalities.index
      );
  }, [currentCriticalities, stage]);

  return {
    addItem,
    removeItem,
    counterpartiesList,
    equipmentsList,
    directionsList,
    onHandlerChange,
    setCheckListSets,
    checkList,
    target,
    id,
    stages,
    criticalities,
    sets,
    settings,
  };
};
