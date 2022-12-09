export const pressureL3Template = (data: any) => {

  const {valveBlock, valveBlockType, airBleedValve, valveBlockCorpMaterial, accuracy,
    calibrationStamp, verification, mpi, cableEntry, reserveCableEntryStub,
    mountingBracket, heating, thermCase, thermBox
  } = data;

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
                <tr class="row1">
                    <td class="style1">Клапанный блок:</td>
                    <td class="style1" colspan="2">${valveBlock ? "Да" : "Нет"}</td>
                  </tr>
                  <tr class="row1">
                      <td class="style1">     - исполнение клапанного блока</td>
                      <td class="style1" colspan="2">${valveBlockType}</td>
                    </tr>
        <tr class="row1">
          <td class="style1">     - наличие клапана для стравливания воздуха:</td>
          <td class="style1" colspan="2">${airBleedValve ? "Да" : "Нет"}</td>
        </tr>
        <tr class="row1">
            <td class="style1">      - материал корпуса:</td>
            <td class="style1" colspan="2">${valveBlockCorpMaterial}</td>
          </tr>
          <tr class="row1">
              <td class="style1">Предел допускаемой основной приведенной погрешности, %</td>
              <td class="style1" colspan="2">${accuracy}</td>
            </tr>
          <tr class="row1">
              <td class="style1">Наличие штампа заводской калибровки\t</td>
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
          <td class="style1" rowspan="7">Принадлежности</td>
          <td class="style1">Кабельный ввод</td>
          <td class="style1">${cableEntry}</td>
        </tr>
        <tr class="row2">
          <td class="style1">Заглушка резервного кабельного ввода</td>
          <td class="style1">${reserveCableEntryStub}</td>
        </tr>
        <tr class="row3">
            <td class="style1">Обогрев</td>
            <td class="style1">${heating === "Не предусмотрено" ? heating : thermCase ? thermCase : thermBox ? thermBox : heating}</td>
          </tr>
          <tr class="row3">
              <td class="style1">
                  Монтажный кронштейн
              </td>
              <td class="style1">${mountingBracket}</td>
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
            1.Копия сертификата об утв. типа СИ, выданное
            Федеральным агентством по техническому регулированию и метрологии с
            описанием типа СИ со сроком окончания действия не
            менее 12 месяцев от даты поставки на склад.
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
                    6.Св-во о первичной поверке, выданное аккредитованным органом на право проведения поверки со сроком окончания действия не менее 2/3 межповерочного интервала от даты поставки на склад Заказчика.                </td>
              </tr>
      </tbody>
    </table>
  </body>
</html>

  `
}