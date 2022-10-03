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
} from "../../../../../../server/common/types/equipment-accounting";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { sgroei } from "../../utils/equipment-accounting.consts";
import FacilityForm from "./FacilityForm";
import { generalInformationItem } from "./form.settings";
import { useGeneralInformationForm } from "./hooks";
import { FormItemUIComponent, SelectUIComponent } from "../../../../components";

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
  } = useGeneralInformationForm(row, data, setData);

  const formItems = (
    item: GeneralInformationCreateOrUpdateAttrs
  ): ReactNode => (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        className="m-1 p-1 border"
        style={{ width: 1000 }}
      >
        {row && (
          <>
            <FormItemUIComponent
              className="m-0"
              title="Объект строительства"
              children={
                <SelectUIComponent
                  id="unitId"
                  items={[]}
                  changeValue={onHandlerChange}
                />
              }
            />
            <Item label={<Text type="secondary"></Text>}>
              <Select
                size="small"
                className="text-secondary"
                showSearch
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
            value={row && item.installationLocation}
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
            value={row && item.tag}
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
            value={row && item.controlledParameter}
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
            defaultValue={row && item.facility?.title}
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
              className="text-secondary"
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
              defaultValue={row && item.facilityModification}
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
              {modifications.length > 0 &&
                modifications.map((item) => <Option key={item}>{item}</Option>)}
            </Select>
          </Item>
        )}
        <Item label={<Text type="secondary">Зав. №</Text>} className="m-0">
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={row && item.factoryNumber}
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
            value={row && item.specification}
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
            value={row && item.year}
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
            value={row && item.month}
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
            value={row && item.period}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("period", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
          <Input
            size="small"
            className="text-secondary"
            value={row && item.description}
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

  return row ? <>{editItem}</> : <>{newRow}</>;
};

export default GeneralInformationForm;
