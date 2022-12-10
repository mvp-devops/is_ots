export const gazAnalyzeL2Template = (data: any) => {
  const {
    tag, count,  location, fda, parameter, tempAmbientMin, tempAmbientMax,
    measureType, measuredArea, measureRangeMin, measureRangeMax, warmingUp,
    responseTime, controlCableConnection, lowerThreshold, upperThreshold, fault,
    adjustment, zeroDrift, opticsCleanliness, registrationEvents, heating, dustProof,
    hart, hartVersion, internalDiagnostic, converterType, converter, localIndication,
    outputSignal, voltage, lifeTime
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
 
              tr.l2-r0w {
                height: 17pt;
              }

              tr.l2-row2 {
                height: 34pt;
              }
              td.l2-td {
                vertical-align: middle;
                text-align: left;
                padding-left: 5px;
                color: #000000;
                font-family: "Arial";
                font-size: 10pt;
                border: 1px solid #000000;
                background-color: white;
              }

            </style>
            <table class="l2">
              <col class="l2-col0" />
              <col class="l2-col1" />
              <col class="l2-col2" />
              <tbody>
                <tr class="l2-r0w">
                  <td colspan="3"></td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Позиция на схеме (TAG)</td>
                  <td class="l2-td" colspan="2">${tag}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Количество, шт.</td>
                  <td class="l2-td" style="width: 300px;" colspan="2">${count}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Номер аппарата или линии</td>
                  <td class="l2-td" colspan="2">${location}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    No схемы автоматизации функциональной
                  </td>
                  <td class="l2-td" colspan="2">${fda}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Контроллируемый параметр</td>
                  <td class="l2-td" colspan="2">${parameter}</td>
                </tr>
            
                <tr class="l2-r0w">
                  <td class="l2-td">Температура окружающей среды, °C</td>
                  <td class="l2-td" colspan="2">${tempAmbientMin} … ${tempAmbientMax}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Контроллируемые газы</td>
                  <td class="l2-td" colspan="2">${measuredArea}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Принцип измерений</td>
                  <td class="l2-td" colspan="2">${measureType}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    Диапазон измеряемых значений, % НКПР
                  </td>
                  <td class="l2-td" colspan="2">
                    ${measureRangeMin } … ${measureRangeMax}
                  </td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Предел времени прогрева газоанализатора, минут (не более)
                  </td>
                  <td class="l2-td" colspan="2">
                    ${warmingUp}
                  </td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Время установления показаний Т0,9 ном., сек. (не более)
                  </td>
                  <td class="l2-td" colspan="2">
                    ${responseTime}
                  </td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Место подключения контрольного кабеля</td>
                  <td class="l2-td" colspan="2">${controlCableConnection}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    Выходное реле «Нижний порог», % НКПР
                  </td>
                  <td class="l2-td" colspan="2">${lowerThreshold}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Выходное реле «Верхний порог», % НКПР</td>
                  <td class="l2-td" colspan="2">${upperThreshold}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Выходное реле «Неисправность»</td>
                  <td class="l2-td" colspan="2">${fault ? "Да" : "Нет"}</td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Требуется ли настройка электроники при замене сенсора
                  </td>
                  <td class="l2-td" colspan="2">
                    ${adjustment ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    Корректировка дрейфа нуля
                  </td>
                  <td class="l2-td" colspan="2">
                    ${zeroDrift ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    Функция проверки чистоты оптики
                  </td>
                  <td class="l2-td" colspan="2">
                    ${opticsCleanliness ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Регистрация событий в энергонезависимой памяти
                  </td>
                  <td class="l2-td" colspan="2">
                    ${registrationEvents ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">
                    Подогрев оптики
                  </td>
                  <td class="l2-td" colspan="2">
                    ${heating ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr class="l2-row2">
                  <td class="l2-td">
                    Пылезащита, брызгозащита, фильтр по влаге
                  </td>
                  <td class="l2-td" colspan="2">
                    ${dustProof ? "Да" : "Нет"}
                  </td>
                </tr>
                <tr>
                  <td class="l2-td" rowspan="5">Преобразователь</td>
                  <td class="l2-td">Наличие HART</td>
                  <td class="l2-td">${hart ? "Да" : "Нет"}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Версия HART</td>
                  <td class="l2-td">${hart ? hartVersion : " - "}</td>
                </tr>
                <tr class="l2-r0w">
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
                <tr class="l2-row">
                  <td class="l2-td">
                    Визуальный OLED дисплей на русском языке
                  </td>
                  <td class="l2-td" colspan="2">
                    ${localIndication}
                  </td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Выходной сигнал</td>
                  <td class="l2-td" colspan="2">${outputSignal}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Напряжение питания, В</td>
                  <td class="l2-td" colspan="2">${voltage}</td>
                </tr>
                <tr class="l2-r0w">
                  <td class="l2-td">Средний срок службы, мес.</td>
                  <td class="l2-td" colspan="2">${lifeTime}</td>
                </tr>
              </tbody>
            </table>

  `
}