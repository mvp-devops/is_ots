import { FC } from "react";
import { Select, Space, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { SizeType } from "antd/lib/config-provider/SizeContext";

const { Option } = Select;
const { Text } = Typography;

interface SelectUIComponentProps {
  size?: SizeType;
  className?: string;
  defaultValue?: string;
  mode?: "multiple" | "tags" | undefined;
  allowClear?: boolean;
  id: string;
  changeValue: Function;
  items: any[];
}

const SelectUIComponent: FC<SelectUIComponentProps> = ({
  size,
  className,
  defaultValue,
  mode,
  allowClear,
  id,
  changeValue,
  items,
}) => {
  return (
    <Select
      size={size ? size : "small"}
      className={className ? className : "text-secondary"}
      defaultValue={defaultValue}
      mode={mode}
      allowClear={allowClear}
      notFoundContent={
        <Space className="d-flex justify-content-center p-3">
          <Text type="warning">
            <ExclamationCircleOutlined
              style={{ fontSize: 20, marginBottom: 2 }}
            />
          </Text>

          <Text type="secondary" style={{ fontSize: 12, marginBottom: 2 }}>
            Нет данных для отображения. Уточнить поиск
          </Text>
        </Space>
      }
      showSearch
      // optionFilterProp="children"
      // filterOption={(input, option) =>
      //   (option!.children as unknown as string).includes(input)
      // }
      // filterSort={(optionA, optionB) =>
      //   (optionA!.children as unknown as string)
      //     .toLowerCase()
      //     .localeCompare((optionB!.children as unknown as string).toLowerCase())
      // }
      onChange={(value: string) => changeValue(id, value)}
    >
      {items.map((item) => (
        <Option key={item.id} value={item.value ? item.value : item.id}>
          {item.title}
        </Option>
      ))}
    </Select>
  );
};

export default SelectUIComponent;