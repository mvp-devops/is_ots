export const pressureL2Template = (data: any) => {

  const {tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax,
    measureType, connectionScheme, settingRange, localIndication,
    selfDiagnostic, hart, hartVersion, blockageDiagnostic, currentLoopIntegrityDiagnostic,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, safety, connectionType, connection,

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
    text-align: center;
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
</style>
<table class="sheetl2">
  <col class="col0" />
  <col class="col1" />
  <col class="col2" />
  <tbody>
    <tr class="row0">
      <td colspan="3"></td>
    </tr>
    <tr class="row1">
      <td class="style1">Позиция на схеме (TAG)</td>
      <td class="style1" colspan="2">${tag}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Количество, шт.</td>
      <td class="style1" style="width: 300px;" colspan="2">${count}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Номер аппарата или линии</td>
      <td class="style1" colspan="2">${location}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        No схемы автоматизации функциональной
      </td>
      <td class="style1" colspan="2">${fda}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Контроллируемый параметр</td>
      <td class="style1" colspan="2">${parameter}</td>
    </tr>

    <tr class="row1">
      <td class="style1">Температура окружающей среды, °C</td>
      <td class="style1" colspan="2">${tempAmbientMin} … ${tempAmbientMax}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Измеряемая среда</td>
      <td class="style1" colspan="2">${measuredArea}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Вид измерений</td>
      <td class="style1" colspan="2">${measureType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диапазон измеряемых значений, МПа
      </td>
      <td class="style1" colspan="2">
        ${measureRangeMin } … ${measureRangeMax}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Давление измеряемой среды (изб.), МПа.
      </td>
      <td class="style1" colspan="2">
        ${pressureMeasureAreaMin} … ${pressureMeasureAreaMax}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Температура измеряемой среды, °C
      </td>
      <td class="style1" colspan="2">
        ${tempMeasureAreaMin} … ${tempMeasureAreaMax}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">Схема подключения вторичного преобразователя</td>
      <td class="style1" colspan="2">
        ${connectionScheme}
      </td>
    </tr>
    <tr>
      <td class="style1" rowspan="4">Преобразователь</td>
      <td class="style1">Наличие HART</td>
      <td class="style1">${hart ? "Да" : "Нет"}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Версия HART</td>
      <td class="style1">${hartVersion}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Внутренняя диагностика</td>
      <td class="style1">${internalDiagnostic ? "Да" : "Нет"}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Диапазон настройки</td>
      <td class="style1">${settingRange}</td>
    </tr>

    <tr class="row1">
      <td class="style1">
        Наличие местной индикации
      </td>
      <td class="style1" colspan="2">
        ${localIndication ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Наличие cамодиагностики
      </td>
      <td class="style1" colspan="2">
        ${selfDiagnostic ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диагностика закупорки импульсных линий
      </td>
      <td class="style1" colspan="2">
        ${blockageDiagnostic ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диагностика целостности токовой цепи
      </td>
      <td class="style1" colspan="2">
        ${currentLoopIntegrityDiagnostic ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">Выходной сигнал</td>
      <td class="style1" colspan="2">${outputSignal}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Напряжение питания, В</td>
      <td class="style1" colspan="2">${voltage}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Средний срок службы, мес.</td>
      <td class="style1" colspan="2">${lifeTime}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Средняя наработка на отказ, тыс. часов</td>
      <td class="style1" colspan="2">${mtbf}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Материал корпуса</td>
      <td class="style1" colspan="2">${corpsMaterial}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Степень защиты корпуса, не ниже</td>
      <td class="style1" colspan="2">${protection}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Вид взрывозащиты</td>
      <td class="style1" colspan="2">${explosionType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Маркировка взрывозащиты</td>
      <td class="style1" colspan="2">${explosionMark}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Степень защиты корпуса, не ниже</td>
      <td class="style1" colspan="2">${protection}</td>
    </tr>

    <tr class="row1">
      <td class="style1">Вид взрывозащиты</td>
      <td class="style1" colspan="2">${explosionType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Маркировка взрывозащиты</td>
      <td class="style1" colspan="2">${explosionMark}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Степень безопасности SIL</td>
      <td class="style1" colspan="2">${safety}</td>
    </tr>
    <tr class="row2">
      <td class="style1">Тип присоединения к тех.процессу</td>
      <td class="style1" colspan="2">${connectionType}</td>
    </tr>
    <tr class="row2">
      <td class="style1">Соединение с тех. процессом</td>
      <td class="style1" colspan="2">${connection}</td>
    </tr>
  </tbody>
</table>
  `
}