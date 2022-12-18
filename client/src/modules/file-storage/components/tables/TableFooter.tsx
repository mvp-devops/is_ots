import { Space, Typography } from "antd";
import React from "react";
import { useFileStorageTable } from "./hooks";

const { Text } = Typography;

const TableFooter = () => {
  const { dataSource } = useFileStorageTable();
  return (
    <Space className="d-flex justify-content-end ">
      <Text >Количество документов:</Text>
      <Text strong >
        {dataSource.length}
      </Text>
    </Space>
  );
};

export default TableFooter;