// import {
//   Button,
//   DatePicker,
//   DatePickerProps,
//   Divider,
//   Form,
//   Input,
//   Upload,
// } from "antd";
// import React, { ChangeEvent, FC, ReactNode } from "react";
// import { UploadOutlined } from "@ant-design/icons";
// import { MonitoringCreateOrUpdateAttrs } from "../../types/equipment-accounting.types";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import { Moment } from "moment";
// import TextArea from "antd/lib/input/TextArea";

// interface MonitoringFormProps {
//   data: MonitoringCreateOrUpdateAttrs | null;
//   setData: Function;
// }

// const MonitoringForm: FC<MonitoringFormProps> = ({ data, setData }) => {
//   const changeItems = (key: string, value: string) => {
//     setData({ ...data, [key]: value });
//   };

//   const onChange = (date: Moment | null, dateString: string, key: string) => {
//     changeItems(key, dateString);
//   };

//   return (
//     <div className="container pt-0" style={{ maxWidth: "1800px" }}>
//       <div className="row mt-3">
//         <div className="col-sm mx-3">
//           <Form.Item label="Смонтировано">
//             <DatePicker
//               placeholder=""
//               onChange={(date, dateString) =>
//                 onChange(date, dateString, "mount")
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Form.Item label="">
//             <Upload>
//               <Button icon={<UploadOutlined />}>Загрузить документ</Button>
//             </Upload>
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Button icon={<UploadOutlined />}>Замечания</Button>
//         </div>
//       </div>
//       <div className="row mt-1">
//         <div className="col-sm mx-3">
//           <Form.Item label="Подключено">
//             <DatePicker
//               placeholder=""
//               onChange={(date, dateString) =>
//                 onChange(date, dateString, "connect")
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Form.Item label="">
//             <Upload>
//               <Button icon={<UploadOutlined />}>Загрузить документ</Button>
//             </Upload>
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Button icon={<UploadOutlined />}>Замечания</Button>
//         </div>
//       </div>
//       <div className="row mt-1">
//         <div className="col-sm mx-3">
//           <Form.Item label="Проведены ПНР">
//             <DatePicker
//               placeholder=""
//               onChange={(date, dateString) =>
//                 onChange(date, dateString, "test")
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Form.Item label="">
//             <Upload>
//               <Button icon={<UploadOutlined />}>Загрузить документ</Button>
//             </Upload>
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Button icon={<UploadOutlined />}>Замечания</Button>
//         </div>
//       </div>
//       <div className="row mt-1">
//         <div className="col-sm mx-3">
//           <Form.Item label="Сигналы выведены на АРМ">
//             <DatePicker
//               placeholder=""
//               onChange={(date, dateString) => onChange(date, dateString, "awp")}
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Form.Item label="">
//             <Upload>
//               <Button icon={<UploadOutlined />}>Загрузить документ</Button>
//             </Upload>
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Button icon={<UploadOutlined />}>Замечания</Button>
//         </div>
//       </div>
//       <div className="row mt-1">
//         <div className="col-sm mx-3">
//           <Form.Item label="Введено в эксплуатацию">
//             <DatePicker
//               placeholder=""
//               onChange={(date, dateString) =>
//                 onChange(date, dateString, "commision")
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Form.Item label="">
//             <Upload>
//               <Button icon={<UploadOutlined />}>Загрузить документ</Button>
//             </Upload>
//           </Form.Item>
//         </div>
//         <div className="col-sm mx-3">
//           <Button icon={<UploadOutlined />}>Замечания</Button>
//         </div>
//       </div>
//       <div className="row d-flex justify-content-center mt-3 mb-1 mx-1">
//         <div className="col-sm">
//           <Form.Item>
//             <TextArea
//               rows={3}
//               placeholder="Примечание"
//               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//                 changeItems("description", e.target.value)
//               }
//               value={data ? data.description : ""}
//             />
//           </Form.Item>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonitoringForm;

// // <div className="col-sm">
// // <Form.Item label="Дата подключения">
// //   <DatePicker
// //     placeholder=""
// //     onChange={(date, dateString) =>
// //       onChange(date, dateString, "connect")
// //     }
// //   />
// // </Form.Item>
// // </div>
// // <div className="col-sm">
// // <Form.Item label="Дата проведения ПНР">
// //   <DatePicker
// //     placeholder=""
// //     onChange={(date, dateString) =>
// //       onChange(date, dateString, "test")
// //     }
// //   />
// // </Form.Item>
// // </div>
// // <div className="col-sm">
// // <Form.Item label="Дата вывода сигналов на АРМ оператора">
// //   <DatePicker
// //     placeholder=""
// //     onChange={(date, dateString) => onChange(date, dateString, "awp")}
// //   />
// // </Form.Item>
// // </div>
// // <div className="col-sm">
// // <Form.Item label="Дата ввода в эксплуатацию">
// //   <DatePicker
// //     placeholder=""
// //     onChange={(date, dateString) => onChange(date, dateString, "awp")}
// //   />
// // </Form.Item>
// // </div>

import React from "react";

const MonitoringForm = () => {
  return <div>MonitoringForm</div>;
};

export default MonitoringForm;
