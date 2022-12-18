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

interface SignalsFormItemsProps {
  data?: any;
  form: any
}


const SignalsFormItems: FC<SignalsFormItemsProps> = ({data, form}) => {








  return (
    <List name="signals">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space direction="vertical" key={key} className="border p-1 mb-2">

              <Space direction="horizontal" align="start" className="mb-0">
                <Space direction="vertical"     style={{ width: 500 }}>

                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Тип сигнала</Text>}
                    name={[name, "signalType"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>

                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Протокол</Text>}
                    name={[name, "signalProtocol"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Tag сигнала</Text>}
                    name={[name, "signalTag"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Контр. параметр</Text>}
                    name={[name, "signalParameter"]}
                  >
                    <Input
                      size="small"
                    />
                  </Item>
<Space direction="vertical">
  <Divider className="m-0">Уставки</Divider>
<Space>
  <Item
    labelCol={{ span: 7}}
    wrapperCol={{ span: 17 }}
    className="mb-0"
    label={<Text>H</Text>}
    name={[name, "h"]}

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
    label={<Text>L</Text>}
    name={[name, "l"]}
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
    label={<Text>LL</Text>}
    name={[name, "ll"]}
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
    label={<Text>HH</Text>}
    name={[name, "hh"]}

  >
    <Input
      size="small"
      type="number"
    />
  </Item>
</Space>
</Space>
                  <Item
                    labelCol={{ span: 7}}
                    wrapperCol={{ span: 17 }}
                    className="mb-0"
                    label={<Text>Алгоритм</Text>}
                    name={[name, "emergencyProtocol"]}
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
              <Text >Добавить сигнал</Text>
            </Button>
          </Item>
        </>
      )}
    </List>
  );
};

export default SignalsFormItems;