import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { ChangeEvent, FC, ReactNode } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
} from "../../../../../../server/common/types/equipment-accounting";

import {
  counterpartyView,
  metrologyDocumentType,
  sgroei,
} from "../../utils/equipment-accounting.consts";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useMetrologyData } from "./hooks/useMetrologyData";
import { metrologyItem } from "./form.settings";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  row?: MetrologyView;
  data?: MetrologyCreateOrUpdateAttrs;
  setData?: Function;
}

const MetrologyForm: FC<FormProps> = ({ row, data, setData }) => {
  const { editRow, onHandlerChange, changeDate } = useMetrologyData(
    row,
    data,
    setData
  );

  const formItems = (item: MetrologyCreateOrUpdateAttrs): ReactNode => (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        className="m-1 p-1 border"
      >
        <Item
          label={<Text type="secondary">Сфера гос. регулирования ЕИ</Text>}
          className="m-0"
        >
          <Select
            size="small"
            className="text-secondary"
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA!.children as unknown as string)
                .toLowerCase()
                .localeCompare(
                  (optionB!.children as unknown as string).toLowerCase()
                )
            }
            onChange={(value: string) => onHandlerChange("sgroei", value)}
          >
            {sgroei.map((item) => (
              <Option key={item.id} value={item.title}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Item>
        <Divider className="m-1 p-0" />
        <Item
          label={<Text type="secondary">Характеристики</Text>}
          className="m-0"
        >
          <Item
            style={{ maxWidth: 364 }}
            label={
              <Text type="secondary" style={{ marginLeft: 22 }}>
                Предел измерений, min
              </Text>
            }
            className="m-0 justify-content-end row"
          >
            <Input
              size="small"
              type={"number"}
              style={{ maxWidth: 150 }}
              addonAfter={
                editRow ? <Text type="secondary">{editRow.range}</Text> : null
              }
              className="text-secondary"
              value={item.min}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("min", e.target.value)
              }
            />
          </Item>
          <Item
            style={{ maxWidth: 364 }}
            label={
              <Text type="secondary" style={{ marginLeft: 33 }}>
                Предел измерений, max
              </Text>
            }
            className="m-0"
          >
            <Input
              size="small"
              type={"number"}
              style={{ maxWidth: 150 }}
              addonAfter={
                editRow ? <Text type="secondary">{editRow.range}</Text> : null
              }
              className="text-secondary"
              value={item.max}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("max", e.target.value)
              }
            />
          </Item>
          <Item
            style={{ maxWidth: 350 }}
            label={<Text type="secondary">Погрешность/класс точности</Text>}
            className="m-0"
          >
            <Input
              size="small"
              style={{ maxWidth: 150 }}
              addonAfter={<Text type="secondary">%</Text>}
              className="text-secondary"
              value={item.accuracy}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("accuracy", e.target.value)
              }
            />
          </Item>

          <Item
            style={{ maxWidth: 362 }}
            label={
              <Text type="secondary" style={{ marginLeft: 144 }}>
                МПИ
              </Text>
            }
            className="m-0 justify-content-end row"
          >
            <Input
              size="small"
              type={"number"}
              style={{ maxWidth: 150 }}
              addonAfter={<Text type="secondary">мес.</Text>}
              className="text-secondary"
              value={item.mpi}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("mpi", e.target.value)
              }
            />
          </Item>
          {!editRow && (
            <Item
              style={{ maxWidth: 364 }}
              label={
                <Text type="secondary" style={{ marginLeft: 140 }}>
                  Ед. изм.
                </Text>
              }
              className="m-0"
            >
              <Input
                size="small"
                style={{ maxWidth: 150 }}
                className="text-secondary"
                value={item.range}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onHandlerChange("range", e.target.value)
                }
              />
            </Item>
          )}
        </Item>
        <Divider className="m-1 p-0" />
        <Item
          label={<Text type="secondary">Сведения о поверке/калибровке</Text>}
        >
          <Item
            style={{ maxWidth: 400 }}
            label={
              <Text type="secondary" style={{ marginLeft: 122 }}>
                Вид работ
              </Text>
            }
            className="m-0"
          >
            <Radio.Group
              className="text-secondary"
              onChange={(e: RadioChangeEvent) =>
                onHandlerChange("metrologyType", e.target.value)
              }
              value={item.metrologyType}
            >
              <Radio value={"Калибровка"} className="text-secondary">
                Калибровка
              </Radio>
              <Radio value={"Поверка"} className="text-secondary">
                Поверка
              </Radio>
            </Radio.Group>
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 104, marginTop: 0 }}>
                Организация
              </Text>
            }
            className="m-0"
          >
            <Select
              size="small"
              className="text-secondary"
              showSearch
              defaultValue={item.counterparty}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={(value: string) =>
                onHandlerChange("counterparty", value)
              }
            >
              {counterpartyView.map((item) => (
                <Option key={item.id} value={item.title}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Item>

          <Item
            style={{ maxWidth: 430 }}
            label={
              <Text type="secondary" style={{ marginLeft: 92 }}>
                Тип документа
              </Text>
            }
            className="m-0"
          >
            <Select
              size="small"
              className="text-secondary"
              showSearch
              defaultValue={item.documentType}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
              onChange={(value: string) =>
                onHandlerChange("documentType", value)
              }
            >
              {metrologyDocumentType.map((item) => (
                <Option key={item.id} value={item.title}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Item>
          <Item
            style={{ maxWidth: 430 }}
            label={
              <Text type="secondary" style={{ marginLeft: 100 }}>
                № документа
              </Text>
            }
            className="m-0"
          >
            <Input
              size="small"
              className="text-secondary"
              // style={{ width: "100px" }}
              value={item.documentNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onHandlerChange("documentNumber", e.target.value)
              }
            />
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 106 }}>
                Дата поверки/калибровки
              </Text>
            }
            className="m-0 me-2"
          >
            <DatePicker
              locale={locale}
              size="small"
              className="text-secondary"
              onChange={(date, dateString) =>
                changeDate("fromDate", dateString)
              }
            />
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 30 }}>
                Дата следующей поверки/калибровки
              </Text>
            }
            className="m-0 me-2"
          >
            <DatePicker
              size="small"
              className="text-secondary"
              onChange={(date, dateString) => changeDate("toDate", dateString)}
            />
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 124 }}>
                Документ
              </Text>
            }
            className="m-0"
          >
            <Upload
              className="mb-1"
              onRemove={(file) => {
                onHandlerChange("document", null);
              }}
              beforeUpload={(file) => {
                onHandlerChange("document", file);

                return false;
              }}
            >
              <Button icon={<UploadOutlined />} style={{ width: 232 }}>
                <Text type="secondary">Выбрать файл</Text>
              </Button>
            </Upload>
          </Item>
        </Item>
        <Divider className="m-1 p-0" />
        <Item style={{ marginLeft: 234, marginBottom: 0 }}>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 12 }}>
                Свидетельство об утв. типа
              </Text>
            }
            className="m-0"
          >
            <Upload
              onRemove={(file) => {
                onHandlerChange("verificationProcedure", null);
              }}
              beforeUpload={(file) => {
                onHandlerChange("verificationProcedure", file);

                return false;
              }}
            >
              <Button icon={<UploadOutlined />} style={{ width: 232 }}>
                <Text type="secondary">Выбрать файл</Text>
              </Button>
            </Upload>
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 64 }}>
                Методика поверки
              </Text>
            }
            className="mt-1"
          >
            <Upload
              onRemove={(file) => {
                onHandlerChange("typeApprovalCertificate", null);
              }}
              beforeUpload={(file) => {
                onHandlerChange("typeApprovalCertificate", file);

                return false;
              }}
            >
              <Button icon={<UploadOutlined />} style={{ width: 232 }}>
                <Text type="secondary">Выбрать файл</Text>
              </Button>
            </Upload>
          </Item>
        </Item>
      </Form>

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
  const newRow = data && formItems(metrologyItem);

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

export default MetrologyForm;
