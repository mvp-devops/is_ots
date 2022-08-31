import { Layout } from "antd";
import { useState } from "react";

import { commentAccountingRequestData } from "../../comment-accounting/utils/comment-accounting.consts";

import {
  CommentAccountingModalContainer,
  CollectiveCheckSheet,
  CheckListForm,
} from "../../comment-accounting";
import {
  EquipmentAccountingModalContainer,
  SummaryListOfEquipment,
} from "../../equipment-accounting";

import { ItemPageBreadcrumbs, ItemPageMenu, ListView, useItemPage } from "../";
import { useTypedSelector } from "../../../hooks";
import { ModalContainer, PositionTreeForm } from "../components/forms";

const { Content } = Layout;

interface ItemPageProps {
  userRole: string;
}

const ItemPage: React.FC<ItemPageProps> = ({ userRole }) => {
  const [showSLOE, setShowSLOE] = useState(false);
  const [showCCLS, setShowCCLS] = useState(false);
  const [showListItems, setShowListItems] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(false);

  const { menuItems, currentItem } = useTypedSelector(
    (state) => state.positionTree
  );

  const { formVisible, setFormVisible, actionType } = useItemPage();

  return (
    <Layout style={{ padding: 0 }}>
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
          <Content style={{ padding: "0 5px" }}>
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
            />
          )}
        </Layout>
      </Content>
      {showSLOE && (
        <EquipmentAccountingModalContainer
          show={showSLOE}
          onCancel={() => setShowSLOE(false)}
          action={actionType}
          child={<SummaryListOfEquipment data={null} />}
        />
      )}
      {showCCLS && (
        <CommentAccountingModalContainer
          show={showCCLS}
          onCancel={() => setShowCCLS(false)}
          action={actionType}
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
      {/* {formVisible && currentItem && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<CheckListForm />}
        />
      )} */}
    </Layout>
  );
};

export default ItemPage;
