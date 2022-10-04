import { Layout, Typography } from "antd";
const { Footer } = Layout;
const { Text } = Typography;

const PageFooter = () => {
  return (
    <Footer style={{ textAlign: "right", background: "rgb(255,255,255" }}>
      <Text type="secondary">ООО "Газпромнефть-Автоматизация" © 2022</Text>
    </Footer>
  );
};

export default PageFooter;
