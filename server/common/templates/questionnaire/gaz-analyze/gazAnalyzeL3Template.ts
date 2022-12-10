export const gazAnalyzeL3Template = (data: any) => {
  const {mtbf, corpsMaterial, protection, explosionType, explosionMark,
    cableEntry, reserveCableEntryStub, safety, accuracy, relativeAccuracy,
    ambientPermissible, calibrationStamp, mpi, verification
  } = data;

  return `
            <style>
              table.l3 {
                border-collapse: collapse;
              }
              col.l3-col0 {
                width: 50%;
              }
              col.l3-col1 {
                width: 20%;
              }
              col.l3-col2 {
                width: 30%;
              }

              tr.l3-row1 {
                height: 17pt;
              }

              tr.l3-row2 {
                height: 34pt;
              }
              tr.l3-row3 {
                height: 51pt;
              }
              tr.l3-row4 {
                height: 68pt;
              }
              tr.l4-row5 {
                height: 85pt;
              }
              td.l3-td {
                vertical-align: middle;
                text-align: left;
                padding-left: 5px;
                color: #000000;
                font-family: "Arial";
                font-size: 10pt;
                background-color: white;
                border: 1px solid #000000;
              }
              td.l3-td-style0 {
                border-top: none !important;
                border-bottom: none !important;
              }
              td.l3-td-style1 {
                border-top: none !important;
              }
            </style>

            <table class="l3">
              <col class="l3-col0" />
              <col class="l3-col1" />
              <col class="l3-col2" />
              <tbody>
                <tr class="l3-row1">
                  <td class="l3-td">Средняя наработка на отказ, тыс. часов</td>
                  <td class="l3-td" colspan="2">${mtbf}</td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">Материал корпуса</td>
                  <td class="l3-td" colspan="2">${corpsMaterial}</td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">Степень защиты корпуса, не ниже</td>
                  <td class="l3-td" colspan="2">${protection}</td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">
                    Вид взрывозащиты
                  </td>
                  <td class="l3-td" colspan="2">
                    ${explosionType}
                  </td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">
                    Маркировка взрывозащиты
                  </td>
                  <td class="l3-td" colspan="2">
                    ${explosionMark}
                  </td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">
                    Степень безопасности SIL
                  </td>
                  <td class="l3-td" colspan="2">
                    ${safety}
                  </td>
                </tr>

                <tr class="l3-row2">
                  <td class="l3-td">
                    Предел допускаемой основной приведенной погрешности, % НКПР
                  </td>
                  <td class="l3-td" colspan="2">${accuracy}</td>
                </tr>
                <tr class="l3-row3">
                  <td class="l3-td">
                    Предел допускаемой погрешности от изменения температуры
                    окружающей среды от нормальной на каждые 10 °C, в долях от
                    пределов допускаемой основной погрешности
                  </td>
                  <td class="l3-td" colspan="2">
                    ${ambientPermissible}
                  </td>
                </tr>
                <tr class="l3-row3">
                  <td class="l3-td">
                    Предел допускаемой вариации выходного сигнала, в долях от
                    пределов допускаемой основной
                  </td>
                  <td class="l3-td" colspan="2">${relativeAccuracy}</td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">Наличие штампа заводской калибровки</td>
                  <td class="l3-td" colspan="2">
                    ${calibrationStamp ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">Первичная повека</td>
                  <td class="l3-td" colspan="2">
                    ${verification ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l3-row1">
                  <td class="l3-td">Межповерочный интервал, мес.</td>
                  <td class="l3-td" colspan="2">${mpi}</td>
                </tr>
                <tr class="l3-row2">
                  <td class="l3-td" rowspan="5">Принадлежности</td>
                  <td class="l3-td">Кабельный ввод</td>
                  <td class="l3-td">${cableEntry}</td>
                </tr>
                <tr class="l3-row2">
                  <td class="l3-td">Заглушка резервного кабельного ввода</td>
                  <td class="l3-td">${reserveCableEntryStub}</td>
                </tr>

                <tr class="l3-row1">
                  <td class="l3-td" colspan="2">
                    внешний заземляющий винт
                  </td>
                </tr>
                <tr class="l3-row2">
                  <td class="l3-td" colspan="2">
                    маркировочная табличка из нержавеющей стали,с
                    выгравированной позицией
                  </td>
                </tr>
                <tr class="l3-row3">
                  <td class="l3-td" colspan="2">
                    Оборудование должно иметь положительный опыт промышленной
                    эксплуатации в ДО ПАО «Газпромнефть» и входить в перечень
                    КТ-610.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td" colspan="3">
                    Наличие документации, сертификация:
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style0" colspan="3">
                    1.Копия сертификата об утверждении типа средств измерений,
                    выданное Федеральным агентством по техническому
                    регулированию и метрологии с описанием типа средства
                    измерения со сроком окончания действия не менее 12 месяцев
                    от даты поставки на склад Заказчика.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style0" colspan="3">
                    2.Копия сертификата (декларации) соответствия средств
                    измерений техническому регламенту Таможенного союза,
                    выданных органом по сертификации.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style0" colspan="3">
                    3.Заводской паспорт, руководство по эксплуатации и монтажу
                    на русском языке.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style0" colspan="3">
                    4.Копия методики поверки, указанной в описании типа.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style0" colspan="3">
                    5.Технические средства должны иметь соответствующую
                    сертификацию по взрывобезопасности в соответствии с
                    Техническим регламентом таможенного союза ТР ТС 012/2011.
                  </td>
                </tr>
                <tr>
                  <td class="l3-td l3-td-style1" colspan="3">
                    6.Свидетельство о первичной поверке, выданное
                    аккредитованным органом на право проведения поверки со
                    сроком окончания действия не менее 2/3 межповерочного
                    интервала от даты поставки на склад Заказчика.
                  </td>
                </tr>
              </tbody>
            </table>



  `
}