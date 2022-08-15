import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Switch,
  TreeSelect,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  FacilityCreateOrUpdateAtts,
  GeneralInformationCreateOrUpdateAttrs,
} from "../../../../../../common/types/equipment-accounting";
import { RcFile } from "antd/lib/upload";
import {
  formatDate,
  setDate,
  setDateToVerification,
} from "../../../../utils/main.utils";
import {
  countries,
  meansureGroup,
  meansurementArea,
  meansurementType,
  sgroei,
} from "../../utils/equipment-accounting.consts";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { OptionFC } from "rc-select/lib/Option";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  data: FacilityCreateOrUpdateAtts;
  setData: Function;
}

const FacilityForm: FC<FormProps> = ({ data, setData }) => {
  const [modifications, setModifications] = useState<string[]>([]);
  const [itemMeansureGroup, setItemMeansureGroup] = useState<string>();

  const onChangeHandler = (key: string, value: string) => {
    setData({ ...data, [key]: value });
  };

  const setTreeNodes = (arr: any[]) => {
    const newArr = arr.map((elem) => {
      const newArr: any[] = [];
      const newChildren: any[] = [];
      for (let i = 0; i < elem.children.length; i++) {
        const child = { ...elem.children[i], value: elem.children[i].title };
        newChildren.push(child);
      }

      let item = { ...elem, value: elem.title, children: newChildren };
      newArr.push(item);
      return newArr;
    });
    console.log(newArr);

    return newArr;
  };

  return (
    <>
      <Divider className="m-1 p-0" />
      <Item
        label={<Text type="secondary">Страна-производитель</Text>}
        className="m-0"
      >
        <Select
          size="small"
          className="text-secondary"
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
          onChange={(value: string) => onChangeHandler("country", value)}
        >
          {countries.map((item) => (
            <Option key={item.id} value={item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Item>
      <Item label={<Text type="secondary">Производитель</Text>} className="m-0">
        <Select
          size="small"
          className="text-secondary"
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
          onChange={(value: string) => onChangeHandler("vendor", value)}
        >
          {countries.map((item) => (
            <Option key={item.id} value={item.title}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Item>
      <Item label={<Text type="secondary">Наименование</Text>} className="m-0">
        <Input
          size="small"
          className="text-secondary"
          value={data.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeHandler("title", e.target.value)
          }
        />
      </Item>
      <Item label={<Text type="secondary">Тип</Text>} className="m-0">
        <Radio.Group
          className="text-secondary"
          onChange={(e: RadioChangeEvent) =>
            onChangeHandler("equipmentType", e.target.value)
          }
          value={data.equipmentType}
        >
          <Radio value={"ИНОЕ"} className="text-secondary">
            ИНОЕ
          </Radio>
          <Radio value={"КИТСО"} className="text-secondary">
            КИТСО
          </Radio>
          <Radio value={"СА"} className="text-secondary">
            СА
          </Radio>
          <Radio value={"СИ"} className="text-secondary">
            СИ
          </Radio>
        </Radio.Group>
      </Item>
      <Item label={<Text type="secondary">Модификация</Text>} className="m-0">
        <Input
          size="small"
          className="text-secondary"
          value={data.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setModifications([...modifications, e.target.value])
          }
        />
      </Item>
      {data.equipmentType === "СИ" && (
        <>
          <Item
            label={<Text type="secondary">Область измерений</Text>}
            className="m-0"
          >
            <Select
              notFoundContent={
                <Space className="d-flex justify-content-center p-3">
                  <Text type="warning">
                    <ExclamationCircleOutlined
                      style={{ fontSize: 20, marginBottom: 2 }}
                    />
                  </Text>

                  <Text type="secondary">Нет данных для отображения</Text>
                </Space>
              }
              size="small"
              className="text-secondary"
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={(value: string) =>
                onChangeHandler("meansurementArea", value)
              }
            >
              {meansurementArea.map((item) => (
                <Option key={item.id}>{item.title}</Option>
              ))}
            </Select>
          </Item>
          <Item
            label={<Text type="secondary">Вид измерений</Text>}
            className="m-0"
          >
            <Select
              notFoundContent={
                <Space className="d-flex justify-content-center p-3">
                  <Text type="warning">
                    <ExclamationCircleOutlined
                      style={{ fontSize: 20, marginBottom: 2 }}
                    />
                  </Text>

                  <Text type="secondary">Нет данных для отображения</Text>
                </Space>
              }
              size="small"
              className="text-secondary"
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={(value: string) =>
                onChangeHandler("meansurementType", value)
              }
            >
              {meansurementType.map((item) => (
                <Option key={item.id}>{item.title}</Option>
              ))}
            </Select>
          </Item>
          <Item label={<Text type="secondary">Группа СИ</Text>} className="m-0">
            <TreeSelect
              size="small"
              notFoundContent={
                <Space className="d-flex justify-content-center p-3">
                  <Text type="warning">
                    <ExclamationCircleOutlined
                      style={{ fontSize: 20, marginBottom: 2 }}
                    />
                  </Text>

                  <Text type="secondary">Нет данных для отображения</Text>
                </Space>
              }
              style={{ width: "100%" }}
              value={itemMeansureGroup}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              treeData={meansureGroup}
              treeDefaultExpandAll
              onChange={(value: string, label) => {
                console.log(label[0]);

                setItemMeansureGroup(value);
                onChangeHandler("meansureGroup", value);
              }}
            />
          </Item>
        </>
      )}
      <Divider className="m-1 p-0" />
    </>
  );
};

export default FacilityForm;
