import { Space, Tabs, Typography } from "antd";

import {
  DatabaseOutlined,
  PieChartOutlined,
  SisternodeOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";
import { DesignDocumentTable } from "../../../file-storage";
import { StatisticView } from "../../../comment-accounting";
import PositionTreeTable from "../../components/table/PositionTreeTable";

const { TabPane } = Tabs;

const TabsView = () => {
  const { documentationView } = useTypedSelector((state) => state.main);

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const { setDocumentationView } = useActions();

  useEffect(() => {
    currentItem &&
    (currentItem.target === "project" ||
      currentItem.target === "unit" ||
      currentItem.target === "sub-unit")
      ? setDocumentationView(true)
      : setDocumentationView(false);
  }, [currentItem]);

  const childTarget = currentItem?.childrenTarget;

  return (
    <Tabs
      type="card"
      defaultActiveKey="statistic"
      style={{ minWidth: "80%" }}
      className="noselect"
    >
      <TabPane
        key="statistic"
        tab={
          <Space>
            <PieChartOutlined style={{ marginBottom: 6, padding: 0 }} />
            Статистика
          </Space>
        }
      >
        <StatisticView />
      </TabPane>
      {currentItem && currentItem.target !== "sub-unit" && (
        <TabPane
          key="children"
          tab={
            <Space>
              <SisternodeOutlined style={{ marginBottom: 6, padding: 0 }} />
              {childTarget === "field"
                ? "Месторождения"
                : childTarget === "project"
                ? "Проекты"
                : childTarget === "unit"
                ? "Объекты строительства"
                : "Объекты/установки"}
            </Space>
          }
        >
          <PositionTreeTable />
        </TabPane>
      )}
      {documentationView && (
        <TabPane
          key="documentation"
          tab={
            <Space>
              <DatabaseOutlined style={{ marginBottom: 6, padding: 0 }} />
              Документация
            </Space>
          }
        >
          <DesignDocumentTable />
        </TabPane>
      )}
    </Tabs>
  );
};

export default TabsView;
