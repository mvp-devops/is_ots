// import { Button, message, Steps } from "antd";
// import React, { FC, useEffect, useState } from "react";
// import { FormActions } from "../../../../components/UI/form/form.types";
// import { useActions } from "../../../../hooks/useActions";
// import { useTypedSelector } from "../../../../hooks/useTypedSelector";
// import { PositionTreeItem } from "../../../main/main.types";
// import {
//   CableLogCreateOrUpdateAttrs,
//   ConsolidatedListCreateOrUpdateAttrs,
//   ConsolidatedListCreateOrUpdateFormData,
//   ConsolidatedListView,
//   ImpulseLineLogCreateOrUpdateAttrs,
//   MetrologyCreateOrUpdateAttrs,
//   MonitoringCreateOrUpdateAttrs,
//   SignalCreateOrUpdateAttrs,
// } from "../../types/equipment-accounting.types";
// import CableLogForm from "./CableLogForm";
// import ImpulseLineLogForm from "./ImpulseLineLogForm";
// import MainDetailsForm from "./MainDetailsForm";
// import MetrologyForm from "./MetrologyForm";
// import MonitoringForm from "./MonitoringForm";
// import SignalForm from "./SignalForm";

// const { Step } = Steps;

// const setInitData = (
//   parrentTarget: string,
//   parrent: any,
//   item?: ConsolidatedListView
// ): ConsolidatedListCreateOrUpdateFormData => {
//   const initData: ConsolidatedListCreateOrUpdateFormData = {
//     id: item ? item.id : "",
//     unitId: item
//       ? item.unitId
//       : parrentTarget === "unit"
//       ? parrent.id
//       : parrentTarget === "sub-unit"
//       ? parrent.unitId
//       : "",
//     subUnitId: item
//       ? item.subUnitId
//       : parrentTarget === "sub-unit"
//       ? parrent.id
//       : "",
//     facilityDictionaryId:
//       item && item.facilityDictionaryId ? item.facilityDictionaryId : null,
//     facilityModificationId:
//       item && item.facilityModificationId ? item.facilityModificationId : null,
//     installationLocation: item ? item.installationLocation : "",
//     facilityDocuments: [],

//     systemType: item ? item.systemType : [],
//     tag: item ? item.tag : "",
//     controlledParameter: item ? item.controlledParameter : "",
//     facility: {
//       country: item ? item.country : "",
//       vendor: item ? item.vendor : "",
//       type: item ? item.equipmentType : "",
//       title: item ? item.facilityTitle : "",
//     },

//     facilityModification: {
//       facilityDictionaryId:
//         item && item.facilityDictionaryId ? +item.facilityDictionaryId : null,
//       title: item ? item.facilityModification : "",
//     },
//     factoryNumber: item ? item.factoryNumber : "",
//     technologicalCards: [],
//     monitoring: {
//       consolidatedListId: item ? +item.id : null,
//       mount: item && item.monitoring ? item.monitoring.mount : "",
//       connect: item && item.monitoring ? item.monitoring.connect : "",
//       test: item && item.monitoring ? item.monitoring.test : "",
//       awp: item && item.monitoring ? item.monitoring.awp : "",
//       commision: item && item.monitoring ? item.monitoring.commision : "",
//       description: item && item.monitoring ? item.monitoring.description : "",
//       monitoringDocuments: [],
//     },
//     metrology: {
//       consolidatedListId: item ? +item.id : null,
//       sgroei: item && item.metrology ? item.metrology.sgroei : "",
//       metrologyType:
//         item && item.metrology ? item.metrology.meansurementType : "",
//       metrologyState:
//         item && item.metrology ? item.metrology.metrologyState : "",
//       meansurementRengeFrom:
//         item && item.metrology ? item.metrology.meansurementRengeFrom : "",
//       meansurementRengeTo:
//         item && item.metrology ? item.metrology.meansurementRengeTo : "",
//       range: item && item.metrology ? item.metrology.range : "",
//       grsi: item && item.metrology ? item.metrology.grsi : "",
//       mpi: item && item.metrology ? item.metrology.mpi : "",
//       accuracy: item && item.metrology ? item.metrology.accuracy : "",
//       arshin: item && item.metrology ? item.metrology.arshin : "",
//       metrologyDocuments: [],
//     },
//     signals: [],
//     cableLog: [],
//     impulseLineLog: [],
//     specification: item ? item.specification : "",
//     description: item ? item.description : "",
//     year: item ? item.year : "",
//     month: item ? item.month : "",
//     period: item ? item.period : "",
//   };

//   return initData;
// };

// const FacilityForm: React.FC = () => {
//   const { target, menuItems, keys, currentItem } = useTypedSelector(
//     (state) => state.main
//   );
//   const { createOneFacility } = useActions();

//   const [current, setCurrent] = useState(0);
//   const [data, setData] = useState<ConsolidatedListCreateOrUpdateFormData>(
//     setInitData(target, currentItem)
//   );

//   const setMainDetails = (mainDetails: ConsolidatedListCreateOrUpdateAttrs[]) =>
//     setData({ ...data, ...mainDetails });

//   const setCableLog = (cableLog: CableLogCreateOrUpdateAttrs[]) =>
//     setData({ ...data, cableLog });

//   const setImpulseLineLog = (
//     impulseLineLog: ImpulseLineLogCreateOrUpdateAttrs[]
//   ) => setData({ ...data, impulseLineLog });

//   const setSignals = (signals: SignalCreateOrUpdateAttrs[]) =>
//     setData({ ...data, signals });

//   const setMonitoring = (monitoring: MonitoringCreateOrUpdateAttrs) =>
//     setData({ ...data, monitoring });

//   const setMetrology = (metrology: MetrologyCreateOrUpdateAttrs) =>
//     setData({ ...data, metrology });

//   const setItems = (
//     target: string,
//     menuItems: PositionTreeItem[],
//     keys: string[]
//   ): PositionTreeItem[] => {
//     let items: PositionTreeItem[] = [];

//     items =
//       target === "project"
//         ? menuItems
//             .filter((item) => item.id === keys[0])[0]
//             ?.children?.filter((item) => item.id === keys[1])[0]
//             ?.children?.filter((item) => item.id === keys[2])[0]?.children || []
//         : target === "unit"
//         ? menuItems
//             .filter((item) => item.id === keys[0])[0]
//             ?.children?.filter((item) => item.id === keys[1])[0]
//             ?.children?.filter((item) => item.id === keys[2])[0]
//             ?.children?.filter((item) => item.id === keys[3])[0].children || []
//         : [];

//     return items;
//   };

//   useEffect(() => console.log(data), [data]);

//   const steps = [
//     {
//       title: "Общие сведения",
//       content: (
//         <MainDetailsForm
//           data={{
//             unitId: +data.unitId,
//             subUnitId: +data.subUnitId,
//             facilityDictionaryId: data.facilityDictionaryId
//               ? +data.facilityDictionaryId
//               : null,
//             facilityModificationId: data.facilityModificationId
//               ? +data.facilityModificationId
//               : null,
//             installationLocation: data.installationLocation,
//             systemType: data.systemType,
//             tag: data.tag,
//             controlledParameter: data.controlledParameter,
//             factoryNumber: data.factoryNumber,
//             specification: data.specification,
//             description: data.description,
//             year: data.year,
//             month: data.month,
//             period: data.period,
//           }}
//           setData={setMainDetails}
//           units={target === "proejct" ? setItems(target, menuItems, keys) : []}
//           subUnits={target === "unit" ? setItems(target, menuItems, keys) : []}
//         />
//       ),
//     },
//     {
//       title: "Метрологические характеристики",
//       content: <MetrologyForm data={data.metrology} setData={setMetrology} />,
//     },
//     {
//       title: "Перечень сигналов",
//       content: <SignalForm data={data.signals} setData={setSignals} />,
//     },
//     {
//       title: "Кабельный журнал",
//       content: <CableLogForm data={data.cableLog} setData={setCableLog} />,
//     },
//     {
//       title: "Журнал импульсных линий",
//       content: (
//         <ImpulseLineLogForm
//           data={data.impulseLineLog}
//           setData={setImpulseLineLog}
//         />
//       ),
//     },
//     {
//       title: "Мониторинг СМР/ПНР",
//       content: (
//         <MonitoringForm data={data.monitoring} setData={setMonitoring} />
//       ),
//     },
//   ];

//   const next = () => {
//     setCurrent(current + 1);
//   };

//   const prev = () => {
//     setCurrent(current - 1);
//   };

//   // useEffect(() => console.log(data), [data]);

//   return (
//     <>
//       <Steps current={current}>
//         {steps.map((item) => (
//           <Step key={item.title} title={item.title} />
//         ))}
//       </Steps>
//       <div className="steps-content pt-1">{steps[current].content}</div>
//       <div className="steps-action">
//         {current < steps.length - 1 && (
//           <Button type="primary" onClick={() => next()}>
//             Далее
//           </Button>
//         )}
//         {current === steps.length - 1 && (
//           <Button type="primary" onClick={() => createOneFacility(data)}>
//             Добавить
//           </Button>
//         )}
//         {current > 0 && (
//           <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
//             Назад
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };

// export default FacilityForm;

import React from "react";

const FacilityForm = () => {
  return <div>FacilityForm</div>;
};

export default FacilityForm;
