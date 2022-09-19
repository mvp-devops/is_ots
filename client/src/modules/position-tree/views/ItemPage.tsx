import { Layout, Skeleton, Spin } from "antd";

import {
  CommentAccountingModalContainer,
  CheckList,
} from "../../comment-accounting";
import {
  EquipmentAccountingModalContainer,
  SummaryListOfEquipment,
} from "../../equipment-accounting";
import {
  ItemPageBreadcrumbs,
  ItemPageMenu,
  useItemPage,
  TabsView,
  PositionTreeForm,
} from "../";
import { ModalContainer } from "../../../components";

const { Content } = Layout;

const ItemPage = () => {
  const {
    formVisible,
    setFormVisible,
    actionType,
    checkListView,
    setCheckListView,
    currentItem,
    setSummaryListOfEquipmentView,
    summaryListOfEquipmentView,
    loading,
    renderFormFlag,
  } = useItemPage();

  // const renderCheckListForm =  formVisible && currentItem && actionType === FormActions.CHECKLIST &&  (
  //   <ModalContainer
  //     show={formVisible}
  //     onCancel={() => setFormVisible(false)}
  //     action={actionType}
  //     child={
  //         <CheckListForm />
  //     }
  //   />
  // )}

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

      {renderFormFlag && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<PositionTreeForm />}
        />
      )}

      {checkListView && (
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
      )}
    </Layout>
  );
};

export default ItemPage;
