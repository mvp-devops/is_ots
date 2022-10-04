import { Input, Select, Space } from "antd";
import { ChangeEvent } from "react";
import { SelectUIComponent } from "../../../../components";
import { useEquipmentAccountingVeiw } from "../views/hooks/useEquipmentAccountingVeiw";

const Navbar = () => {
  const { searchValue, onSearch } = useEquipmentAccountingVeiw();

  const { unitsList, subUnitsList, unitId, setUnitId, setSubUnitId } =
    useEquipmentAccountingVeiw();

  console.log("unitId: ", unitId);
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
        size="middle"
        placeholder="Выбрать объект строительства"
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
        className="text-secondary"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setUnitId(e.target.value)
        }
      >
        {[{ id: 0, title: "Все" }, ...unitsList].map((item) => (
          <Select.Option key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>

      {/* <SelectUIComponent
        size="middle"
        id="unitId"
        changeValue={setUnitId}
        items={[{ id: 0, title: "Все" }, ...unitsList]}
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
        placeholder="Выбрать объект строительства"
      /> */}

      <SelectUIComponent
        size="middle"
        id="unitId"
        changeValue={setSubUnitId}
        items={[{ id: 0, title: "Все" }, ...subUnitsList]}
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
        placeholder="Выбрать установку/объект"
      />
    </Space>
  );
};

export default Navbar;
