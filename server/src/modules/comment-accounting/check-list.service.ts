/*
  
    Чек-лист по одному договору (проекту) по проекнтым институтам
  
  Back-end.
      1. Необходимо реализовать дополнительный роут.
      2. Разнесение критериев критичности по стадии проекта (ОТР, ПД, РД). Поле criterions.
      3. В каждой стадии выделяем критерии критичности. Поле criterions.
      4. Проектный институт, поле design (автоматически подтягивается из БД по id проекта).
      6. Проект, поле title (автоматически подтягивается из БД по id проекта).
      7. Шифр проекта, поле code (автоматически подтягивается из БД по id проекта).
      7. Номер договора, поле contract (автоматически подтягивается из БД по id проекта).
     10. Данные пользователя, сформировавшего чек-лист, по id авторизованного пользователя через UserService формируется подпись (ФИО, должность, контактные данные).
     11. Дата формирования чек-листа (объект new Date(), привести к формату, принятому в РФ).
     12. Реализовать возможность выгрузки в формате pdf, (excel - надо ли???).
     13. Суммарный балл и итоговая оценка по шкале оценок (применение цветовой палитры для макета визуализации данных)
  
      Front-end. Пользователь нажимает кнопку "чек-лист". Открывается экранная форма. 
      На форме:
      1. Выбор коэффициента для каждой стадии (всего должно выйти 100). Поля otrFactor, pdFactor, rdFactor.
      2. Выбор коэффициента для каждого критерия критичности (??? лучше из БД тянуть?? а как тогда на 100 % выйти).
      3. Для каждого критерия критичности выставляются значения "порог", "цель", "амцель". Поля threshold, goal, tenseGoal.
      4. Шкала оценки:
          4.1. Отлично (значение больше или равно указанному на форме).
          4.2. Хорошо (значение меньше значения п. 4.1, но больше или равно указанному на форме).
          4.3. Удовлетворительно (значение меньше значения п. 4.2, но больше или равно указанному на форме).
          4.4. Не удовлетворительно (значение меньше п. 4.3).
  
         Методика расчета:
          1.1. из БД получаем все документы в соответствии с id проекта и id стадии (в том числе проверяем документы объектов и подобъектов).
          1.2. получаем все замечания по id каждого документа и id критерия критичности.
          1.3. Понижающий коэффициент (ПК, поле reductionFactor) и Коэффициент "обратная связь" (КОС, поле feedbackFactor):
          1.3.1.1. если количество замечаний превышает "порог" - ПК 0,80. 
          1.3.1.2. если количество снятых и устраненных замечаний больше 90% от общего количества по критерию - КОС 1,250.
          1.3.1.3. если количество снятых и устраненных замечаний меньше 90% от общего количества по критерию - КОС 1.
          1.3.2.1. если количество замечаний меньше "порога", но больше "цели" - ПК 0,90.
          1.3.2.2. если количество снятых и устраненных замечаний больше 90% от общего количества по критерию - КОС 1,111.
          1.3.2.3. если количество снятых и устраненных замечаний меньше 90% от общего количества по критерию - КОС 1.
          1.3.3.1. если количество замечаний меньше "цели", но больше "амцели" - ПК 0,95.
          1.3.3.2. если количество снятых и устраненных замечаний больше 90% от общего количества по критерию - КОС 1,053.
          1.3.3.3. если количество снятых и устраненных замечаний меньше 90% от общего количества по критерию - КОС 1.
          1.3.4.1. если количество замечаний меньше "амцели" - ПК 1,00.
          1.4. Суммарный итог по критерию: вес критерия * ПК по критерию * КОС по критерию.
          1.5. Суммарный итог по стадии: сумма итогов по критерию * вес стадии.
          1.6. Суммарный итог по всем стадиям: сумма итогов стадий.
  
      */

import { Injectable } from "@nestjs/common";
import { setCurrentDate } from "../../../common/utils";
import {
  CheckListCoefficient,
  CheckListCommentCriterions,
  CheckListCriticalityCriterions,
  CheckListDocumentCriterions,
  CheckListSets,
  CheckListStageCriterions,
  CommentAccountingNSIView,
  ProjectCheckListView,
  UnitCheckListView,
} from "../../../common/types/comments-accounting";
import { DesignDocumentEntity } from "../file-storage";
import { ProjectEntity, SubUnitEntity, UnitEntity } from "../position-tree";
import {
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";

@Injectable()
export class CheckListService {
  constructor() {}

  coefficientCalculation = (
    count: number,
    eliminated: number,
    weigth: number,
    threshold: number,
    goal: number,
    tenseGoal: number
  ): CheckListCoefficient => {
    let coef = 0;
    let reductionFactor = 0;
    let feedbackFactor = 0;
    let result = 0;

    coef = count !== 0 ? eliminated / count : 1;

    reductionFactor =
      count > threshold
        ? 0.8
        : count < threshold && count > goal
        ? 0.9
        : count < goal && count > tenseGoal
        ? 0.95
        : 1;

    feedbackFactor =
      coef > 0.9 && reductionFactor === 0.8
        ? 1.25
        : coef > 0.9 && reductionFactor === 0.9
        ? 1.111
        : coef > 0.9 && reductionFactor === 0.95
        ? 1.053
        : 1;

    result = weigth * reductionFactor * feedbackFactor;

    return {
      count,
      eliminated,
      coef,
      reductionFactor,
      feedbackFactor,
      result,
    };
  };

  solutionCheck = (arr: DesignDocumentSolutionEntity[]) => {
    let eliminated = 0;
    arr.map((item) => {
      if (
        item.solutionId === 1 ||
        item.solutionId === 3 ||
        item.solutionId === 5
      ) {
        eliminated = 1;
      }
    });

    return eliminated;
  };

  commentCheck = (
    comment: DesignDocumentCommentEntity,
    criticalityId: number
  ): CheckListCommentCriterions => {
    let criterion: CheckListCommentCriterions = {
      count: 0,
      eliminated: 0,
    };

    if (comment.criticalityId === criticalityId) {
      criterion.count = 1;
      criterion.eliminated =
        comment.solutions?.length > 0
          ? this.solutionCheck(comment.solutions)
          : 0;
    }

    return criterion;
  };

  documentCheck = (
    document: DesignDocumentEntity,
    stageId: number,
    criticalityArr: CommentAccountingNSIView[]
  ): CheckListDocumentCriterions[] => {
    let criterion: CheckListDocumentCriterions = {
      criticalityTitle: "",
      count: 0,
      eliminated: 0,
    };
    let criterions = [];

    let docs = 0;
    if (document.stageId === stageId) {
      for (let i = 1; i < criticalityArr.length; i++) {
        criterion.criticalityTitle = criticalityArr[i].title;

        if (document.projectId && document.pdc?.length > 0) {
          document.pdc.map((item) => {
            let { count, eliminated } = this.commentCheck(
              item,
              +criticalityArr[i].id
            );
            criterion.count += count;
            criterion.eliminated += eliminated;
            return null;
          });
        }
        if (document.unitId && document.udc?.length > 0) {
          document.udc.map((item) => {
            let { count, eliminated } = this.commentCheck(
              item,
              +criticalityArr[i].id
            );
            criterion.count += count;
            criterion.eliminated += eliminated;
            return null;
          });
        }
        if (document.subUnitId && document.sudc?.length > 0) {
          document.sudc.map((item) => {
            let { count, eliminated } = this.commentCheck(
              item,
              +criticalityArr[i].id
            );
            criterion.count += count;
            criterion.eliminated += eliminated;
            return null;
          });
        }

        if (document.supplierId && document.sdc?.length > 0) {
          document.sudc.map((item) => {
            let { count, eliminated } = this.commentCheck(
              item,
              +criticalityArr[i].id
            );
            criterion.count += count;
            criterion.eliminated += eliminated;
            return null;
          });
        }

        criterions.push(criterion);
        criterion = {
          criticalityTitle: "",
          count: 0,
          eliminated: 0,
        };
      }
    } else {
      for (let i = 1; i < criticalityArr.length; i++) {
        criterions.push({
          criticalityTitle: criticalityArr[i].title,
          count: 0,
          eliminated: 0,
        });
      }
    }

    return criterions;
  };

  projectCheck = (
    docsArr: DesignDocumentEntity[],
    stageId: number,
    criticalityArr: CommentAccountingNSIView[]
  ): CheckListDocumentCriterions[] => {
    let criterion: CheckListDocumentCriterions = {
      criticalityTitle: "",
      count: 0,
      eliminated: 0,
    };
    let criterions: CheckListDocumentCriterions[] = [];
    let intermediateArr: CheckListDocumentCriterions[] = [];

    let newArr: CheckListDocumentCriterions[] = [];

    if (docsArr.length > 0) {
      docsArr.map((document) =>
        intermediateArr.push(
          ...this.documentCheck(document, stageId, criticalityArr)
        )
      );

      for (let i = 1; i < criticalityArr.length; i++) {
        criterion.criticalityTitle = criticalityArr[i].title;
        newArr = intermediateArr.filter(
          (elem) => elem.criticalityTitle === criticalityArr[i].title
        );

        newArr.map(({ count, eliminated }) => {
          criterion.count += count;
          criterion.eliminated += eliminated;

          return null;
        });
        criterions.push(criterion);
        criterion = {
          criticalityTitle: "",
          count: 0,
          eliminated: 0,
        };
      }
    } else {
      for (let i = 1; i < criticalityArr.length; i++) {
        criterions.push({
          criticalityTitle: criticalityArr[i].title,
          count: 0,
          eliminated: 0,
        });
      }
    }
    return criterions;
  };

  stageCheck = (
    item: ProjectEntity | UnitEntity | SubUnitEntity,
    stage: CommentAccountingNSIView,
    stageFactor: number,
    criticalityArr: CommentAccountingNSIView[]
  ): CheckListStageCriterions => {
    let criterion: CheckListCriticalityCriterions = {
      criticalityTitle: "",
      count: 0,
      eliminated: 0,
      weight: 0,
      result: 0,
      threshold: 0,
      goal: 0,
      tenseGoal: 0,
    };
    let total = 0;
    let criterions: CheckListCriticalityCriterions[] = [],
      intermediateArr = [],
      newArr = [];

    if ("projectDocuments" in item) {
      intermediateArr.push(
        ...this.projectCheck(item.projectDocuments, +stage.id, criticalityArr)
      );
    }

    if ("unitDocuments" in item) {
      intermediateArr.push(
        ...this.projectCheck(item.unitDocuments, +stage.id, criticalityArr)
      );
    }

    if ("subUnitDocuments" in item) {
      intermediateArr.push(
        ...this.projectCheck(item.subUnitDocuments, +stage.id, criticalityArr)
      );
    }

    if ("units" in item && item.units?.length > 0) {
      item.units.map((unit) => {
        intermediateArr.push(
          ...this.projectCheck(unit.unitDocuments, +stage.id, criticalityArr)
        );
        if (unit.subUnits?.length > 0) {
          unit.subUnits.map((subUnit) =>
            intermediateArr.push(
              ...this.projectCheck(
                subUnit.subUnitDocuments,
                +stage.id,
                criticalityArr
              )
            )
          );
        }
        // return null;
      });
    }

    if ("subUnits" in item && item.subUnits?.length > 0) {
      item.subUnits.map((subUnit) => {
        intermediateArr.push(
          ...this.projectCheck(
            subUnit.subUnitDocuments,
            +stage.id,
            criticalityArr
          )
        );

        // return null;
      });
    }

    for (let i = 0; i < criticalityArr.length; i++) {
      criterion.criticalityTitle = criticalityArr[i].title;
      criterion.weight = +criticalityArr[i].code;
      criterion.threshold = +criticalityArr[i].threshold;
      criterion.goal = +criticalityArr[i].goal;
      criterion.tenseGoal = +criticalityArr[i].tenseGoal;

      newArr = intermediateArr.filter(
        ({ criticalityTitle }) => criticalityTitle === criticalityArr[i].title
      );

      newArr.map(({ count, eliminated }) => {
        criterion.count += count;
        criterion.eliminated += eliminated;
        // return null;
      });

      const { result } = this.coefficientCalculation(
        criterion.count,
        criterion.eliminated,
        criterion.weight,
        criterion.threshold,
        criterion.goal,
        criterion.tenseGoal
      );

      criterion.result = result;

      criterions.push(criterion);
      criterion = {
        criticalityTitle: "",
        count: 0,
        eliminated: 0,
        weight: 0,

        result: 0,
        threshold: 0,
        goal: 0,
        tenseGoal: 0,
      };
    }

    criterions.map(({ result }) => (total += result));

    return {
      stageTitle: stage.title,
      stageTotal: Math.round(total * stageFactor) / 100,
      stageFactor,
      criterions,
    };
  };

  gradeCheck = (
    result: number,
    satisfactorily: number,
    okay: number,
    great: number
  ): string => {
    return result < satisfactorily
      ? "Не удовлетворительно"
      : result >= satisfactorily && result < okay
      ? "Удовлетворительно"
      : result >= okay && result < great
      ? "Хорошо"
      : "Отлично";
  };

  projectChecklist = (
    item: ProjectEntity,
    settings: CheckListSets
  ): ProjectCheckListView => {
    let result = 0,
      criterions: CheckListStageCriterions[] = [];

    const { satisfactorily, okay, great } = settings;

    for (let i = 0; i < settings.settings.length; i++) {
      const { stage, stageFactor, criticalities } = settings.settings[i];
      criterions.push(
        this.stageCheck(item, stage, +stageFactor, criticalities)
      );
    }

    criterions.map(({ stageTotal }) => (result += stageTotal));

    const grade = this.gradeCheck(result, +satisfactorily, +okay, +great);

    return {
      satisfactorily: satisfactorily,
      okay: okay,
      great: great,
      subsidiary: item.field.subsidiary.title,
      design: item.design.title,
      code: item.code,
      title: item.title,
      contract: item.contract,
      user: "",
      date: setCurrentDate(),
      result: Math.round(result * 100) / 100,
      grade,
      criterions,
    };
  };

  unitChecklist = (
    item: UnitEntity | SubUnitEntity,
    settings: CheckListSets
  ): UnitCheckListView => {
    let result = 0,
      criterions: CheckListStageCriterions[] = [];

    const { satisfactorily, okay, great } = settings;

    for (let i = 0; i < settings.settings.length; i++) {
      const { stage, stageFactor, criticalities } = settings.settings[i];
      criterions.push(
        this.stageCheck(item, stage, +stageFactor, criticalities)
      );
    }

    criterions.map(({ stageTotal }) => (result += stageTotal));

    const grade = this.gradeCheck(result, +satisfactorily, +okay, +great);

    return {
      satisfactorily: satisfactorily,
      okay: okay,
      great: great,
      subsidiary:
        "project" in item
          ? item.project.field.subsidiary.title
          : "unit" in item
          ? item.unit.project.field.subsidiary.title
          : "",
      supplier: item.supplier.title,
      position: item.position,
      title: item.title,
      contract: item.contract,
      user: "",
      date: setCurrentDate(),
      result: Math.round(result * 100) / 100,
      grade,
      criterions,
    };
  };
}
