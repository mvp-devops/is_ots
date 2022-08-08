import { Layout } from "antd";
import React from "react";
import CollectiveCheckSheet from "../../comment-accounting";
import { commentAccountingRequestData } from "../../comment-accounting/utils/comment-accounting.consts";
import ItemPageBreadcrumbs from "./breadcrumbs/ItemPageBreadcrumbs";
import ItemPageMenu from "./menu/ItemPageMenu";
const { Content } = Layout;

const ItemPage: React.FC = () => (
  <Layout style={{ minHeight: "100vh", padding: 0 }}>
    <Content style={{ padding: "0 10px" }}>
      <ItemPageBreadcrumbs
        items={[
          { id: "1", title: "Компания" },
          { id: "2", title: "Месторождение" },
          { id: "3", title: "Проект" },
        ]}
      />
      <Layout className="site-layout-background" style={{ padding: "0 0" }}>
        <Content style={{ padding: "0 5px", minHeight: "100%" }}>
          <CollectiveCheckSheet data={commentAccountingRequestData} />
        </Content>
        <ItemPageMenu target="project" childTarget=" unit" role="EXPERT" />
      </Layout>
    </Content>
  </Layout>
);

export default ItemPage;
