import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { ChangeEvent, FC, ReactNode, useState } from "react";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
} from "../../../../../../common/types/equipment-accounting";
import { facility, sgroei } from "../../utils/equipment-accounting.consts";
import FacilityForm from "./FacilityForm";
import { useGeneralInformationData } from "./hooks/useGeneralInformationData";
import { generalInformationItem } from "./form.settings";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  row?: GeneralInformationView;
  data?: GeneralInformationCreateOrUpdateAttrs;
  setData?: Function;
}

const GeneralInformationForm: FC<FormProps> = ({ row, data, setData }) => {
  const [addFacilityVisible, setAddFacilityVisible] = useState(false);

  const {
    addNewFacilityModification,
    editRow,
    facilities,
    inputRef,
    modifications,
    newFacility,
    newModification,
    onHandlerChange,
    onModificationChange,
    setNewFacility,
  } = useGeneralInformationData(facility, row, data, setData);

  // console.log("Install: ", editRow);

  const formItems = (
    item: GeneralInformationCreateOrUpdateAttrs
  ): ReactNode => (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        className="m-1 p-1 border"
      >
        {row && (
          <>
            <Item
              label={<Text type="secondary">Объект строительства</Text>}
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
                onChange={(value: string) => onHandlerChange("unitId", value)}
              >
                {sgroei.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Item>
            <Item
              label={<Text type="secondary">Установка/объект</Text>}
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
                onChange={(value: string) =>
                  onHandlerChange("subUnitId", value)
                }
              >
                {sgroei.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Item>
            <Divider className="m-1 p-0" />
          </>
        )}
        <Item
          label={<Text type="secondary">Место установки</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={item.installationLocation}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("installationLocation", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">TAG</Text>} className="m-0">
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={item.tag}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("tag", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Контролируемый параметр</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={item.controlledParameter}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("controlledParameter", e.target.value)
            }
          />
        </Item>
        <Divider className="m-1 p-0" />
        <Item
          label={<Text type="secondary">Наименование</Text>}
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
            onChange={(value: string) => {
              if (value !== "NEW") {
                setAddFacilityVisible(false);
                onHandlerChange("facilityId", value);
              } else {
                setAddFacilityVisible(true);
              }
            }}
          >
            <Option key={"NEW"} value={"NEW"} className="text-success">
              + Добавить новую единицу
            </Option>
            {facilities.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Item>
        {addFacilityVisible && (
          <FacilityForm data={newFacility} setData={setNewFacility} />
        )}
        {!addFacilityVisible && (
          <Item
            label={<Text type="secondary">Модификация</Text>}
            className="m-0"
          >
            <Select
              size="small"
              // style={{ width: 300 }}
              onChange={(value: string) =>
                onHandlerChange("facilityModification", value)
              }
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space
                    style={{ padding: "0 8px 4px" }}
                    className="d-flex justify-content-between"
                  >
                    <Input
                      size="small"
                      style={{ minWidth: 500 }}
                      placeholder="Добавить новую модификацию"
                      ref={inputRef}
                      value={newModification}
                      onChange={onModificationChange}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined style={{ marginBottom: 14 }} />}
                      onClick={addNewFacilityModification}
                    >
                      Добавить
                    </Button>
                  </Space>
                </>
              )}
            >
              {modifications.map((item) => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>
          </Item>
        )}
        <Item label={<Text type="secondary">Зав. №</Text>} className="m-0">
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={item.factoryNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("factoryNumber", e.target.value)
            }
          />
        </Item>

        <Item
          label={<Text type="secondary">Опросный лист</Text>}
          className="m-0"
        >
          <Upload
            className="mb-1"
            onRemove={(file) => {
              onHandlerChange("questionare", null);
            }}
            beforeUpload={(file) => {
              onHandlerChange("questionare", file);

              return false;
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 232 }}>
              <Text type="secondary">Выбрать файл</Text>
            </Button>
          </Upload>
        </Item>

        <Item
          label={<Text type="secondary">Спецификация поставки</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={item.specification}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("specification", e.target.value)
            }
          />
        </Item>

        <Item label={<Text type="secondary">Год выпуска</Text>} className="m-0">
          <Input
            size="small"
            type={"number"}
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={item.year}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("year", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Месяц выпуска</Text>}
          className="m-0"
        >
          <Input
            size="small"
            type={"number"}
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={item.month}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("month", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Срок эксплуатации, мес.</Text>}
          className="m-0"
        >
          <Input
            size="small"
            type={"number"}
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={item.period}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("period", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
          <Input
            size="small"
            className="text-secondary"
            value={item.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("description", e.target.value)
            }
          />
        </Item>
      </Form>

      {row && (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            <Button type="primary" className="me-1">
              Обновить
            </Button>

            <Button type="default" className="me-2">
              Отмена
            </Button>
          </Space>
        </>
      )}
    </>
  );

  const editItem = editRow && formItems(editRow);
  const newRow = data && formItems(generalInformationItem);

  return row ? (
    <>{editItem}</>
  ) : (
    <>
      {newRow}
      {data && (
        <>
          <Divider />
          <Space className="d-flex justify-content-end ">
            <Button type="primary">Отправить</Button>
            <Button>Отмена</Button>
          </Space>
        </>
      )}
    </>
  );
};

export default GeneralInformationForm;
