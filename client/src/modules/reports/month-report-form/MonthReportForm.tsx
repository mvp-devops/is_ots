import {Button, Divider, Form, Input, notification, Select, Space, Spin, Switch, Typography, Upload} from "antd";
import {createRef, useEffect, useLayoutEffect, useState} from "react";
import {FormInstance} from "antd/es/form";
import {useActions, useTypedSelector} from "../../../hooks";
import {FormActions, months} from "../../main";
import {getAllItems as getNSIList, NSIView} from "../../regulatory-reference-information";
import {ExclamationCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import {buildReportPerMonth, reportDownload} from "../api/reports.api";
import download from "js-file-download";

const {Item} = Form;
const {Text} = Typography;
const {Option} = Select;

const MonthReportForm = () => {
  const [form] = Form.useForm();
  const formRef = createRef<FormInstance>();
  const {setFormVisible} = useActions();
  const {currentItem, target} = useTypedSelector(state => state.positionTree);
  const [directionsList, setDirectionsList] = useState<NSIView[]>([]);
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    getNSIList("direction").then((data) => setDirectionsList(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const onReset = () => {
    formRef.current!.resetFields();
    form.setFieldsValue([]);
  };

  const onFinish = (values: any) => {
    const {
      direction,
      month,
      year,
      expertsCount,
      costsPerMonth,
      customerPosition,
      customerFio,
      executorPosition,
      executorFio
    } = values
    const id = currentItem.id;
    const title = currentItem.title;

    const reportData = {
      direction,
      period: `${months.filter(({id, title}) => title === month)[0].id}.${year}`,
      costs: costsPerMonth * expertsCount,
      customerPosition,
      customerFio,
      executorPosition,
      executorFio
    }

    setLoading(true);
    buildReportPerMonth(target, id, reportData, title).then(() => {
      setLoading(false);
      setFormVisible(false);
    })

    onReset()
  }


  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "????????????",
      description: "???????????? ?????? ???????????????????????? ????????????",
    });
  };

  const notFoundContent = (
    <Space className="d-flex justify-content-center p-3">
      <Text type="warning">
        <ExclamationCircleOutlined style={{fontSize: 20, marginBottom: 2}}/>
      </Text>
      <Text    style={{fontSize: 12, marginBottom: 2}}>
        ?????? ???????????? ?????? ??????????????????????. ???????????????? ??????????
      </Text>
    </Space>
  );


  const directionFormField = (
    <Item
      className="mb-0 text-center   "
      style={{width: 540}}
      label={
        <Text   >???????????????????????????? ??????????????????????</Text>
      }
      name="direction"
      initialValue={"???????????????????????? ??????????????????????????"}
      rules={[
        {
          required: true,
          message:
            "????????????????????, ???????????????? ???????????????????????????? ??????????????????????",
        },
      ]}
    >
      <Select
        size={"small"}
        className={"  "}
        notFoundContent={notFoundContent}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            ?.toUpperCase()
            ?.includes(input?.toUpperCase())
        }
      >
        {directionsList.map(({id, title}) => {
          return (
            <Option key={id} title={title} value={title} className="  ">
              {title}
            </Option>
          );
        })}
      </Select>
    </Item>
  );

  const monthFormField = (
    <Item
      labelCol={{span: 6}}
      wrapperCol={{span: 18}}
      style={{width: 270}}
      name="month"
      initialValue={months[currentMonth].title}
      label={<Text   >??????????</Text>}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "????????????????????, ???????????????? ??????????",
        }
      ]}
    >
      <Select
        size={"small"}
        style={{width: 270}}
        className={"   text-center"}
        notFoundContent={notFoundContent}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string)
            ?.toUpperCase()
            ?.includes(input?.toUpperCase())
        }
      >
        {months.map(({id, title}) => (
            <Option key={id} title={title} value={title} className="  ">
              {title}
            </Option>
          )
        )}
      </Select>
    </Item>
  );

  const yearFormField = (
    <Item
      labelCol={{span: 10}}
      wrapperCol={{span: 14}}
      name="year"
      initialValue={currentYear}
      style={{width: 256}}
      label={<Text   >??????</Text>}
      className="ms-2 mb-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ???????????????? ??????",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="   text-center"
      />
    </Item>
  );

  const period = (
    <Space direction="horizontal" className="d-flex justify-content-between" style={{marginLeft: -10}}>
      {monthFormField}
      {yearFormField}
    </Space>
  )

  const expertsCountFormField = (
    <Item

      name="expertsCount"
      initialValue={1}
      label={<Text   >???????????????????? ??????????????????</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ???????????????? ???????????????????? ??????????????????",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="   text-center"
        style={{width: 150, marginLeft: 224}}
      />
    </Item>
  );

  const expertsCount = (
    <Space direction="horizontal" className="d-flex">
      {expertsCountFormField}
    </Space>
  )

  const costsPerMonthFormField = (
    <Item
      name="costsPerMonth"
      initialValue={168}
      label={<Text   >?????????????? ?????????? ???????????????? ???????????????????????????????? ??????????????????</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ???????????????? ???????????????????? ??????????????????",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="   text-center"
        style={{width: 150, marginLeft: 14}}
      />
    </Item>
  );

  const costsPerMonth = (
    <Space direction="horizontal" className="d-flex mt-0">
      {costsPerMonthFormField}
    </Space>
  )

  const customerPositionFormField = (
    <Item
      name="customerPosition"
      label={<Text   >??????????????????</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ?????????????? ??????????????????",
        }
      ]}
    >
      <Input
        size="small"
        className="   text-center"
        style={{width: 446}}
      />
    </Item>
  );

  const customerFioFormField = (
    <Item
      name="customerFio"
      label={<Text   >??.??.??.</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ?????????????? ??.??.??.",
        }
      ]}
    >
      <Input
        size="small"
        className="   text-center"
        style={{width: 446, marginLeft: 30}}
      />
    </Item>
  );

  const customer = (
    <Space direction="vertical" className="d-block m-0" style={{width: 540}}>
      <Divider className="m-0   " orientation="center">????????????????</Divider>
      <Space direction="vertical">
        {customerPositionFormField}
        {customerFioFormField}
      </Space>
    </Space>
  )

  const executorPositionFormField = (
    <Item
      name="executorPosition"
      initialValue="?????????????????? ???????????? ?????? ??. ????????????"
      label={<Text   >??????????????????</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ?????????????? ??????????????????",
        }
      ]}
    >
      <Input
        size="small"
        className="   text-center"
        style={{width: 446}}
      />
    </Item>
  );

  const executorFioFormField = (
    <Item
      name="executorFio"
      initialValue="?????????? ??.??."
      label={<Text   >??.??.??.</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "????????????????????, ?????????????? ??.??.??.",
        }
      ]}
    >
      <Input
        size="small"
        className="   text-center"
        style={{width: 446, marginLeft: 30}}
      />
    </Item>
  );

  const executor = (
    <Space direction="vertical" className="d-block m-0" style={{width: 540}}>
      <Divider className="m-0   " orientation="center">??????????????????????</Divider>
      <Space direction="vertical">
        {executorPositionFormField}
        {executorFioFormField}
      </Space>
    </Space>

  )


  const renderFormFields = (
    <Space direction="vertical" align="start">
      {directionFormField}
      {period}
      {costsPerMonth}
      {expertsCount}
      {customer}
      {executor}

    </Space>
  )


  return (
    <Form
      layout="horizontal"
      ref={formRef}
      form={form}
      name="report-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onReset={onReset}
      autoComplete="on"
      className="border p-1"

    >
      {renderFormFields}

      <Space className="d-flex justify-content-end mt-2">
        <Item>
          <Button type={loading ? "default" : "primary"} htmlType="submit" >
            {loading ?
              <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
              ???????????????? ????????????</Spin> :

               "????????????????????????"}

          </Button>
        </Item>
        <Item>
          <Button htmlType="reset" disabled={loading}>
            ????????????????
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default MonthReportForm;