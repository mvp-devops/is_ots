import {Button, Divider, Form, Input, notification, Select, Space, Spin, Switch, Typography, Upload} from "antd";
import {createRef, useEffect, useLayoutEffect, useState} from "react";
import {FormInstance} from "antd/es/form";
import {useActions, useTypedSelector} from "../../../hooks";
import {createNormative} from "../../file-storage/api/file-storage.api";
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



  useEffect(() => console.log("load: ", loading), [loading])

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    notification["error"]({
      message: "Ошибка",
      description: "Ошибка при формировании отчета",
    });
  };

  const notFoundContent = (
    <Space className="d-flex justify-content-center p-3">
      <Text type="warning">
        <ExclamationCircleOutlined style={{fontSize: 20, marginBottom: 2}}/>
      </Text>

      <Text type="secondary" style={{fontSize: 12, marginBottom: 2}}>
        Нет данных для отображения. Уточнить поиск
      </Text>
    </Space>
  );


  const directionFormField = (
    <Item
      className="mb-0 text-center text-secondary"
      style={{width: 540}}
      label={
        <Text type="secondary">Функциональное направление</Text>
      }
      name="direction"
      initialValue={"Промышленная автоматизация"}
      rules={[
        {
          required: true,
          message:
            "Пожалуйста, выберите функциональное направление",
        },
      ]}
    >
      <Select
        size={"small"}
        className={"text-secondary"}
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
            <Option key={id} title={title} value={title} className="text-secondary">
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
      label={<Text type="secondary">Месяц</Text>}
      className="ms-2 mb-0"
      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите месяц",
        }
      ]}
    >
      <Select
        size={"small"}
        style={{width: 270}}
        className={"text-secondary text-center"}
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
            <Option key={id} title={title} value={id} className="text-secondary">
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
      label={<Text type="secondary">Год</Text>}
      className="ms-2 mb-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите год",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="text-secondary text-center"
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
      label={<Text type="secondary">Количество экспертов</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите количество экспертов",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="text-secondary text-center"
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
      label={<Text type="secondary">Рабочее время согласно производстенного календаря</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, выберите количество экспертов",
        }
      ]}
    >
      <Input
        size="small"
        type="number"
        className="text-secondary text-center"
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
      label={<Text type="secondary">Должность</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, введите должность",
        }
      ]}
    >
      <Input
        size="small"
        className="text-secondary text-center"
        style={{width: 446}}
      />
    </Item>
  );

  const customerFioFormField = (
    <Item
      name="customerFio"
      label={<Text type="secondary">Ф.И.О.</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, введите Ф.И.О.",
        }
      ]}
    >
      <Input
        size="small"
        className="text-secondary text-center"
        style={{width: 446, marginLeft: 30}}
      />
    </Item>
  );

  const customer = (
    <Space direction="vertical" className="d-block m-0" style={{width: 540}}>
      <Divider className="m-0 text-secondary" orientation="center">Заказчик</Divider>
      <Space direction="vertical">
        {customerPositionFormField}
        {customerFioFormField}
      </Space>
    </Space>
  )

  const executorPositionFormField = (
    <Item
      name="executorPosition"
      initialValue="Начальник службы ОТС г. Тюмень"
      label={<Text type="secondary">Должность</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, введите должность",
        }
      ]}
    >
      <Input
        size="small"
        className="text-secondary text-center"
        style={{width: 446}}
      />
    </Item>
  );

  const executorFioFormField = (
    <Item
      name="executorFio"
      initialValue="Гулак И.В."
      label={<Text type="secondary">Ф.И.О.</Text>}
      className="m-0"

      rules={[
        {
          required: true,
          message: "Пожалуйста, введите Ф.И.О.",
        }
      ]}
    >
      <Input
        size="small"
        className="text-secondary text-center"
        style={{width: 446, marginLeft: 30}}
      />
    </Item>
  );

  const executor = (
    <Space direction="vertical" className="d-block m-0" style={{width: 540}}>
      <Divider className="m-0 text-secondary" orientation="center">Исполнитель</Divider>
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
              Загрузка отчета</Spin> :

               "Сформировать"}

          </Button>
        </Item>
        <Item>
          <Button htmlType="reset" disabled={loading}>
            Очистить
          </Button>
        </Item>
      </Space>
    </Form>
  );
};

export default MonthReportForm;