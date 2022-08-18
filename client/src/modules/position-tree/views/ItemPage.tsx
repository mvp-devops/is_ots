import { Layout } from "antd";
import React, { useEffect, useState } from "react";

import { commentAccountingRequestData } from "../../comment-accounting/utils/comment-accounting.consts";

import {
  CommentAccountingModalContainer,
  CollectiveCheckSheet,
} from "../../comment-accounting";
import {
  EquipmentAccountingModalContainer,
  SummaryListOfEquipment,
} from "../../equipment-accounting";

import ItemPageBreadcrumbs from "./ItemPageBreadcrumbs";
import ItemPageMenu from "./ItemPageMenu";
import ListView from "./list/ListView";
import { useActions, useTypedSelector } from "../../../hooks";

const { Content } = Layout;

const ItemPage: React.FC = () => {
  const [showSLOE, setShowSLOE] = useState(false);
  const [showCCLS, setShowCCLS] = useState(false);

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  return (
    <Layout style={{ minHeight: "100vh", padding: 0 }}>
      <Content style={{ padding: "0 10px" }}>
        {currentItem && (
          <ItemPageBreadcrumbs
            items={[
              { id: currentItem.id, title: currentItem.title },
              // { id: "2", title: "Месторождение" },
              // { id: "3", title: "Проект" },
            ]}
          />
        )}
        <Layout className="site-layout-background" style={{ padding: "0 0" }}>
          <Content style={{ padding: "0 5px", minHeight: "100%" }}>
            <ListView />

            {/* <CollectiveCheckSheet data={commentAccountingRequestData} /> */}
          </Content>
          <ItemPageMenu
            target="project"
            childTarget=" unit"
            role="EXPERT"
            showSLOE={showSLOE}
            setShowSLOE={() => setShowSLOE(!showSLOE)}
            showCCLS={showCCLS}
            setShowCCLS={() => setShowCCLS(!showCCLS)}
          />
        </Layout>
      </Content>
      {showSLOE && (
        <EquipmentAccountingModalContainer
          show={showSLOE}
          onCancel={() => setShowSLOE(false)}
          action={"POST"}
          child={<SummaryListOfEquipment data={null} />}
        />
      )}
      {showCCLS && (
        <CommentAccountingModalContainer
          show={showCCLS}
          onCancel={() => setShowCCLS(false)}
          action={"POST"}
          child={<CollectiveCheckSheet data={commentAccountingRequestData} />}
        />
      )}
    </Layout>
  );
};

export default ItemPage;
