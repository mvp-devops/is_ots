import React, { useState } from "react";
import { DesignDocumentCommentView } from "../../..";

export const useCommentAccountingTable = () => {
  const [selectedRow, setSelectedRow] =
    useState<DesignDocumentCommentView | null>(null);

  return {
    selectedRow,
    setSelectedRow,
  };
};
