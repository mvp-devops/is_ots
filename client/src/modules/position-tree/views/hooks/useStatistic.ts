import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";
import { FormActions } from "../../../main";
import { SubsidiaryStatistic } from "../../types";

interface ListItemRender {
  title: string;
  count: number;
  description: string;
}

export const useStatistic = () => {
  const [showItemStatisticDescription, setShowItemStatisticDescription] =
    useState(false);

  const [
    showExaminationDocumentationStatisticDescription,
    setShowExaminationDocumentationStatisticDescription,
  ] = useState(false);

  const [
    showSupervisionStatisticDescription,
    setShowSupervisionStatisticDescription,
  ] = useState(false);
  const [loadignStatistic, setLoadignStatistic] = useState(true);

  const setShowDetails = (target: string): void => {
    switch (target) {
      case "item-statistic": {
        setShowItemStatisticDescription(!showItemStatisticDescription);
        break;
      }
      case "examination-documentation-statistic": {
        setShowExaminationDocumentationStatisticDescription(
          !showExaminationDocumentationStatisticDescription
        );
        break;
      }
      case "supervision-statistic": {
        setShowSupervisionStatisticDescription(
          !showSupervisionStatisticDescription
        );
        break;
      }
      default:
        break;
    }
  };

  const { getPositionTreeStatistic, setActionType, setFormVisible } =
    useActions();

  const { currentItem, target, statistic } = useTypedSelector(
    (state) => state.positionTree
  );
  const { actionType, formVisible } = useTypedSelector((state) => state.main);

  useEffect(() => {
    currentItem && getPositionTreeStatistic(currentItem.target, currentItem.id);
  }, [currentItem]);

  useEffect(() => setLoadignStatistic(true), [currentItem]);
  useEffect(() => setLoadignStatistic(false), [statistic]);

  const renderCheckListFormFlag =
    formVisible && actionType === FormActions.CHECKLIST;

  const renderCheckListButtonFlag =
    target === "project" || target === "unit" || target === "sub-unit";

  const renderSupervisionStatisticFlag =
    target === "unit" || target === "sub-unit";

  const renderItemStatisticFlag = target !== "sub-unit";

  const onCreateCheckList = () => {
    setActionType(FormActions.CHECKLIST);
    setFormVisible(true);
  };

  const onCreateReport = () => {
    setActionType(FormActions.REPORT);
    setFormVisible(true);
  };

  let itemStatistic: ListItemRender[] = [];

  const fildsCount: ListItemRender = {
    title: "Количество месторождений",
    count: (statistic as SubsidiaryStatistic).fields,
    description: "Месторождения дочернего общества",
  };

  const projectsCount: ListItemRender = {
    title: "Количество проектов",
    count: (statistic as SubsidiaryStatistic).projects,
    description: "Количество проектов дочернего общества",
  };

  const unitsCount: ListItemRender = {
    title: "Количество объектов строительства",
    count: (statistic as SubsidiaryStatistic).units,
    description: "Количество объектов строительства дочернего общества",
  };

  const subUnitsCount: ListItemRender = {
    title: "Количество установок",
    count: (statistic as SubsidiaryStatistic).subUnits,
    description: "Количество установок дочернего общества",
  };

  switch (target) {
    case "subsidiary": {
      itemStatistic = [fildsCount, projectsCount, unitsCount, subUnitsCount];
      break;
    }
    case "field": {
      itemStatistic = [projectsCount, unitsCount, subUnitsCount];
      break;
    }
    case "project": {
      itemStatistic = [unitsCount, subUnitsCount];
      break;
    }
    case "unit": {
      itemStatistic = [subUnitsCount];

      break;
    }
    case "sub-unit": {
      itemStatistic = [];
      break;
    }
    default:
      break;
  }

  const examinationDocumentationStatistic: ListItemRender[] = [
    {
      title: "Документы",
      count: (statistic as SubsidiaryStatistic).documents,
      description: "Количество проектной документации, загруженной в систему",
    },
    {
      title: "Замечания",
      count: (statistic as SubsidiaryStatistic).comments,
      description: "Количество замечаний, выданных к документации",
    },
    {
      title: "Принято",
      count: (statistic as SubsidiaryStatistic).accepted,
      description: "Количество замечаний, принятых проектировщиком",
    },
    {
      title: "Не принято",
      count: (statistic as SubsidiaryStatistic).notAccepted,
      description: "Количество замечаний, не принятых проектировщиком",
    },
    {
      title: "На усмотрение заказчика",
      count: (statistic as SubsidiaryStatistic).discretionOfTheCustomer,
      description:
        "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
    },
    {
      title: "Снято",
      count: (statistic as SubsidiaryStatistic).pullOff,
      description:
        "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
    },
    {
      title: "Не снято",
      count: (statistic as SubsidiaryStatistic).notPullOff,
      description:
        "Количество замечаний, по которым эксперт не принял ответ проектировщика",
    },
    {
      title: "Устранено",
      count: (statistic as SubsidiaryStatistic).eliminated,
      description:
        "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
    },
    {
      title: "Не устранено",
      count: (statistic as SubsidiaryStatistic).notEliminated,
      description:
        "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
    },
    {
      title: "Снято по решению заказчика",
      count: (statistic as SubsidiaryStatistic).notEliminated,
      description:
        "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
    },
  ];
  const supervisionStatistic: ListItemRender[] = [
    {
      title: "Замечания",
      count: (statistic as SubsidiaryStatistic).comments,
      description:
        "Количество замечаний, выданных в ходе строительного надзора",
    },
    {
      title: "Принято",
      count: (statistic as SubsidiaryStatistic).accepted,
      description: "Количество замечаний, принятых проектировщиком",
    },
    {
      title: "Не принято",
      count: (statistic as SubsidiaryStatistic).notAccepted,
      description: "Количество замечаний, не принятых проектировщиком",
    },
    {
      title: "На усмотрение заказчика",
      count: (statistic as SubsidiaryStatistic).discretionOfTheCustomer,
      description:
        "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
    },
    {
      title: "Снято",
      count: (statistic as SubsidiaryStatistic).pullOff,
      description:
        "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
    },
    {
      title: "Не снято",
      count: (statistic as SubsidiaryStatistic).notPullOff,
      description:
        "Количество замечаний, по которым эксперт не принял ответ проектировщика",
    },
    {
      title: "Устранено",
      count: (statistic as SubsidiaryStatistic).eliminated,
      description:
        "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
    },
    {
      title: "Не устранено",
      count: (statistic as SubsidiaryStatistic).notEliminated,
      description:
        "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
    },
    {
      title: "Снято по решению заказчика",
      count: (statistic as SubsidiaryStatistic).notEliminated,
      description:
        "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
    },
  ];

  return {
    loadignStatistic,

    renderCheckListButtonFlag,
    renderCheckListFormFlag,
    onCreateCheckList,
    onCreateReport,
    setShowDetails,

    itemStatistic,
    renderItemStatisticFlag,
    showItemStatisticDescription,

    examinationDocumentationStatistic,
    showExaminationDocumentationStatisticDescription,

    supervisionStatistic,
    renderSupervisionStatisticFlag,
    showSupervisionStatisticDescription,
  };
};
