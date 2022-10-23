import {
  Divider,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Typography,
} from "antd";
import { ChangeEvent, FC } from "react";
import { FacilityCreateOrUpdateAttrs, FacilityView } from "../../types";
import {
  countries,
  meansureGroup,
  meansurementArea,
  meansurementType,
} from "../../utils";
import {
  FormItemUIComponent,
  InputUIComponent,
  SelectUIComponent,
  TreeSelectUIComponent,
} from "../../../../components";
import { useFacilityForm } from "./hooks";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  data: FacilityCreateOrUpdateAttrs;
  setData: Function;
  row?: FacilityView;
}

const FacilityForm: FC<FormProps> = ({ row, data, setData }) => {
  const {
    editRow,
    vendorsList,
    onHandlerChange,
    modifications,
    itemMeansureGroup,
  } = useFacilityForm(row, data, setData);

  return (
    <>
      <Divider className="m-1 p-0" />
      <FormItemUIComponent
        title="Страна-производитель"
        className="m-0"
        children={
          <SelectUIComponent
            id="country"
            items={countries}
            changeValue={onHandlerChange}
            defaultValue={editRow ? editRow.country : ""}
          />
        }
      />
      <FormItemUIComponent
        title="Производитель"
        className="m-0"
        children={
          <SelectUIComponent
            id="vendor"
            items={vendorsList}
            changeValue={onHandlerChange}
            defaultValue={editRow ? editRow.vendor : ""}
          />
        }
      />
      <FormItemUIComponent
        title="Наименование"
        className="m-0"
        children={
          <InputUIComponent
            id="title"
            value={editRow ? editRow.title : data.title}
            changeValue={onHandlerChange}
          />
        }
      />
      <FormItemUIComponent
        title="Тип"
        className="m-0"
        children={
          <Radio.Group
            className="text-secondary"
            onChange={(e: RadioChangeEvent) =>
              onHandlerChange("equipmentType", e.target.value)
            }
            value={editRow ? editRow.equipmentType : data.equipmentType}
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
        }
      />
      <Item label={<Text type="secondary">Модификация</Text>} className="m-0">
        <Input
          size="small"
          className="text-secondary"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onHandlerChange("modifications", [
              ...modifications,
              e.target.value,
            ]);
          }}
        />
      </Item>
      {data.equipmentType === "СИ" && (
        <>
          <FormItemUIComponent
            title="Область измерений"
            className="m-0"
            children={
              <SelectUIComponent
                id="meansurementArea"
                items={meansurementArea}
                changeValue={onHandlerChange}
                defaultValue={
                  editRow ? (editRow.meansurementArea as string) : ""
                }
              />
            }
          />
          <FormItemUIComponent
            title="Вид измерений"
            className="m-0"
            children={
              <SelectUIComponent
                id="meansurementType"
                items={meansurementType}
                changeValue={onHandlerChange}
                defaultValue={
                  editRow ? (editRow.meansurementType as string) : ""
                }
              />
            }
          />
          <FormItemUIComponent
            title="Группа СИ"
            className="m-0"
            children={
              <TreeSelectUIComponent
                id="meansureGroup"
                treeData={meansureGroup}
                changeValue={onHandlerChange}
                value={
                  editRow
                    ? (editRow.meansureGroup as string)
                    : itemMeansureGroup
                }
              />
            }
          />
        </>
      )}
      <Divider className="m-1 p-0" />
    </>
  );
};

export default FacilityForm;
