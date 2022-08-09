import { FC } from "react";

import { Layout, Tabs, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import CableLogTable from "../tables/CableLogTable";
import {
  cableLog,
  generalInformation,
  impulseLineLog,
  metrology,
  monitoring,
  signal,
} from "../../utils/equipment-accounting.consts";
import {
  GeneralInformationTable,
  ImpulseLineLogTable,
  MetrologyTable,
  MonitoringTable,
  SignalTable,
} from "../tables";

const { TabPane } = Tabs;
const { Text } = Typography;

const Items = () => {
  return (
    <Tabs
      onChange={(activeKey) => console.log(activeKey)}
      tabBarExtraContent={
        <DownloadOutlined
          title="Сформировать файл"
          className="text-secondary me-3"
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      }
    >
      <TabPane
        tab={<Text type="secondary">Общая информация</Text>}
        key="general-information"
        className="p-1 text-secondary"
      >
        {<GeneralInformationTable data={generalInformation} />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Метрологические характеристики</Text>}
        key="metrology"
        className="text-secondary"
      >
        {<MetrologyTable data={metrology} />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Перечень сигналов</Text>}
        key="signals"
        className="p-1 text-secondary"
      >
        {<SignalTable data={signal} />}
      </TabPane>
      <TabPane
        tab={<Text type="secondary">Журнал импульсных линий</Text>}
        key="impulse-line-log"
        className="p-1 text-secondary"
      >
        {<ImpulseLineLogTable data={impulseLineLog} />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Кабельный журнал</Text>}
        key="cable-log"
        className="p-1 text-secondary"
      >
        <CableLogTable data={cableLog} />
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Мониторинг</Text>}
        key="monitoring"
        className="p-1 text-secondary"
      >
        {<MonitoringTable data={monitoring} />}
      </TabPane>
      <TabPane
        tab={<Text type="secondary">Технологические карты</Text>}
        key="technology-cards"
        className="p-1 text-secondary"
      >
        {/* {stepsRender} */}
      </TabPane>
    </Tabs>
  );
};

export default Items;
