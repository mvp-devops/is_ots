import React, {FC} from 'react';
import {Button, Divider, Form, Input, Select, SelectProps, Space, Typography} from "antd";
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";
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

interface ImpulseLineLogFormItemsProps {
  data?: any;
  form: any
}


const ImpulseLineLogFormItems: FC<ImpulseLineLogFormItemsProps> = ({data, form}) => {

  return (
    <List name="impulseLineLog">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space direction="vertical" key={key} className="border p-1 mb-2">

              <Space direction="horizontal" align="start" className="mb-0">
                <Space direction="vertical"     style={{ width: 450 }}>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>№ ИЛ</Text>}
                    name={[name, "numberOfTrace"]}
                  >
                    <Input size="small"/>
                  </Item>

                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Тип ИЛ</Text>}
                    name={[name, "impulseLineType"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>От</Text>}
                    name={[name, "fromPlace"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>До</Text>}
                    name={[name, "toPlace"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
<Space style={{marginLeft: 78}}>
  <Item
    labelCol={{ span: 7}}
    wrapperCol={{ span: 17 }}
    className="mb-0"
    label={<Text>Длина</Text>}
    name={[name, "impulseLineLenght"]}

  >
    <Input
      size="small"
      type="number"
    />
  </Item>
  <Item
    labelCol={{ span: 7}}
    wrapperCol={{ span: 17 }}
    className="mb-0"
    label={<Text>Ед. изм</Text>}
    name={[name, "range"]}
  >
    <Input
      size="small"

    />
  </Item>

</Space>

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
              <Text >Добавить ИЛ</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default ImpulseLineLogFormItems;