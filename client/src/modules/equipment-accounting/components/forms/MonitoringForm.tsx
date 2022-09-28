import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Space,
  Typography,
  Upload,
} from "antd";
import { ChangeEvent, FC, ReactNode } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../server/common/types/equipment-accounting";
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

    editRow,
  } = useMonitoringData(row, data, setData);

  const formItems = (item: MonitoringCreateOrUpdateAttrs): ReactNode => (
    <Form
      layout="horizontal"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      className="m-1 p-1 border"
      style={{ width: 800 }}
    >
      <Item
        label={<Text type="secondary">Дата монтажа</Text>}
        className="m-2 me-2"
      >
        <DatePicker
          size="small"
          style={{ width: 145 }}
          locale={locale}
          placeholder=""
          onChange={(date, dateString) => changeDate("mountDate", dateString)}
        />
      </Item>

      <Item
        className="m-2 me-2"
        label={
          <Text type="secondary">Ведомость смонтированного оборудования</Text>
        }
      >
        <Upload
          onRemove={(file) => {
            changeData("mountDocument", null);
          }}
          beforeUpload={(file) => {
            changeData("mountDocument", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>
      <Item
        label={<Text type="secondary">Дата подключения питания</Text>}
        className="m-2 me-2"
      >
        <DatePicker
          size="small"
          style={{ width: 145 }}
          locale={locale}
          placeholder=""
          onChange={(date, dateString) => changeDate("connectDate", dateString)}
        />
      </Item>

      <Item
        className="m-2 me-2"
        label={<Text type="secondary">Акт о подключении</Text>}
      >
        <Upload
          onRemove={(file) => {
            changeData("connectDocument", null);
          }}
          beforeUpload={(file) => {
            changeData("connectDocument", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>
      <Item
        label={<Text type="secondary">Дата проведения ИИ</Text>}
        className="m-2 me-2"
      >
        <DatePicker
          size="small"
          style={{ width: 145 }}
          locale={locale}
          placeholder=""
          onChange={(date, dateString) => changeDate("testDate", dateString)}
        />
      </Item>
      <Item
        className="m-2 me-2"
        label={<Text type="secondary">Протокол ИИ</Text>}
      >
        <Upload
          onRemove={(file) => {
            changeData("testDocument", null);
          }}
          beforeUpload={(file) => {
            changeData("testDocument", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>
      <Item
        label={<Text type="secondary">Дата проверки сигналов</Text>}
        className="m-2 me-2"
      >
        <DatePicker
          size="small"
          style={{ width: 145 }}
          locale={locale}
          placeholder=""
          onChange={(date, dateString) => changeDate("awpDate", dateString)}
        />
      </Item>
      <Item
        className="m-2 me-2"
        label={<Text type="secondary">Протокол проверки сигналов</Text>}
      >
        <Upload
          onRemove={(file) => {
            changeData("awpDocument", null);
          }}
          beforeUpload={(file) => {
            changeData("awpDocument", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>
      <Item
        label={<Text type="secondary">Дата ввода в эксплуатацию</Text>}
        className="m-2 me-2"
      >
        <DatePicker
          size="small"
          style={{ width: 145 }}
          locale={locale}
          placeholder=""
          onChange={(date, dateString) =>
            changeDate("commisionDate", dateString)
          }
        />
      </Item>
      <Item
        className="m-2 me-2"
        label={<Text type="secondary">Акт ввода в эксплуатацию</Text>}
      >
        <Upload
          onRemove={(file) => {
            changeData("commisionDocument", null);
          }}
          beforeUpload={(file) => {
            changeData("commisionDocument", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>

      {/* <>
      <>
        {setItems(
          3,
          test,
          "testDate",
          "Проведены ИИ",
          testDocument,
          "testDocument",
          "Протокол ИИ"
        )}
      </>
      <>
        {setItems(
          4,
          awp,
          "awpDate",
          "Сигналы проверены",
          awpDocument,
          "awpDocument",
          "Протокол проверки сигналов"
        )}
      </>
      <>
        {setItems(
          5,
          commision,
          "commisionDate",
          "Введено в эксплуатацию",
          commisionDocument,
          "commisionDocument",
          "Акт ввода в эксплуатацию"
        )}
      </> */}

      {row && (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            <Button type="primary" className="me-1">
              Обновить
            </Button>
          </Space>
        </>
      )}
    </Form>
  );

  const editItem = editRow && formItems(editRow);
  const newRow = data && formItems(monitoringItem);

  return row ? <>{editItem}</> : <>{newRow}</>;
};

export default MonitoringForm;
