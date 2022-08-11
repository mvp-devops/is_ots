// import { Button, Divider, Form, Input, Select } from "antd";
// import React, { ChangeEvent, FC, ReactNode } from "react";
// import { SignalCreateOrUpdateAttrs } from "../../types/equipment-accounting.types";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import {
//   ProtocolType,
//   signalType,
// } from "../../utils/equipment-accounting.consts";
// import TextArea from "antd/lib/input/TextArea";

// const { Option } = Select;

// interface SignalFormProps {
//   data: SignalCreateOrUpdateAttrs[];
//   setData: Function;
// }

// const SignalForm: FC<SignalFormProps> = ({ data, setData }) => {
//   const item = {
//     id: Math.random().toString(),
//     consolidatedListId: 0,
//     signalType: "",
//     protocolType: "",
//     signalTag: "",
//     ll: "",
//     l: "",
//     h: "",
//     hh: "",
//     emergencyProtocol: "",
//   };

//   const handleChange = (key: string, value: string, id: string) => {
//     changeItems(key, value, id);
//   };

//   const addItem = () => {
//     setData([...data, { ...item, id: Math.random().toString() }]);
//   };

//   const removeItem = (index: string) => {
//     setData(data.filter((i) => i.id !== index));
//   };

//   const changeItems = (key: string, value: string, id: string) => {
//     setData(data.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
//   };

//   const formItems = (item: SignalCreateOrUpdateAttrs): ReactNode => (
//     <div key={item.id}>
//       <div className="row mx-3">
//         <div className="col-sm">
//           <Form.Item label="Тип сигнала">
//             <Select
//               size="small"
//               onChange={(value: string) =>
//                 changeItems("signalType", value, item.id)
//               }
//               style={{ width: 100 }}
//             >
//               {signalType.map((item) => (
//                 <Option key={item.title}>{item.title}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="col-sm">
//           <Form.Item label="Тип протокола">
//             <Select
//               size="small"
//               // placeholder="Протокол"
//               onChange={(value: string) =>
//                 changeItems("protocolType", value, item.id)
//               }
//               style={{ width: 100 }}
//             >
//               {ProtocolType.map((item) => (
//                 <Option key={item.title}>{item.title}</Option>
//               ))}
//             </Select>
//           </Form.Item>
//         </div>
//         <div className="col-sm">
//           <Form.Item label="TAG сигнала">
//             <Input
//               size="small"
//               value={item.signalTag}
//               style={{ width: 100 }}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("signalTag", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//       </div>

//       <div className="row border mx-3 ">
//         <div className="col-sm mt-3">
//           <Form.Item label="Авария, min">
//             <Input
//               size="small"
//               style={{ width: 100 }}
//               value={item.ll}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("ll", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mt-3">
//           <Form.Item label="Сигнализация, min">
//             <Input
//               size="small"
//               style={{ width: 100 }}
//               value={item.l}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("l", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mt-3">
//           <Form.Item label="Сигнализация, max">
//             <Input
//               size="small"
//               style={{ width: 100 }}
//               value={item.h}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("h", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm mt-3">
//           <Form.Item label="Авария, max">
//             <Input
//               size="small"
//               style={{ width: 100 }}
//               value={item.hh}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("hh", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//       </div>
//       <div className="row d-flex justify-content-center mt-3 mb-1 mx-1">
//         <div className="col-sm">
//           <Form.Item>
//             <TextArea
//               rows={3}
//               placeholder="Аварийный протокол"
//               onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//                 changeItems("emergencyProtocol", e.target.value, item.id)
//               }
//               value={item.emergencyProtocol}
//             />
//           </Form.Item>
//         </div>
//       </div>
//       <div className="row d-flex justify-content-end mt-1 mb-1 mx-3">
//         <Button
//           className="border-0 mb-3 mt-0"
//           style={{ background: "transparent", width: "5%" }}
//         >
//           <DeleteOutlined
//             title="Удалить строку"
//             onClick={() => removeItem(item.id)}
//             style={{ fontSize: " 20px" }}
//             className="text-danger"
//           />
//         </Button>
//         <Divider />
//       </div>
//     </div>
//   );

//   return (
//     <div className="container pt-0" style={{ maxWidth: "1800px" }}>
//       <div className="row d-flex justify-content-center  mx-3 ">
//         <Button
//           className="border-0 mb-3 mt-0"
//           style={{ background: "transparent", width: "5%" }}
//         >
//           <PlusOutlined
//             title="Добавить новую строку"
//             onClick={addItem}
//             style={{ fontSize: " 20px" }}
//             className="text-success"
//           />
//         </Button>

//         <Divider />
//       </div>
//       {data.map((item, index) => formItems(item))}
//     </div>
//   );
// };

// export default SignalForm;

import React from "react";

const SignalForm = () => {
  return <div>SignalForm</div>;
};

export default SignalForm;
