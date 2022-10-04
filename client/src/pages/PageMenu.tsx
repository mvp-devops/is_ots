import { Collapse, Space, Tree, Typography, Layout } from "antd";
import { BookOutlined, AppstoreOutlined } from "@ant-design/icons";
import { RegulatoryReferenceInformationList } from "../modules/regulatory-reference-information";
import { usePage } from ".";

const { Sider } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

const PageMenu = () => {
  const { setBaseTarget, onSelect, menuItems } = usePage();

  return (
    <Sider
      breakpoint="xl"
      style={{
        marginRight: 100,
        left: 0,
        top: 0,
        bottom: 0,
      }}
      theme={"light"}
    >
      <Collapse
        style={{
          backgroundColor: "white",
          margin: "1px 0",
          minWidth: 300,
          border: "none",
        }}
      >
        <Panel
          header={
            <Space
              className="d-flex align-items-center"
              onClick={() => setBaseTarget("POSITION_TREE")}
            >
              <AppstoreOutlined
                style={{ marginBottom: 4 }}
                className="text-secondary"
              />
              <Text type="secondary">Дерево позиций</Text>
            </Space>
          }
          key="POSITION_TREE"
        >
          <Tree
            style={{ top: 2, width: 275 }}
            showLine={true}
            showIcon={false}
            onSelect={onSelect}
            treeData={menuItems}
            className="text-secondary mx-2"
          />
        </Panel>
        <Panel
          header={
            <Space
              className="d-flex align-items-center"
              onClick={() => setBaseTarget("REGULATORY_REFERENCE_INFORMATION")}
            >
              <BookOutlined
                style={{ marginBottom: 4 }}
                className="text-secondary"
              />
              <Text type="secondary">Справочники</Text>
            </Space>
          }
          key="REGULATORY_REFERENCE_INFORMATION"
        >
          <RegulatoryReferenceInformationList />
        </Panel>
      </Collapse>
    </Sider>
  );
};

export default PageMenu;
