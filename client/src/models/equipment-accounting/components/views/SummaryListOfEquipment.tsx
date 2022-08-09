import { FC } from "react";

import {
  Divider,
  Dropdown,
  Input,
  Menu,
  Select,
  Skeleton,
  Space,
  Steps,
  Tabs,
  Typography,
} from "antd";
import Header from "./Header";
import Navbar from "./Navbar";
import Items from "./Items";

interface SummaryListOfEquipmentProps {
  data: any[] | null;
}

const SummaryListOfEquipment: FC<SummaryListOfEquipmentProps> = ({ data }) => {
  return (
    <Skeleton active loading={false}>
      <Space
        direction="vertical"
        className="p-1 m-1 border"
        style={{ minWidth: "1840px", minHeight: "750px" }}
      >
        <Header />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Navbar />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Items />
      </Space>
    </Skeleton>
  );
};

export default SummaryListOfEquipment;
