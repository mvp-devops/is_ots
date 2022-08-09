import { FC } from "react";

import { Input, Select, Space, Tabs, Typography } from "antd";

const Navbar = () => {
  return (
    <Space className="d-flex justify-content-between">
      <Input
        placeholder="Поиск..."
        style={{
          width: "600px",
          padding: "12px",
          height: "32px",

          gap: "10px",
          marginTop: "4px",
        }}
      ></Input>
      <Select
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
      >
        <Select.Option key={1} value={1}>
          Объект
        </Select.Option>
      </Select>
      <Select
        style={{
          width: "600px",
          padding: 0,
          height: "32px",
          borderRadius: "4px",
          gap: "10px",
          marginTop: "4px",
        }}
      >
        <Select.Option key={1} value={1}>
          Установка
        </Select.Option>
      </Select>
    </Space>
  );
};

export default Navbar;
