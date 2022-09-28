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
import { ExclamationCircleOutlined } from "@ant-design/icons";

import {
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
} from "../../../../../../server/common/types/equipment-accounting";

import {
  counterpartyView,
  metrologyDocumentType,
  metrologyStatus,
  sgroei,
} from "../../utils/equipment-accounting.consts";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useMetrologyData } from "./hooks/useMetrologyData";
import { metrologyItem } from "./form.settings";
import { useMetrologyForm } from "./hooks";
import {
  InputUIComponent,
  SelectUIComponent,
  UploadUIComponent,
} from "../../../../components";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  row?: MetrologyView;
  data?: MetrologyCreateOrUpdateAttrs;
  setData?: Function;
}

const MetrologyForm: FC<FormProps> = ({ row, data, setData }) => {
  const { counterpartiesList, editRow, onHandlerChange, changeDate } =
    useMetrologyForm(row, data, setData);

  const formItems = (item: MetrologyCreateOrUpdateAttrs): ReactNode => (
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        className="m-1 p-1 border"
        style={{ width: 1000 }}
      >
        <Item
          label={<Text type="secondary">Сфера гос. регулирования ЕИ</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="sgroei"
            items={sgroei}
            changeValue={onHandlerChange}
          />
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
            <InputUIComponent
              type="number"
              style={{ maxWidth: 150 }}
              addonAfter={editRow ? editRow.range : null}
              value={editRow && editRow.min}
              id="min"
              changeValue={onHandlerChange}
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
            <InputUIComponent
              type="number"
              style={{ maxWidth: 150 }}
              addonAfter={editRow ? editRow.range : null}
              value={editRow && editRow.max}
              id="max"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item
            style={{ maxWidth: 350 }}
            label={<Text type="secondary">Погрешность/класс точности</Text>}
            className="m-0"
          >
            <InputUIComponent
              style={{ maxWidth: 150, fontColor: "#999" }}
              addonAfter="%"
              value={editRow && editRow.accuracy}
              id="accuracy"
              changeValue={onHandlerChange}
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
            <InputUIComponent
              type="number"
              style={{ maxWidth: 150 }}
              addonAfter="мес."
              value={editRow && editRow.mpi}
              id="mpi"
              changeValue={onHandlerChange}
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
              <InputUIComponent
                style={{ maxWidth: 150 }}
                // value={editRow ? editRow.range }
                id="range"
                changeValue={onHandlerChange}
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
              // value={editRow && editRow.metrologyType}
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
            <SelectUIComponent
              id="counterpartyId"
              items={counterpartiesList}
              changeValue={onHandlerChange}
              defaultValue={item.counterpartyId?.toString()}
            />
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
            <SelectUIComponent
              id="documentType"
              items={metrologyDocumentType}
              changeValue={onHandlerChange}
              defaultValue={item.documentType}
            />
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
            <InputUIComponent
              value={editRow && editRow.documentNumber}
              id="documentNumber"
              changeValue={onHandlerChange}
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
              locale={locale}
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
            <UploadUIComponent id="document" changeValue={onHandlerChange} />
          </Item>
          <Item
            style={{ maxWidth: 432 }}
            label={
              <Text type="secondary" style={{ marginLeft: 146 }}>
                Статус
              </Text>
            }
            className="m-0"
          >
            <SelectUIComponent
              id="status"
              items={metrologyStatus}
              changeValue={onHandlerChange}
              defaultValue={item.status}
            />
          </Item>
        </Item>
        <Divider className="m-1 p-0" />
        <Item style={{ marginLeft: 234, marginBottom: 0 }}>
          <Item
            style={{ maxWidth: 444 }}
            label={
              <Text type="secondary" style={{ marginLeft: 144 }}>
                № ГРСИ
              </Text>
            }
            className="m-0"
          >
            <InputUIComponent
              value={editRow && editRow.grsi}
              id="grsi"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 24 }}>
                Свидетельство об утв. типа
              </Text>
            }
            className="m-0"
          >
            <UploadUIComponent
              id="verificationProcedure"
              changeValue={onHandlerChange}
            />
          </Item>
          <Item
            label={
              <Text type="secondary" style={{ marginLeft: 78 }}>
                Методика поверки
              </Text>
            }
            className="mt-1"
          >
            <UploadUIComponent
              id="typeApprovalCertificate"
              changeValue={onHandlerChange}
            />
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
          </Space>
        </>
      )}
    </>
  );

  const editItem = editRow && formItems(editRow);
  const newRow = data && formItems(metrologyItem);

  const render = row ? editItem : newRow;

  return <>{render}</>;
};

export default MetrologyForm;
