export const pressureL2Template = (data: any) => {

  const {tag, count, location, fda, parameter,
    tempAmbientMin, tempAmbientMax, measuredArea,
    measureRangeMin, measureRangeMax,
    pressureMeasureAreaMin, pressureMeasureAreaMax,
    tempMeasureAreaMin, tempMeasureAreaMax, range,
    measureType, connectionScheme, settingRange, localIndication,
    selfDiagnostic, hart, hartVersion, blockageDiagnostic, currentLoopIntegrityDiagnostic,
    internalDiagnostic, outputSignal, voltage, lifeTime, mtbf, corpsMaterial, protection,
    explosionType, explosionMark, safety, connectionType, connection,

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
                      <td class="l2-td">Вид измерений</td>
                      <td class="l2-td" colspan="2">
                        ${measureType}
                      </td>
                    </tr>
                    
                    <tr class="l2-row1">
                      <td class="l2-td">
                        Диапазон измеряемых значений, ${range ? range : "МПа"}
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
                    <tr class="l2-row2">
                        <td class="l2-td">Схема подключения вторичного преобразователя</td>
                        <td class="l2-td" colspan="2">
                          ${connectionScheme ? connectionScheme : "Не предусмотрено"}
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
                        <td class="l2-td">Внутренняя диагностика</td>
                        <td class="l2-td">${internalDiagnostic ? "Да" : "Нет"}</td>
                      </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">
                          Диапазон настройки
                      </td>
                      <td class="l2-td">${settingRange}</td>
                    </tr>
                    <tr class="l2-row1">
                        <td class="l2-td">
                          Наличие cамодиагностики
                        </td>
                        <td class="l2-td" colspan="2">
                          ${selfDiagnostic ? "Да" : "Нет"}
                        </td>
                      </tr>
                      <tr class="l2-row1">
                        <td class="l2-td">
                          Диагностика закупорки импульсных линий
                        </td>
                        <td class="l2-td" colspan="2">
                          ${blockageDiagnostic ? "Да" : "Нет"}
                        </td>
                      </tr>
                      <tr class="l2-row1">
                        <td class="l2-td">
                          Диагностика целостности токовой цепи
                        </td>
                        <td class="l2-td" colspan="2">
                          ${currentLoopIntegrityDiagnostic ? "Да" : "Нет"}
                        </td>
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
                    <tr class="l2-row2">
                      <td class="l2-td">
                        Тип присоединения к тех.процессу
                      </td>
                      <td class="l2-td" colspan="2">${connectionType}</td>
                    </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">Соединение с тех. процессом</td>
                      <td class="l2-td" colspan="2">${connection}</td>
                    </tr>
                  </tbody>
                </table>
  `
}