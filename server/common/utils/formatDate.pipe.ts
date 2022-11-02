export const formatDate = (date: string): string => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(".");
};

export const setCurrentDate = (): string => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const date = `${dd}.${mm}.${yyyy}`;
  return date;
};

export const formattedDate = (
  timeStamp: string | number,
  time = false
): string => {
  const date = new Date(timeStamp);
  const padL = (nr: number, len = 2, chr = "0") => `${nr}`.padStart(2, chr);

  const formattedDate = `${padL(date.getDate())}.${padL(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;
  const formattedTime = `${padL(date.getHours())}:${padL(
    date.getMinutes()
  )}:${padL(date.getSeconds())}`;

  return time ? `${formattedDate} ${formattedTime}` : formattedDate;
};
