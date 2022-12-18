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

const { TabPane } = Tabs;
const { Text } = Typography;

const Items = () => {
  return (
    <Tabs
    // tabBarExtraContent={
    //   <DownloadOutlined
    //     title="Сформировать файл"
    //     className="   me-3"
    //     style={{ fontSize: "20px", cursor: "pointer" }}
    //   />
    // }
    >
      <TabPane
        tab={
          <Text  style={{ padding: 5 }}>
            Общая информация
          </Text>
        }
        key="general-information"
        className="p-1   "
      >
        {<GeneralInformationTable />}
      </TabPane>

      <TabPane
        tab={<Text >Метрологические характеристики</Text>}
        key="metrology"
        className="  "
      >
        {<MetrologyTable />}
      </TabPane>

      <TabPane
        tab={<Text >Перечень сигналов</Text>}
        key="signals"
        className="p-1   "
      >
        {<SignalTable />}
      </TabPane>
      <TabPane
        tab={<Text >Журнал импульсных линий</Text>}
        key="impulse-line-log"
        className="p-1   "
      >
        {<ImpulseLineLogTable />}
      </TabPane>

      <TabPane
        tab={<Text >Кабельный журнал</Text>}
        key="cable-log"
        className="p-1   "
      >
        <CableLogTable />
      </TabPane>

      <TabPane
        tab={<Text >Мониторинг</Text>}
        key="monitoring"
        className="p-1   "
      >
        {<MonitoringTable />}
      </TabPane>
    </Tabs>
  );
};

export default Items;