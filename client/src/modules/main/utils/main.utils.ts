type T = any;

export const getUniqueAssetsOfArrayOfTheObjects = (
  key: string,
  array: Array<T>
): Array<T> => {
  return [...new Map(array.map((item) => [item[key], item])).values()];
};
