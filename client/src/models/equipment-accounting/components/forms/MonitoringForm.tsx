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
  UploadFile,
} from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  MonitoringCreateOrUpdateAttrs,
  MonitoringView,
} from "../../../../../../common/types/equipment-accounting";
import { RcFile } from "antd/lib/upload";
import { setDate } from "../../../../utils/main.utils";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";

const { Item } = Form;
const { Text } = Typography;

interface FormProps {
  row?: MonitoringView;
  data?: MonitoringCreateOrUpdateAttrs;
  setData?: Function;
}

const item: MonitoringCreateOrUpdateAttrs = {
  id: null,
  sloeId: null,
  mountDate: null,
  mountDocument: null,
  connectDate: null,
  connectDocument: null,
  testDate: null,
  testDocument: null,
  awpDate: null,
  awpDocument: null,
  commisionDate: null,
  commisionDocument: null,
  description: "",
};

const MonitoringForm: FC<FormProps> = ({ row, data, setData }) => {
  const [editRow, setEditRow] = useState<MonitoringCreateOrUpdateAttrs>();
  const [mount, setMount] = useState(false);
  const [mountDocument, setMountDocument] = useState(false);
  const [connect, setConnect] = useState(false);
  const [connectDocument, setConnectDocument] = useState(false);
  const [test, setTest] = useState(false);
  const [testDocument, setTestDocument] = useState(false);
  const [awp, setAwp] = useState(false);
  const [awpDocument, setAwpDocument] = useState(false);
  const [commision, setCommision] = useState(false);
  const [commisionDocument, setCommisionDocument] = useState(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const changeItems = (key: string, value: string | Date | null | RcFile) => {
    data && setData && setData({ ...data, [key]: value });
  };

  const changeEditRowItems = (
    key: string,
    value: string | Date | null | RcFile
  ) => {
    row && editRow && setEditRow({ ...editRow, [key]: value });
  };

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        mountDate: new Date(row.mountDate),
        mountDocument: null,
        connectDate: new Date(row.connectDate),
        connectDocument: null,
        testDate: new Date(row.testDate),
        testDocument: null,
        awpDate: new Date(row.awpDate),
        awpDocument: null,
        commisionDate: new Date(row.commisionDate),
        commisionDocument: null,
        description: row.description,
      }),
    [row]
  );

  const onChange = (checked: boolean, target: string) => {
    switch (target) {
      case "mountDate": {
        setMount(checked);
        break;
      }
      case "mountDocument": {
        setMountDocument(checked);
        break;
      }
      case "connectDate": {
        setConnect(checked);
        break;
      }
      case "connectDocument": {
        setConnectDocument(checked);
        break;
      }
      case "testDate": {
        setTest(checked);
        break;
      }
      case "testDocument": {
        setTestDocument(checked);
        break;
      }
      case "awpDate": {
        setAwp(checked);
        break;
      }
      case "awpDocument": {
        setAwpDocument(checked);
        break;
      }
      case "commisionDate": {
        setCommision(checked);
        break;
      }
      case "commisionDocument": {
        setCommisionDocument(checked);
        break;
      }
      default:
        break;
    }
  };

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
              onChange={(date, dateString) =>
                editRow
                  ? changeEditRowItems(target1, setDate(dateString))
                  : changeItems(target1, setDate(dateString))
              }
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
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  setFileList(newFileList);
                  editRow
                    ? changeEditRowItems(target2, null)
                    : changeItems(target2, null);
                }}
                beforeUpload={(file) => {
                  setFileList([...fileList, file]);
                  // const ind = fileList.indexOf(file);
                  editRow
                    ? changeEditRowItems(target2, file)
                    : changeItems(target2, file);

                  return false;
                }}
                fileList={fileList.filter((item, index) => index === id - 1)}
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
          value={editRow ? editRow.description : item.description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            editRow
              ? changeEditRowItems("description", e.target.value)
              : changeItems("description", e.target.value)
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
  const newRow = data && formItems(item);

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
