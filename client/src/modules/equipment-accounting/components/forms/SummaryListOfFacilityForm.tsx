import { Button, Divider, Space, Steps } from "antd";
import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../../..";
import { getFolderPath } from "../../../position-tree/api";
import {
  CableLogCreateOrUpdateAttrs,
  GeneralInformationCreateOrUpdateAttrs,
  ImpulseLineLogCreateOrUpdateAttrs,
  MetrologyCreateOrUpdateAttrs,
  MonitoringCreateOrUpdateAttrs,
  SignalCreateOrUpdateAttrs,
  SummaryListOfEquipmentFormData,
} from "../../types";
import CableLogForm from "./CableLogForm";
import { summaryListOfEquipmentFormData } from "./form.settings";
import GeneralInformationForm from "./GeneralInformationForm";
import { useEquipmentAccountingForm } from "./hooks";
import ImpulseLineLogForm from "./ImpulseLineLogForm";
import MetrologyForm from "./MetrologyForm";
import MonitoringForm from "./MonitoringForm";
import SignalForm from "./SignalForm";
import AddEquipmentForm from "./add-equipment-form/AddEquipmentForm";

const { Step } = Steps;

const SummaryListOfFacilityForm = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<SummaryListOfEquipmentFormData>(
    summaryListOfEquipmentFormData
  );

  const { currentItem, checkedItem, target } = useEquipmentAccountingForm();

  const { createOneEquipment, setFormVisible } = useActions();

  const { formVisible } = useTypedSelector((state) => state.main);

  const setGeneralInformation = (
    generalInformation: GeneralInformationCreateOrUpdateAttrs
  ) => setData({ ...data, generalInformation: {
    ...generalInformation,
      projectId: target === "project" ? currentItem.id : target === "unit" ? currentItem.keys[3] : currentItem.keys[4]} });

  const setCableLog = (cableLog: CableLogCreateOrUpdateAttrs[]) =>
    setData({ ...data, cableLog });

  const setImpulseLineLog = (
    impulseLineLog: ImpulseLineLogCreateOrUpdateAttrs[]
  ) => setData({ ...data, impulseLineLog });

  const setSignals = (signals: SignalCreateOrUpdateAttrs[]) =>
    setData({ ...data, signals });

  const setMonitoring = (monitoring: MonitoringCreateOrUpdateAttrs) =>
    setData({ ...data, monitoring });

  const setMetrology = (metrology: MetrologyCreateOrUpdateAttrs) =>
    setData({ ...data, metrology });

  const createNewAsset = () => {
    // setFormVisible(false);
    getFolderPath(
      "sub-unit",
      data.generalInformation.subUnitId.toString()
    ).then((folderPath) => createOneEquipment(data, folderPath));
  };

  useEffect(() => {
    if (currentItem && checkedItem) {
      switch (target) {
        case "field": {
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              projectId: checkedItem.id,
            },
          });
          break;
        }
        case "project": {
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              projectId: currentItem.keys[2],
            },
          });
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              unitId: checkedItem.id,
            },
          });
          break;
        }
        case "unit": {
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              projectId: currentItem.keys[2],
            },
          });
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              unitId: currentItem.keys[3],
            },
          });
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              subUnitId: checkedItem.id,
            },
          });
          break;
        }
        case "sub-unit": {
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              projectId: currentItem.keys[2],
            },
          });
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              unitId: currentItem.keys[3],
            },
          });
          setData({
            ...data,
            generalInformation: {
              ...data.generalInformation,
              subUnitId: currentItem.keys[4],
            },
          });
          break;
        }
        default:
          break;
      }
    }
  }, [currentItem, checkedItem]); // eslint-disable-line react-hooks/exhaustive-deps

  const steps = [
    {
      title: "Общие сведения",
      content: (
        <Space className="d-flex justify-content-center">
          <GeneralInformationForm
            data={data?.generalInformation}
            setData={setGeneralInformation}
            //   units={target === "proejct" ? setItems(target, menuItems, keys) : []}
            //   subUnits={target === "unit" ? setItems(target, menuItems, keys) : []}
          />
        </Space>
      ),
    },
    {
      title: "Метрология",
      content: (
        <Space className="d-flex justify-content-center">
          <MetrologyForm
            data={data.metrology as MetrologyCreateOrUpdateAttrs}
            setData={setMetrology}
          />
        </Space>
      ),
    },
    {
      title: "Сигналы",
      content: (
        <Space className="d-flex justify-content-center">
          <SignalForm data={data.signals} setData={setSignals} />
        </Space>
      ),
    },
    {
      title: "Каб. журнал",
      content: (
        <Space className="d-flex justify-content-center">
          <CableLogForm data={data.cableLog} setData={setCableLog} />
        </Space>
      ),
    },
    {
      title: "Журнал ИЛ",
      content: (
        <Space className="d-flex justify-content-center">
          <ImpulseLineLogForm
            data={data.impulseLineLog}
            setData={setImpulseLineLog}
          />
        </Space>
      ),
    },
    {
      title: "Мониторинг СМР/ПНР",
      content: (
        <Space className="d-flex justify-content-center">
          <MonitoringForm
            data={data.monitoring as MonitoringCreateOrUpdateAttrs}
            setData={setMonitoring}
          />
        </Space>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return <AddEquipmentForm/>

  // return (
  //   <>
  //     <Steps current={current} style={{ maxWidth: 1400 }} className="">
  //       {steps.map((item) => (
  //         <Step key={item.title} title={item.title} />
  //       ))}
  //     </Steps>
  //     <div
  //       className="steps-content pt-1 d-flex align-items-center justify-content-center"
  //       style={{ minHeight: 600 }}
  //     >
  //       {steps[current].content}
  //     </div>
  //     <div className="steps-action">
  //       <Divider />
  //       {current < steps.length - 1 && (
  //         <Button type="primary" onClick={() => next()}>
  //           Далее
  //         </Button>
  //       )}
  //       {current === steps.length - 1 && (
  //         <Button
  //           type="primary"
  //           onClick={() => {
  //             createNewAsset();
  //             setFormVisible(false);
  //           }}
  //         >
  //           Добавить
  //         </Button>
  //       )}
  //       {current > 0 && (
  //         <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
  //           Назад
  //         </Button>
  //       )}
  //     </div>
  //   </>
  // );
};

export default SummaryListOfFacilityForm;