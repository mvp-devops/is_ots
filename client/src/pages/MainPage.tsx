import { Layout } from "antd";
import { usePage, PageHeader, PageFooter, PageMenu } from ".";
import NsiPage from "../modules/regulatory-reference-information/views/NsiPage";
import { ItemPage } from "../modules/position-tree";

const { Content } = Layout;

const MainPage = () => {
  const { baseTarget, renderNsiItems, currentItem, collapsed } = usePage();

  const content = (
    <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
      {baseTarget === "POSITION_TREE" && currentItem && <ItemPage />}
      {baseTarget === "REGULATORY_REFERENCE_INFORMATION" &&
        renderNsiItems.length > 0 && <NsiPage />}
    </Content>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <PageHeader />
        <Layout>
          {!collapsed && <PageMenu />}
          {content}
        </Layout>
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default MainPage;
