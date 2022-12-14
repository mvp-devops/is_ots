export const levelL2Template = (data: any) => {
  const {
    tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax, localIndication,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax,
    density_1, viscosity_1, density_2, viscosity_2,
    phasePartitionControl, hart, hartVersion, converterType, converter,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, measureType,
    processTurbulence, turbulenceCause,
  } = data;

  return `
 <style>
                                table.l2 {
                border-collapse: collapse;
              }
              col.l2-col0 {
                width: 50%;
              }
              col.l2-col1 {
                width: 20%;
              }
              col.l2-col2 {
                width: 30%;
              }
              tr.l2-row1 {
                height: 17pt;
              }
              tr.l2-row2 {
                height: 34pt;
              }
              tr.l2-row3 {
                height: 51pt;
              }
              tr.l2-row4 {
                height: 68pt;
              }
              tr.l2-row5 {
                height: 85pt;
              }
              td.l2-td {
                vertical-align: middle;
                text-align: left;
                padding-left: 5px;
                color: #000000;
                font-family: "Arial";
                font-size: 10pt;
                background-color: white;
                border: 1px solid #000000 !important;
              }
                </style>
                <table class="l2">
                  <col class="l2-col0" />
                  <col class="l2-col1" />
                  <col class="l2-col2" />
                  <tbody>
                    <tr class="l2-row1">
                      <td class="l2-td">Позиция на схеме (TAG)</td>
                      <td class="l2-td" colspan="2">${tag}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Количество, шт.</td>
                      <td class="l2-td" style="width: 300px;" colspan="2">${count}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Номер аппарата или линии</td>
                      <td class="l2-td" colspan="2">${location}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        No схемы автоматизации функциональной
                      </td>
                      <td class="l2-td" colspan="2">${fda}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Контроллируемый параметр</td>
                      <td class="l2-td" colspan="2">${parameter}</td>
                    </tr>
                
                    <tr class="l2-row1">
                      <td class="l2-td">Температура окружающей среды, °C</td>
                      <td class="l2-td" colspan="2">${tempAmbientMin} … ${tempAmbientMax}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Измеряемая среда</td>
                      <td class="l2-td" colspan="2">${measuredArea}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Измерительный зонд</td>
                      <td class="l2-td" colspan="2">${measureType}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        Диапазон измеряемых значений, мм
                      </td>
                      <td class="l2-td" colspan="2">
                        ${measureRangeMin} … ${measureRangeMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        Рабочее давление, МПа
                      </td>
                      <td class="l2-td" colspan="2">
                        ${pressureMeasureAreaMin} … ${pressureMeasureAreaMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        Температура измеряемой среды, °C
                      </td>
                      <td class="l2-td" colspan="2">
                        ${tempMeasureAreaMin} … ${tempMeasureAreaMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Контроль раздел фаз</td>
                      <td class="l2-td" colspan="2">
                        ${phasePartitionControl ? "Да" : "Нет"}
                      </td>
                    </tr>
                    <tr>
                      <td class="l2-td" rowspan="2">Плотность среды при 20 ºС, кг/м³</td>
                      <td class="l2-td">Среда №1</td>
                      <td class="l2-td">${density_1}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Среда №2</td>
                      <td class="l2-td">${phasePartitionControl ? density_2 : " - "}</td>
                    </tr>
                    <tr>
                      <td class="l2-td" rowspan="2">
                        Кинематическая вязкость среды при 20 ºС, сСт
                      </td>
                      <td class="l2-td">Среда №1</td>
                      <td class="l2-td">${viscosity_1}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Среда №2</td>
                      <td class="l2-td">${phasePartitionControl ? viscosity_2 : " - "}</td>
                    </tr>
                
                    <tr class="l2-row1">
                      <td class="l2-td">Максимальный диапазон измерения, мм</td>
                      <td class="l2-td" colspan="2">${measureRangeMax}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        Турбулентность процесса
                      </td>
                      <td class="l2-td" colspan="2">
                        ${processTurbulence ? "Да" : "Нет"}
                      </td>
                    </tr>
                    <tr class="l2-row3">
                      <td class="l2-td">
                        Причина турбулентности
                      </td>
                      <td class="l2-td" colspan="2">
                        ${processTurbulence ? turbulenceCause : " - "}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td" rowspan="5">Преобразователь</td>
                      <td class="l2-td">Наличие HART</td>
                      <td class="l2-td">${hart ? "Да" : "Нет"}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Версия HART</td>
                      <td class="l2-td">${hart ? hartVersion : " - "}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Внутренняя диагностика</td>
                      <td class="l2-td">${internalDiagnostic ? "Да" : "Нет"}</td>
                    </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">Тип вторичного преобразователя</td>
                      <td class="l2-td">${converterType}</td>
                    </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">Монтаж вторичного преобразователя</td>
                      <td class="l2-td">${converterType !== "Отсутствует" ? converter : " - "}</td>
                    </tr>
                        <tr class="l2-row1">
      <td class="l2-td">
        Наличие местной индикации
      </td>
      <td class="l2-td" colspan="2">
        ${localIndication ? "Да" : "Нет"}
      </td>
    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Выходной сигнал</td>
                      <td class="l2-td" colspan="2">${outputSignal}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Напряжение питания, В</td>
                      <td class="l2-td" colspan="2">${voltage}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Средний срок службы, мес.</td>
                      <td class="l2-td" colspan="2">${lifeTime}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Средняя наработка на отказ, тыс. часов</td>
                      <td class="l2-td" colspan="2">${mtbf}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Материал корпуса</td>
                      <td class="l2-td" colspan="2">${corpsMaterial}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Степень защиты корпуса, не ниже</td>
                      <td class="l2-td" colspan="2">${protection}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Вид взрывозащиты</td>
                      <td class="l2-td" colspan="2">${explosionType}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Маркировка взрывозащиты</td>
                      <td class="l2-td" colspan="2">${explosionMark}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">Степень защиты корпуса, не ниже</td>
                      <td class="l2-td" colspan="2">${protection}</td>
                    </tr>

                  </tbody>
                </table>
  `
}