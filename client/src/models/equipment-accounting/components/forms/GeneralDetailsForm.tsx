// import { Button, Checkbox, Divider, Form, Input, Select } from "antd";
// import React, { ChangeEvent, FC, useEffect, useState } from "react";
// import {
//   ConsolidatedListCreateOrUpdateAttrs,
//   MetrologyCreateOrUpdateAttrs,
// } from "../../types/equipment-accounting.types";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import {
//   countries,
//   equipmentType,
//   meansureGroup,
//   meansurementArea,
//   meansurementType,
//   metrologyState,
//   metrologyType,
//   month,
//   RangeType,
//   sgroei,
//   systemType,
//   vendors,
// } from "../../utils/equipment-accounting.consts";
// import { PositionTreeItem } from "../../../main/main.types";
// import FormItem from "../../../../components/UI/form/FormItem";
// import SelectInput, {
//   SelectInputItem,
// } from "../../../../components/UI/select/SelectInput";
// import TextArea from "antd/lib/input/TextArea";
// import { CheckboxValueType } from "antd/lib/checkbox/Group";

// const { Option } = Select;

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

import React from "react";

const GeneralDetailsForm = () => {
  return <div>GeneralDetailsForm</div>;
};

export default GeneralDetailsForm;
