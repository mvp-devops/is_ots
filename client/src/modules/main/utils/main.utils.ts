type T = any;

export const getUniqueAssetsOfArrayOfTheObjects = (
  key: string,
  array: Array<T>
): Array<T> => {
  return [...new Map(array.map((item) => [item[key], item])).values()];
};

export const setCurrentDate = (): string => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const date = `${dd}.${mm}.${yyyy}`;
  return date;
};

export const positionSorter = (posA: string, posB: string): number => {
  if (!posA && !posB) {
    return 0;
  } else {
    const a = posA.split(".");
    const b = posB.split(".");
    if (+a[0] < +b[0]) {
      return -1;
    }
    if (+a[0] > +b[0]) {
      return 1;
    }
    if (+a[0] === +b[0]) {
      if (+a[1] < +b[1]) {
        return -1;
      }
      if (+a[1] > +b[1]) {
        return 1;
      }
      if (+a[1] === +b[1]) {
        if (+a[2] < +b[2]) {
          return -1;
        }
        if (+a[2] > +b[2]) {
          return 1;
        }
        if (+a[2] === +b[2]) {
        }
      }
    }
  }
};

export const stringSorter = (a: string, b: string) =>
  a !== null && b !== null
    ? a.toUpperCase() < b.toUpperCase()
      ? -1
      : a?.toUpperCase() > b.toUpperCase()
      ? 1
      : 0
    : 0;
