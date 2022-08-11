// import { Button, Divider, Form, Input, Select } from "antd";
// import React, { ChangeEvent, FC, ReactNode } from "react";
// import { ImpulseLineLogCreateOrUpdateAttrs } from "../../types/equipment-accounting.types";
// import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
// import { RangeType } from "../../utils/equipment-accounting.consts";

// const { Option } = Select;

// interface ImpulseLineLogFormProps {
//   data: ImpulseLineLogCreateOrUpdateAttrs[];
//   setData: Function;
// }

// const ImpulseLineLogForm: FC<ImpulseLineLogFormProps> = ({ data, setData }) => {
//   const item = {
//     id: Math.random().toString(),
//     consolidatedListId: 0,
//     length: "",
//     numberOfTrace: "",
//     impulseLineType: "",
//     fromUnit: "",
//     toUnit: "",
//     impulseLineLenght: "",
//     range: "м",
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

//   const formItems = (item: ImpulseLineLogCreateOrUpdateAttrs): ReactNode => (
//     <div key={item.id}>
//       <div className="row">
//         <div className="col-sm">
//           <Form.Item label="Номер ИМ">
//             <Input
//               size="small"
//               placeholder="Номер ИМ"
//               value={item.numberOfTrace}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("numberOfTrace", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm">
//           <Form.Item label="Тип ИМ">
//             <Input
//               size="small"
//               placeholder="Тип ИМ"
//               value={item.impulseLineType}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("impulseLineType", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm">
//           <Form.Item label="Точка подключения, от">
//             <Input
//               size="small"
//               placeholder="Точка подключения, от"
//               value={item.fromUnit}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("fromUnit", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//       </div>

//       <div className="row">
//         <div className="col-sm">
//           <Form.Item label="Место монтажа, до">
//             <Input
//               size="small"
//               placeholder="Место монтажа, до"
//               value={item.toUnit}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("toUnit", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>

//         <div className="col-sm">
//           <Form.Item label="Длина ИМ">
//             <Input
//               size="small"
//               placeholder="Длина ИМ"
//               value={item.impulseLineLenght}
//               onChange={(e: ChangeEvent<HTMLInputElement>) =>
//                 changeItems("impulseLineLenght", e.target.value, item.id)
//               }
//             />
//           </Form.Item>
//         </div>
//         <div className="col-sm ">
//           <Form.Item label="Ед. изм.">
//             <Select
//               size="small"
//               style={{ maxWidth: "300px" }}
//               onChange={(value: string) => changeItems("range", value, item.id)}
//             >
//               {RangeType.map((item) => (
//                 <Option key={item.title}>{item.title}</Option>
//               ))}
//             </Select>
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

// export default ImpulseLineLogForm;

import React from "react";

const ImpulseLineLogForm = () => {
  return <div>ImpulseLineLogForm</div>;
};

export default ImpulseLineLogForm;
