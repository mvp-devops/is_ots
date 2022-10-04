import { Tabs, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import {
  CableLogTable,
  GeneralInformationTable,
  ImpulseLineLogTable,
  MetrologyTable,
  MonitoringTable,
  SignalTable,
} from "../tables";
import { useEquipmentAccountingVeiw } from "./hooks/useEquipmentAccountingVeiw";

const { TabPane } = Tabs;
const { Text } = Typography;

const Items = () => {
  const { formVisible, actionType, unitId, subUnitId, searchValue } =
    useEquipmentAccountingVeiw();
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
        tab={
          <Text type="secondary" style={{ padding: 5 }}>
            Общая информация
          </Text>
        }
        key="general-information"
        className="p-1 text-secondary"
      >
        {<GeneralInformationTable />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Метрологические характеристики</Text>}
        key="metrology"
        className="text-secondary"
      >
        {<MetrologyTable />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Перечень сигналов</Text>}
        key="signals"
        className="p-1 text-secondary"
      >
        {<SignalTable />}
      </TabPane>
      <TabPane
        tab={<Text type="secondary">Журнал импульсных линий</Text>}
        key="impulse-line-log"
        className="p-1 text-secondary"
      >
        {<ImpulseLineLogTable />}
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Кабельный журнал</Text>}
        key="cable-log"
        className="p-1 text-secondary"
      >
        <CableLogTable />
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Мониторинг</Text>}
        key="monitoring"
        className="p-1 text-secondary"
      >
        {<MonitoringTable />}
      </TabPane>
      {/* <TabPane
        tab={<Text type="secondary">Технологические карты</Text>}
        key="technology-cards"
        className="p-1 text-secondary"
      ></TabPane> */}
    </Tabs>
  );
};

export default Items;
