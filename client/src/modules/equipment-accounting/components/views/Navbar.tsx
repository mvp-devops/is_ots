import { FC } from "react";

import { Input, Select, Space } from "antd";
import { useEquipmentAccountingVeiw } from "./hooks/useEquipmentAccountingVeiw";
import { SelectUIComponent } from "../../../../components";

interface NavbarProps {
  searchValue: string;
  setSearchValue: Function;
  unitId: string;
  setUnitId: Function;
  subUnitId: string;
  setSubUnitId: Function;
}

const Navbar: FC<NavbarProps> = ({
  setSearchValue,
  unitId,
  setUnitId,
  subUnitId,
  setSubUnitId,
}) => {
  const { searchValue, onSearch } = useEquipmentAccountingVeiw();
  return (
    <Space className="d-flex justify-content-between">
      <Input
        placeholder="Поиск..."
        className="text-secondary"
        value={searchValue}
        onChange={onSearch}
        style={{
          width: "600px",
          padding: "12px",
          height: "32px",
          gap: "10px",
          marginTop: "4px",
        }}
      />

      <Select
        placeholder="Выбрать объект строительства"
        className="text-secondary"
        onChange={(value) => setUnitId(value)}
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
      >
        <Select.Option key={0} value={""}>
          все
        </Select.Option>
        <Select.Option key={1} value={"1"}>
          unit-1
        </Select.Option>
        <Select.Option key={2} value={"2"}>
          unit-2
        </Select.Option>
        <Select.Option key={3} value={"3"}>
          unit-3
        </Select.Option>
        <Select.Option key={4} value={"4"}>
          unit-4
        </Select.Option>
        <Select.Option key={5} value={"5"}>
          unit-5
        </Select.Option>
      </Select>
      <Select
        placeholder="Выбрать установку/объект"
        className="text-secondary"
        onChange={(value) => setUnitId(value)}
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
      >
        <Select.Option key={0} value={""}>
          все
        </Select.Option>
        <Select.Option key={1} value={"1"}>
          sub-unit-1
        </Select.Option>
        <Select.Option key={2} value={"2"}>
          sub-unit-2
        </Select.Option>
        <Select.Option key={3} value={"3"}>
          sub-unit-3
        </Select.Option>
        <Select.Option key={4} value={"4"}>
          sub-unit-4
        </Select.Option>
        <Select.Option key={5} value={"5"}>
          sub-unit-5
        </Select.Option>
      </Select>
    </Space>
  );
};

export default Navbar;
