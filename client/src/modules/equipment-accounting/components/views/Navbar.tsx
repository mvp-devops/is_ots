import { Input, Select, Space } from "antd";
import { useEquipmentAccountingTable } from "../tables";

const Navbar = () => {
  const {
    searchValue,
    onSearch,
    unitsList,
    subUnitsList,
    setUnitId,
    setSubUnitId,
  } = useEquipmentAccountingTable();

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
        onChange={(value: string) => setUnitId(value)}
      >
        {[{ id: 0, title: "Все" }, ...unitsList].map((item) => (
          <Select.Option key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>

      <Select
        size="middle"
        placeholder="Выбрать установку/объект"
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
        className="text-secondary"
        onChange={(value: string) => setSubUnitId(value)}
      >
        {[{ id: 0, title: "Все" }, ...subUnitsList].map((item) => (
          <Select.Option key={item.id}>{item.title}</Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default Navbar;
