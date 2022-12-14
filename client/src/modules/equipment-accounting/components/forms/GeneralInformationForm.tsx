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
                title="???????????? ??????????????????????????"
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
              title="??????????????????/????????????"
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
            title="?????????? ??????????????????"
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
            title="???????????????????????????? ????????????????"
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
            label={<Text >????????????????????????</Text>}
          >
            <Select
              size="small"
              showSearch
              notFoundContent={
                <Space className="d-flex justify-content-center p-3">
                  <Text type="warning">
                    <ExclamationCircleOutlined
                      style={{ fontSize: 20, marginBottom: 2 }}
                    />
                  </Text>

                  <Text >
                    ?????? ???????????? ?????? ??????????????????????. ???????????????? ??????????
                  </Text>
                </Space>
              }
              defaultValue={editRow && editRow.facility.title}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  ?.toUpperCase()
                  ?.includes(input?.toUpperCase())
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
                + ???????????????? ?????????? ??????????????
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
              label={<Text >??????????????????????</Text>}
              className="m-0"
            >
              <Select
                size="small"
                notFoundContent={
                  <Space className="d-flex justify-content-center p-3">
                    <Text type="warning">
                      <ExclamationCircleOutlined
                        style={{ fontSize: 20, marginBottom: 2 }}
                      />
                    </Text>

                    <Text >
                      ?????? ???????????? ?????? ??????????????????????. ???????????????? ??????????
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
                        placeholder="???????????????? ?????????? ??????????????????????"
                        ref={inputRef}
                        value={newModification}
                        onChange={onModificationChange}
                      />
                      <Button
                        type="text"
                        icon={<PlusOutlined style={{ marginBottom: 14 }} />}
                        onClick={addNewFacilityModification}
                      >
                        ????????????????
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
            title="???????????????????????????? ?? ????????????????"
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
            title="??????. ???"
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
            label={<Text >???????????????? ????????</Text>}
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
                <Text >?????????????? ????????</Text>
              </Button>
            </Upload>
          </Item>

          <FormItemUIComponent
            className="m-0"
            title="???????????????????????? ????????????????"
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
            title="?????? ??????????????"
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
            title="?????????? ??????????????"
            children={
              <SelectUIComponent
                style={{ maxWidth: 150 }}
                defaultValue={editRow && editRow.month}
                id="month"
                items={months}
                changeValue={onHandlerChange}
              />
            }
          />
          <FormItemUIComponent
            className="m-0"
            title="???????? ????????????????????????, ??????."
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
            title="????????????????????"
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
        <DeleteForm message={`?????????????? ?????????????? ${item.factoryNumber} ?`} />
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
                ????????????????
              </Button>
            ) : (
              <Button
                type="primary"
                className="me-1"
                onClick={deleteGeneralInformationItem}
              >
                ??????????????
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