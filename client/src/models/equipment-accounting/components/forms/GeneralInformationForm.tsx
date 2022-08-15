// interface MainDetailsFormProps {
//   units: PositionTreeItem[];
//   subUnits: PositionTreeItem[];
//   data: ConsolidatedListCreateOrUpdateAttrs;
//   setData: Function;
// }

// const facilityItem = {
//   country: "",
//   vendor: "",
//   title: "",
//   type: "",
//   measurementArea: "",
//   meansurementType: "",
//   meansureGroup: "",
// };

// // const facilityModification

// const GeneralDetailsForm: FC<MainDetailsFormProps> = ({
//   data,
//   setData,
//   units,
//   subUnits,
// }) => {
//   const [type, setType] = useState<string>("");
//   const [facility, setFacility] = useState(facilityItem);
//   const [modification, setModification] = useState<string>("");
//   const [showModificationAdd, setShowModificationAdd] =
//     useState<boolean>(false);
//   const [showFacilityAdd, setShowFacilityAdd] = useState<boolean>(false);

//   const changeItems = (
//     key: string,
//     value: string | number | CheckboxValueType[] | null
//   ) => {
//     setData({ ...data, [key]: value });
//   };

//   useEffect(() => {
//     setShowModificationAdd(false);
//     data.facilityDictionaryId !== null && setShowFacilityAdd(false);
//   }, [data.facilityDictionaryId]);

//   useEffect(() => setData({ ...data, facility }), [facility]);

//   interface FacilityList {
//     id: string;
//     title: string;
//     children?: FacilityList[];
//   }
//   const facilitiesList: FacilityList[] = [
//     {
//       id: "999999999",
//       title: "Добавить новую единицу",
//     },
//     {
//       id: "4",
//       title: "Датчик давления Метран-150",
//       children: [
//         {
//           id: "1",
//           title: "CDR",
//         },
//         {
//           id: "2",
//           title: "TGR",
//         },
//         {
//           id: "3",
//           title: "TAR",
//         },
//         {
//           id: "4",
//           title: "CG",
//         },
//         {
//           id: "5",
//           title: "CD",
//         },
//         {
//           id: "6",
//           title: "CDR",
//         },
//         {
//           id: "7",
//           title: "L",
//         },
//         {
//           id: "8",
//           title: "TG",
//         },
//         {
//           id: "9",
//           title: "TA",
//         },
//       ],
//     },
//     {
//       id: "1",
//       title: "Датчик давления АИР-10",
//     },
//     {
//       id: "2",
//       title: "Пневмопривод ЭПУУ-15-1",
//     },
//     {
//       id: "3",
//       title: "Клеммная коробка ЩОРВ362821",
//     },
//   ];

//   return (
//     <div className="container pt-0" style={{ maxWidth: "1800px" }}>
//       {units.length > 0 && (
//         <div className="row mx-3 mt-2">
//           <div className="col-sm">
//             <Form.Item
//               style={{ maxWidth: "500px" }}
//               label="Наименование объекта строительства"
//             >
//               <FormItem
//                 tooltipTitle={"Наименование объекта строительства"}
//                 child={
//                   <SelectInput
//                     target="unit"
//                     defaultValue={
//                       data.unitId
//                         ? data.unitId.toString()
//                         : "Наименование объекта строительства"
//                     }
//                     placeholder="Наименование объекта строительства"
//                     data={units}
//                     onChange={(value: string) => setData("unitId", +value)}
//                   />
//                 }
//               />
//             </Form.Item>
//           </div>
//         </div>
//       )}
//       {units.length > 0 && (
//         <div className="row mx-3 mt-2">
//           <div className="col-sm">
//             <Form.Item
//               style={{ maxWidth: "1200px" }}
//               label="Наименование объекта/установки"
//             >
//               <FormItem
//                 tooltipTitle={"Наименование объекта/установки"}
//                 child={
//                   <SelectInput
//                     target="subUnit"
//                     defaultValue={
//                       data.subUnitId
//                         ? data.subUnitId.toString()
//                         : "Наименование объекта/установки"
//                     }
//                     placeholder="Наименование объекта/установки"
//                     data={
//                       units.filter(
//                         (item) => item.id === data.unitId?.toString()
//                       )[0]?.children || []
//                     }
//                     onChange={(value: string) => setData("subUnitId", +value)}
//                   />
//                 }
//               />
//             </Form.Item>
//           </div>
//         </div>
//       )}
//       {subUnits.length > 0 && (
//         <div className="row mx-3 mt-2">
//           <div className="col-sm">
//             <Form.Item
//               style={{ maxWidth: "900px" }}
//               label="Наименование объекта строительства"
//             >
//               <FormItem
//                 tooltipTitle={""}
//                 child={
//                   <SelectInput
//                     target="subUnit"
//                     defaultValue={
//                       data.subUnitId
//                         ? data.subUnitId.toString()
//                         : "Наименование объекта/установки"
//                     }
//                     placeholder="Наименование объекта/установки"
//                     data={subUnits}
//                     onChange={(value: string) =>
//                       changeItems("subUnitId", +value)
//                     }
//                   />
//                 }
//               />
//             </Form.Item>
//           </div>
//         </div>
//       )}
//       <div className="row mx-3">
//         <div className="col-sm">
//           <FormItem
//             tooltipTitle={"Модель"}
//             child={
//               <SelectInput
//                 defaultValue={"Выбрать модель оборудования"}
//                 target="facilityDictionaryId"
//                 placeholder="Выбрать модель оборудования"
//                 data={facilitiesList}
//                 onChange={(value: string) => {
//                   if (value !== "999999999") {
//                     changeItems("facilityDictionaryId", +value);
//                   } else {
//                     setShowFacilityAdd(true);
//                     changeItems("facilityDictionaryId", null);
//                   }
//                 }}
//               />
//             }
//           />
//         </div>
//         <div className="col-sm">
//           {/* {data.facilityDictionaryId ? ( */}
//           <FormItem
//             tooltipTitle={"Модификация"}
//             child={
//               <SelectInput
//                 defaultValue={"Выбрать модификацию оборудования"}
//                 target="facilityModificationId"
//                 placeholder="Выбрать модификацию оборудования"
//                 data={
//                   data.facilityDictionaryId
//                     ? facilitiesList.filter(
//                         (item) =>
//                           item.id === data?.facilityDictionaryId?.toString()
//                       )[0]?.children || [
//                         { id: "9999999999", title: "Добавить модификацию" },
//                       ]
//                     : [{ id: "9999999999", title: "Добавить модификацию" }]
//                 }
//                 onChange={(value: string) =>
//                   value !== "9999999999"
//                     ? changeItems("facilityModificationId", +value)
//                     : setShowModificationAdd(true)
//                 }
//               />
//             }
//           />
//           {/* ) : (
//             <span></span>
//           )} */}
//         </div>
//       </div>
//       {showFacilityAdd && (
//         <div className="row mx-3 border mt-1">
//           <div className="row mx-3 mt-1">
//             <div className="col-sm mt-3 mx-3">
//               <Form.Item label="Наименование">
//                 <Input
//                   placeholder=""
//                   value={facility.title}
//                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                     setFacility({ ...facility, title: e.target.value });
//                     setData({
//                       ...data,
//                       facility,
//                     });
//                   }}
//                 />
//               </Form.Item>
//             </div>
//           </div>
//           <div className="row mx-3 mt-1">
//             <div className="col-sm mt-1">
//               <Form.Item label="Cтрана">
//                 <Select
//                   style={{ maxWidth: "200px" }}
//                   showSearch
//                   filterOption={(input, option) =>
//                     (option!.children as unknown as string)
//                       .toLowerCase()
//                       .includes(input.toLowerCase())
//                   }
//                   onChange={(value: string) => {
//                     setFacility({ ...facility, country: value });
//                     // setData({
//                     //   ...data,
//                     //   facility,
//                     // });
//                   }}
//                 >
//                   {countries.map((item) => (
//                     <Option key={item.title}>{item.title}</Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </div>
//             <div className="col-sm mt-1">
//               <Form.Item label="Вендор">
//                 <Select
//                   style={{ maxWidth: "300px" }}
//                   showSearch
//                   filterOption={(input, option) =>
//                     (option!.children as unknown as string)
//                       .toLowerCase()
//                       .includes(input.toLowerCase())
//                   }
//                   onChange={(value: string) => {
//                     setFacility({ ...facility, vendor: value });
//                     // setData({
//                     //   ...data,
//                     //   facility,
//                     // });
//                   }}
//                 >
//                   {vendors.map((item) => (
//                     <Option key={item.title}>{item.title}</Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </div>
//             <div className="col-sm mt-1">
//               <Form.Item label="Тип">
//                 <Select
//                   style={{ maxWidth: "200px" }}
//                   onChange={(value: string) => {
//                     setFacility({ ...facility, type: value });

//                     // setData({
//                     //   ...data,
//                     //   facility,
//                     // });
//                   }}
//                 >
//                   {equipmentType.map((item) => (
//                     <Option key={item.title}>{item.title}</Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </div>
//           </div>
//           {facility.type === "СИ" && (
//             <div className="row mx-3 mt-1">
//               <div className="row mt-1">
//                 <div className="col-sm">
//                   <Form.Item label="Область измерений">
//                     <Select
//                       // style={{ maxWidth: "200px" }}
//                       showSearch
//                       filterOption={(input, option) =>
//                         (option!.children as unknown as string)
//                           .toLowerCase()
//                           .includes(input.toLowerCase())
//                       }
//                       onChange={(value: string) => {
//                         setFacility({ ...facility, measurementArea: value });
//                         // setData({
//                         //   ...data,
//                         //   facility,
//                         // });
//                       }}
//                     >
//                       {meansurementArea.map((item) => (
//                         <Option key={item.title}>{item.title}</Option>
//                       ))}
//                     </Select>
//                   </Form.Item>
//                 </div>
//               </div>
//               <div className="row  mt-1">
//                 <div className="col-sm">
//                   <Form.Item label="Вид измерений">
//                     <Select
//                       // style={{ maxWidth: "300px" }}
//                       showSearch
//                       filterOption={(input, option) =>
//                         (option!.children as unknown as string)
//                           .toLowerCase()
//                           .includes(input.toLowerCase())
//                       }
//                       onChange={(value: string) => {
//                         setFacility({ ...facility, meansurementType: value });
//                         // setData({
//                         //   ...data,
//                         //   facility,
//                         // });
//                       }}
//                     >
//                       {meansurementType.map((item) => (
//                         <Option key={item.title}>{item.title}</Option>
//                       ))}
//                     </Select>
//                   </Form.Item>
//                 </div>
//               </div>
//               <div className="row  mt-1">
//                 <div className="col-sm">
//                   <Form.Item label="Группа СИ">
//                     <Select
//                       // style={{ maxWidth: "300px" }}
//                       showSearch
//                       filterOption={(input, option) =>
//                         (option!.children as unknown as string)
//                           .toLowerCase()
//                           .includes(input.toLowerCase())
//                       }
//                       onChange={(value: string) => {
//                         setFacility({ ...facility, meansureGroup: value });
//                         // setData({
//                         //   ...data,
//                         //   facility,
//                         // });
//                       }}
//                     >
//                       {meansureGroup.map((item) => (
//                         <Option key={item.title}>{item.title}</Option>
//                       ))}
//                     </Select>
//                   </Form.Item>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//       {showModificationAdd && (
//         <div className="row mx-3 mt-1">
//           <div className="col-sm mt-3 mx-3">
//             <Form.Item label="Модификация">
//               <Input
//                 placeholder=""
//                 value={modification}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                   setModification(e.target.value);
//                   setData({
//                     ...data,
//                     facilityModification: {
//                       title: e.target.value,
//                     },
//                   });
//                 }}
//               />
//             </Form.Item>
//           </div>
//         </div>
//       )}
//       <div className="row mx-3">
//         <Form.Item
//           style={{ maxWidth: "500px" }}
//           label="Принадлежность к системам"
//         >
//           <Checkbox.Group
//             options={systemType}
//             onChange={(checkedValues: CheckboxValueType[]) =>
//               changeItems("systemType", checkedValues)
//             }
//           />
//         </Form.Item>
//       </div>
//       <div className="row mx-3 mt-1">
//         <div className="col-sm">
//           <Input
//             placeholder="TAG"
//             value={data ? data.tag : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("tag", e.target.value)
//             }
//           />
//         </div>
//         <div className="col-sm">
//           <Input
//             placeholder="Контролируемый параметр"
//             value={data ? data.controlledParameter : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("controlledParameter", e.target.value)
//             }
//           />
//         </div>
//         <div className="col-sm">
//           <Input
//             placeholder="Место установки"
//             value={data ? data.installationLocation : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("installationLocation", e.target.value)
//             }
//           />
//         </div>
//       </div>
//       <div className="row mx-3 mt-3">
//         <div className="col-sm">
//           <Input
//             placeholder="Зав. №"
//             value={data ? data.factoryNumber : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("factoryNumber", e.target.value)
//             }
//           />
//         </div>
//         <div className="col-sm">
//           <Input
//             placeholder="Спецификация поставки"
//             value={data ? data.specification : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("specification", e.target.value)
//             }
//           />
//         </div>
//       </div>
//       <div className="row mx-3 mt-3">
//         <div className="col-sm">
//           <Input
//             placeholder="Год выпуска"
//             value={data ? data.year : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("year", e.target.value)
//             }
//           />
//         </div>
//         <div className="col-sm">
//           <FormItem
//             tooltipTitle={"Месяц выпуска"}
//             child={
//               <SelectInput
//                 defaultValue={data.month ? data.month : month[0].id}
//                 target="month"
//                 placeholder="Месяц выпуска"
//                 data={month}
//                 onChange={(value: string) => changeItems("month", value)}
//               />
//             }
//           />
//         </div>
//         <div className="col-sm">
//           <Input
//             placeholder="Срок эксплуатации, мес."
//             value={data ? data.period : ""}
//             onChange={(e: ChangeEvent<HTMLInputElement>) =>
//               changeItems("period", e.target.value)
//             }
//           />
//         </div>
//         <div className="row d-flex justify-content-center mt-3 mb-1 mx-1">
//           <div className="col-sm">
//             <Form.Item>
//               <TextArea
//                 rows={3}
//                 placeholder="Примечание"
//                 onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//                   changeItems("description", e.target.value)
//                 }
//                 value={data.description}
//               />
//             </Form.Item>
//           </div>
//         </div>
//       </div>

//       {/* <div className="row mx-3 mt-1 border">
//           <div className="col-sm mt-3">
//             <Form.Item label="Предел измерений, min">
//               <Input
//                 style={{ width: "100px" }}
//                 value={data ? data.meansurementRengeFrom : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("meansurementRengeFrom", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
//           <div className="col-sm mt-3">
//             <Form.Item label="Предел измерений, max">
//               <Input
//                 style={{ width: "100px" }}
//                 value={data ? data.meansurementRengeTo : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("meansurementRengeTo", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
//           <div className="col-sm mt-3">
//             <Form.Item label="Погрешность">
//               <Input
//                 style={{ width: "100px" }}
//                 value={data ? data.accuracy : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("accuracy", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
//           <div className="col-sm mt-3">
//             <Form.Item label="Ед. изм.">
//               <Select
//                 style={{ maxWidth: "100px" }}
//                 onChange={(value: string) => changeItems("range", value)}
//               >
//                 {RangeType.map((item) => (
//                   <Option key={item.title}>{item.title}</Option>
//                 ))}
//               </Select>
//             </Form.Item>
//           </div>
//         </div> */}
//       {/* <div className="row mx-3 mt-3">
//           <div className="col-sm ">
//             <Form.Item label="Межповерочный интервал, мес.">
//               <Input
//                 style={{ width: "100px" }}
//                 value={data ? data.mpi : ""}
//                 onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                   changeItems("mpi", e.target.value)
//                 }
//               />
//             </Form.Item>
//           </div>
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
//         </div> */}
//       {/* <div className="row mx-3 mt-1">
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
//         </div> */}
//     </div>
//   );
// };

// export default GeneralDetailsForm;

//

import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  InputRef,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Switch,
  Typography,
  Upload,
  UploadFile,
} from "antd";
import { ChangeEvent, FC, ReactNode, useEffect, useRef, useState } from "react";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import {
  FacilityCreateOrUpdateAtts,
  FacilityView,
  GeneralInformationCreateOrUpdateAttrs,
  GeneralInformationView,
} from "../../../../../../common/types/equipment-accounting";
import { RcFile } from "antd/lib/upload";
import { facility, sgroei } from "../../utils/equipment-accounting.consts";
import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { OptionFC } from "rc-select/lib/Option";
import FacilityForm from "./FacilityForm";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  row?: GeneralInformationView;
  data?: GeneralInformationCreateOrUpdateAttrs;
  setData?: Function;
}

const facilityItem = {
  id: null,
  country: "",
  vendor: "",
  title: "",
  equipmentType: "",
  measurementArea: null,
  meansurementType: null,
  meansureGroup: null,
  modifications: [],
};

const item: GeneralInformationCreateOrUpdateAttrs = {
  id: null,
  sloeId: null,
  unitId: null,
  subUnitId: null,
  installationLocation: "",
  questionare: null,
  systemType: [],
  tag: "",
  controlledParameter: "",
  facilityId: null,
  facility: {
    id: null,
    country: "",
    vendor: "",
    title: "",
    equipmentType: "",
    measurementArea: null,
    meansurementType: null,
    meansureGroup: null,
    modifications: [],
  },
  facilityModification: "",
  factoryNumber: "",
  year: "",
  month: "",
  period: "",
  specification: "",
  description: "",
};

const GeneralInformationForm: FC<FormProps> = ({ row, data, setData }) => {
  const [editRow, setEditRow] =
    useState<GeneralInformationCreateOrUpdateAttrs>();

  const [addFacilityVisible, setAddFacilityVisible] = useState(false);
  const [newFacility, setNewFacility] =
    useState<FacilityCreateOrUpdateAtts>(facilityItem);
  const [facilities, setFacilities] = useState<FacilityView[]>([]);

  const [modifications, setModifications] = useState<string[]>([]);
  const [newModification, setNewModification] = useState<string>("");
  const inputRef = useRef<InputRef>(null);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const changeItems = (
    key: string,
    value: string | Date | null | RcFile | FacilityCreateOrUpdateAtts
  ) => {
    data && setData && setData({ ...data, [key]: value });
  };

  const addNewFacilityModification = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setModifications([...modifications, newModification]);
    setNewModification("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onModificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewModification(e.target.value);
  };

  useEffect(() => setFacilities(facility), []);

  useEffect(() => {
    data &&
      setModifications(
        facilities.filter((item, index) => item.id === data.facilityId)[0]
          .modifications
      );
    editRow &&
      setModifications(
        facilities.filter((item, index) => item.id === editRow.facilityId)[0]
          .modifications
      );
  }, [data, editRow]);

  useEffect(
    () =>
      row &&
      setEditRow({
        id: row.id,
        sloeId: row.sloeId,
        unitId: row.unitId,
        subUnitId: row.subUnitId,
        installationLocation: row.installationLocation,
        questionare: null,
        systemType: row.systemType,
        tag: row.tag,
        controlledParameter: row.controlledParameter,
        facilityId: row.facilityId,
        facility: {
          id: row.facilityId,
          country: row.country,
          vendor: row.vendor,
          title: row.facilityTitle,
          equipmentType: row.equipmentType,
          measurementArea: null,
          meansurementType: null,
          meansureGroup: null,
          modifications: [],
        },
        facilityModification: row.facilityModification,
        factoryNumber: row.factoryNumber,
        year: row.year,
        month: row.month,
        period: row.period,
        specification: row.specification,
        description: row.description,
      }),
    [row]
  );

  useEffect(() => {
    editRow &&
      setEditRow({
        ...editRow,
        facility: { ...editRow?.facility, modifications },
      });
    data &&
      setData &&
      setData({ ...data, facility: { ...data?.facility, modifications } });
  }, [modifications]);

  useEffect(() => {
    editRow
      ? setEditRow({ ...editRow, facility: newFacility })
      : changeItems("facility", newFacility);
  }, [newFacility]);

  const formItems = (
    item: GeneralInformationCreateOrUpdateAttrs
  ): ReactNode => (
    <>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        className="m-1 p-1 border"
      >
        {row && (
          <>
            <Item
              label={<Text type="secondary">Объект строительства</Text>}
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
                    ? setEditRow({ ...editRow, unitId: value })
                    : changeItems("unitId", value)
                }
              >
                {sgroei.map((item) => (
                  <Option key={item.id} value={item.title}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Item>
            <Item
              label={<Text type="secondary">Установка/объект</Text>}
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
                    ? setEditRow({ ...editRow, subUnitId: value })
                    : changeItems("subUnitId", value)
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
          </>
        )}
        <Item
          label={<Text type="secondary">Место установки</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={
              editRow ? editRow.installationLocation : item.installationLocation
            }
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({
                    ...editRow,
                    installationLocation: e.target.value,
                  })
                : changeItems("installationLocation", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">TAG</Text>} className="m-0">
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={editRow ? editRow.tag : item.tag}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, tag: e.target.value })
                : changeItems("tag", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Контролируемый параметр</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={
              editRow ? editRow.controlledParameter : item.controlledParameter
            }
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({
                    ...editRow,
                    controlledParameter: e.target.value,
                  })
                : changeItems("controlledParameter", e.target.value)
            }
          />
        </Item>
        <Divider className="m-1 p-0" />
        <Item
          label={<Text type="secondary">Наименование</Text>}
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
            onChange={(value: string) => {
              if (value !== "NEW") {
                setAddFacilityVisible(false);
                editRow
                  ? setEditRow({ ...editRow, facilityId: value })
                  : changeItems("facilityId", value);
              } else {
                setAddFacilityVisible(true);
              }
            }}
          >
            <Option key={"NEW"} value={"NEW"} className="text-success">
              + Добавить новую единицу
            </Option>
            {facilities.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.title}
              </Option>
            ))}
          </Select>
        </Item>
        {addFacilityVisible && (
          <FacilityForm data={newFacility} setData={setNewFacility} />
        )}
        {!addFacilityVisible && (
          <Item
            label={<Text type="secondary">Модификация</Text>}
            className="m-0"
          >
            <Select
              size="small"
              // style={{ width: 300 }}
              placeholder="Модицикация"
              dropdownRender={(menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: "8px 0" }} />
                  <Space
                    style={{ padding: "0 8px 4px" }}
                    className="d-flex justify-content-between"
                  >
                    <Input
                      size="small"
                      style={{ minWidth: 500 }}
                      placeholder="Добавить новую модификацию"
                      ref={inputRef}
                      value={newModification}
                      onChange={onModificationChange}
                    />
                    <Button
                      type="text"
                      icon={<PlusOutlined style={{ marginBottom: 14 }} />}
                      onClick={addNewFacilityModification}
                    >
                      Добавить
                    </Button>
                  </Space>
                </>
              )}
            >
              {modifications.map((item) => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>
          </Item>
        )}
        <Item label={<Text type="secondary">Зав. №</Text>} className="m-0">
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={editRow ? editRow.factoryNumber : item.factoryNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, factoryNumber: e.target.value })
                : changeItems("factoryNumber", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Спецификация поставки</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={editRow ? editRow.specification : item.specification}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, specification: e.target.value })
                : changeItems("specification", e.target.value)
            }
          />
        </Item>

        <Item label={<Text type="secondary">Год выпуска</Text>} className="m-0">
          <Input
            size="small"
            type={"number"}
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={editRow ? editRow.year : item.year}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, year: e.target.value })
                : changeItems("year", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Месяц выпуска</Text>}
          className="m-0"
        >
          <Input
            size="small"
            type={"number"}
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={editRow ? editRow.month : item.month}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, month: e.target.value })
                : changeItems("month", e.target.value)
            }
          />
        </Item>
        <Item
          label={<Text type="secondary">Срок эксплуатации, мес.</Text>}
          className="m-0"
        >
          <Input
            size="small"
            style={{ maxWidth: 150 }}
            className="text-secondary"
            value={editRow ? editRow.period : item.period}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, period: e.target.value })
                : changeItems("period", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
          <Input
            size="small"
            className="text-secondary"
            value={editRow ? editRow.description : item.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              editRow
                ? setEditRow({ ...editRow, description: e.target.value })
                : changeItems("description", e.target.value)
            }
          />
        </Item>

        {/* <Item
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
        </Item> */}
        <Divider className="m-1 p-0" />
        {/* <Item style={{ marginLeft: 234, marginBottom: 0 }}>
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
        </Item> */}
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

export default GeneralInformationForm;
