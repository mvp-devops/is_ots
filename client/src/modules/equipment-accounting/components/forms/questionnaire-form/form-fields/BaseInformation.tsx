import React, {FC} from 'react';
import {Form, FormItemProps, Input, InputProps, Select, SelectProps, Space, TreeSelect, Typography} from "antd";
import {facilityTypesList, questionnaireType} from "../questionnaire.consts";
import {NotFoundComponent} from "../../../../../../components";

const {Text} = Typography;
const {Item} = Form;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) =>
    (option!.children as unknown as string)
      ?.toUpperCase()
      ?.includes(input?.toUpperCase()),
}

const itemProps = (title: string, name: string): FormItemProps => {
  return {
    label: <Text >{title}</Text>,
    name,
    className: "ms-2 mb-0"
  }
}
const inputProps = (type?: string): InputProps => {
  return {
    size: "small",
    type: type ? type : "text",
    className: " text-center"
  }
}
const currentYear = new Date().getFullYear();

interface BaseInformationProps {
  title: string;
  setFacilityType: Function;
  resetForm: () => void;
}

const BaseInformation: FC<BaseInformationProps> = ({title, setFacilityType, resetForm}) => {

  const questionnaireTypeFormField = (
    <Item
      className="ms-2 mb-0"
      style={{width: 472}}
      {...itemProps("Тип опросного листа", "questionnaireType")}
    >
      <Select
        {...selectProps}
      >
        {questionnaireType.map(({id, title, value}) => {
          return (
            <Option key={id} title={title} value={value}>
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const titleFormField = (
    <Item
      initialValue={title}
      className="ms-2 mb-0"
      style={{width: 472}}
      {...itemProps("Тип прибора", "title")}
    >
      {title ? (
        <Input
          {...inputProps()}
          // disabled={!!title}
        />
      ) : (
        <TreeSelect
          size={"small"}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto', color: "#999" }}
          treeData={facilityTypesList}
          onSelect={(value, node) => setFacilityType(node.id)}

        />
      )}
    </Item>
  );

  const yearFormField = (
    <Item
      initialValue={currentYear}
      className="ms-2 mb-0"
      style={{width: 150}}
      {...itemProps("Год", "year")}
    >
      <Input
        {...inputProps("number")}
      />
    </Item>
  );

  const countFormField = (
    <Item
      labelCol={{span: 16}}

      initialValue={1}
      className="ms-2 mb-0"
      {...itemProps("Количество, шт.", "count")}
    >
      <Input
        {...inputProps("number")}
        style={{width: 60}}
      />
    </Item>
  );

  return (
    <Space direction="horizontal" className="d-flex justify-content-between">
      {titleFormField}
      {questionnaireTypeFormField}
      {countFormField}
      {yearFormField}
    </Space>
  );
};

export default BaseInformation;