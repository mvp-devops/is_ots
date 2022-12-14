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
                      <td class="l2-td">?????????????? ???? ?????????? (TAG)</td>
                      <td class="l2-td" colspan="2">${tag}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">????????????????????, ????.</td>
                      <td class="l2-td" colspan="2">
                        ${count}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">?????????? ???????????????? ?????? ??????????</td>
                      <td class="l2-td" colspan="2">${location}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        No ?????????? ?????????????????????????? ????????????????????????????
                      </td>
                      <td class="l2-td" colspan="2">${fda}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">?????????????????????????????? ????????????????</td>
                      <td class="l2-td" colspan="2">${parameter}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ?????????????????????? ???????????????????? ??????????, ??C
                      </td>
                      <td class="l2-td" colspan="2">
                        ${tempAmbientMin} ??? ${tempAmbientMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????????????? ??????????</td>
                      <td class="l2-td" colspan="2">
                        ${measuredArea}
                      </td>
                    </tr>
                                      <tr class="l2-row1">
                      <td class="l2-td">?????? ??????????????????</td>
                      <td class="l2-td" colspan="2">
                        ${measureType}
                      </td>
                    </tr>
                    
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ???????????????? ???????????????????? ????????????????, ${range ? range : "??????"}
                      </td>
                      <td class="l2-td" colspan="2">
                        ${measureRangeMin} ??? ${measureRangeMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ???????????????? ???????????????????? ?????????? (??????.), ??????.
                      </td>
                      <td class="l2-td" colspan="2">
                        ${pressureMeasureAreaMin} ??? ${pressureMeasureAreaMax}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ?????????????????????? ???????????????????? ??????????, ??C
                      </td>
                      <td class="l2-td" colspan="2">
                        ${tempMeasureAreaMin} ??? ${tempMeasureAreaMax}
                      </td>
                    </tr>
                    <tr class="l2-row2">
                        <td class="l2-td">?????????? ?????????????????????? ???????????????????? ??????????????????????????????</td>
                        <td class="l2-td" colspan="2">
                          ${connectionScheme ? connectionScheme : "???? ??????????????????????????"}
                        </td>
                      </tr>
                   
                    <tr>
                      <td class="l2-td" rowspan="4">??????????????????????????????</td>
                      <td class="l2-td">?????????????? HART</td>
                      <td class="l2-td">${hart ? "????" : "??????"}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????? HART</td>
                      <td class="l2-td">${hart ? hartVersion : " - "}</td>
                    </tr>
                    <tr class="l2-row2">
                        <td class="l2-td">???????????????????? ??????????????????????</td>
                        <td class="l2-td">${internalDiagnostic ? "????" : "??????"}</td>
                      </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">
                          ???????????????? ??????????????????
                      </td>
                      <td class="l2-td">${settingRange}</td>
                    </tr>
                    <tr class="l2-row1">
                        <td class="l2-td">
                          ?????????????? c????????????????????????????
                        </td>
                        <td class="l2-td" colspan="2">
                          ${selfDiagnostic ? "????" : "??????"}
                        </td>
                      </tr>
                      <tr class="l2-row1">
                        <td class="l2-td">
                          ?????????????????????? ?????????????????? ???????????????????? ??????????
                        </td>
                        <td class="l2-td" colspan="2">
                          ${blockageDiagnostic ? "????" : "??????"}
                        </td>
                      </tr>
                      <tr class="l2-row1">
                        <td class="l2-td">
                          ?????????????????????? ?????????????????????? ?????????????? ????????
                        </td>
                        <td class="l2-td" colspan="2">
                          ${currentLoopIntegrityDiagnostic ? "????" : "??????"}
                        </td>
                      </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                          ?????????????? ?????????????? ??????????????????
                      </td>
                      <td class="l2-td" colspan="2">
                        ${localIndication ? "????" : "??????"}
                      </td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????????? ????????????</td>
                      <td class="l2-td" colspan="2">${outputSignal}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????????????? ??????????????, ??</td>
                      <td class="l2-td" colspan="2">${voltage}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">?????????????? ???????? ????????????, ??????.</td>
                      <td class="l2-td" colspan="2">${lifeTime}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ?????????????? ?????????????????? ???? ??????????, ??????. ??????????
                      </td>
                      <td class="l2-td" colspan="2">${mtbf}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????????? ??????????????</td>
                      <td class="l2-td" colspan="2">${corpsMaterial}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">
                        ?????????????? ???????????? ??????????????, ???? ????????
                      </td>
                      <td class="l2-td" colspan="2">${protection}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">?????? ????????????????????????</td>
                      <td class="l2-td" colspan="2">${explosionType}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">???????????????????? ????????????????????????</td>
                      <td class="l2-td" colspan="2">${explosionMark}</td>
                    </tr>
                    <tr class="l2-row1">
                      <td class="l2-td">?????????????? ???????????????????????? SIL</td>
                      <td class="l2-td" colspan="2">${safety}</td>
                    </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">
                        ?????? ?????????????????????????? ?? ??????.????????????????
                      </td>
                      <td class="l2-td" colspan="2">${connectionType}</td>
                    </tr>
                    <tr class="l2-row2">
                      <td class="l2-td">???????????????????? ?? ??????. ??????????????????</td>
                      <td class="l2-td" colspan="2">${connection}</td>
                    </tr>
                  </tbody>
                </table>
  `
}