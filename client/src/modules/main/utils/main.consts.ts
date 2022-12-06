export const tableLocale = {
  pagination: "",
  filterTitle: "Фильтр",
  filterConfirm: "OK",
  filterReset: "Сбросить",
  // filterEmptyText: "Нет данных",
  filterCheckall: "Выбрать все",
  filterSearchPlaceholder: "Поиск",
  // emptyText: "Нет данных",
  selectAll: "Выбрать все",
  selectInvert: "Инвертировать",
  selectNone: "Очистить",
  selectionAll: "Выбрать все",
  sortTitle: "Сортировка",
  expand: "Открыть",
  collapse: "Скрыть",
  triggerDesc: "По убыванию",
  triggerAsc: "По возрастанию",
  cancelSort: "Сбросить",
};

export enum Roles {
  ADMINISTRATOR = "ADMINISTRATOR",
  CUSTOMER = "CUSTOMER",
  EXPERT = "EXPERT",
  OTS = "OTS",
  GUEST = "GUEST",
  DESIGN = "DESIGN",
  COUNTERPARTY = "COUNTERPARTY",
  CLERK = "CLERK",
  ESCORT = "ESCORT"
}

export const userRoles = [
  {
    id: 1,
    title: "Администратор",
    value: Roles.ADMINISTRATOR,
  },
  {
    id: 2,
    title: "Заказчик",
    value: Roles.CUSTOMER,
  },
  {
    id: 3,
    title: "Исполнитель",
    value: Roles.COUNTERPARTY,
  },
  {
    id: 4,
    title: "ОТС",
    value: Roles.OTS,
  },
  {
    id: 5,
    title: "Проектировщик",
    value: Roles.DESIGN,
  },
  {
    id: 6,
    title: "Эксперт",
    value: Roles.EXPERT,
  },
  {
    id: 7,
    title: "Гость",
    value: Roles.GUEST,
  },
  {
    id: 8,
    title: "Делопроизводитель",
    value: Roles.CLERK,
  },
  {
    id: 9,
    title: "Сопроводитель",
    value: Roles.ESCORT,
  }
];

export const months = [
  {
    id: 1,
    title: "Январь",
    value: "01",
  },
  {
    id: 2,
    title: "Февраль",
    value: "02",
  },
  {
    id: 3,
    title: "Март",
    value: "03",
  },
  {
    id: 4,
    title: "Апрель",
    value: "04",
  },
  {
    id: 5,
    title: "Май",
    value: "05",
  },
  {
    id: 6,
    title: "Июнь",
    value: "06",
  },
  {
    id: 7,
    title: "Июль",
    value: "07",
  },
  {
    id: 8,
    title: "Август",
    value: "08",
  },
  {
    id: 9,
    title: "Сентябрь",
    value: "09",
  },
  {
    id: 10,
    title: "Октябрь",
    value: "10",
  },
  {
    id: 11,
    title: "Ноябрь",
    value: "11",
  },
  {
    id: 12,
    title: "Декабрь",
    value: "12",
  },
];

export const systemType: string[] = ["КИТСО", "ПАЗ", "РСУ"];