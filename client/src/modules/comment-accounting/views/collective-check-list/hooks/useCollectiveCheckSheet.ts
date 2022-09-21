import { exportLKPData } from "./../../../api";
// import { exportLKPData } from "./../../../api";
import { useEffect, useState } from "react";
import { DesignDocumentCommentView } from "../../../../../../../server/common/types/comments-accounting";
import { DesignDocumentView } from "../../../../../../../server/common/types/file-storage";
import { useActions, useTypedSelector } from "../../../../../hooks";
import { useFileStorage } from "../../../../file-storage";
import { usePositionTree } from "../../../../position-tree";

export const useCollectiveCheckSheet = () => {
  const [projectTitleRender, setProjectTitleRender] = useState("");
  const [unitTitleRender, setUnitTitleRender] = useState("");
  const [unitQuestionareRender, setUnitQuestionareRender] =
    useState<DesignDocumentView | null>(null);
  const [subUnitQuestionareRender, setSubUnitQuestionareRender] =
    useState<DesignDocumentView | null>(null);
  const [dataSource, setDataSource] = useState<DesignDocumentCommentView[]>([]);
  const [ids, setIds] = useState<string[]>([]);

  const [subUnitTitleRender, setSubUnitTitleRender] = useState("");

  const { currentItem, renderOneItem, target } = usePositionTree();

  const { checkedDesignDocuments, currentDesignDocument } = useFileStorage();

  const { renderItems } = useTypedSelector((state) => state.commentAccounting);

  const { getManyComments } = useActions();

  useEffect(() => {
    if (checkedDesignDocuments.length > 0) {
      let parrentIds: string[] = [];
      for (let i = 0; i < checkedDesignDocuments.length; i++) {
        parrentIds.push(checkedDesignDocuments[i].id);
      }
      setIds(parrentIds);
      getManyComments(target, undefined, parrentIds);
    } else {
      currentDesignDocument &&
        getManyComments(target, currentDesignDocument.id);
    }
  }, [checkedDesignDocuments, currentDesignDocument]);

  useEffect(() => {
    setDataSource(renderItems);
  }, [renderItems]);

  useEffect(() => {
    if (currentItem && renderOneItem) {
      switch (target) {
        case "project": {
          setProjectTitleRender(
            `${renderOneItem.code}. ${renderOneItem.title}`
          );
          break;
        }
        case "unit": {
          "project" in renderOneItem &&
            setProjectTitleRender(
              `${renderOneItem.project.code}. ${renderOneItem.project.title}`
            );
          "position" in renderOneItem &&
            setUnitTitleRender(
              `${renderOneItem.position}. ${renderOneItem.title}`
            );
          "unitQuestionare" in renderOneItem &&
            setUnitQuestionareRender(renderOneItem.unitQuestionare);
          break;
        }
        case "sub-unit": {
          "unit" in renderOneItem &&
            setProjectTitleRender(
              `${renderOneItem.unit.project.code}. ${renderOneItem.unit.project.title}`
            );
          "unit" in renderOneItem &&
            setProjectTitleRender(
              `${renderOneItem.unit.position}. ${renderOneItem.unit.title}`
            );
          "unit" in renderOneItem &&
            setUnitQuestionareRender(renderOneItem.unit.unitQuestionare);
          "position" in renderOneItem &&
            setSubUnitTitleRender(
              `${renderOneItem.position}. ${renderOneItem.title}`
            );
          "subUnitQuestionare" in renderOneItem &&
            setSubUnitQuestionareRender(renderOneItem.subUnitQuestionare);
          break;
        }
        default:
          break;
      }
    }
  }, [renderOneItem]);

  return {
    projectTitleRender,
    unitTitleRender,
    unitQuestionareRender,
    subUnitTitleRender,
    subUnitQuestionareRender,
    checkedDesignDocuments,
    currentDesignDocument,
    dataSource,
    exportLKPData,
    target,
    ids,
  };
};
