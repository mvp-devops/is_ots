import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Space,
  Switch,
  Typography,
  Upload,
} from "antd";
import { ChangeEvent, FC, ReactNode } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../common/types/equipment-accounting";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useMonitoringData } from "./hooks/useMonitoringData";
import { monitoringItem } from "./form.settings";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: MonitoringView;
  data?: MonitoringCreateOrUpdateAttrs;
  setData?: Function;
}

const MonitoringForm: FC<FormProps> = ({ row, data, setData }) => {
  const {
    changeDate,
    changeData,
    mount,
    onChange,
    editRow,
    mountDocument,
    connect,
    connectDocument,
    test,
    testDocument,
    awp,
    awpDocument,
    commision,
    commisionDocument,
  } = useMonitoringData(row, data, setData);

  const setItems = (
    id: number,
    flag1: boolean,
    target1: string,
    title1: string,
    flag2: boolean,
    target2: string,
    title2: string
  ): ReactNode => (
    <Form layout="inline" className="m-1 p-1 border justify-content-between">
      <Item label={<Text type="secondary">{title1}</Text>}>
        <Switch
          onChange={(flag: boolean) => onChange(flag, target1)}
          checked={flag1}
        />
      </Item>
      {flag1 && (
        <>
          <Item label={<Text type="secondary">Дата</Text>} className="m-0 me-2">
            <DatePicker
              locale={locale}
              placeholder=""
              onChange={(date, dateString) => changeDate(target1, dateString)}
            />
          </Item>
          <Item
            label={<Text type="secondary">{title2}</Text>}
            className="m-0 me-2"
          >
            <Switch
              onChange={(flag: boolean) => onChange(flag, target2)}
              checked={flag2}
            />
          </Item>
          {flag2 && (
            <Item className="m-0">
              <Upload
                className="mt-5"
                onRemove={(file) => {
                  changeData(target2, null);
                }}
                beforeUpload={(file) => {
                  changeData(target2, file);

                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>
                  <Text type="secondary">Выбрать файл</Text>
                </Button>
              </Upload>
            </Item>
          )}
        </>
      )}
    </Form>
  );

  const formItems = (item: MonitoringCreateOrUpdateAttrs): ReactNode => (
    <>
      <Item className="mb-1">
        {setItems(
          1,
          mount,
          "mountDate",
          "Смонтировано",
          mountDocument,
          "mountDocument",
          "Ведомость смонтированного оборудования"
        )}
      </Item>
      <Item className="mb-1">
        {setItems(
          2,
          connect,
          "connectDate",
          "Подключено",
          connectDocument,
          "connectDocument",
          "Акт о подключении"
        )}
      </Item>
      <Item className="mb-1">
        {setItems(
          3,
          test,
          "testDate",
          "Проведены ИИ",
          testDocument,
          "testDocument",
          "Протокол ИИ"
        )}
      </Item>
      <Item className="mb-1">
        {setItems(
          4,
          awp,
          "awpDate",
          "Сигналы проверены",
          awpDocument,
          "awpDocument",
          "Протокол проверки сигналов"
        )}
      </Item>
      <Item className="mb-1">
        {setItems(
          5,
          commision,
          "commisionDate",
          "Введено в эксплуатацию",
          commisionDocument,
          "commisionDocument",
          "Акт ввода в эксплуатацию"
        )}
      </Item>
      <Item
        label={<Text type="secondary">Примечание</Text>}
        className="m-0 mx-2"
      >
        <Input
          style={{ minWidth: 420 }}
          placeholder="Примечание"
          className="text-secondary"
          value={item.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeData("description", e.target.value)
          }
        />
      </Item>

      {row && (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            <Button type="primary" className="me-1">
              Обновить
            </Button>

            <Button type="default" className="me-2">
              Отмена
            </Button>
          </Space>
        </>
      )}
    </>
  );

  const editItem = editRow && formItems(editRow);
  const newRow = data && formItems(monitoringItem);

  return row ? (
    <>{editItem}</>
  ) : (
    <>
      {newRow}
      {data && (
        <>
          <Divider />
          <Space className="d-flex justify-content-end ">
            <Button type="primary">Отправить</Button>
            <Button>Отмена</Button>
          </Space>
        </>
      )}
    </>
  );
};

export default MonitoringForm;
