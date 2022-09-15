import { FC } from "react";
import { Layout, Skeleton, Spin } from "antd";

import { commentAccountingRequestData } from "../../comment-accounting/utils/comment-accounting.consts";
import {
  CommentAccountingModalContainer,
  CollectiveCheckSheet,
  CheckListForm,
  CheckList,
  StatisticView,
} from "../../comment-accounting";
import {
  EquipmentAccountingModalContainer,
  SummaryListOfEquipment,
} from "../../equipment-accounting";
import { ItemPageBreadcrumbs, ItemPageMenu, useItemPage } from "../";
import { ModalContainer, PositionTreeForm } from "../components/forms";
import { FormActions } from "../../main";
import { UserForm } from "../../regulatory-reference-information";
import { DesignDocumentTable } from "../../file-storage";
import { TabsView } from "../";

const { Content } = Layout;

interface ItemPageProps {
  // userRole: string;
}

const ItemPage: FC<ItemPageProps> = () => {
  const {
    formVisible,
    setFormVisible,
    actionType,
    checkListView,
    setCheckListView,
    currentItem,
    statisticView,
    listItemsView,
    documentationView,
    collectiveCheckSheetView,
    setCollectiveCheckSheetView,
    setSummaryListOfEquipmentView,
    summaryListOfEquipmentView,
    checkListData,
    loading,
  } = useItemPage();

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
          <TabsView />
          {loading ? (
            <Content
              className="d-flex justify-content-center align-items-center"
              style={{ height: window.innerHeight - 54 }}
            >
              <Spin size="large" />
            </Content>
          ) : (
            <Content style={{ padding: "0 5px" }}>
              {/* {documentationView && <DesignDocumentTable />} */}
              {/* {statisticView && <StatisticView />} */}
            </Content>
          )}

          {currentItem && (
            <ItemPageMenu childTarget={currentItem.childrenTarget} />
          )}
        </Layout>
      </Content>
      {summaryListOfEquipmentView && (
        <EquipmentAccountingModalContainer
          show={summaryListOfEquipmentView}
          onCancel={() => setSummaryListOfEquipmentView(false)}
          action={actionType}
          child={<SummaryListOfEquipment data={null} />}
        />
      )}
      {collectiveCheckSheetView && (
        <CommentAccountingModalContainer
          show={collectiveCheckSheetView}
          onCancel={() => setCollectiveCheckSheetView(false)}
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
            actionType === FormActions.CHECKLIST ? (
              <CheckListForm />
            ) : actionType === FormActions.USER ? (
              <UserForm />
            ) : (
              <PositionTreeForm />
            )
          }
        />
      )}

      {loading ? (
        <Spin size="large" />
      ) : (
        checkListView && (
          <CommentAccountingModalContainer
            show={checkListView}
            onCancel={() => setCheckListView(false)}
            action={actionType}
            child={
              <Skeleton active loading={loading}>
                <CheckList />
              </Skeleton>
            }
          />
        )
      )}
    </Layout>
  );
};

export default ItemPage;
