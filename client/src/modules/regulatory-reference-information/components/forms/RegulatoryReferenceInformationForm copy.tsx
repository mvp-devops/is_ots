// import { Button, Divider, Form, Input, Space, Typography } from "antd";
// import { useEffect, useState } from "react";
// import {
//   DeleteForm,
//   InputUIComponent,
//   UploadUIComponent,
// } from "../../../../components";
// import UploadComponent from "../../../../components/upload-componrnt";
// import { FormActions } from "../../../main";
// import { useRegulatoryReferenceInformationForm } from "./hooks";

// const { Item } = Form;
// const { Text } = Typography;

// const RegulatoryReferenceInformationForm = () => {
//   const {
//     editRow,
//     dictionaryTarget,
//     actionType,
//     onHandlerChange,
//     setFormVisible,
//     addNewItem,
//     updateItem,
//     deleteItem,
//   } = useRegulatoryReferenceInformationForm();

//   const [buttonTitle, setButtonTitle] = useState("");

//   useEffect(() => {
//     switch (actionType) {
//       case FormActions.ADD_DICTIONARY_ITEM: {
//         setButtonTitle("Добавить");
//         break;
//       }

//       case FormActions.EDIT_DICTIONARY_ITEM: {
//         setButtonTitle("Обновить");
//         break;
//       }
//       case FormActions.REMOVE_DICTIONARY_ITEM: {
//         setButtonTitle("Удалить");
//         break;
//       }
//       default:
//         break;
//     }
//   }, [actionType]);

//   const submitButton = (
//     <Item className="d-flex justify-content-end mb-2">
//       <Button type="primary" className="me-1" htmlType="submit">
//         {buttonTitle}
//       </Button>
//     </Item>
//   );

//   const title = (
//     <Item
//       label={<Text type="secondary">Наименование</Text>}
//       name="title"
//       className="mb-1"
//       rules={[{ required: true, message: "Поле обязательно для заполнения!" }]}
//     >
//       <Input size="small" />
//     </Item>
//   );

//   const code = (
//     <Item
//       label={
//         <Text type="secondary">
//           {dictionaryTarget === "criticality" ? "Вес" : "Шифр"}
//         </Text>
//       }
//       name="code"
//       className="mb-1"
//       rules={[{ required: true, message: "Поле обязательно для заполнения!" }]}
//     >
//       <Input size="small" />
//     </Item>
//   );

//   const file = (dictionaryTarget === "counterparty" ||
//     dictionaryTarget === "design") && (
//     <Item label={<Text type="secondary">Логотип</Text>} className="m-0">
//       <UploadComponent name="file" />
//     </Item>
//   );

//   const thresholdItem = editRow &&
//     "threshold" in editRow &&
//     dictionaryTarget === "criticality" && (
//       <Item label={<Text type="secondary">Порог</Text>} className="m-0">
//         <InputUIComponent
//           value={editRow.threshold as string}
//           type="number"
//           addonAfter="%"
//           id="threshold"
//           changeValue={onHandlerChange}
//         />
//       </Item>
//     );

//   const goalItem = editRow &&
//     "goal" in editRow &&
//     dictionaryTarget === "criticality" && (
//       <Item label={<Text type="secondary">Цель</Text>} className="m-0">
//         <InputUIComponent
//           value={editRow.goal as string}
//           type="number"
//           addonAfter="%"
//           id="goal"
//           changeValue={onHandlerChange}
//         />
//       </Item>
//     );

//   const tenseGoalItem = editRow &&
//     "tenseGoal" in editRow &&
//     dictionaryTarget === "criticality" && (
//       <Item label={<Text type="secondary">Амцель</Text>} className="m-0">
//         <InputUIComponent
//           value={editRow.tenseGoal as string}
//           type="number"
//           addonAfter="%"
//           id="tenseGoal"
//           changeValue={onHandlerChange}
//         />
//       </Item>
//     );

//   const descriptionItem = editRow && (
//     <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
//       <InputUIComponent
//         value={editRow.description as string}
//         id="description"
//         changeValue={onHandlerChange}
//       />
//     </Item>
//   );

//   const renderAddActions = actionType === FormActions.ADD_DICTIONARY_ITEM && (
//     <Item>
//       <Button type="primary" className="me-1" htmlType="submit">
//         {buttonTitle}
//       </Button>
//     </Item>
//   );

//   const renderEditActions = actionType === FormActions.EDIT_DICTIONARY_ITEM && (
//     <Item>
//       <Button
//         type="primary"
//         className="me-1"
//         htmlType="submit"
//         onClick={() => {
//           updateItem();
//           setFormVisible(false);
//         }}
//       >
//         Обновить
//       </Button>
//     </Item>
//   );

//   const renderDelete = actionType === FormActions.REMOVE_DICTIONARY_ITEM && (
//     <Form>
//       <DeleteForm message="Удалить запись?" />
//       <Divider className="p-0 m-2" />
//       {submitButton}
//     </Form>
//   );

//   const renderRemoveActions = actionType ===
//     FormActions.REMOVE_DICTIONARY_ITEM && (
//     <Item>
//       <Button
//         type="primary"
//         htmlType="submit"
//         className="me-1"
//         onClick={() => {
//           deleteItem();
//           setFormVisible(false);
//         }}
//       >
//         Удалить
//       </Button>
//     </Item>
//   );

//   const renderForm = (
//     <Form
//       labelCol={{ span: 7 }}
//       wrapperCol={{ span: 17 }}
//       layout="horizontal"
//       className="m-1 p-1 border"
//     >
//       {title}
//       {code}
//       {thresholdItem}
//       {goalItem}
//       {tenseGoalItem}
//       {file}
//       {descriptionItem}
//     </Form>
//   );

//   const onFinish = (values: any) => {
//     switch (actionType) {
//       case FormActions.ADD_DICTIONARY_ITEM: {
//         console.log("ADD:", values);
//         addNewItem(values);
//         setFormVisible(false);
//         break;
//       }

//       case FormActions.EDIT_DICTIONARY_ITEM: {
//         console.log("EDIT:", values);
//         updateItem();
//         setFormVisible(false);
//         break;
//       }
//       case FormActions.REMOVE_DICTIONARY_ITEM: {
//         deleteItem();
//         setFormVisible(false);
//         break;
//       }

//       default:
//         break;
//     }
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

//   const example = editRow && (
//     <Form
//       name="DICTIONARY_FORM"
//       labelCol={{ span: 8 }}
//       wrapperCol={{ span: 16 }}
//       initialValues={editRow}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       {title}
//       {code}
//       {file}
//       <Divider className="p-0 m-2" />
//       {submitButton}
//     </Form>
//   );

//   const render =
//     actionType === FormActions.ADD_DICTIONARY_ITEM ||
//     actionType === FormActions.EDIT_DICTIONARY_ITEM
//       ? example
//       : renderDelete;

//   return <>{example}</>;
// };

// export default RegulatoryReferenceInformationForm;

import React from "react";

const RegulatoryReferenceInformationFormCopy = () => {
  return <div></div>;
};

export default RegulatoryReferenceInformationFormCopy;
