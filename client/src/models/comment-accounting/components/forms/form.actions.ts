import { DesignDocumentCommentSolutionCreationAttrs } from "../../../../../../common/types/comments-accounting";

export const addItem = (
  items: DesignDocumentCommentSolutionCreationAttrs[],
  setItems: Function,
  item: DesignDocumentCommentSolutionCreationAttrs
) => {
  setItems([...items, { ...item, key: Date.now() }]);
};

export const removeItem = (
  items: DesignDocumentCommentSolutionCreationAttrs[],
  setItems: Function,
  index: string | number
) => {
  setItems(items.filter((i) => i.key !== index));
};

export const changeItems = (
  items: DesignDocumentCommentSolutionCreationAttrs[],
  setItems: Function,
  key: string,
  value: string,
  recordKey: string
) => {
  setItems(
    items.map((i) => (i.key === recordKey ? { ...i, [key]: value } : i))
  );
};
