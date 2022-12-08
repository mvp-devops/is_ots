export const temperatureL2Template = (data: any) => {
  const {tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    sensorCalibration,
    measureType, connectionScheme, sensorAccuracy, sensorLength,
    sensorLDiameter, hart, hartVersion, protectiveSleeve, protectiveSleeveMaterial,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, controlCableConnection,
    converterType, converter,
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
      <td class="style1">Тип чувствительного элемента</td>
      <td class="style1" colspan="2">${measureType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диапазон измеряемых значений, °C
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
        Градуировка сенсора
      </td>
      <td class="style1" colspan="2">
        ${sensorCalibration}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Класс точности сенсора
      </td>
      <td class="style1" colspan="2">
        ${sensorAccuracy}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Длина чувствительного элемента / глубина погружения защитной гильзы, мм
      </td>
      <td class="style1" colspan="2">
        ${sensorLength}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диаметр сенсора, мм
      </td>
      <td class="style1" colspan="2">
        ${sensorLDiameter}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Защитная гильза
      </td>
      <td class="style1" colspan="2">
        ${protectiveSleeve ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Материал защитной гильзы
      </td>
      <td class="style1" colspan="2">
        ${protectiveSleeveMaterial}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Тип монтажа
      </td>
      <td class="style1" colspan="2">
        ${controlCableConnection}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">Схема подключения вторичного преобразователя</td>
      <td class="style1" colspan="2">
        ${connectionScheme}
      </td>
    </tr>
    <tr>
      <td class="style1" rowspan="5">Преобразователь</td>
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
    <tr class="row2">
      <td class="style1">Тип вторичного преобразователя</td>
      <td class="style1">${converterType}</td>
    </tr>
    <tr class="row2">
      <td class="style1">Монтаж вторичного преобразователя</td>
      <td class="style1">${converter}</td>
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
  </tbody>
</table>

  `
}