import {
  SubsidiaryView,
  FieldView,
  ProjectView,
  PositionTreeView,
} from "../types/position-tree";

export const isField = (item: PositionTreeView): item is FieldView => {
  return (item as FieldView).subsidiary !== undefined;
};

export const isProject = (item: PositionTreeView): item is ProjectView => {
  return (item as ProjectView).field !== undefined;
};
