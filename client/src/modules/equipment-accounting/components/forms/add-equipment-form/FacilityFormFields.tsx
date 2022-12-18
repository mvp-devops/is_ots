import React, {useEffect, useState} from 'react';
import {getAllItems} from "../../../../regulatory-reference-information/api"
import {Form, Input, Radio, Select, SelectProps, Space, TreeSelect, Typography} from "antd";
import {months} from "../../../../main";
import {NotFoundComponent} from "../../../../../components";
import {countries, meansureGroup, meansurementArea, meansurementType} from "../../../utils";
import {facilityTypesList, questionnaireType, thermCase} from "../questionnaire-form/questionnaire.consts";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;

const selectProps: SelectProps = {
  size: "small",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) => (option!.children as unknown as string)?.toUpperCase()?.includes(input?.toUpperCase())
}

const FacilityFormFields = () => {

  const [vendorsList, setVendorsList] = useState([]);
  const [equipmentType, setEquipmentType] = useState("");
  const [technicalCards, setTechnicalCards] = useState([]);

  useEffect(() => {
    getAllItems("counterparty").then((data) => {setVendorsList(data)});
    getAllItems("technical-card").then((data) => {setTechnicalCards(data)});
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const techCardFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Тех. карта СМР/ПНР</Text>}
      name="technicalCardId"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тех. карту`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {technicalCards.map(({id, title}) =>
          <Option key={id} title={title}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );


  const countryFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Страна-производитель</Text>}
      name="country"
      initialValue={"Российская Федерация"}
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите страну-производителя оборудования`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {countries.map(({id, title}) =>
          <Option key={id} title={title} value={title}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );

  const vendorFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Завод-производитель</Text>}
      name="vendor"
      initialValue={"Не определен"}
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите завод-производитель оборудования`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {vendorsList.map(({id, title}) =>
          <Option key={id} title={title} value={title}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );

  const titleFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Наименование</Text>}
      name="title"

      rules={[{required: true, message: "Пожалуйста, заполните наименование"}]}
    >
      <Input
        size="small"
      />
    </Item>
  );

  const equipmentFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Тип оборудования</Text>}
      name="equipmentType"
      rules={[
        {
          required: true,
          message: `Пожалуйста, выберите тип оборудования`,
        }
      ]}
    >
      <Radio.Group onChange={(e) => setEquipmentType(e.target.value)}>
        {["ИНОЕ", "КИТСО", "СА", "СИ"].map((item, index) => {
          return (
            <Radio key={index} value={item}>{item}</Radio>
          );
        })}
      </Radio.Group>
    </Item>
  );

  const measurementAreaFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Область измерений</Text>}
      name="measurementArea"
      rules={[
        {
          required: equipmentType === "СИ",
          message: `Пожалуйста, выберите область измерений`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {meansurementArea.map(({id, title}) =>
          <Option key={id} title={title} value={title}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );

  const measurementTypeFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Вид измерений</Text>}
      name="measurementType"
      rules={[
        {
          required: equipmentType === "СИ",
          message: `Пожалуйста, выберите вид измерений`,
        }
      ]}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {meansurementType.map(({id, title}) =>
          <Option key={id} title={title} value={title}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );

  const measureGroupFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Группа СИ</Text>}
      name="measureGroup"
      rules={[
        {
          required: equipmentType === "СИ",
          message: `Пожалуйста, выберите группу СИ`,
        }
      ]}
    >
      <TreeSelect
        size={"small"}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto', color: "#999" }}
        treeData={meansureGroup}

      />
    </Item>
  );


  return (
    <Space direction="vertical"  style={{width: 790}}>
      {techCardFormField}
      {countryFormField}
      {vendorFormField}
      {titleFormField}
      {equipmentFormField}
      {
        equipmentType === "СИ" && (
          <>
            {measurementAreaFormField}
            {measurementTypeFormField}
            {measureGroupFormField}
          </>
        )
      }
    </Space>
  );
};

export default FacilityFormFields;