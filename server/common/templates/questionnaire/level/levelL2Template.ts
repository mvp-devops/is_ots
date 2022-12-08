export const levelL2Template = (data: any) => {
  const {tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax,
    density_1, viscosity_1, density_2, viscosity_2,
    phasePartitionControl, hart, hartVersion, converterType, converter,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, safety,  measureType,
    processTurbulence, turbulenceCause,
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
      <td class="style1">Измерительный зонд</td>
      <td class="style1" colspan="2">${measureType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диапазон измеряемых значений, мм
      </td>
      <td class="style1" colspan="2">
        ${measureRangeMin } … ${measureRangeMax}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Рабочее давление, МПа
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
    <tr class="row1">
      <td class="style1">Контроль раздел фаз</td>
      <td class="style1" colspan="2">
        ${phasePartitionControl ? "Да" : "Нет"}
      </td>
    </tr>
    <tr>
      <td class="style1" rowspan="2">Плотность среды при 20 ºС, кг/м³</td>
      <td class="style1">Среда №1</td>
      <td class="style1">${density_1}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Среда №2</td>
      <td class="style1">${density_2}</td>
    </tr>
    <tr>
      <td class="style1" rowspan="2">
        Кинематическая вязкость среды при 20 ºС, сСт
      </td>
      <td class="style1">Среда №1</td>
      <td class="style1">${viscosity_1}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Среда №2</td>
      <td class="style1">${viscosity_2}</td>
    </tr>

    <tr class="row1">
      <td class="style1">Максимальный диапазон измерения, мм</td>
      <td class="style1" colspan="2">${measureRangeMax}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Турбулентность процесса
      </td>
      <td class="style1" colspan="2">
        ${processTurbulence ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row3">
      <td class="style1">
        Причина турбулентности
      </td>
      <td class="style1" colspan="2">
        ${turbulenceCause}
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
      <td class="style1">
        Степень безопасности SIL
      </td>
      <td class="style1" colspan="2">
        ${safety}
      </td>
    </tr>
  </tbody>
</table>
  `
}