// import { Button, Divider, Form, Input, Select } from "antd";
// import React, { ChangeEvent, FC } from "react";
// import { MetrologyCreateOrUpdateAttrs } from "../../types/equipment-accounting.types";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import {
//   metrologyState,
//   metrologyType,
//   RangeType,
//   sgroei,
// } from "../../utils/equipment-accounting.consts";

// const { Option } = Select;

// interface MetrologyFormProps {
//   data: MetrologyCreateOrUpdateAttrs | null;
//   setData: Function;
// }

// const MetrologyForm: FC<MetrologyFormProps> = ({ data, setData }) => {
//   const changeItems = (key: string, value: string) => {
//     setData({ ...data, [key]: value });
//   };

//   return (
//     <div className="container pt-0" style={{ maxWidth: "1800px" }}>
//       <div className="row mx-3 mt-3">
//         <div className="col-sm">
//           <Form.Item label="Сфера гос. регулирования ЕИ">
//             <Select
//               style={{ maxWidth: "1000px" }}
//               onChange={(value: string) => changeItems("sgroei", value)}
//             >
//               {sgroei.map((item) => (
//                 <Option key={item.title}>{item.title}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="row mx-3 mt-1 border">
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
//         </div>
//         <div className="row mx-3 mt-3">
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

import React from "react";

const MetrologyForm = () => {
  return <div>MetrologyForm</div>;
};

export default MetrologyForm;
