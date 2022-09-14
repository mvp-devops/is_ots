import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { getAllItems, getOneItem } from "..";

export const useRegulatoryReferenceInformation = () => {
  const [target, setTarget] = useState("");
  const [childTarget, setChildTarget] = useState("");

  return {
    getAllItems,
    getOneItem,
  };
};
