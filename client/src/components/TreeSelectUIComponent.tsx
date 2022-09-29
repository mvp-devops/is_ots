import { FC } from "react";

import { Space, TreeSelect, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface TreeSelectProps {
  id: string;
  value: string;
  treeData: any[];
  changeValue: Function;
}

const TreeSelectUIComponent: FC<TreeSelectProps> = ({
  id,
  value,
  treeData,
  changeValue,
}) => {
  return (
    <TreeSelect
      id={id}
      size="small"
      notFoundContent={
        <Space className="d-flex justify-content-center p-3">
          <Text type="warning">
            <ExclamationCircleOutlined
              style={{ fontSize: 20, marginBottom: 2 }}
            />
          </Text>

          <Text type="secondary">
            Нет данных для отображения. Уточнить поиск
          </Text>
        </Space>
      }
      style={{ width: "100%" }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      treeData={treeData}
      treeDefaultExpandAll
      onChange={(value) => {
        changeValue(id, value);
      }}
    />
  );
};

export default TreeSelectUIComponent;
