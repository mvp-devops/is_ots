export const flowL2Template = (data: any) => {
  const {
    tag, count, location, fda, parameter, tempAmbientMin, tempAmbientMax, measuredArea,
    range, measureRangeMin, measureRangeMax, pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax, density_1, viscosity_1, conductivity, particulateMatter,
    corrosiveImpurities, hart, hartVersion, converterType, converter, internalDiagnostic, outputSignal,
    voltage, lifeTime, mtbf, corpsMaterial, protection,    explosionType, explosionMark, safety, connectionType,
    connection, pipelineDiameter, pipelineMaterial, } = data;

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
                <tr class="l2-row0">
                  <td colspan="3"></td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Позиция на схеме (TAG)</td>
                  <td class="l2-td" colspan="2">${tag}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Количество, шт.</td>
                  <td class="l2-td" colspan="2">
                    ${count}
                  </td>
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
                  <td class="l2-td">
                    Температура окружающей среды, °C
                  </td>
                  <td class="l2-td" colspan="2">
                    ${tempAmbientMin} … ${tempAmbientMax}
                  </td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Измеряемая среда</td>
                  <td class="l2-td" colspan="2">
                    ${measuredArea}
                  </td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">
                    Диапазон измеряемых значений, ${range ? range : "м³/ч"}
                  </td>
                  <td class="l2-td" colspan="2">
                    ${measureRangeMin} … ${measureRangeMax}
                  </td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">
                    Давление измеряемой среды (изб.), МПа.
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
                  <td class="l2-td">
                    Плотность среды при 20 ºС, кг/м³
                  </td>
                  <td class="l2-td" colspan="2">${density_1}</td>
                </tr>
                <tr class="l2-td l2-row1">
                  <td class="l2-td">
                    Динамическая вязкость среды в р/у, сПз
                  </td>
                  <td class="l2-td" colspan="2">${viscosity_1}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Электропроводность среды</td>
                  <td class="l2-td" colspan="2">
                    ${conductivity}
                  </td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Присутствие твердых частиц</td>
                  <td class="l2-td" colspan="2">
                    ${particulateMatter ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Коррозионные примеси, %</td>
                  <td class="l2-td" colspan="2">
                    ${corrosiveImpurities}
                  </td>
                </tr>
                <tr>
                  <td class="l2-td" rowspan="4">Преобразователь</td>
                  <td class="l2-td">Наличие HART</td>
                  <td class="l2-td">${hart ? "Да" : "Нет"}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Версия HART</td>
                  <td class="l2-td">${hart ? hartVersion : " - "}</td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Тип вторичного преобразователя
                  </td>
                  <td class="l2-td" style="width: 300px;">
                    ${converterType}
                  </td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Монтаж вторичного преобразователя
                  </td>
                  <td class="l2-td">${converterType !== "Отсутствует" ? converter : " - "}</td>
                </tr>
                <tr class="l2-row3">
                  <td class="l2-td">
                    Возможность проверки электроники расходомера средствами
                    самодиагностики без подключения дополнительного оборудования
                  </td>
                  <td class="l2-td" colspan="2">
                    ${internalDiagnostic ? "Да" : "Нет"}
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
                  <td class="l2-td">
                    Средняя наработка на отказ, тыс. часов
                  </td>
                  <td class="l2-td" colspan="2">${mtbf}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Материал корпуса</td>
                  <td class="l2-td" colspan="2">${corpsMaterial}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">
                    Степень защиты корпуса, не ниже
                  </td>
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
                  <td class="l2-td">Степень безопасности SIL</td>
                  <td class="l2-td" colspan="2">${safety}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">
                    Тип присоединения к тех.процессу
                  </td>
                  <td class="l2-td" colspan="2">${connectionType}</td>
                </tr>
                <tr class="l2-row1">
                  <td class="l2-td">Соединение с тех. процессом</td>
                  <td class="l2-td" colspan="2">${connection}</td>
                </tr>
                <tr class="l2-row1">
<td class="l2-td">Диаметр трубопровода Ду, мм</td>
<td class="l2-td" colspan="2">${pipelineDiameter}</td>
  </tr>
    <tr class="l2-row1">
<td class="l2-td">Материал трубопровода</td>
<td class="l2-td" colspan="2">${pipelineMaterial}</td>
  </tr>

              </tbody>
            </table>
  `
}