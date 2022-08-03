import { Space, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const Header = () => {
  return (
    <Space direction="vertical" size="small">
      <Space direction="horizontal" className="d-flex justify-content-left">
        <Text strong>Проект:</Text>
        <Text type="secondary">Шифр.</Text>
        <Text type="secondary">Наименование</Text>
      </Space>
      <Space direction="vertical">
        <Space direction="horizontal" className="d-flex justify-content-left">
          <Text strong>Объект:</Text>
          <Text type="secondary">Шифр.</Text>
          <Text type="secondary">Наименование</Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-left">
          <Text strong>Технические требования:</Text>
          <Text type="secondary">ОЛ, ТТ, ТЗ:</Text>
        </Space>
      </Space>
      <Space direction="vertical">
        <Space direction="horizontal" className="d-flex justify-content-left">
          <Text strong>Подобъект:</Text>
          <Text type="secondary">Шифр.</Text>
          <Text type="secondary">Наименование</Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-left">
          <Text strong>Технические требования:</Text>
          <Text type="secondary">ОЛ, ТТ, ТЗ:</Text>
        </Space>
      </Space>
      <Space></Space>
    </Space>
  );
};

export default Header;
