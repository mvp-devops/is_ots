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
import { useTypedSelector } from "../../../hooks";
import ModalContainer from "../components/forms/ModalContainer";
import PositionTreeForm from "../components/forms/PositionTreeForm";

const { Content } = Layout;

interface ItemPageProps {
  userRole: string;
}

const ItemPage: React.FC<ItemPageProps> = ({ userRole }) => {
  const [showSLOE, setShowSLOE] = useState(false);
  const [showCCLS, setShowCCLS] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [actionType, setActionType] = useState("");
  const [showListItems, setShowListItems] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(false);

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
          </Content>
          {currentItem && (
            <ItemPageMenu
              target={currentItem.target}
              childTarget={currentItem.childrenTarget}
              role={userRole}
              setShowSLOE={() => setShowSLOE(!showSLOE)}
              setShowCCLS={() => setShowCCLS(!showCCLS)}
              setShowListItems={() => setShowListItems(!showListItems)}
              setShowDocumentation={() =>
                setShowDocumentation(!showDocumentation)
              }
              setActionType={setActionType}
              formVisible={formVisible}
              setFormVisible={setFormVisible}
            />
          )}
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
      {formVisible && currentItem && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={
            <PositionTreeForm
              target={currentItem.target}
              actionType={actionType}
            />
          }
        />
      )}
    </Layout>
  );
};

export default ItemPage;
