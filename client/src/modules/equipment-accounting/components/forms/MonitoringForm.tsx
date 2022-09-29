import { FC } from "react";

import { Button, Divider, Form, Space } from "antd";
import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../server/common/types/equipment-accounting";
import { useMonitoringForm } from "./hooks";
import { monitoringItem } from "./form.settings";
import {
  DatePickerUIComponent,
  FormItemUIComponent,
  UploadUIComponent,
} from "../../../../components";

interface FormProps {
  row?: MonitoringView;
  data?: MonitoringCreateOrUpdateAttrs;
  setData?: Function;
}

const MonitoringForm: FC<FormProps> = ({ row, data, setData }) => {
  const { changeDate, onHandlerChange, editRow } = useMonitoringForm(
    row,
    data,
    setData
  );

  const renderEditFormButton = row && (
    <>
      <Divider className="p-0 mb-3" />
      <Space className="d-flex justify-content-end mb-2">
        <Button type="primary" className="me-1">
          Обновить
        </Button>
      </Space>
    </>
  );

  const formItems = (item: MonitoringCreateOrUpdateAttrs) => (
    <Form
      layout="horizontal"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      className="m-1 p-1 border"
      style={{ width: 800 }}
    >
      <FormItemUIComponent
        title="Дата монтажа"
        className="m-2 me-2"
        children={
          <DatePickerUIComponent id="mountDate" changeValue={changeDate} />
        }
      />
      <FormItemUIComponent
        title="Ведомость смонтированного оборудования"
        className="m-2 me-2"
        children={
          <UploadUIComponent id="mountDocument" changeValue={onHandlerChange} />
        }
      />
      <FormItemUIComponent
        title="Дата подключения питания"
        className="m-2 me-2"
        children={
          <DatePickerUIComponent id="connectDate" changeValue={changeDate} />
        }
      />
      <FormItemUIComponent
        title="Акт о подключении"
        className="m-2 me-2"
        children={
          <UploadUIComponent
            id="connectDocument"
            changeValue={onHandlerChange}
          />
        }
      />
      <FormItemUIComponent
        title="Дата проведения ИИ"
        className="m-2 me-2"
        children={
          <DatePickerUIComponent id="testDate" changeValue={changeDate} />
        }
      />
      <FormItemUIComponent
        title="Протокол ИИ"
        className="m-2 me-2"
        children={
          <UploadUIComponent id="testDocument" changeValue={onHandlerChange} />
        }
      />
      <FormItemUIComponent
        title="Дата проверки сигналов"
        className="m-2 me-2"
        children={
          <DatePickerUIComponent id="awpDate" changeValue={changeDate} />
        }
      />
      <FormItemUIComponent
        title="Протокол проверки сигналов"
        className="m-2 me-2"
        children={
          <UploadUIComponent id="awpDocument" changeValue={onHandlerChange} />
        }
      />
      <FormItemUIComponent
        title="Дата ввода в эксплуатацию"
        className="m-2 me-2"
        children={
          <DatePickerUIComponent id="commisionDate" changeValue={changeDate} />
        }
      />
      <FormItemUIComponent
        title="Акт ввода в эксплуатацию"
        className="m-2 me-2"
        children={
          <UploadUIComponent
            id="commisionDocument"
            changeValue={onHandlerChange}
          />
        }
      />
      {renderEditFormButton}
    </Form>
  );

  const editItem = editRow && formItems(editRow);
  const newRow = data && formItems(monitoringItem);
  const render = row ? editItem : newRow;

  return <>{render}</>;
};

export default MonitoringForm;
