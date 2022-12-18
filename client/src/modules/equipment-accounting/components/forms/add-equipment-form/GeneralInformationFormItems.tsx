import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputRef,
  Select,
  SelectProps,
  Space,
  Typography,
  Upload
} from "antd";
import {NotFoundComponent} from "../../../../../components";
import {useActions, useTypedSelector} from "../../../../../hooks";
import { months} from "../../../../main";
import {PlusOutlined, UploadOutlined} from "@ant-design/icons";
import FacilityFormFields from "./FacilityFormFields";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;

// specification: string;
// description: string;

interface GeneralInformationFormItemsProps {
  data?: any;
  form: any
}

const selectProps: SelectProps = {
  size: "small",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) => (option!.children as unknown as string)?.toUpperCase()?.includes(input?.toUpperCase())
}

const GeneralInformationFormItems: FC<GeneralInformationFormItemsProps> = ({data, form}) => {

  const {currentItem, checkedItem, checkedItems,  target} = useTypedSelector((state) => state.positionTree);
  const { facilitiesList } = useTypedSelector((state) => state.equipmentAccounting);
  const { getFacilitiesList } = useActions();

  useEffect(() => {getFacilitiesList()}, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [unitsList, setUnitsList] = useState([]);
  const [subUnitsList, setSubUnitsList] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [facilityId, setFacilityId] = useState(null);
  const [facilityModifications, setFacilityModifications] = useState([]);
  const [facilityModification, setFacilityModification] = useState("");

  const inputRef = useRef<InputRef>(null);

  /** Получаем список объектов строительства */
  useEffect(() => {
    target === "field" && setUnitsList(currentItem?.children?.filter((item) => +item.id === +checkedItem?.id)[0]?.children || []);
    target === "project" && setUnitsList(currentItem.children);
    target === "unit" && setUnitsList([currentItem]);
    target === "unit" && setSubUnitsList(currentItem.children);
  }, [currentItem]);

  useEffect(() => {
    selectedUnit && setSubUnitsList(unitsList.filter(({id}) => +id === +selectedUnit)[0]?.children || [])
  }, [selectedUnit]);

  useEffect(() => {
    facilityId && facilityId !== "NEW" && setFacilityModifications(facilitiesList.filter(({id}) => +id === +facilityId)[0]?.modifications)
  }, [facilityId]);



  // Подумать как выставлять required
  const unitFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Объект строительства</Text>}
      name="unitId"
      initialValue={data?.unitId}
      rules={[{required: !(target === "field" && checkedItems.length > 0), message: "Пожалуйста, выберите объект строительства"}]}
    >
      <Select
        {...selectProps}
        onChange={(value) => setSelectedUnit(value)}
      >
        {unitsList?.map(({id, title}) =>
            <Option key={id} title={title} value={+id}>
              {title}
            </Option>
        )}
      </Select>
    </Item>
  )

  const subUnitFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Установка/объект</Text>}
      name="subUnitId"
      initialValue={data?.subUnitId}
      rules={[{required: true, message: "Пожалуйста, выберите установку/объект"}]}
    >
      <Select
        {...selectProps}
      >
        {subUnitsList.map(({id, title}) =>
          <Option key={id} title={title} value={+id}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  )

  //TODO: сделать дерево по группе equipmentType, measureGroup
  const facilityFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Наименование оборудования</Text>}
      name="facilityId"
      initialValue={data?.facilityId}
      rules={[{required: true, message: "Пожалуйста, выберите наименование оборудования"}]}
    >
      <Select
        {...selectProps}
        onChange={(value) => setFacilityId(value)}
      >
        <Option key={"NEW"} value={"NEW"} className="text-success">
          + Добавить новую единицу
        </Option>
        {facilitiesList.map(({id, title}) => (
          <Option key={id} value={id}>
            {title}
          </Option>
        ))}
      </Select>
    </Item>
  )

const facilityModificationFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text >Модификация</Text>}
      name="facilityModification"
      initialValue={data?.facilityModification}
    >
      <Select
        {...selectProps}
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
                value={facilityModification}
                onChange={(e) => setFacilityModification(e.target.value)}
              />
              <Button
                type="text"
                icon={<PlusOutlined style={{ marginBottom: 14 }} className="text-success"/>}
                onClick={() => setFacilityModifications([...facilityModifications, facilityModification])}
              >
              </Button>
            </Space>
          </>
        )}
      >
        {
          facilityModifications.map((item, index) => (
            <Option key={index} value={item}>{item}</Option>
          ))}
      </Select>
    </Item>
  )

  const tagFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>TAG</Text>}
      name="tag"
      initialValue={data?.tag}
      rules={[{required: true, message: "Пожалуйста, заполните TAG"}]}
    >
      <Input
        size="small"
      />
    </Item>
  );

  const installationLocationFormField = (
    <Item
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
  className="mb-0"
  label={<Text>Место установки</Text>}
  name="installationLocation"
  initialValue={data?.installationLocation}
  rules={[{required: true, message: "Пожалуйста, заполните место установки"}]}
    >
    <Input
  size="small"
    />
    </Item>
  )

  const controlledParameterFormField = (
    <Item
      labelCol={{ span: 7}}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Контроллируемый параметр</Text>}
      name="controlledParameter"
      initialValue={data?.controlledParameter}
    >
      <Input
        size="small"
      />
    </Item>
  )

  const systemTypeField = (
    <Item
      className="mb-0"
      label={<Text>Принадлежность к системам</Text>}
      initialValue={data?.systemType}
      name="systemType"
    >
      <Checkbox.Group
        options={["КИТСО", "ПАЗ", "РСУ"]}
      />
    </Item>
  );

  const factoryNumberFormField = (
    <Item

      className="mb-0"
      label={<Text>Зав. №</Text>}
      name="factoryNumber"
      initialValue={data?.factoryNumber}
    >
      <Input
        size="small"
        style={{minWidth: 270}}
      />
    </Item>
  );

  const periodFormField = (
    <Item
      className="mb-0"
      label={<Text>Срок эксплуатации, мес.</Text>}
      name="period"
      initialValue={data?.period}
    >
      <Input
        size="small"
        type="number"
        style={{maxWidth: 100}}
      />
    </Item>
  );

  const yearFormField = (
    <Item
      className="mb-0"
      label={<Text>Год выпуска</Text>}
      name="year"
      initialValue={data?.year}
    >
      <Input
        className="text-center"
        size="small"
        type="number"
        style={{maxWidth: 100}}
      />
    </Item>
  );
  const monthFormField = (
    <Item
      className="mb-0"
      label={<Text>Месяц выпуска</Text>}
      name="month"
      initialValue={data?.month}
    >
      <Select
        {...selectProps}
        style={{minWidth: 100}}
      >
        {months.map(({id, title}) =>
          <Option key={id} title={title} value={+id}>
            {title}
          </Option>
        )}
      </Select>
    </Item>
  );

  const documentFormField = (
    <Item
      labelCol={{ span: 7}}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Опросный лист</Text>}
      name="questionnaire"
      valuePropName="file"
      getValueFromEvent={(e) => e.file}
    >
      <Upload
        maxCount={1}
        listType="picture-card"
        beforeUpload={(file, fileList) => {
          form.setFieldValue("questionnaire", file);
          return false;
        }}
        onRemove={(file) => {
          form.setFieldValue("questionnaire", null);
        }}
      >
        <div>
          <UploadOutlined className="text-secondary"/>
          <div
            style={{marginTop: 8}}
          >
            Документ
          </div>
        </div>
      </Upload>
    </Item>
  );

  const specificationFormField = (
    <Item
      labelCol={{ span: 7}}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Спецификация</Text>}
      name="specification"
      initialValue={data?.specification}
    >
      <Input
        size="small"
      />
    </Item>
  );

  const descriptionFormField = (
    <Item
      labelCol={{ span: 7}}
      wrapperCol={{ span: 17 }}
      className="mb-0"
      label={<Text>Примечание</Text>}
      name="description"
      initialValue={data?.description}
    >

      <Input.TextArea
        autoSize={{minRows: 2, maxRows: 4}}
      />
    </Item>
  );




  const render = (
    <Space direction="horizontal" className="d-flex justify-content-between">
      <Space direction="vertical" className="border p-1" style={{width: 800}}>
        {(target === "field" || target === "project") && unitFormField}
        {subUnitFormField }
        {facilityFormField}
        {facilityId === "NEW" && <FacilityFormFields/>}
        {facilityModificationFormField}
        {tagFormField}
        {installationLocationFormField}
        {controlledParameterFormField}
        <Space style={{marginLeft: 30}} className="d-flex justify-content-between">{systemTypeField} {factoryNumberFormField} </Space>
        <Space style={{marginLeft: 44}} className="d-flex justify-content-between">{} {periodFormField}{yearFormField} {monthFormField} </Space>
        {documentFormField}
        {specificationFormField}
        {descriptionFormField}
      </Space>
    </Space>
  )


  return render
};

export default GeneralInformationFormItems;