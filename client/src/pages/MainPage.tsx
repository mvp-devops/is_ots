import { Layout } from "antd";
import { usePage, PageHeader, PageFooter, PageMenu } from ".";
import NsiPage from "../modules/regulatory-reference-information/views/NsiPage";
import { ItemPage } from "../modules/position-tree";
import TechCardsPreView from "../modules/regulatory-reference-information/views/tech-cards/TechCardsPreView";
import NormativeTable from "../modules/regulatory-reference-information/components/tables/normative/NormativeTable";
import {FormActions} from "../modules/main";
import ManyItemsForm from "../modules/position-tree/components/forms/ManyItemsForm";
import {useTypedSelector} from "../hooks";
import {ModalContainer} from "../components";
import {UserForm} from "../modules/regulatory-reference-information";

const { Content } = Layout;

const MainPage = () => {
  const {
    baseTarget,
    dictionaryTarget,
    renderNsiItems,
    currentItem,
    collapsed,
  } = usePage();

  const {formVisible, actionType} = useTypedSelector(state => state.main)

  const content = (
    <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
      {baseTarget === "POSITION_TREE" && currentItem && <ItemPage />}
      {baseTarget === "REGULATORY_REFERENCE_INFORMATION" &&
        dictionaryTarget !== ("technical-card" || "normative" || "facility") &&
        renderNsiItems.length > 0 && <NsiPage />}
      {baseTarget === "REGULATORY_REFERENCE_INFORMATION" &&
        dictionaryTarget === "technical-card" && <TechCardsPreView />}
      {baseTarget === "REGULATORY_REFERENCE_INFORMATION" &&
        dictionaryTarget === "normative" && <NormativeTable />}
    </Content>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <PageHeader />
        <Layout>
          {!collapsed && <PageMenu />}
          {content}
          {actionType === FormActions.CREATE_POSITION_TREE_ITEMS && formVisible && <ModalContainer child={<ManyItemsForm/>}/>}
          {actionType === FormActions.ADD_USER && formVisible && <ModalContainer child={<UserForm/>}/>}
        </Layout>
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default MainPage;