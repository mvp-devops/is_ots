import { getAllItems, getOneItem } from "../api";

export const useRegulatoryReferenceInformation = () => {
  return {
    getAllItems,
    getOneItem,
  };
};
