import React, {FC} from 'react';
import {Button, Divider, Form, Input, Select, SelectProps, Space, Typography, Upload} from "antd";
import {MinusCircleOutlined, PlusCircleOutlined, UploadOutlined} from "@ant-design/icons";
import SolutionFormItem from "../../../../comment-accounting/components/forms/comment-form/SolutionFormItem";
import {InputUIComponent, NotFoundComponent} from "../../../../../components";

const {Item, List} = Form;
const {Text} = Typography;

const selectProps: SelectProps = {
  size: "small",
  notFoundContent: <NotFoundComponent/>,
  showSearch: true,
  optionFilterProp: "children",
  filterOption: (input, option) => (option!.children as unknown as string)?.toUpperCase()?.includes(input?.toUpperCase())
}

interface CableLogFormItemsProps {
  data?: any;
  form: any
}


const CableLogFormFields: FC<CableLogFormItemsProps> = ({data, form}) => {

  // wiringDiagram?: any;


  return (
    <List name="cableLog">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space direction="vertical" key={key} className="border p-1 mb-2">

              <Space direction="horizontal" align="start" className="mb-0">
                <Space direction="vertical"     style={{ width: 450 }}>
                  <Item
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16 }}
                    className="mb-0"
                    label={<Text>Схема эл. проводок</Text>}
                    name={[name, "wiringDiagram"]}
                    valuePropName="file"
                    getValueFromEvent={(e) => e.file}
                  >
                    <Upload
                      maxCount={1}
                      listType="picture-card"
                      beforeUpload={(file, fileList) => {
                        form.setFieldValue("wiringDiagram", file);
                        return false;
                      }}
                      onRemove={(file) => {
                        form.setFieldValue("wiringDiagram", null);
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
                  <Item
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16 }}
                    className="mb-0"
                    label={<Text>№ кабельной линии</Text>}
                    name={[name, "numberOfTrace"]}
                  >
                    <Input size="small"/>
                  </Item>

                  <Item
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16 }}
                    className="mb-0"
                    label={<Text>Марка кабеля</Text>}
                    name={[name, "cableMark"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
                  <Item
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16 }}
                    className="mb-0"
                    label={<Text>Сечение кабеля</Text>}
                    name={[name, "cableSection"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>

                   <Item
                     labelCol={{ span: 8}}
                     wrapperCol={{ span: 16 }}
                     className="mb-0"
                     label={<Text>Установка, от</Text>}
                     name={[name, "fromUnit"]}
                   >
                     <Input
                       size="small"
                     />
                   </Item>
                   <Item
                     labelCol={{ span: 8}}
                     wrapperCol={{ span: 16 }}
                     className="mb-0"
                     label={<Text>Точка, подкл., от</Text>}
                     name={[name, "fromPlace"]}
                   >
                     <Input
                       size="small"
                     />
                   </Item>

                    <Item
                      labelCol={{ span: 8}}
                      wrapperCol={{ span: 16 }}
                      className="mb-0"
                      label={<Text>Установка, до</Text>}
                      name={[name, "toUnit"]}
                    >
                      <Input
                        size="small"
                      />
                    </Item>
                    <Item
                      labelCol={{ span: 8}}
                      wrapperCol={{ span: 16 }}
                      className="mb-0"
                      label={<Text>Точка, подкл., до</Text>}
                      name={[name, "toPlace"]}
                    >
                      <Input
                        size="small"
                      />
                    </Item>

<Space style={{marginLeft: 92}}>
  <Item
    labelCol={{ span: 8}}
    wrapperCol={{ span: 16 }}
    className="mb-0"
    label={<Text>Длина</Text>}
    name={[name, "cableLenght"]}

  >
    <Input
      size="small"
      type="number"
    />
  </Item>
  <Item
    labelCol={{ span: 8}}
    wrapperCol={{ span: 16 }}
    className="mb-0"
    label={<Text>Ед. изм.</Text>}
    name={[name, "range"]}
  >
    <Input
      size="small"

    />
  </Item>

</Space>
                  <Item
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16 }}
                    className="mb-0"
                    label={<Text>Примечание</Text>}
                    name={[name, "description"]}
                  >

                    <Input.TextArea
                      autoSize={{minRows: 2, maxRows: 4}}
                    />
                  </Item>
                </Space>

                <MinusCircleOutlined
                  className="text-danger"
                  onClick={() => remove(name)}
                />
              </Space>


            </Space>
          ))}

          <Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusCircleOutlined className="text-success"/>}
            >
              <Text >Добавить кабельную линию</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default CableLogFormFields;