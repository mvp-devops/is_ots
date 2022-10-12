import {
  Badge,
  Button,
  Card,
  Divider,
  Layout,
  List,
  Progress,
  Space,
  Typography,
} from "antd";
import { AuditOutlined, FileDoneOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined, CloseOutlined } from "@ant-design/icons";

import React, { useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { FormActions } from "../../main";
import { ModalContainer } from "../../../components";
import { CheckListForm } from "../../comment-accounting";
import {
  FieldStatistic,
  ProjectStatistic,
  StatisticView,
  SubsidiaryStatistic,
  SubUnitStatistic,
  UnitStatistic,
} from "../types";

const { Text } = Typography;

const StatisticPage = () => {
  const { setActionType, setFormVisible } = useActions();

  const onCreateCheckList = () => {
    setActionType(FormActions.CHECKLIST);
    setFormVisible(true);
  };

  const onCreateReport = () => {
    setActionType(FormActions.REPORT);
    setFormVisible(true);
  };

  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { target, statistic } = useTypedSelector((state) => state.positionTree);

  const renderCheckListForm = (target === "project" ||
    target === "unit" ||
    target === "sub-unit") && (
    <AuditOutlined
      title="Чек-лист"
      className="text-primary mx-2"
      onClick={onCreateCheckList}
    />
  );

  const fildsCount = {
    title: "Количество месторождений",
    count: (statistic as SubsidiaryStatistic).fields,
    description: "Месторождения дочернего общества",
  };

  const projectsCount = {
    title: "Количество проектов",
    count: (statistic as SubsidiaryStatistic).projects,
    description: "Количество проектов дочернего общества",
  };

  const unitsCount = {
    title: "Количество объектов строительства",
    count: (statistic as SubsidiaryStatistic).units,
    description: "Количество объектов строительства дочернего общества",
  };

  const subUnitsCount = {
    title: "Количество установок",
    count: (statistic as SubsidiaryStatistic).subUnits,
    description: "Количество установок дочернего общества",
  };

  let itemStatistic: any[] = [];

  const examinationDocumentationStatistic = [
    {
      title: "Документы",
      count: (statistic as SubUnitStatistic).documents,
      description: "Количество проектной документации, загруженной в систему",
    },
    {
      title: "Замечания",
      count: (statistic as SubUnitStatistic).comments,
      description: "Количество замечаний, выданных к документации",
    },
    {
      title: "Принято",
      count: (statistic as SubUnitStatistic).accepted,
      description: "Количество замечаний, принятых проектировщиком",
    },
    {
      title: "Не принято",
      count: (statistic as SubUnitStatistic).notAccepted,
      description: "Количество замечаний, не принятых проектировщиком",
    },
    {
      title: "На усмотрение заказчика",
      count: (statistic as SubUnitStatistic).discretionOfTheCustomer,
      description:
        "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
    },
    {
      title: "Снято",
      count: (statistic as SubUnitStatistic).pullOff,
      description:
        "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
    },
    {
      title: "Не снято",
      count: (statistic as SubUnitStatistic).notPullOff,
      description:
        "Количество замечаний, по которым эксперт не принял ответ проектировщика",
    },
    {
      title: "Устранено",
      count: (statistic as SubUnitStatistic).eliminated,
      description:
        "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
    },
    {
      title: "Не устранено",
      count: (statistic as SubUnitStatistic).notEliminated,
      description:
        "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
    },
    {
      title: "Снято по решению заказчика",
      count: (statistic as SubUnitStatistic).notEliminated,
      description:
        "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
    },
  ];
  const supervisionStatistic = [
    {
      title: "Замечания",
      count: (statistic as SubUnitStatistic).comments,
      description:
        "Количество замечаний, выданных в ходе строительного надзора",
    },
    {
      title: "Принято",
      count: (statistic as SubUnitStatistic).accepted,
      description: "Количество замечаний, принятых проектировщиком",
    },
    {
      title: "Не принято",
      count: (statistic as SubUnitStatistic).notAccepted,
      description: "Количество замечаний, не принятых проектировщиком",
    },
    {
      title: "На усмотрение заказчика",
      count: (statistic as SubUnitStatistic).discretionOfTheCustomer,
      description:
        "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
    },
    {
      title: "Снято",
      count: (statistic as SubUnitStatistic).pullOff,
      description:
        "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
    },
    {
      title: "Не снято",
      count: (statistic as SubUnitStatistic).notPullOff,
      description:
        "Количество замечаний, по которым эксперт не принял ответ проектировщика",
    },
    {
      title: "Устранено",
      count: (statistic as SubUnitStatistic).eliminated,
      description:
        "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
    },
    {
      title: "Не устранено",
      count: (statistic as SubUnitStatistic).notEliminated,
      description:
        "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
    },
    {
      title: "Снято по решению заказчика",
      count: (statistic as SubUnitStatistic).notEliminated,
      description:
        "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
    },
  ];

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

  // switch (target) {
  //   case "subsidiary": {
  //     itemStatistic.push({
  //       title: "Количество месторождений",
  //       count: (statistic as SubsidiaryStatistic).fields,
  //       description: "Месторождения дочернего общества",
  //     });

  //     itemStatistic.push();
  //     itemStatistic.push();
  //     itemStatistic.push();
  //     examinationDocumentationStatistic.push({
  //       title: "Количество загруженных документов",
  //       count: (statistic as SubsidiaryStatistic).documents,
  //       description: "Количество документов, загруженных в систему",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Количество замечаний",
  //       count: (statistic as SubsidiaryStatistic).comments,
  //       description: "Количество замечаний, выданных к документации",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Принято",
  //       count: (statistic as SubsidiaryStatistic).accepted,
  //       description: "Количество замечаний, принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не принято",
  //       count: (statistic as SubsidiaryStatistic).notAccepted,
  //       description: "Количество замечаний, не принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "На усмотрение заказчика",
  //       count: (statistic as SubsidiaryStatistic).discretionOfTheCustomer,
  //       description:
  //         "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято",
  //       count: (statistic as SubsidiaryStatistic).pullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не снято",
  //       count: (statistic as SubsidiaryStatistic).notPullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт не принял ответ проектировщика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Устранено",
  //       count: (statistic as SubsidiaryStatistic).eliminated,
  //       description:
  //         "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не устранено",
  //       count: (statistic as SubsidiaryStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято по решению заказчика",
  //       count: (statistic as SubsidiaryStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
  //     });
  //     break;
  //   }
  //   case "field": {
  //     itemStatistic.push({
  //       title: "Количество проектов",
  //       count: (statistic as FieldStatistic).projects,
  //       description: "Количество проектов дочернего общества",
  //     });
  //     itemStatistic.push({
  //       title: "Количество объектов строительства",
  //       count: (statistic as FieldStatistic).units,
  //       description: "Количество объектов строительства дочернего общества",
  //     });
  //     itemStatistic.push({
  //       title: "Количество установок",
  //       count: (statistic as FieldStatistic).subUnits,
  //       description: "Количество установок дочернего общества",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Количество загруженных документов",
  //       count: (statistic as FieldStatistic).documents,
  //       description: "Количество документов, загруженных в систему",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Количество замечаний",
  //       count: (statistic as FieldStatistic).comments,
  //       description: "Количество замечаний, выданных к документации",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Принято",
  //       count: (statistic as FieldStatistic).accepted,
  //       description: "Количество замечаний, принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не принято",
  //       count: (statistic as FieldStatistic).notAccepted,
  //       description: "Количество замечаний, не принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "На усмотрение заказчика",
  //       count: (statistic as FieldStatistic).discretionOfTheCustomer,
  //       description:
  //         "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято",
  //       count: (statistic as FieldStatistic).pullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не снято",
  //       count: (statistic as FieldStatistic).notPullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт не принял ответ проектировщика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Устранено",
  //       count: (statistic as FieldStatistic).eliminated,
  //       description:
  //         "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не устранено",
  //       count: (statistic as FieldStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято по решению заказчика",
  //       count: (statistic as FieldStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
  //     });
  //     break;
  //   }
  //   case "project": {
  //     itemStatistic.push({
  //       title: "Объекты строительства",
  //       count: (statistic as ProjectStatistic).units,
  //       description: "Количество объектов строительства согласно проекта",
  //     });
  //     itemStatistic.push({
  //       title: "Количество установок",
  //       count: (statistic as ProjectStatistic).subUnits,
  //       description: "Количество установок дочернего общества",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Документы",
  //       count: (statistic as ProjectStatistic).documents,
  //       description: "Количество документов проекта, загруженных в систему",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Всего замечаний",
  //       count: (statistic as ProjectStatistic).comments,
  //       description: "Количество замечаний, выданных к документации",
  //     });

  //     examinationDocumentationStatistic.push({
  //       title: "Принято",
  //       count: (statistic as ProjectStatistic).accepted,
  //       description: "Количество замечаний, принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не принято",
  //       count: (statistic as ProjectStatistic).notAccepted,
  //       description: "Количество замечаний, не принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "На усмотрение заказчика",
  //       count: (statistic as ProjectStatistic).discretionOfTheCustomer,
  //       description:
  //         "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято",
  //       count: (statistic as ProjectStatistic).pullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не снято",
  //       count: (statistic as ProjectStatistic).notPullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт не принял ответ проектировщика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Устранено",
  //       count: (statistic as ProjectStatistic).eliminated,
  //       description:
  //         "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не устранено",
  //       count: (statistic as ProjectStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято по решению заказчика",
  //       count: (statistic as ProjectStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
  //     });
  //     break;
  //   }
  //   case "unit": {
  //     itemStatistic.push({
  //       title: "Установки",
  //       count: (statistic as UnitStatistic).subUnits,
  //       description: "Количество установок (подобъектов) согласно проекта",
  //     });

  //     examinationDocumentationStatistic.push({
  //       title: "Документы",
  //       count: (statistic as UnitStatistic).documents,
  //       description: "Количество документов проекта, загруженных в систему",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Всего замечаний",
  //       count: (statistic as UnitStatistic).comments,
  //       description: "Количество замечаний, выданных к документации",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Принято",
  //       count: (statistic as UnitStatistic).accepted,
  //       description: "Количество замечаний, принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не принято",
  //       count: (statistic as UnitStatistic).notAccepted,
  //       description: "Количество замечаний, не принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "На усмотрение заказчика",
  //       count: (statistic as UnitStatistic).discretionOfTheCustomer,
  //       description:
  //         "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято",
  //       count: (statistic as UnitStatistic).pullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не снято",
  //       count: (statistic as UnitStatistic).notPullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт не принял ответ проектировщика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Устранено",
  //       count: (statistic as UnitStatistic).eliminated,
  //       description:
  //         "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не устранено",
  //       count: (statistic as UnitStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято по решению заказчика",
  //       count: (statistic as UnitStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
  //     });
  //     break;
  //   }
  //   case "sub-unit": {

  //     examinationDocumentationStatistic.push({
  //       title: "Документы",
  //       count: (statistic as SubUnitStatistic).documents,
  //       description: "Количество документов проекта, загруженных в систему",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Всего замечаний",
  //       count: (statistic as SubUnitStatistic).comments,
  //       description: "Количество замечаний, выданных к документации",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Принято",
  //       count: (statistic as SubUnitStatistic).accepted,
  //       description: "Количество замечаний, принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не принято",
  //       count: (statistic as SubUnitStatistic).notAccepted,
  //       description: "Количество замечаний, не принятых проектировщиком",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "На усмотрение заказчика",
  //       count: (statistic as SubUnitStatistic).discretionOfTheCustomer,
  //       description:
  //         "Количество замечаний, не принятых проектировщиком, необходимо дополнительное согласование от Заказчика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято",
  //       count: (statistic as SubUnitStatistic).pullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не снято",
  //       count: (statistic as SubUnitStatistic).notPullOff,
  //       description:
  //         "Количество замечаний, по которым эксперт не принял ответ проектировщика",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Устранено",
  //       count: (statistic as SubUnitStatistic).eliminated,
  //       description:
  //         "Количество замечаний, по которым проектировщик согласился и откорректировал документацию",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Не устранено",
  //       count: (statistic as SubUnitStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, по которым ответ принят, но откорректированная ПД эксперту не представлена",
  //     });
  //     examinationDocumentationStatistic.push({
  //       title: "Снято по решению заказчика",
  //       count: (statistic as SubUnitStatistic).notEliminated,
  //       description:
  //         "Количество замечаний, не критичных для реализации проекта и снятых по решению Заказчика",
  //     });
  //     break;
  //   }
  //   default:
  //     break;
  // }

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

  const examinationDocumentationStatisticRender = statistic && (
    <Card
      style={{ minWidth: 450 }}
      bordered={false}
      // type="inner"
      title={
        <Divider>
          <Text type="secondary" strong>
            Экспертиза документации
          </Text>
        </Divider>
      }
      extra={
        <>
          {renderCheckListForm}
          <FileDoneOutlined
            title="Отчет"
            className="text-primary mx-2"
            onClick={onCreateReport}
          />
          <QuestionCircleOutlined
            title="Справка"
            className="text-secondary mx-2"
            onClick={() =>
              setShowExaminationDocumentationStatisticDescription(
                !showExaminationDocumentationStatisticDescription
              )
            }
          />
        </>
      }
    >
      <List
        itemLayout="horizontal"
        size="small"
        dataSource={examinationDocumentationStatistic}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Space className="d-flex justify-content-between">
                  <Text type="secondary">{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text type="secondary" strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {showExaminationDocumentationStatisticDescription &&
                    item.description}
                </Text>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );

  const supervisionStatisticRender = statistic &&
    (target === "unit" || target === "sub-unit") && (
      <Card
        bordered={false}
        style={{ minWidth: 450 }}
        title={
          <Divider>
            <Text type="secondary" strong>
              Строительный надзор
            </Text>
          </Divider>
        }
        extra={
          <>
            <FileDoneOutlined
              title="Отчет"
              className="text-primary mx-2"
              onClick={onCreateReport}
            />
            <QuestionCircleOutlined
              title="Справка"
              className="text-secondary mx-2"
              onClick={() =>
                setShowSupervisionStatisticDescription(
                  !showSupervisionStatisticDescription
                )
              }
            />
          </>
        }
      >
        <List
          itemLayout="horizontal"
          size="small"
          dataSource={supervisionStatistic}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Space className="d-flex justify-content-between">
                    <Text type="secondary">{item.title}</Text>
                    <Badge
                      showZero
                      count={
                        <Text type="secondary" strong>
                          {item.count}
                        </Text>
                      }
                      overflowCount={1000000}
                      style={{ backgroundColor: "#fff" }}
                    />
                  </Space>
                }
                description={
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {showSupervisionStatisticDescription && item.description}
                  </Text>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    );

  const itemStatisticRender = statistic && (
    <Card
      bordered={false}
      style={{ minWidth: 350 }}
      title={
        <Divider>
          <Text type="secondary" strong>
            Общая статистика
          </Text>
        </Divider>
      }
      extra={
        <QuestionCircleOutlined
          title="Справка"
          className="text-secondary mx-2"
          onClick={() =>
            setShowItemStatisticDescription(!showItemStatisticDescription)
          }
        />
      }
    >
      <List
        itemLayout="horizontal"
        dataSource={itemStatistic}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Space className="d-flex justify-content-between">
                  <Text type="secondary">{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text type="secondary" strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {showItemStatisticDescription && item.description}
                </Text>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );

  return (
    <>
      <Layout className="site-layout-background" style={{ padding: "0 10px" }}>
        <Layout.Content className="d-flex  align-items-start">
          {itemStatisticRender}
          {examinationDocumentationStatisticRender}
          {supervisionStatisticRender}
        </Layout.Content>

        {/* <Space direction="horizontal">
        <Progress
          type="dashboard"
          strokeLinecap="butt"
          percent={30}
          width={200}
          format={(percent) => `${percent} Days`}
        />
        <Progress
          type="circle"
          percent={70}
          width={200}
          status="exception"
          showInfo
        />
        <Progress type="circle" percent={100} width={200} />
      </Space> */}
      </Layout>
      {formVisible && actionType === FormActions.CHECKLIST && (
        <ModalContainer child={<CheckListForm />} />
      )}
    </>
  );
};

export default StatisticPage;
