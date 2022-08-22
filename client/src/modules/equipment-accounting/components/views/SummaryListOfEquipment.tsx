import { FC, useEffect, useState } from "react";

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
import { summaryListOfEquipmentRequestData } from "../../utils/equipment-accounting.consts";

interface SummaryListOfEquipmentProps {
  data: any[] | null;
}

const SummaryListOfEquipment: FC<SummaryListOfEquipmentProps> = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [unitId, setUnitId] = useState("");
  const [subUnitId, setSubUnitId] = useState("");

  return (
    <Skeleton active loading={false}>
      <Space
        direction="vertical"
        className="p-1 m-1 border"
        style={{ minWidth: "1840px", minHeight: "750px" }}
      >
        <Header />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Navbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          unitId={unitId}
          setUnitId={setUnitId}
          subUnitId={subUnitId}
          setSubUnitId={setSubUnitId}
        />
        <Divider style={{ padding: 0, margin: 0 }} />
        <Items
          data={summaryListOfEquipmentRequestData}
          searchValue={searchValue}
          unitId={unitId}
          subUnitId={subUnitId}
        />
      </Space>
    </Skeleton>
  );
};

export default SummaryListOfEquipment;
