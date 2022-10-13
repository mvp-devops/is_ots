import { Button, Divider, Space, Steps } from "antd";
import { useEffect, useState } from "react";
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
import ImpulseLineLogForm from "./ImpulseLineLogForm";
import MetrologyForm from "./MetrologyForm";
import MonitoringForm from "./MonitoringForm";
import SignalForm from "./SignalForm";

const { Step } = Steps;

const SummaryListOfFacilityForm = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<SummaryListOfEquipmentFormData>(
    summaryListOfEquipmentFormData
  );

  const setGeneralInformation = (
    generalInformation: GeneralInformationCreateOrUpdateAttrs[]
  ) => setData({ ...data, ...generalInformation });

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

  useEffect(() => console.log(data), [data]);

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
      title: "Кабельный журнал",
      content: (
        <Space className="d-flex justify-content-center">
          <CableLogForm data={data.cableLog} setData={setCableLog} />
        </Space>
      ),
    },
    {
      title: "Журнал ИМ",
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

  // useEffect(() => console.log(data), [data]);

  return (
    <>
      <Steps current={current} style={{ maxWidth: 1200 }} className="">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div
        className="steps-content pt-1 d-flex align-items-center justify-content-center"
        style={{ minHeight: 600 }}
      >
        {steps[current].content}
      </div>
      <div className="steps-action">
        <Divider />
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            //   onClick={() => createOneFacility(data)}
          >
            Добавить
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Назад
          </Button>
        )}
      </div>
    </>
  );
};

export default SummaryListOfFacilityForm;
