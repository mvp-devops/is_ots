import React, { useState } from "react";
import { DesignDocumentCommentView } from "../../../../../../../server/common/types/comments-accounting";

export const useCommentAccountingTable = () => {
  const [selectedRow, setSelectedRow] =
    useState<DesignDocumentCommentView | null>(null);

  return {
    selectedRow,
    setSelectedRow,
  };
};
