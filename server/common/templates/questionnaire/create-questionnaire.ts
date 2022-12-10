import {stampTemplate as stamp} from "../../../common/templates/questionnaire/stampTemplate";
import {titularTemplate as titular} from "../../../common/templates/questionnaire/titularTemplate";
import {flowL2Template as flowL2} from "../../../common/templates/questionnaire/flow/flowL2Template";
import {flowL3Template as flowL3} from "../../../common/templates/questionnaire/flow/flowL3Template";
import {gazAnalyzeL2Template as gazAnalyzeL2} from "../../../common/templates/questionnaire/gaz-analyze/gazAnalyzeL2Template";
import {gazAnalyzeL3Template as gazAnalyzeL3} from "../../../common/templates/questionnaire/gaz-analyze/gazAnalyzeL3Template";
import {levelL2Template as levelL2} from "../../../common/templates/questionnaire/level/levelL2Template";
import {levelL3Template as levelL3} from "../../../common/templates/questionnaire/level/levelL3Template";
import {pressureL2Template as pressureL2} from "../../../common/templates/questionnaire/pressure/pressureL2Template";
import {pressureL3Template as pressureL3} from "../../../common/templates/questionnaire/pressure/pressureL3Template";
import {temperatureL2Template as temperatureL2} from "../../../common/templates/questionnaire/temperature/temperatureL2Template";
import {temperatureL3Template as temperatureL3} from "../../../common/templates/questionnaire/temperature/temperatureL3Template";

export const createQuestionnaire = (data: any, target: string) => {
  const {cipher} = data;

  const titularData = {
    listNumber: 1,
    cipher,
   item: titular(data)
  }

  const l2Item = target === "flow" ? flowL2(data)
    : target === "gaz-analyze" ? gazAnalyzeL2(data)
      : target === "level" ? levelL2(data)
        : target === "pressure" ? pressureL2(data)
          : temperatureL2(data)

  const l2Data = {
    listNumber: 2,
    cipher,
    item: l2Item
  }

  const l3Item = target === "flow" ? flowL3(data)
    : target === "gaz-analyze" ? gazAnalyzeL3(data)
      : target === "level" ? levelL3(data)
        : target === "pressure" ? pressureL3(data)
          : temperatureL3(data)

  const l3Data = {
    listNumber: 3,
    cipher,
    item: l3Item
  }

  return `
  <div style="page-break-after: always;">
  ${stamp(titularData)}
  </div>
    <div style="page-break-after: always;">
  ${stamp(l2Data)}
  </div>
      <div>
  ${stamp(l3Data)}
  </div>
  `


}