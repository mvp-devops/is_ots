import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import {
  CommentStatistic,
  DesignDocumentStatistic,
  FieldStatistic,
  ProjectStatistic,
  SubsidiaryStatistic,
  SubUnitStatistic,
  UnitStatistic,
} from "../../../common/types/comments-accounting";
import { DesignDocumentEntity, FileStorageService } from "../file-storage";
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
  constructor(
    @InjectModel(DesignDocumentCommentEntity)
    private commentRepository: typeof DesignDocumentCommentEntity,
    @Inject(forwardRef(() => FileStorageService))
    private fileService: FileStorageService
  ) {}

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

  getDesignDocumentStatistic = async (
    parrentTarget: string,
    parrentId: string
  ): Promise<DesignDocumentStatistic> => {
    let documents = 0,
      comments = 0,
      docAccepted = 0,
      docNotAccepted = 0,
      docDiscretionOfTheCustomer = 0,
      docPullOff = 0,
      docNotPullOff = 0,
      docEliminated = 0,
      docNotEliminated = 0,
      docPullOffByCustomer = 0;

    let items = await this.fileService.findDesignDocumentsForStatistic(
      parrentTarget,
      parrentId
    );

    if (items && items.length > 0) {
      documents += items.length;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.pdc && item.pdc.length > 0) {
          comments += item.pdc.length;

          for (let i = 0; i < item.pdc.length; i++) {
            const comment = item.pdc[i];

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
          }
        }

        if (item.udc && item.udc.length > 0) {
          comments += item?.udc.length;

          for (let i = 0; i < item.udc.length; i++) {
            const comment = item.udc[i];

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
          }
        }

        if (item.sudc && item.sudc.length > 0) {
          comments += item?.sudc.length;
          for (let i = 0; i < item.sudc.length; i++) {
            const comment = item.sudc[i];

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
          }
        }

        if (item.sdc && item.sdc.length > 0) {
          comments += item.sdc.length;
          for (let i = 0; i < item.sdc.length; i++) {
            const comment = item.sdc[i];

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
          }
        }
      }
    }

    return {
      documents,
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

  getSubUnitStatistic = async (
    item: SubUnitEntity
  ): Promise<SubUnitStatistic> => {
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
      } = await this.getDesignDocumentStatistic("sub-unit", item.id.toString());
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
    }

    if (item.supplier) {
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
      } = await this.getDesignDocumentStatistic(
        "supplier",
        item.supplier.id.toString()
      );
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

  getUnitStatistic = async (item: UnitEntity): Promise<UnitStatistic> => {
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
      } = await this.getDesignDocumentStatistic("unit", item.id.toString());
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

      if (item.subUnits && item.subUnits.length > 0) {
        subUnitsCount += item.subUnits.length;

        for (let i = 0; i < item.subUnits.length; i++) {
          const subUnit = item.subUnits[i];
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
          } = await this.getSubUnitStatistic(subUnit);
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
        }
      }

      if (item.supplier) {
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
        } = await this.getDesignDocumentStatistic(
          "supplier",
          item.supplier.id.toString()
        );
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

  getProjectStatistic = async (
    item: ProjectEntity
  ): Promise<ProjectStatistic> => {
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
      } = await this.getDesignDocumentStatistic("project", item.id.toString());
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

      if (item.units && item.units.length > 0) {
        unitsCount += item.units.length;

        for (let i = 0; i < item.units.length; i++) {
          const unit = item.units[i];
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
          } = await this.getUnitStatistic(unit);
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
        }
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

  getFieldStatistic = async (item: FieldEntity): Promise<FieldStatistic> => {
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
      for (let i = 0; i < item.projects.length; i++) {
        const project = item.projects[i];
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
        } = await this.getProjectStatistic(project);
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
      }
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

  getSubsidiaryStatistic = async (
    item: SubsidiaryEntity
  ): Promise<SubsidiaryStatistic> => {
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
      for (let i = 0; i < item.fields.length; i++) {
        const field = item.fields[i];
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
        } = await this.getFieldStatistic(field);
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
      }
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
