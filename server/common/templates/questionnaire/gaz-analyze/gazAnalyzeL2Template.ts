export const gazAnalyzeL2Template = (data: any) => {
  const {
    tag, count, location, fda, parameter, tempAmbientMin, tempAmbientMax,
    measureType, measuredArea, measureRangeMin, measureRangeMax, warmingUp,
    responseTime, controlCableConnection, lowerThreshold, upperThreshold, fault,
    adjustment, zeroDrift, opticsCleanliness, registrationEvents, heating, dustProof,
    hart, hartVersion, internalDiagnostic, converterType, converter, localIndication,
    outputSignal, voltage, lifeTime
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
    text-align: middle;
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
      <td class="style1">Контроллируемые газы</td>
      <td class="style1" colspan="2">${measuredArea}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Принцип измерений</td>
      <td class="style1" colspan="2">${measureType}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Диапазон измеряемых значений, % НКПР
      </td>
      <td class="style1" colspan="2">
        ${measureRangeMin } … ${measureRangeMax}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Предел времени прогрева газоанализатора, минут (не более)
      </td>
      <td class="style1" colspan="2">
        ${warmingUp}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Время установления показаний Т0,9 ном., сек. (не более)
      </td>
      <td class="style1" colspan="2">
        ${responseTime}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">Место подключения контрольного кабеля</td>
      <td class="style1" colspan="2">${controlCableConnection}</td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Выходное реле «Нижний порог», % НКПР
      </td>
      <td class="style1" colspan="2">${lowerThreshold}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Выходное реле «Верхний порог», % НКПР</td>
      <td class="style1" colspan="2">${upperThreshold}</td>
    </tr>
    <tr class="row1">
      <td class="style1">Выходное реле «Неисправность»</td>
      <td class="style1" colspan="2">${fault ? "Да" : "Нет"}</td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Требуется ли настройка электроники при замене сенсора
      </td>
      <td class="style1" colspan="2">
        ${adjustment ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Корректировка дрейфа нуля
      </td>
      <td class="style1" colspan="2">
        ${zeroDrift ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Функция проверки чистоты оптики
      </td>
      <td class="style1" colspan="2">
        ${opticsCleanliness ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Регистрация событий в энергонезависимой памяти
      </td>
      <td class="style1" colspan="2">
        ${registrationEvents ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row1">
      <td class="style1">
        Подогрев оптики
      </td>
      <td class="style1" colspan="2">
        ${heating ? "Да" : "Нет"}
      </td>
    </tr>
    <tr class="row2">
      <td class="style1">
        Пылезащита, брызгозащита, фильтр по влаге
      </td>
      <td class="style1" colspan="2">
        ${dustProof ? "Да" : "Нет"}
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
    <tr class="row2">
      <td class="style1">
        Визуальный OLED дисплей на русском языке
      </td>
      <td class="style1" colspan="2">
        ${localIndication}
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
  </tbody>
</table>

  `
}