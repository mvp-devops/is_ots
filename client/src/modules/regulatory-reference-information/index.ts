import { nsiReducer } from "./store/regulatory-reference-information.reducer";
import * as nsiActionCreators from "./store/regulatory-reference-information.action-creators";
import {
  userRegistration,
  getAllItems,
  getItems,
  createOneEssence,
  updateOneEssence,
  deleteOneEssense,
  getOneItem,
} from "./api";
import {
  UserForm,
  useRegulatoryReferenceInformationForm,
} from "./components/forms";
import RegulatoryReferenceInformationList from "./views/RegulatoryReferenceInformationList";

import { useRegulatoryReferenceInformation } from "./hooks";

import {
  EssenceState,
  EssenceAction,
  ActionTypes,
  NsiCreateOrUpdateAttrs,
  NSIView,
  UserCreateOrUpdateAttrs,
} from "./types";

export type {
  EssenceState,
  EssenceAction,
  NsiCreateOrUpdateAttrs,
  NSIView,
  UserCreateOrUpdateAttrs,
};

export {
  userRegistration,
  getAllItems,
  createOneEssence,
  updateOneEssence,
  deleteOneEssense,
  getOneItem,
  ActionTypes,
  nsiReducer,
  nsiActionCreators,
  RegulatoryReferenceInformationList,
  getItems,
  UserForm,
  useRegulatoryReferenceInformationForm,
  useRegulatoryReferenceInformation,
};
