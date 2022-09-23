import { Injectable } from "@nestjs/common";
import {
  CommentStatistic,
  DesignDocumentStatistic,
  FieldStatistic,
  ProjectStatistic,
  SubsidiaryStatistic,
  SubUnitStatistic,
  UnitStatistic,
} from "../../../common/types/comments-accounting";
import { DesignDocumentEntity } from "../file-storage";
import {
  ProjectEntity,
  SubUnitEntity,
  UnitEntity,
  FieldEntity,
  SubsidiaryEntity,
} from "../position-tree";
import {
  DesignDocumentCommentEntity,
  DesignDocumentSolutionEntity,
} from "./entities";

@Injectable()
export class StatisticService {
  constructor() {}

  getSolutionStatistic = (
    item: DesignDocumentSolutionEntity
  ): CommentStatistic => {
    const commentStatistic = {
      accepted: 0,
      notAccepted: 0,
      discretionOfTheCustomer: 0,
      pullOff: 0,
      notPullOff: 0,
      eliminated: 0,
      notEliminated: 0,
      pullOffByCustomer: 0,
    };

    commentStatistic.accepted += item.statusId === 1 ? 1 : 0;
    commentStatistic.notAccepted += item.statusId === 2 ? 1 : 0;
    commentStatistic.discretionOfTheCustomer += item.statusId === 3 ? 1 : 0;
    commentStatistic.pullOff += item.solutionId === 1 ? 1 : 0;
    commentStatistic.notPullOff += item.solutionId === 2 ? 1 : 0;
    commentStatistic.eliminated += item.solutionId === 3 ? 1 : 0;
    commentStatistic.notEliminated += item.solutionId === 4 ? 1 : 0;
    commentStatistic.pullOffByCustomer += item.solutionId === 5 ? 1 : 0;

    return commentStatistic;
  };

  getCommentStatistic = (
    item: DesignDocumentCommentEntity
  ): CommentStatistic => {
    let commentStatistic = {
      accepted: 0,
      notAccepted: 0,
      discretionOfTheCustomer: 0,
      pullOff: 0,
      notPullOff: 0,
      eliminated: 0,
      notEliminated: 0,
      pullOffByCustomer: 0,
    };

    if (item && item.solutions.length > 0) {
      item.solutions.map(
        (solution) => (commentStatistic = this.getSolutionStatistic(solution))
      );
    }
    return commentStatistic;
  };

  getDesignDocumentStatistic = (
    item: DesignDocumentEntity
  ): DesignDocumentStatistic => {
    let comments = 0,
      docAccepted = 0,
      docNotAccepted = 0,
      docDiscretionOfTheCustomer = 0,
      docPullOff = 0,
      docNotPullOff = 0,
      docEliminated = 0,
      docNotEliminated = 0,
      docPullOffByCustomer = 0;

    if (item) {
      if (item?.pdc && item?.pdc.length > 0) {
        comments += item.pdc?.length;
        item?.pdc.map((comment) => {
          const {
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getCommentStatistic(comment);

          docAccepted += accepted;
          docNotAccepted += notAccepted;
          docDiscretionOfTheCustomer += discretionOfTheCustomer;
          docPullOff += pullOff;
          docNotPullOff += notPullOff;
          docEliminated += eliminated;
          docNotEliminated += notEliminated;
          docPullOffByCustomer += pullOffByCustomer;
        });
      }

      if (item?.udc && item?.udc.length > 0) {
        comments += item?.udc.length;
        item?.udc.map((comment) => {
          const {
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getCommentStatistic(comment);

          docAccepted += accepted;
          docNotAccepted += notAccepted;
          docDiscretionOfTheCustomer += discretionOfTheCustomer;
          docPullOff += pullOff;
          docNotPullOff += notPullOff;
          docEliminated += eliminated;
          docNotEliminated += notEliminated;
          docPullOffByCustomer += pullOffByCustomer;
        });
      }

      if (item?.sudc && item?.sudc.length > 0) {
        comments += item?.sudc.length;
        item?.sudc.map((comment) => {
          const {
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getCommentStatistic(comment);

          docAccepted += accepted;
          docNotAccepted += notAccepted;
          docDiscretionOfTheCustomer += discretionOfTheCustomer;
          docPullOff += pullOff;
          docNotPullOff += notPullOff;
          docEliminated += eliminated;
          docNotEliminated += notEliminated;
          docPullOffByCustomer += pullOffByCustomer;
        });
      }

      if (item?.sdc && item?.sdc.length > 0) {
        comments += item?.sdc.length;
        item?.sdc.map((comment) => {
          const {
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getCommentStatistic(comment);

          docAccepted += accepted;
          docNotAccepted += notAccepted;
          docDiscretionOfTheCustomer += discretionOfTheCustomer;
          docPullOff += pullOff;
          docNotPullOff += notPullOff;
          docEliminated += eliminated;
          docNotEliminated += notEliminated;
          docPullOffByCustomer += pullOffByCustomer;
        });
      }
    }

    return {
      comments,
      accepted: docAccepted,
      notAccepted: docNotAccepted,
      discretionOfTheCustomer: docDiscretionOfTheCustomer,
      pullOff: docPullOff,
      notPullOff: docNotPullOff,
      eliminated: docEliminated,
      notEliminated: docNotEliminated,
      pullOffByCustomer: docPullOffByCustomer,
    };
  };

  getSubUnitStatistic = (item: SubUnitEntity): SubUnitStatistic => {
    let documentsCount = 0,
      commentsCount = 0,
      acceptedCount = 0,
      notAcceptedCount = 0,
      discretionOfTheCustomerCount = 0,
      pullOffCount = 0,
      notPullOffCount = 0,
      eliminatedCount = 0,
      notEliminatedCount = 0,
      pullOffByCustomerCount = 0;

    if (item) {
      if (item.subUnitDocuments && item.subUnitDocuments.length > 0) {
        documentsCount += item.subUnitDocuments.length;
        item.subUnitDocuments.map((doc) => {
          const {
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getDesignDocumentStatistic(doc);
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }
      if (
        item.supplier &&
        item.supplier.supplierDocuments &&
        item.supplier.supplierDocuments.length > 0
      ) {
        documentsCount += item.supplier.supplierDocuments.length;
        item.supplier.supplierDocuments.map((doc) => {
          const {
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getDesignDocumentStatistic(doc);
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }
    }

    return {
      documents: documentsCount,
      comments: commentsCount,
      accepted: acceptedCount,
      notAccepted: notAcceptedCount,
      discretionOfTheCustomer: discretionOfTheCustomerCount,
      pullOff: pullOffCount,
      notPullOff: notPullOffCount,
      eliminated: eliminatedCount,
      notEliminated: notEliminatedCount,
      pullOffByCustomer: pullOffByCustomerCount,
    };
  };

  getUnitStatistic = (item: UnitEntity): UnitStatistic => {
    let subUnitsCount = 0,
      documentsCount = 0,
      commentsCount = 0,
      acceptedCount = 0,
      notAcceptedCount = 0,
      discretionOfTheCustomerCount = 0,
      pullOffCount = 0,
      notPullOffCount = 0,
      eliminatedCount = 0,
      notEliminatedCount = 0,
      pullOffByCustomerCount = 0;

    if (item) {
      if (item.subUnits && item.subUnits.length > 0) {
        subUnitsCount += item.subUnits.length;
        item.subUnits.map((subUnit) => {
          const {
            documents,
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getSubUnitStatistic(subUnit);
          documentsCount += documents;
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }

      if (item.unitDocuments && item.unitDocuments.length > 0) {
        documentsCount += item.unitDocuments.length;
        item.unitDocuments.map((doc) => {
          const {
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getDesignDocumentStatistic(doc);
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }

      if (
        item.supplier &&
        item.supplier.supplierDocuments &&
        item.supplier.supplierDocuments.length > 0
      ) {
        documentsCount += item.supplier.supplierDocuments.length;
        item.supplier.supplierDocuments.map((doc) => {
          const {
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getDesignDocumentStatistic(doc);
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }
    }

    return {
      subUnits: subUnitsCount,
      documents: documentsCount,
      comments: commentsCount,
      accepted: acceptedCount,
      notAccepted: notAcceptedCount,
      discretionOfTheCustomer: discretionOfTheCustomerCount,
      pullOff: pullOffCount,
      notPullOff: notPullOffCount,
      eliminated: eliminatedCount,
      notEliminated: notEliminatedCount,
      pullOffByCustomer: pullOffByCustomerCount,
    };
  };

  getProjectStatistic = (item: ProjectEntity): ProjectStatistic => {
    let unitsCount = 0,
      subUnitsCount = 0,
      documentsCount = 0,
      commentsCount = 0,
      acceptedCount = 0,
      notAcceptedCount = 0,
      discretionOfTheCustomerCount = 0,
      pullOffCount = 0,
      notPullOffCount = 0,
      eliminatedCount = 0,
      notEliminatedCount = 0,
      pullOffByCustomerCount = 0;

    if (item) {
      if (item.units && item.units.length > 0) {
        unitsCount += item.units.length;

        item.units.map((unit) => {
          const {
            subUnits,
            documents,
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getUnitStatistic(unit);
          subUnitsCount += subUnits;
          documentsCount += documents;
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }

      if (item.projectDocuments && item.projectDocuments.length > 0) {
        documentsCount += item.projectDocuments.length;
        item.projectDocuments.map((doc) => {
          const {
            comments,
            accepted,
            notAccepted,
            discretionOfTheCustomer,
            pullOff,
            notPullOff,
            eliminated,
            notEliminated,
            pullOffByCustomer,
          } = this.getDesignDocumentStatistic(doc);
          commentsCount += comments;
          acceptedCount += accepted;
          notAcceptedCount += notAccepted;
          discretionOfTheCustomerCount += discretionOfTheCustomer;
          pullOffCount += pullOff;
          notPullOffCount += notPullOff;
          eliminatedCount += eliminated;
          notEliminatedCount += notEliminated;
          pullOffByCustomerCount += pullOffByCustomer;
        });
      }
    }
    return {
      units: unitsCount,
      subUnits: subUnitsCount,
      documents: documentsCount,
      comments: commentsCount,
      accepted: acceptedCount,
      notAccepted: notAcceptedCount,
      discretionOfTheCustomer: discretionOfTheCustomerCount,
      pullOff: pullOffCount,
      notPullOff: notPullOffCount,
      eliminated: eliminatedCount,
      notEliminated: notEliminatedCount,
      pullOffByCustomer: pullOffByCustomerCount,
    };
  };

  getFieldStatistic = (item: FieldEntity): FieldStatistic => {
    let projectsCount = 0,
      unitsCount = 0,
      subUnitsCount = 0,
      documentsCount = 0,
      commentsCount = 0,
      acceptedCount = 0,
      notAcceptedCount = 0,
      discretionOfTheCustomerCount = 0,
      pullOffCount = 0,
      notPullOffCount = 0,
      eliminatedCount = 0,
      notEliminatedCount = 0,
      pullOffByCustomerCount = 0;

    if (item && item.projects && item.projects.length > 0) {
      projectsCount += item.projects.length;
      item.projects.map((project) => {
        const {
          units,
          subUnits,
          documents,
          comments,
          accepted,
          notAccepted,
          discretionOfTheCustomer,
          pullOff,
          notPullOff,
          eliminated,
          notEliminated,
          pullOffByCustomer,
        } = this.getProjectStatistic(project);
        unitsCount += units;
        subUnitsCount += subUnits;
        documentsCount += documents;
        commentsCount += comments;
        acceptedCount += accepted;
        notAcceptedCount += notAccepted;
        discretionOfTheCustomerCount += discretionOfTheCustomer;
        pullOffCount += pullOff;
        notPullOffCount += notPullOff;
        eliminatedCount += eliminated;
        notEliminatedCount += notEliminated;
        pullOffByCustomerCount += pullOffByCustomer;
      });
    }

    return {
      projects: projectsCount,
      units: unitsCount,
      subUnits: subUnitsCount,
      documents: documentsCount,
      comments: commentsCount,
      accepted: acceptedCount,
      notAccepted: notAcceptedCount,
      discretionOfTheCustomer: discretionOfTheCustomerCount,
      pullOff: pullOffCount,
      notPullOff: notPullOffCount,
      eliminated: eliminatedCount,
      notEliminated: notEliminatedCount,
      pullOffByCustomer: pullOffByCustomerCount,
    };
  };

  getSubsidiaryStatistic = (item: SubsidiaryEntity): SubsidiaryStatistic => {
    let fieldsCount = 0,
      projectsCount = 0,
      unitsCount = 0,
      subUnitsCount = 0,
      documentsCount = 0,
      commentsCount = 0,
      acceptedCount = 0,
      notAcceptedCount = 0,
      discretionOfTheCustomerCount = 0,
      pullOffCount = 0,
      notPullOffCount = 0,
      eliminatedCount = 0,
      notEliminatedCount = 0,
      pullOffByCustomerCount = 0;

    if (item && item.fields && item.fields.length > 0) {
      fieldsCount += item.fields.length;
      item.fields.map((field) => {
        const {
          projects,
          units,
          subUnits,
          documents,
          comments,
          accepted,
          notAccepted,
          discretionOfTheCustomer,
          pullOff,
          notPullOff,
          eliminated,
          notEliminated,
          pullOffByCustomer,
        } = this.getFieldStatistic(field);
        projectsCount += projects;
        unitsCount += units;
        subUnitsCount += subUnits;
        documentsCount += documents;
        commentsCount += comments;
        acceptedCount += accepted;
        notAcceptedCount += notAccepted;
        discretionOfTheCustomerCount += discretionOfTheCustomer;
        pullOffCount += pullOff;
        notPullOffCount += notPullOff;
        eliminatedCount += eliminated;
        notEliminatedCount += notEliminated;
        pullOffByCustomerCount += pullOffByCustomer;
      });
    }

    return {
      fields: fieldsCount,
      projects: projectsCount,
      units: unitsCount,
      subUnits: subUnitsCount,
      documents: documentsCount,
      comments: commentsCount,
      accepted: acceptedCount,
      notAccepted: notAcceptedCount,
      discretionOfTheCustomer: discretionOfTheCustomerCount,
      pullOff: pullOffCount,
      notPullOff: notPullOffCount,
      eliminated: eliminatedCount,
      notEliminated: notEliminatedCount,
      pullOffByCustomer: pullOffByCustomerCount,
    };
  };
}
