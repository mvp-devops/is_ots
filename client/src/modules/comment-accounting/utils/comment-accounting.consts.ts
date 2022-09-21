import { CommentAccountingNSIView } from "../../../../../server/common/types/comments-accounting";

export const statusRequestData: CommentAccountingNSIView[] = [
  {
    id: 1,
    title: "Принято",
    code: "",
    description: "Проектировщик согласен с замечанием",
  },
  {
    id: 2,
    title: "Не принято",
    code: "",
    description: "Проектировщик не согласен с замечанием",
  },
  {
    id: 3,
    title: "На усмотрение Заказчика",
    code: "",
    description: "Необходимо дополнительное согласование от Заказчика",
  },
];

export const solutionRequestData: CommentAccountingNSIView[] = [
  {
    id: 1,
    title: "Снято",
    code: "",
    description:
      "Эксперт согласился с ответом проектировщика или дополнительными пояснениями",
  },
  {
    id: 2,
    title: "Не снято",
    code: "",
    description: "Эксперт не принимает ответ проектировщика",
  },
  {
    id: 3,
    title: "Устранено",
    code: "",
    description:
      "Проектировщик согласился с замечанием эксперта и откорректировал документацию",
  },
  {
    id: 4,
    title: "Не устранено",
    code: "",
    description:
      "Ответ принят, но откорректированная ПД эксперту не представлена",
  },
  {
    id: 5,
    title: "Снято по решению заказчика",
    code: "",
    description: "Замечание не критично для реализации проекта",
  },
];

export const criticalityRequestData: CommentAccountingNSIView[] = [
  {
    id: 1,
    title: "Не применим",
    code: 0,
    description: "",
  },
  {
    id: 2,
    title:
      "Нарушение (несоблюдение) требований государственных и отраслевых нормативных документов, действующих на территории РФ",
    code: 20,
    description: "",
  },
  {
    id: 3,
    title:
      "Нарушение (несоблюдение) требований нормативной документации ПАО «Газпромнефть»",
    code: 20,
    description: "",
  },
  {
    id: 4,
    title:
      "Отступление от  требований типовых и унифицированных проектных решений ПАО «Газпромнефть»",
    code: 20,
    description: "",
  },
  {
    id: 5,
    title:
      "Несоответствие заданию на проектирование и утвержденным исходным данным Заказчика",
    code: 20,
    description: "",
  },
  {
    id: 6,
    title:
      "Ошибки при формировании и подсчете объемов в спецификациях оборудования, изделий и материалов, в заказной документации (ОЛ, ТЗ, ТТ)",
    code: 20,
    description: "",
  },
  {
    id: 7,
    title:
      "Отсутствие/недостаточность данных или документов для реализации проекта",
    code: 20,
    description: "",
  },
  {
    id: 8,
    title:
      "Несовпадение  данных в различных разделах проектной и рабочей документации",
    code: 20,
    description: "",
  },
  {
    id: 9,
    title:
      "Отступление от утвержденных принципиальных решений, принятых на предыдущих этапах проектирования",
    code: 20,
    description: "",
  },
  {
    id: 10,
    title:
      "Опечатки, текстовые несоответствия, орфографические и грамматические ошибки",
    code: 20,
    description: "",
  },
  {
    id: 11,
    title:
      "Дополнительное пожелание, не предусмотренное Заданием на проектирование и требованиями действующей нормативно-технической документаци",
    code: 20,
    description: "",
  },
  {
    id: 12,
    title:
      "Несоответствия и ошибки при выборе технологии и оборудования основного и вспомогательного процессов",
    code: 20,
    description: "",
  },
  {
    id: 13,
    title:
      "Нерациональность и/или неэкономичность объемно-планировочных и конструктивных решений",
    code: 20,
    description: "",
  },
  {
    id: 14,
    title:
      "Несоблюдение требований по производству (утилизации) побочной и попутной продукции, требований охраны окружающей среды",
    code: 20,
    description: "",
  },
  {
    id: 15,
    title:
      "Несоблюдение нормативов по промышленной и пожарной безопасности, действующих на территории РФ",
    code: 20,
    description: "",
  },
  {
    id: 16,
    title:
      "Недостаточная проработка технических решений для обеспечения промышленной и пожарной безопасности по требованиям, утвержденным Заказчиком",
    code: 20,
    description: "",
  },
  {
    id: 17,
    title:
      "Этап предварительных испытаний. Представление поставщиком комплекта документации до проведения заводских приемо-сдаточных испытаний (согласно рекомендации по проведению и организации дистанционной заводской приемки оборудования по направлению ПА и МО, БМО)",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 18,
    title:
      "Внутренние заводские испытания, с проведением 100% проверки всей системы, с заполнением и предоставлением подписанных протоколов проверок сигналов и алгоритмов системы АСУ ТП",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 19,
    title:
      "Комплектность документации, оборудования, программного обеспечения, ЗИП. Наличие эталонной базы для проведения испытаний. Достаточность и квалификация персонала поставщика для проведения испытаний. Обеспечение безопасности и безаварийности проведения испытаний",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 20,
    title:
      "Успешное проведение испытания функционала системы, подтверждение прохождения сигналов от оборудования, подтверждение алгоритмов, в т.ч. ПАЗ, соответствие требованиями НМД ГПН к ЧМИ, соответствие требованиям ТТ (ТЗ), требованиям НМД ГПН к загрузке процессора, быстродействию системы, работа системы от ИБП согласно ТТ (ТЗ), функционирование коммутационного оборудования. Работоспособность системы резервирования, восстановления ПО, работоспособность СМиД",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 21,
    title: "Отсутствие критичных замечаний в ходе испытаний",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 22,
    title:
      "Устранение поставщиком некритичных замечаний в ходе проведения испытаний",
    code: 20,
    description: "ПСИ",
  },
  {
    id: 23,
    title:
      "Разработка, согласование и утверждение программы шефмонтажных, пусконаладочных работ и комплексного обслуживания. Соответствие программы требованиям НМД ГПН (СК-01.07.05 )",
    code: 20,
    description: "ПНР",
  },
  {
    id: 24,
    title:
      "Соблюдение сроков мобилизации шефмонтажного и наладочного персонала поставщика. Обеспечение необходимой численности и квалификации персонала поставщика. Оснащенность персонала необходимым инструментом и оборудованием для производства работ по ШМР, ПНР",
    code: 20,
    description: "ПНР",
  },
  {
    id: 25,
    title:
      "Соблюдение шефмонтажным и наладочным персоналом поставщика требований внутрипропусконого режима Заказчика, соблюдение требований промышленной безопасности, охраны труда и пожарной безопасности, НМД ГПН  в области промышленной безопасности. Применение СИЗ и СИЗОД",
    code: 20,
    description: "ПНР",
  },
  {
    id: 26,
    title:
      "Проведение шефмонтажных работ, приемка оборудования в ПНР. Подготовка и сдача исполнительной документации по ШМР в соответствии с требованиями НМД ГПН. Отсутствие замечаний, препятствующих проведению пусконаладочных работ и комплексного опробования",
    code: 20,
    description: "ПНР",
  },
  {
    id: 27,
    title:
      "Проведение автономной наладки, индивидуальных испытаний, испытаний на холостом ходу: - электротехнических систем; - систем автоматизации; - автоматических установок пожаротушения и пожарной сигнализации; - внутренних инженерных систем зданий и сооружений; - основного технологического оборудования. Подготовка и сдача исполнительной документации по автономной наладке, индивидуальным испытаниям и испытаниям на холостом ходу. Отсутствие замечаний, препятствующих проведению комплексного опробования",
    code: 20,
    description: "ПНР",
  },
  {
    id: 28,
    title:
      "Проведение комплексного опробования оборудования (установки) на среде (под нагрузкой): - заполнение оборудования (установки) средой; - вывод оборудования (установки) на режим, настройка контуров регулирования, настройка и проверка системы безопасности согласно таблицы ПСС (Causal Loop Diagrams); - проверка работоспособности взаимодействия всех систем технологического оборудования, инженерных систем жизнеобеспечения; - проверка передачи данных в вышестоящие иерархические системы, проверка взаимодействия системы управления оборудования (установки) по алгоритмам вышестоящих иерархических систем; -  достижение гарантированных показателей; - 72 часовая обкатка оборудования (установки). Подготовка и сдача исполнительной документации по комплексному опробованию",
    code: 20,
    description: "ПНР",
  },
  {
    id: 29,
    title:
      "Проведение опытной эксплуатации оборудования (установки), устранение замечаний, выявленных в ходе производства шефмонтажных, пусконаладочных работ и комплексного опробования. Передача оборудования (установки) в промышленную эксплуатацию",
    code: 20,
    description: "ПНР",
  },
  {
    id: 30,
    title:
      "Единичные отказы оборудования не критичного характера, восстанавливаемые в рамках текущей эксплуатации",
    code: 20,
    description: "ЭД",
  },
  {
    id: 31,
    title:
      "Единичные отказы оборудования критичного характера, восстанавливаемые при участии поставщика (завода - изготовителя)",
    code: 20,
    description: "ЭД",
  },
  {
    id: 32,
    title:
      "Отказы оборудования критичного характера, связанные с остановкой технологического процесса",
    code: 20,
    description: "ЭД",
  },
];

export const directionRequestData: CommentAccountingNSIView[] = [
  {
    id: 1,
    title: "Общее",
    code: "",
    description: "Общее рассмотрение документации",
  },
  {
    id: 2,
    title: "Промышленная автоматизации",
    code: "ПА",
    description: "Промышленная автоматизации",
  },
  {
    id: 3,
    title: "Метрология",
    code: "МО",
    description: "Метрологическое обеспечение единства измерений",
  },
];
