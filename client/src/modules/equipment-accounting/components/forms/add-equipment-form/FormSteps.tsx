import React, {FC} from 'react';
import { Space, Tabs} from "antd";
import GeneralInformationFormItems from "./GeneralInformationFormItems";
import MetrologyFormItems from "./MetrologyFormItems";
import SignalsFormItems from "./SignalsFormItems";
import ImpulseLineLogFormItems from "./ImpulseLineLogFormFields";
import CableLogFormFields from "./CableLogFormFields";
import MonitoringFormItems from "./MonitoringFormItems";

const {TabPane} = Tabs;

interface FormStepsProps {
  form: any
}

const FormSteps: FC<FormStepsProps> = ({form}) => {
  return (
    <Tabs
      type="card"
      defaultActiveKey="general-information"
    >
      <TabPane
        key="general-information"
        tab="Основная информация"
      >
        <Space className="d-flex justify-content-center">
          <GeneralInformationFormItems form={form}/>
        </Space>
      </TabPane>
      <TabPane
        key="metrology"
        tab="Метрология"
      >
        <Space className="d-flex justify-content-center">
          {<MetrologyFormItems form={form}/>}
        </Space>
      </TabPane>
      <TabPane
        key="signals"
        tab="Сигналы"
      >
        <Space className="d-flex justify-content-center">
          {<SignalsFormItems form={form}/>}
        </Space>
      </TabPane>
      <TabPane
        key="cable-log"
        tab="Кабельный журнал"
      >
        <Space className="d-flex justify-content-center">
          {<CableLogFormFields form={form}/>}
        </Space>
      </TabPane>
      <TabPane
        key="impulse-line-log"
        tab="Журнал импульсных линий"
      >
        <Space className="d-flex justify-content-center">
          {<ImpulseLineLogFormItems form={form}/>}
        </Space>
      </TabPane>
      <TabPane
        key="monitoring"
        tab="Мониторинг СМР/ПНР"
      >
        <Space className="d-flex justify-content-center">
          {<MonitoringFormItems form={form}/>}
        </Space>
      </TabPane>
    </Tabs>
  )
};

export default FormSteps;