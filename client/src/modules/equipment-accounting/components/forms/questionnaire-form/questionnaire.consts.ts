// {
//   id: 1,
//     title: "",
//   value: ""
// }


export enum FacilityType {
  PRESSURE = "Измерения давления, вакуумные",
  TEMPERATURE = "Измерения свойств твёрдых тел, сыпучих веществ, жидкостей, морской воды, нефтиИзмерения температур, в т.ч. низких (ниже 273,15 К) и высоких (более 3000 К)",
  LEVEL = "Измерения уровня, объема, вместимости",
  FLOW = "Измерения расхода газов, жидкостей,пара, газожидкостных систем",
  GAZ_ANALYZE = "Физико-химические измерения состава твёрдых тел, жидкостей, газов"
}

/** Выбор оборудования для нового опросного листа */
export const facilityTypesLists = [FacilityType.GAZ_ANALYZE, FacilityType.PRESSURE, FacilityType.FLOW, FacilityType.TEMPERATURE, FacilityType.LEVEL ];

export const facilityTypesList = [
  {
    id: FacilityType.GAZ_ANALYZE,
    title: FacilityType.GAZ_ANALYZE,
    value: FacilityType.GAZ_ANALYZE,
    disabled: true,

    children: [
      {
        id: FacilityType.GAZ_ANALYZE,
        title: "Газоанализатор оптический",
        value: "Газоанализатор оптический",

      },
      {
        id: FacilityType.GAZ_ANALYZE,
        title: "Газоанализатор термокаталитический",
        value: "Газоанализатор термокаталитический",

      },
      {
        id: FacilityType.GAZ_ANALYZE,
        title: "Газоанализатор термохимический",
        value: "Газоанализатор термохимический",

      },      {
        id: FacilityType.GAZ_ANALYZE,
        title: "Газоанализатор электрохимический",
        value: "Газоанализатор электрохимический",

      }
    ]
  },
  {
    id: FacilityType.PRESSURE,
    title: FacilityType.PRESSURE,
    value: FacilityType.PRESSURE,
    disabled: true,

    children: [
      {
        id: FacilityType.PRESSURE,
        title: "Абсолютное давление",
        value: "Абсолютное давление",
        disabled: true,

        children: [
          {
            id: FacilityType.PRESSURE,
            title: "Датчик абсолютного давления интеллектуальный",
            value: "Датчик абсолютного давления интеллектуальный",

          },
          {
            id: FacilityType.PRESSURE,
            title: "Датчик абсолютного давления",
            value: "Датчик абсолютного давления",

          }
        ]
      },
      {
        id: FacilityType.PRESSURE,
        title: "Избыточное давление",
        value: "Избыточное давление",
        disabled: true,

        children: [
          {
            id: FacilityType.PRESSURE,
            title: "Датчик перепада давления интеллектуальный",
            value: "Датчик перепада давления интеллектуальный",
          },
          {
            id: FacilityType.PRESSURE,
            title: "Датчик избыточного давления интеллектуальный",
            value: "Датчик избыточного давления интеллектуальный",

          },
          {
            id: FacilityType.PRESSURE,
            title: "Датчик избыточного давления",
            value: "Датчик избыточного давления",

          },
          {
            id: FacilityType.PRESSURE,
            title: "Манометр показывающий",
            value: "Манометр показывающий",

          },
          {
            id: FacilityType.PRESSURE,
            title: "Реле давления или перепада или напора или тяги или сигнализатора давления",
            value: "Реле давления или перепада или напора или тяги или сигнализатора давления",

          },
          {
            id: FacilityType.PRESSURE,
            title: "Электроконтактный манометр",
            value: "Электроконтактный манометр",

          }
        ]
      },
      {
        id: FacilityType.PRESSURE,
        title: "Дифференциальное давление",
        value: "Дифференциальное давление",
        disabled: true,

        children: [
          {
            id: FacilityType.PRESSURE,
            title: "Датчик перепада давления",
            value: "Датчик перепада давления",

          }
        ]
      },
      {
        id: FacilityType.PRESSURE,
        title: "Гидростатическое давление",
        value: "Гидростатическое давление",
        disabled: true,

        children: [
          {
            id: FacilityType.PRESSURE,
            title: "Датчик гидростатического давления",
            value: "Датчик гидростатического давления",

          }
        ]
      },
    ]
  },
  {
    id: FacilityType.FLOW,
    title: FacilityType.FLOW,
    value: FacilityType.FLOW,
    disabled: true,

    children: [
      {
        id: FacilityType.FLOW,
        title: "Кориолисовый расходомер  (массомер)",
        value: "Кориолисовый расходомер  (массомер)",

      },
      {
        id: FacilityType.FLOW,
        title: "Ультразвуковой расходомер",
        value: "Ультразвуковой расходомер",

      },
      {
        id: FacilityType.FLOW,
        title: "Турбинный расходомер",
        value: "Турбинный расходомер",

      },
      {
        id: FacilityType.FLOW,
        title: "Вихревой расходомер",
        value: "Вихревой расходомер",

      },
      {
        id: FacilityType.FLOW,
        title: "Электромагнитный расходомер",
        value: "Электромагнитный расходомер",

      },
      {
        id: FacilityType.FLOW,
        title: "Ротаметр",
        value: "Ротаметр",

      },
      {
        id: FacilityType.FLOW,
        title: "Датчик реле расхода",
        value: "Датчик реле расхода",

      }
    ]
  },
  {
    id: FacilityType.TEMPERATURE,
    title: FacilityType.TEMPERATURE,
    value: FacilityType.TEMPERATURE,
    disabled: true,

    children: [
      {
        id: FacilityType.TEMPERATURE,
        title: "Термопреобразователь",
        value: "Термопреобразователь",
        disabled: true,

        children: [
          {
            id: FacilityType.TEMPERATURE,
            title: "Интеллектуальный термопреобразователь с унифицированным выходным сигналом",
            value: "Интеллектуальный термопреобразователь с унифицированным выходным сигналом",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Термопреобразователь с унифицированным выходным сигналом",
            value: "Термопреобразователь с унифицированным выходным сигналом",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Термометр сопротивления",
            value: "Термометр сопротивления",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Интеллектуальный многоточечный датчик температуры",
            value: "Интеллектуальный Многоточечный датчик температуры",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Многоточечный датчик температуры",
            value: "Многоточечный датчик температуры",

          }
        ]
      },
      {
        id: FacilityType.TEMPERATURE,
        title: "Термопара",
        value: "Термопара",
        disabled: true,

        children: [
          {
            id: FacilityType.TEMPERATURE,
            title: "Интеллектуальный преобразователь термоэлектрический",
            value: "Интеллектуальный преобразователь термоэлектрический",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Преобразователь термоэлектрический",
            value: "Преобразователь термоэлектрический",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Многоточечный датчик температуры",
            value: "Многоточечный датчик температуры",

          },
          {
            id: FacilityType.TEMPERATURE,
            title: "Многоточечный датчик температуры",
            value: "Многоточечный датчик температуры",

          }
        ]
      }
    ]
  },
  {
    id: FacilityType.LEVEL,
    title: FacilityType.LEVEL,
    value: FacilityType.LEVEL,
    disabled: true,

    children: [
      {
        id: FacilityType.LEVEL,
        title: "Сигнализатор уровня",
        value: "Сигнализатор уровня",
        disabled: true,

        children: [
          {
            id: FacilityType.LEVEL,
            title: "Вибрационный cигнализатор уровня",
            value: "Вибрационный cигнализатор уровня",

          },
          {
            id: FacilityType.LEVEL,
            title: "Емкостной cигнализатор уровня",
            value: "Емкостной cигнализатор уровня",

          },
          {
            id: FacilityType.LEVEL,
            title: "Кондуктометрический cигнализатор уровня",
            value: "Кондуктометрический cигнализатор уровня",

          },
          {
            id: FacilityType.LEVEL,
            title: "Ультразвуковой cигнализатор уровня",
            value: "Ультразвуковой cигнализатор уровня",

          },
          {
            id: FacilityType.LEVEL,
            title: "Термометрический",
            value: "Термометрический cигнализатор уровня",

          }
        ]
      },
      {
        id: FacilityType.LEVEL,
        title: "Уровнемер",
        value: "Уровнемер",
        disabled: true,

        children: [
          {
            id: FacilityType.LEVEL,
            title: "Буйковый уровнемер",
            value: "Буйковый уровнемер",

          },
          {
            id: FacilityType.LEVEL,
            title: "Волноводный уровнемер",
            value: "Волноводный уровнемер",

          },
          {
            id: FacilityType.LEVEL,
            title: "Гидростатический уровнемер",
            value: "Гидростатический уровнемер" ,

          },
          {
            id: FacilityType.LEVEL,
            title: "Микроволновый уровнемер",
            value: "Микроволновый уровнемер",

          },
          {
            id: FacilityType.LEVEL,
            title: "Поплавковый (магнитнострикционный) уровнемер",
            value: "Поплавковый (магнитнострикционный) уровнемер" ,

          },
          {
            id: FacilityType.LEVEL,
            title: "Радарный уровнемер",
            value: "Радарный уровнемер",

          },
          {
            id: FacilityType.LEVEL,
            title: "Ультразвуковой уровнемер",
            value: "Ультразвуковой уровнемер",

          }
        ]
      }
    ]
  }
]

/* Тип опросного листа */
export const questionnaireType = [
  {
    id: 1,
    title: "Проектная документация",
    value: "Проектная документация"
  },
  {
    id: 2,
    title: "Рабочая документация",
    value: "Рабочая документация"
  },
  {
    id: 3,
    title: "Ремонтно-эксплуатационные нужды",
    value: "Ремонтно-эксплуатационные нужды"
  }
]

/* Измеряемая среда / контроллируемые газы */
export const measuredArea = [
 "Азот", "Бензин", "Вода", "Водонефтегазовая эмульсия", "Газ", "Газовый конденсат", "Деэмульгатор", "Дизельное топливо", "Ингибитор коррозии", "Керосин", "Метанол", "Нефть", "Попутный нефтяной газ", "Природный газ", "Триэтиленгликоль", "Широкая фракция легких углеводородов (ШФЛУ)"
]
export const controlledGases = [
  "Водород H₂", "Кислород О₂", "Метан CH₄", "Оксид углерода CO", "Пропан C₃H₈", "Пары метанола СН₃OH", "Сероводород H₂S"]


/* Вид измерений или принцип измерений */
export const measureType = [
  {
    id: 1,
    title: "Оптический",
    value: "Оптический"
  },
  {
    id: 2,
    title: "Термокаталитический",
    value: "Термокаталитический"
  },
  {
    id: 3,
    title: "Термохимический",
    value: "Термохимический"
  },
  {
    id: 4,
    title: "Электрохимический",
    value: "Электрохимический"
  },
  {
    id: 5,
    title: "Абсолютное давление",
    value: "Абсолютное давление"
  },
  {
    id: 6,
    title: "Гидростатическое давление",
    value: "Гидростатическое давление"
  },
  {
    id: 7,
    title: "Дифференциальное давление",
    value: "Дифференциальное давление"
  },
  {
    id: 8,
    title: "Избыточное давление",
    value: "Избыточное давление"
  },
  {
    id: 9,
    title: "Биметаллическая пластина",
    value: "Биметаллическая пластина"
  },
  {
    id: 10,
    title: "Термопара",
    value: "Термопара"
  },
  {
    id: 11,
    title: "Термопреобразователь",
    value: "Термопреобразователь"
  },
  {
    id: 12,
    title: "Антенна",
    value: "Антенна"
  },
  {
    id: 13,
    title: "Буёк",
    value: "Буёк"
  },
  {
    id: 14,
    title: "Вибрационная вилка",
    value: "Вибрационная вилка"
  },
  {
    id: 15,
    title: "Гибкий",
    value: "Гибкий"
  },
  {
    id: 16,
    title: "Жесткий",
    value: "Жесткий"
  },
  {
    id: 17,
    title: "Импульсные трубки",
    value: "Импульсные трубки"
  },
  {
    id: 18,
    title: "Теплоприемник",
    value: "Теплоприемник"
  },
  {
    id: 19,
    title: "Электроды",
    value: "Электроды"
  },
]

export const converter = ["Совместно", "Удаленно"];

export const converterTypes = ["Отсутствует", "Интеллектуальный микропроцессорный", "Микропроцессорный", ]

export const sensorCalibration = [
  {
  id: 1,
    title: "Отсутствует",
  value: "Отсутствует"
},
{
  id: 2,
    title: "Pt 50",
  value: "Pt 50"
},
{
  id: 3,
    title: "Pt 100",
  value: "Pt 100"
},
{
  id: 4,
    title: "Pt 500",
  value: "Pt 500"
},
{
  id: 5,
    title: "Pt 1000",
  value: "Pt 1000"
},
{
  id: 6,
    title: "ТСМ 50М",
  value: "ТСМ 50М"
},
{
  id: 7,
    title: "ТСМ 100М",
  value: "ИТСМ 100М"
},
{
  id: 8,
    title: "Ni 1000",
  value: "Ni 1000"
},
{
  id: 9,
    title: "Платина ТПП",
  value: "Платина ТПП"
},
{
  id: 10,
    title: "Платина-родий ТПР",
  value: "Платина-родий ТПР"
},
{
  id: 11,
    title: "Хромель-капель ТХК",
  value: "Хромель-капель ТХК"
},
{
  id: 12,
    title: "Хромель-алюмель ТХА",
  value: "Хромель-алюмель ТХА"
},
{
  id: 13,
    title: "Вольфрам-рений ТВР",
  value: "Вольфрам-рений ТВР"
}
]

export const verificationMethod = ["Проливной", "Беспроливной (имитационный)"]

/* Тип присоединения к тех. процессу */
export const connectionType = [
  {
    id: 1,
    title: "Резьбовое",
    value: "Резьбовое"
  },
  {
    id: 2,
    title: "Резьбовое через клапанный блок",
    value: "Резьбовое через клапанный блок"
  },
  {
    id: 3,
    title: "Фланцевое",
    value: "Фланцевое"
  },
  {
    id: 4,
    title: "Фланцевое с выносной мембраной",
    value: "Фланцевое с выносной мембраной"
  }
]

/* Соединение с тех. процессом */
export const connection = [
  {
    id: 1,
    connectionTypeId: "Резьбовое",
    title: "К1/2 (ГОСТ 6111-52) внутренняя резьба",
    value: "К1/2 (ГОСТ 6111-52) внутренняя резьба"
  },
  {
    id: 2,
    connectionTypeId: "Резьбовое",
    title: "К1/2 (ГОСТ 6111-52) внешняя резьба",
    value: "К1/2 (ГОСТ 6111-52) внешняя резьба"
  },
  {
    id: 3,
    connectionTypeId: "Резьбовое",
    title: "М20х1,5 внешняя резьба",
    value: "М20х1,5 внешняя резьба"
  },
  {
    id: 5,
    connectionTypeId: "Резьбовое",
    title: "1/2 NPT внешняя резьба",
    value: "1/2 NPT внешняя резьба"
  },
  {
    id: 6,
    connectionTypeId: "Резьбовое",
    title: "1/2 NPT внутренняя",
    value: "1/2 NPT внутренняя"
  },
  {
    id: 7,
    connectionTypeId: "Резьбовое",
    title: "1/4 NPT внешняя резьба",
    value: "1/4 NPT внешняя резьба"
  },
  {
    id: 8,
    connectionTypeId: "Резьбовое",
    title: "1/4 NPT внутренняя",
    value: "1/4 NPT внутренняя"
  },
  {
    id: 9,
    connectionTypeId: "Резьбовое",
    title: "G1 внешняя резьба",
    value: "G1 внешняя резьба"
  },
  {
    id: 10,
    connectionTypeId:"Резьбовое",
    title: "G1 внутренняя резьба",
    value: "G1 внутренняя резьба"
  },
  {
    id: 11,
    connectionTypeId: "Резьбовое",
    title: "G2 внутренняя резьба",
    value: "G2 внутренняя резьба"
  },
  {
    id: 12,
    connectionTypeId:"Резьбовое",
    title: "G2 внешняя резьба",
    value: "G2 внешняя резьба"
  },
  {
    id: 13,
    connectionTypeId: "Фланцевое",
    title: "Диаметр присоединительного трубопровода DN 50мм",
    value: "Диаметр присоединительного трубопровода DN 50мм"
  },
  {
    id: 14,
    connectionTypeId: "Фланцевое",
    title: "Диаметр присоединительного трубопровода DN 80мм",
    value: "Диаметр присоединительного трубопровода DN 80мм"
  },
  {
    id: 15,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 50 см, диаметр трубопровода DN 50мм",
    value: "Длина удлинителя 50 см, диаметр трубопровода DN 50мм"
  },
  {
    id: 16,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 100 см, диаметр трубопровода DN 50мм",
    value: "Длина удлинителя 100 см, диаметр трубопровода DN 50мм"
  },
  {
    id: 17,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 150 см, диаметр трубопровода DN 50мм",
    value: "Длина удлинителя 150 см, диаметр трубопровода DN 50мм"
  },
  {
    id: 18,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 50 см, диаметр трубопровода DN 80мм",
    value: "Длина удлинителя 50 см, диаметр трубопровода DN 80мм"
  },
  {
    id: 19,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 100 см, диаметр трубопровода DN 80мм",
    value: "Длина удлинителя 100 см, диаметр трубопровода DN 80мм"
  },
  {
    id: 20,
    connectionTypeId: "Фланцевое",
    title: "Длина удлинителя 150 см, диаметр трубопровода DN 80мм",
    value: "Длина удлинителя 150 см, диаметр трубопровода DN 80мм"
  },
]

/* Исполнение клапанного блока */
export const valveBlockType = [
  {
    id: 1,
    title: "2x-вентильный",
    value: "2x-вентильный"
  },
  {
    id: 2,
    title: "3x-вентильный",
    value: "3x-вентильный"
  },
  {
    id: 3,
    title: "4x-вентильный",
    value: "4x-вентильный"
  },
  {
    id: 4,
    title: "5ти-вентильный",
    value: "5ти-вентильный"
  }
]

/* Выходной сигнал */
export const outputSignal = [
  {
    id: 1,
    title: "4-20 мА",
    value: "4-20 мА"
  },
  {
    id: 2,
    title: "4-20 мА + RS-485",
    value: "4-20 мА + RS-485"
  },
  {
    id: 3,
    title: "4-20 мА + HART",
    value: "4-20 мА + HART"
  },
  {
    id: 4,
    title: "4-20 мА + HART + СК",
    value: "4-20 мА + HART + СК"
  },
  {
    id: 5,
    title: "4-20 мА + HART + СК + NAMUR",
    value: "4-20 мА + HART + СК + NAMUR"
  },
  {
    id: 6,
    title: "4-20 мА + HART + NAMUR",
    value: "4-20 мА + HART + NAMUR"
  },
  {
    id: 7,
    title: "4-20 мА + HART + RS-485 + СК",
    value: "4-20 мА + HART + RS-485 + СК"
  },
  {
    id: 8,
    title: "4-20 мА + HART + RS-485 + NAMUR",
    value: "4-20 мА + HART + RS-485 + NAMUR"
  },
  {
    id: 9,
    title: "4-20 мА + HART + RS-485",
    value: "4-20 мА + HART + RS-485"
  },
  {
    id: 10,
    title: "4-20 мА + HART + RS-485 + СК + NAMUR",
    value: "4-20 мА + HART + RS-485 + СК + NAMUR"
  },
  {
    id: 11,
    title: "4-20 мА + NAMUR",
    value: "4-20 мА + NAMUR"
  },
  {
    id: 12,
    title: "NAMUR + СК",
    value: "NAMUR + СК"
  },
  {
    id: 13,
    title: "4-20 мА + СК",
    value: "4-20 мА + СК"
  },
  {
    id: 14,
    title: "4-20 мА + RS-485 + СК",
    value: "4-20 мА + RS-485 + СК"
  },
  {
    id: 15,
    title: "сухой контакт (СК)",
    value: "сухой контакт (СК)"
  },
  {
    id: 16,
    title: "NAMUR",
    value: "NAMUR"
  },
  {
    id: 17,
    title: "Fieldbus",
    value: "Fieldbus"
  },
  {
    id: 18,
    title: "Fieldbus + СК",
    value: "Fieldbus + СК"
  },
  {
    id: 19,
    title: "4-20 мА + Fieldbus",
    value: "4-20 мА + Fieldbus"
  },
  {
    id: 20,
    title: "4-20 мА + Fieldbus + СК",
    value: "4-20 мА + Fieldbus + СК"
  },
  {
    id: 21,
    title: "4-20 мА + Fieldbus + RS-485 ",
    value: "4-20 мА + Fieldbus + RS-485 "
  },
  {
    id: 22,
    title: "4-20 мА + Fieldbus + RS-485 + СК",
    value: "4-20 мА + Fieldbus + RS-485 + СК"
  }
]

/* Напряжение питания */
export const voltage = [12, 24, 110, 220]

/* Схема подключения вторичного преобразователя */
export const connectionScheme = ["Не предусмотрено", "2х-проводная", "3х-проводная"]

/* версия HART-протокола */
export const hartVersion = [2, 3, 4, 5, 6, 7, 7.5]

/* Диапазон настройки */
export const settingRange = ["100:1", "50:1", "20:1", "10:1"]

/* Степень защиты корпуса */
export const protection = [
  {
    id: 20,
    title: "IP20"
  },
  {
    id: 22,
    title: "IP22"
  },
  {
    id: 24,
    title: "IP24"
  },
  {
    id: 44,
    title: "IP44"
  },
  {
    id: 45,
    title: "IP45"
  },
  {
    id: 54,
    title: "IP54"
  },
  {
    id: 66,
    title: "IP66"
  },
  {
    id: 67,
    title: "IP67"
  },
  {
    id: 68,
    title: "IP68"
  }
]

/* Вид взрывозащиты */
export const explosionType = [
  {
    id: 1,
    title: "Искробезопасная цепь",
    value: "Искробезопасная цепь"
  },
  {
    id: 2,
    title: "Взрывонепроницаемая оболочка",
    value: "Взрывонепроницаемая оболочка"
  },
  {
    id: 3,
    title: "Общепромышленное исполнение",
    value: "Общепромышленное исполнение"
  }
]

//TODO: добавить данные в справочник (зависимость от explosionType)
/* Марка взрывозащиты */
export const explosionMark = [
  {
    id: 1,
    title: "Искробезопасная цепь",
    value: "Искробезопасная цепь"
  },
  {
    id: 2,
    title: "Взрывонепроницаемая оболочка",
    value: "Взрывонепроницаемая оболочка"
  },
  {
    id: 3,
    title: "Общепромышленное исполнение",
    value: "Общепромышленное исполнение"
  }
]

/* Средняя наработка на отказ */
export const mtbf = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

/* Кабельный ввод */
export const cableEntry = [
  {
    id: 1,
    title: "М20х1,5 под бронированный кабель ⌀ 7…18 мм",
    value: "М20х1,5 под бронированный кабель (проволочная броня) ⌀ 7…18 мм"
  },
  {
    id: 2,
    title: "М20х1,5 под небронированный кабель ⌀ 7…18 мм",
    value: "М20х1,5 под небронированный кабель ⌀ 7…18 мм"
  },
  {
    id: 3,
    title: "Штепсельное исполнение",
    value: "Штепсельное исполнение"
  }
]

/* Термообогрев */
export const heating = ["Не предусмотрено", "Термочехол", "Термобокс", "Да", "Нет"]

/* Термочехол */
export const thermCase = [
  {
    id: 1,
    title: "С электрообогревом",
    value: "С электрообогревом и клеммной коробкой для датчика с клапанным блоком и подводящей импульсной линиии. Предусмотрено крепление комплектной клеммной коробки на термочехле. Напряжение питания термочехла 220В, 50Гц"
  },
  {
    id: 2,
    title: "Без электрообогрева",
    value: "Для датчика, без электрообогрева"
  }
]
/* Термобокс */
export const thermBox = [
  {
    id: 1,
    title: "С электрообогревом",
    value: "С электрообогревом для датчика с клапанным блоком с клапанным блоком и подводящей импульсной линией. Напряжение питания нагревательного элемента 220В, 50Гц. "
  },
  {
    id: 2,
    title: "Без электрообогрева",
    value: "Для датчика, без электрообогрева"
  }
]

export const controlCableConnectionList = ["Встроенный клеммный отсек", "Комплектная клеммная коробка", "Интегральный монтаж сенсора и ИП", "Разнесенный монтаж сенсора и ИП"]

/* Степень полноты безопасности */
export const safety = ["Не предусмотрено", "SIL1", "SIL2", "SIL3"]

/* Заглушка резервного кабельного ввода */
export const reserveCableEntryStub = ["Взрывозащищенная металлическая", "Не предусмотрено"]

/* Монтажный кронштейн */
export const mountingBracket = [
  {
    id: 1,
    title: "Г-образный, труба ⌀ до 50 мм",
    value: "Г-образный для крепления датчика к трубе ⌀ до 50 мм"
  },
  {
    id: 2,
    title: "Г-образный, труба ⌀ до 100 мм",
    value: "Г-образный для крепления датчика к трубе ⌀ до 100 мм"
  },
  {
    id: 3,
    title: "Панель (плоскость)",
    value: "Для крепления к панели(плоскости)"
  }
]