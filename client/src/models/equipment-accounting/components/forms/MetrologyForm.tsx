//           <div className="col-sm ">
//             <Form.Item label="Вид работ по МО">
//               <Select
//                 style={{ maxWidth: "200px" }}
//                 onChange={(value: string) =>
//                   changeItems("metrologyType", value)
//                 }
//               >
//                 {metrologyType.map((item) => (
//                   <Option key={item.title}>{item.title}</Option>
//                 ))}
//               </Select>
//             </Form.Item>
//           </div>
//           <div className="col-sm ">
//             <Form.Item label="Ссылка на ФГИС Аршин">
//               <Input
//                 // style={{ width: "100px" }}
//                 value={data ? data.arshin : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("arshin", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
//         </div>
//         <div className="row mx-3 mt-1">
//           <div className="col-sm ">
//             <Form.Item label="Текущее состояние" style={{ width: "900px" }}>
//               <Select
//                 style={{ width: "600px" }}
//                 onChange={(value: string) =>
//                   changeItems("metrologyState", value)
//                 }
//               >
//                 {metrologyState.map((item) => (
//                   <Option key={item.title}>{item.title}</Option>
//                 ))}
//               </Select>
//             </Form.Item>
//           </div>
//           <div className="col-sm ">
//             <Form.Item label="№ ГРСИ" style={{ width: "300px" }}>
//               <Input
//                 style={{ width: "230px" }}
//                 value={data ? data.grsi : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("grsi", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
//         </div>
//         <Divider />
//         <div className="row mx-3 mt-1 mb-3">
//           <div className="col-sm ">
//             <Button>Описание типа</Button>
//           </div>
//           <div className="col-sm ">
//             <Button>Методика поверки</Button>
//           </div>
//           <div className="col-sm ">
//             <Button>Документ со сведениями о МО</Button>
//           </div>
//           <div className="col-sm ">
//             <Button>Иная документация</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MetrologyForm;

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
  Switch,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  MetrologyCreateOrUpdateAttrs,
  MetrologyView,
} from "../../../../../../common/types/equipment-accounting";
import { RcFile } from "antd/lib/upload";
import {
  formatDate,
  setDate,
  setDateToVerification,
} from "../../../../utils/main.utils";
import {
  counterpartyView,
  metrologyDocumentType,
  sgroei,
} from "../../utils/equipment-accounting.consts";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { OptionFC } from "rc-select/lib/Option";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  row?: MetrologyView;
  data?: MetrologyCreateOrUpdateAttrs;
  setData?: Function;
}

const item: MetrologyCreateOrUpdateAttrs = {
  id: Math.random(),
  sloeId: null,
  sgroei: "",
  grsi: "",
  min: "",
  max: "",
  range: "",
  accuracy: "",
  mpi: "",
  metrologyType: "",
  documentType: "",
  documentNumber: "",
  fromDate: null,
  toDate: null,
  counterparty: "",
  document: null,
  status: "",
  arshin: "",
  verificationProcedure: null,
  typeApprovalCertificate: null,
};

const MetrologyForm: FC<FormProps> = ({ row, data, setData }) => {
  const [editRow, setEditRow] = useState<MetrologyCreateOrUpdateAttrs>();
  const [doc, setDoc] = useState(false);
  const [verificationProcedure, setVerificationProcedure] = useState(false);
  const [typeApprovalCertificate, setTypeApprovalCertificate] = useState(false);

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
        sgroei: row.sgroei,
        grsi: row.grsi,
        min: row.min,
        max: row.max,
        range: row.range,
        accuracy: row.accuracy,
        mpi: row.mpi,
        metrologyType: row.metrologyType,
        documentType: row.documentType,
        documentNumber: row.documentNumber,
        counterparty: row.counterparty,
        document: null,
        fromDate: row.fromDate,
        toDate: row.toDate,
        status: row.status,
        arshin: row.arshin,
        verificationProcedure: null,
        typeApprovalCertificate: null,
      }),
    [row]
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
            onChange={(value: string) =>
              editRow
                ? setEditRow({ ...editRow, sgroei: value })
                : changeItems("sgroei", value)
            }
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
              value={editRow ? editRow.min : item.min}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editRow
                  ? setEditRow({ ...editRow, min: e.target.value })
                  : changeItems("min", e.target.value)
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
              value={editRow ? editRow.max : item.max}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editRow
                  ? setEditRow({ ...editRow, max: e.target.value })
                  : changeItems("max", e.target.value)
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
              value={editRow ? editRow.accuracy : item.accuracy}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editRow
                  ? setEditRow({ ...editRow, accuracy: e.target.value })
                  : changeItems("accuracy", e.target.value)
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
              value={editRow ? editRow.mpi : item.mpi}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editRow
                  ? setEditRow({ ...editRow, mpi: e.target.value })
                  : changeItems("mpi", e.target.value)
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
                  changeItems("range", e.target.value)
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
                editRow
                  ? setEditRow({
                      ...editRow,
                      metrologyType: e.target.value,
                    })
                  : changeItems("metrologyType", e.target.value)
              }
              value={editRow ? editRow.metrologyType : item.metrologyType}
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
              defaultValue={editRow ? editRow.counterparty : item.counterparty}
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
                editRow
                  ? setEditRow({ ...editRow, counterparty: value })
                  : changeItems("counterparty", value)
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
              defaultValue={editRow ? editRow.documentType : item.documentType}
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
                editRow
                  ? setEditRow({ ...editRow, documentType: value })
                  : changeItems("documentType", value)
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
              value={editRow ? editRow.documentNumber : item.documentNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                editRow
                  ? setEditRow({
                      ...editRow,
                      documentNumber: e.target.value,
                    })
                  : changeItems("documentNumber", e.target.value)
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
              placeholder={
                editRow && editRow.fromDate
                  ? formatDate(editRow.fromDate.toString())
                  : ""
              }
              className="text-secondary"
              onChange={(date, dateString) => {
                console.log(dateString);
                if (editRow) {
                  setEditRow({
                    ...editRow,
                    fromDate: setDate(dateString),
                  });
                } else {
                  changeItems("fromDate", setDate(dateString));
                }
              }}
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
              placeholder={
                editRow && editRow.fromDate
                  ? setDateToVerification(
                      formatDate(editRow.fromDate.toString()),
                      editRow.mpi
                    )
                  : ""
              }
              className="text-secondary"
              onChange={(date, dateString) =>
                editRow
                  ? setEditRow({
                      ...editRow,
                      toDate: setDate(dateString),
                    })
                  : changeItems("toDate", setDate(dateString))
              }
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
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                setFileList(newFileList);
                editRow
                  ? setEditRow({ ...editRow, document: null })
                  : changeItems("document", null);
              }}
              beforeUpload={(file) => {
                setFileList([...fileList, file]);
                // const ind = fileList.indexOf(file);
                editRow
                  ? setEditRow({ ...editRow, document: file })
                  : changeItems("document", file);

                return false;
              }}
              // fileList={fileList.filter(
              //   (item, index) =>  index === (editRow && editRow.id ) - 1
              // )}
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
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                setFileList(newFileList);
                editRow
                  ? setEditRow({ ...editRow, verificationProcedure: null })
                  : changeItems("verificationProcedure", null);
              }}
              beforeUpload={(file) => {
                setFileList([...fileList, file]);

                editRow
                  ? setEditRow({ ...editRow, verificationProcedure: file })
                  : changeItems("verificationProcedure", file);

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
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                setFileList(newFileList);
                editRow
                  ? setEditRow({ ...editRow, typeApprovalCertificate: null })
                  : changeItems("typeApprovalCertificate", null);
              }}
              beforeUpload={(file) => {
                setFileList([...fileList, file]);
                // const ind = fileList.indexOf(file);
                editRow
                  ? setEditRow({ ...editRow, typeApprovalCertificate: file })
                  : changeItems("typeApprovalCertificate", file);

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

export default MetrologyForm;
