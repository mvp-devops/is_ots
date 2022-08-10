import { FC } from "react";

import { Tabs, Typography } from "antd";
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
import { SummaryListOfEquipmentView } from "../../../../../../common/types/equipment-accounting";
import {
  getAllCableLog,
  getAllGeneralInformation,
  getAllImpulseLineLog,
  getAllMetrology,
  getAllMonitoring,
  getAllSignal,
} from "../tables/table.setting";

const { TabPane } = Tabs;
const { Text } = Typography;

interface ItemsProps {
  data: SummaryListOfEquipmentView[];
  searchValue: string;
  unitId: string;
  subUnitId: string;
}

const Items: FC<ItemsProps> = ({ data, searchValue, unitId, subUnitId }) => {
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
        {
          <GeneralInformationTable
            data={getAllGeneralInformation(data)}
            searchValue={searchValue}
            unitId={unitId}
            subUnitId={subUnitId}
          />
        }
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Метрологические характеристики</Text>}
        key="metrology"
        className="text-secondary"
      >
        {
          <MetrologyTable
            data={getAllMetrology(data)}
            searchValue={searchValue}
            unitId={unitId}
            subUnitId={subUnitId}
          />
        }
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Перечень сигналов</Text>}
        key="signals"
        className="p-1 text-secondary"
      >
        {
          <SignalTable
            data={getAllSignal(data)}
            searchValue={searchValue}
            unitId={unitId}
            subUnitId={subUnitId}
          />
        }
      </TabPane>
      <TabPane
        tab={<Text type="secondary">Журнал импульсных линий</Text>}
        key="impulse-line-log"
        className="p-1 text-secondary"
      >
        {
          <ImpulseLineLogTable
            data={getAllImpulseLineLog(data)}
            searchValue={searchValue}
            unitId={unitId}
            subUnitId={subUnitId}
          />
        }
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Кабельный журнал</Text>}
        key="cable-log"
        className="p-1 text-secondary"
      >
        <CableLogTable
          data={getAllCableLog(data)}
          searchValue={searchValue}
          unitId={unitId}
          subUnitId={subUnitId}
        />
      </TabPane>

      <TabPane
        tab={<Text type="secondary">Мониторинг</Text>}
        key="monitoring"
        className="p-1 text-secondary"
      >
        {
          <MonitoringTable
            data={getAllMonitoring(data)}
            searchValue={searchValue}
            unitId={unitId}
            subUnitId={subUnitId}
          />
        }
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
