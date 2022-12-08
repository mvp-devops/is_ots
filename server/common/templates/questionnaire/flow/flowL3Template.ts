export const flowL3Template = (data: any) => {
  const {accuracy, verificationMethod, calibrationStamp, verification, mpi, cableEntry, reserveCableEntryStub, flowStraighteners, flanges, heating, thermCase, thermBox} = data;

  return `
  <style>
    table {
      border-collapse: collapse;
      page-break-after: always;
    }
    col.col0 {
      width: 300pt;
    }
    col.col1 {
      width: 120pt;
    }
    col.col2 {
      width: 200pt;
    }
    th {
      border: 1px solid #000000 !important;
    }
    tr {
      height: 17pt;
    }
    tr.row0 {
      height: 2pt;
    }
    tr.row1 {
      height: 17pt;
    }
    tr.row2 {
      height: 34pt;
    }
    tr.row3 {
      height: 51pt;
    }
    tr.row4 {
      height: 68pt;
    }
    tr.row5 {
      height: 85pt;
    }
    td {
      vertical-align: middle;
      text-align: left;
      padding-left: 5px;
      color: #000000;
      font-family: "Arial";
      font-size: 10pt;
      background-color: white;
    }
    td.style0 {
      border-bottom: 1px solid #000000 !important;
    }
    td.style1 {
      border: 1px solid #000000 !important;
    }
    td.style2 {
      border-left: 1px solid #000000 !important;
      border-right: 1px solid #000000 !important;
      border-top: 1px solid #000000 !important;
      border-bottom: none !important;
    }
    td.style3 {
      border-left: 1px solid #000000 !important;
      border-right: 1px solid #000000 !important;
      border-top: none !important;
      border-bottom: none !important;
    }
    td.style4 {
      border-left: 1px solid #000000 !important;
      border-right: 1px solid #000000 !important;
      border-bottom: 1px solid #000000 !important;
      border-top: none !important;
    }
  </style>

    <table id="sheet0" class="sheet0 gridlines">
      <col class="col0" />
      <col class="col1" />
      <col class="col2" />
      <tbody>
        <tr class="row0">
          <td class="style0" colspan="3"></td>
        </tr>
        <tr class="row2">
          <td class="style1">Предел допускаемой основной приведенной погрешности, %</td>
          <td class="style1" colspan="2">${accuracy}</td>
        </tr>
        <tr class="row1">
          <td class="style1">Метод поверки</td>
          <td class="style1" colspan="2">${verificationMethod}</td>
        </tr>
        <tr class="row1">
          <td class="style1">Наличие штампа заводской калибровки</td>
          <td class="style1" colspan="2">${calibrationStamp ? "Да" : "Нет"}</td>
        </tr>
        <tr class="row1">
          <td class="style1">Первичная повека</td>
          <td class="style1" colspan="2">${verification ? "Да" : "Нет"}</td>
        </tr>
        <tr class="row1">
          <td class="style1">Межповерочный интервал, мес.</td>
          <td class="style1" colspan="2">${mpi}</td>
        </tr>
        <tr class="row2">
          <td class="style1" rowspan="8">Принадлежности</td>
          <td class="style1">Кабельный ввод</td>
          <td class="style1">${cableEntry}</td>
        </tr>
        <tr class="row2">
          <td class="style1">Заглушка резервного кабельного ввода</td>
          <td class="style1">${reserveCableEntryStub}</td>
        </tr>
        <tr class="row2">
          <td class="style1">Наличие струевыпрямителей</td>
          <td class="style1">${flowStraighteners ? "Да" : "Нет"}</td>
        </tr>
        <tr class="row3">
          <td class="style1">
            Наличие в комплекте поставки ответных фланцев, включая прокладки,
            крепежи и болты
          </td>
          <td class="style1">${flanges ? "Да" : "Нет"}</td>
        </tr>
        <tr class="row3">
          <td class="style1">Обогрев</td>
          <td class="style1">${heating === "Не предусмотрено" ? heating : thermCase ? thermCase : thermBox ? thermBox : heating}</td>
        </tr>
        <tr class="row1">
          <td class="style1" colspan="2">
            внешний заземляющий винт
          </td>
        </tr>
        <tr class="row2">
          <td class="style1" colspan="2">
            маркировочная табличка из нержавеющей стали,с выгравированной
            позицией
          </td>
        </tr>
        <tr class="row3">
          <td class="style1" colspan="2">
            Оборудование должно иметь положительный опыт промышленной
            эксплуатации в ДО ПАО «Газпромнефть» и входить в перечень КТ-610.
          </td>
        </tr>
        <tr >
          <td class="style1" rowspan="6">
            Наличие документации, сертификация
          </td>
          <td class="style2" colspan="2">
            1.Копия сертификата об утверждении типа средств измерений, выданное
            Федеральным агентством по техническому регулированию и метрологии с
            описанием типа средства измерения со сроком окончания действия не
            менее 12 месяцев от даты поставки на склад Заказчика.
          </td>
        </tr>
        <tr >
          <td class="style3" colspan="2">
            2.Копия сертификата (декларации) соответствия средств измерений
            техническому регламенту Таможенного союза, выданных органом по
            сертификации.
          </td>
        </tr>
        <tr >
          <td class="style3" colspan="2">
            3.Заводской паспорт, руководство по эксплуатации и монтажу на
            русском языке.
          </td>
        </tr>
        <tr >
            <td class="style3" colspan="2">
                4.Копия методики поверки, указанной в описании типа.
            </td>
          </tr>
          <tr >
              <td class="style3" colspan="2">
                  5.Технические средства должны иметь соответствующую сертификацию по взрывобезопасности в соответствии с Техническим регламентом таможенного союза ТР ТС 012/2011.
              </td>
            </tr>
            <tr >
                <td class="style4" colspan="2">
                    6.Свидетельство о первичной поверке, выданное аккредитованным органом на право проведения поверки со сроком окончания действия не менее 2/3 межповерочного интервала от даты поставки на склад Заказчика.                </td>
              </tr>
      </tbody>
    </table>
  </body>
</html>

  `


}