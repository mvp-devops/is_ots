export const setCurrentDate = (): string => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const date = `${dd}.${mm}.${yyyy}`;
  return date;
};

export const setDateToVerification = (
  fromDate: string,
  mpi: string
): string => {
  const d = new Date(fromDate);
  const renderDate = new Date(
    new Date(d.setMonth(d.getMonth() + Number(mpi))).setDate(d.getDate() - 1)
  ).toString();
  return formatDate(renderDate);
};

export const formatDate = (date: string): string => {
  let d = new Date(date),
    month = "" + d.getMonth(),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join(".");
};

export const verificateDates = (toDate: string): string => {
  const td = new Date(
    +toDate.split(".")[2],
    +toDate.split(".")[1],
    +toDate.split(".")[0]
  );

  const today = setCurrentDate();

  const wd = new Date(
    +today.split(".")[2],
    +today.split(".")[1] + 2,
    +today.split(".")[0]
  );

  const currDate = new Date(
    +today.split(".")[2],
    +today.split(".")[1],
    +today.split(".")[0]
  );

  return td > currDate && td < wd ? "w" : td > currDate && td > wd ? "s" : "d";
};

export const setDate = (date: string) => {
  const arr = date.split("-");

  const d = new Date(+arr[0], +arr[1], +arr[2]);

  return d;
};
