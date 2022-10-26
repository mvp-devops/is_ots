import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { FC, ReactNode, useState } from "react";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
} from "../../types";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import FacilityForm from "./FacilityForm";
import { generalInformationItem } from "./form.settings";
import { useGeneralInformationForm } from "./hooks";
import {
  DeleteForm,
  FormItemUIComponent,
  InputUIComponent,
  SelectUIComponent,
} from "../../../../components";
import { FormActions, months, systemType } from "../../../main";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { useTypedSelector } from "../../../..";

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

  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const {
    actionType,
    onChangeTargetId,
    target,

    addNewFacilityModification,
    editRow,
    unitId,
    facilities,
    inputRef,
    modifications,
    newFacility,
    newModification,
    onHandlerChange,
    onModificationChange,
    setNewFacility,
    unitsList,
    updateGeneralInformationItem,
    deleteGeneralInformationItem,
  } = useGeneralInformationForm(row, data, setData);

  const formItems = (
    item: GeneralInformationCreateOrUpdateAttrs
  ): ReactNode => (
    <>
      {actionType === FormActions.EDIT_EQUIPMENT ||
      actionType === FormActions.ADD_EQUIPMENT ? (
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          className="m-1 p-1 border"
          style={{ width: 950 }}
        >
          {target !== "project" &&
            target !== "unit" &&
            target !== "sub-unit" && (
              <FormItemUIComponent
                className="m-0"
                title="Объект строительства"
                children={
                  <SelectUIComponent
                    defaultValue={editRow && (editRow.unitId as string)}
                    id="unitId"
                    items={unitsList}
                    changeValue={onChangeTargetId}
                  />
                }
              />
            )}
          {target !== "sub-unit" && (
            <FormItemUIComponent
              className="m-0"
              title="Установка/объект"
              children={
                <SelectUIComponent
                  defaultValue={editRow && (editRow.subUnitId as string)}
                  id="subUnitId"
                  items={
                    data && data.unitId
                      ? unitsList.filter(
                          (item) => item.id === data.unitId.toString()
                        )[0]?.children || []
                      : editRow && editRow.unitId
                      ? unitsList.filter(
                          (item) => item.id === editRow.unitId.toString()
                        )[0]?.children || []
                      : target === "unit" && currentItem
                      ? unitsList.filter(
                          (item) => item.id === currentItem.id.toString()
                        )[0]?.children || []
                      : []
                  }
                  changeValue={onChangeTargetId}
                />
              }
            />
          )}
          <FormItemUIComponent
            className="m-0"
            title="Место установки"
            children={
              <InputUIComponent
                value={editRow && editRow.installationLocation}
                id="installationLocation"
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="TAG"
            children={
              <InputUIComponent
                value={editRow && editRow.tag}
                id="tag"
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Контролируемый параметр"
            children={
              <InputUIComponent
                value={editRow && editRow.controlledParameter}
                id="controlledParameter"
                changeValue={onHandlerChange}
              />
            }
          />
          <Divider className="m-1 p-0" />

          <Item
            className="m-0"
            label={<Text type="secondary">Наименование</Text>}
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
              defaultValue={editRow && editRow.facility.title}
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
                defaultValue={editRow && editRow.facilityModification}
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
                        className="text-secondary"
                        placeholder="Добавить новую модификацию"
                        ref={inputRef}
                        value={newModification}
                        onChange={onModificationChange}
                      />
                      <Button
                        type="text"
                        className="text-secondary"
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
                  modifications.map((item) => (
                    <Option key={item}>{item}</Option>
                  ))}
              </Select>
            </Item>
          )}

          <FormItemUIComponent
            className="m-0"
            title="Принадлежность к системам"
            children={
              <Checkbox.Group
                defaultValue={row && row.systemType}
                options={systemType}
                onChange={(checkedValues: CheckboxValueType[]) =>
                  onHandlerChange("systemType", checkedValues)
                }
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Зав. №"
            children={
              <InputUIComponent
                value={editRow && editRow.factoryNumber}
                id="factoryNumber"
                style={{ maxWidth: 150 }}
                changeValue={onHandlerChange}
              />
            }
          />
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

          <FormItemUIComponent
            className="m-0"
            title="Спецификация поставки"
            children={
              <InputUIComponent
                value={editRow && editRow.specification}
                id="specification"
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Год выпуска"
            children={
              <InputUIComponent
                type="number"
                style={{ maxWidth: 150 }}
                value={editRow && editRow.year}
                id="year"
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Месяц выпуска"
            children={
              <SelectUIComponent
                sortKey="id"
                style={{ maxWidth: 150 }}
                defaultValue={editRow && editRow.month}
                id="month"
                items={months.sort((a, b) => (a.id < b.id ? -1 : 0))}
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Срок эксплуатации, мес."
            children={
              <InputUIComponent
                style={{ maxWidth: 150 }}
                type="number"
                value={editRow && editRow.period}
                id="period"
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="Примечание"
            children={
              <InputUIComponent
                value={editRow && editRow.description}
                id="description"
                changeValue={onHandlerChange}
              />
            }
          />
        </Form>
      ) : (
        <DeleteForm message={`Удалить позицию ${item.factoryNumber} ?`} />
      )}

      {row && (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            {actionType === FormActions.EDIT_EQUIPMENT ? (
              <Button
                type="primary"
                className="me-1"
                onClick={updateGeneralInformationItem}
              >
                Обновить
              </Button>
            ) : (
              <Button
                type="primary"
                className="me-1"
                onClick={deleteGeneralInformationItem}
              >
                Удалить
              </Button>
            )}
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
