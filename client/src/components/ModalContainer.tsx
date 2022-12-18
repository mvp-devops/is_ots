import { Modal, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { FormActions } from "../modules/main";
import { useActions, useTypedSelector } from "../hooks";

const { Text } = Typography;

interface ModalContainerProps {
  child: ReactNode;
  target?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({ child, target }) => {
  const { formVisible, actionType } = useTypedSelector((state) => state.main);
  const { setFormVisible } = useActions();

  const addActionsFlag =
    actionType === FormActions.ADD ||
    actionType === FormActions.ADD_CHILD ||
    actionType === FormActions.ADD_COMMENT ||
    actionType === FormActions.ADD_DICTIONARY_ITEM ||
    actionType === FormActions.ADD_EQUIPMENT;

  const editActionsFlag =
    actionType === FormActions.EDIT ||
    actionType === FormActions.EDIT_CHILD ||
    // actionType === FormActions.EDIT_DOCUMENT ||
    actionType === FormActions.EDIT_COMMENT ||
    actionType === FormActions.EDIT_DICTIONARY_ITEM ||
    actionType === FormActions.EDIT_EQUIPMENT;

  const removeActionsFlag =
    actionType === FormActions.REMOVE ||
    actionType === FormActions.REMOVE_CHILD ||
    // actionType === FormActions.REMOVE_DOCUMENT ||
    actionType === FormActions.REMOVE_COMMENT ||
    actionType === FormActions.REMOVE_DICTIONARY_ITEM ||
    actionType === FormActions.REMOVE_EQUIPMENT;

  /** NORMATIVE OR DESIGN-DOCUMENT FORM ACTIONS */
  const documentFormActions =
    actionType === FormActions.ADD_DOCUMENT ||
    actionType === FormActions.EDIT_DOCUMENT ||
    actionType === FormActions.ADD_NORMATIVE ||
    actionType === FormActions.EDIT_NORMATIVE

  /** QUESTIONNAIRE FORM ACTIONS */
  const questionnaireFormActions =
    actionType === FormActions.CREATE_NEW_QUESTIONNAIRE ||
    actionType === FormActions.CREATE_QUESTIONNAIRE;

  let containerWidth = 1200;

  switch (actionType) {
    case FormActions.ADD_COMMENT:
    case FormActions.EDIT_COMMENT: containerWidth = 1200; break;
    case FormActions.ADD_EQUIPMENT: containerWidth =  (target === "cable-log" ||
      target === "impulse-line-log" ||
      target === "signal" ||
      target === "monitoring" ||
      target === "summary-list-of-equipment")
      ? 1200
      : 1000; break;
    case FormActions.CREATE_POSITION_TREE_ITEMS:
    case FormActions.ADD_USER:
    case FormActions.IMPORT_COMMENTS_FROM_LKP:
    case FormActions.REPORT: containerWidth = 600; break;
    case FormActions.IMPORT_EQUIPMENT_FROM_SLOE:
    case FormActions.ADD_DOCUMENT:
    case FormActions.EDIT_DOCUMENT:
    case FormActions.ADD_NORMATIVE:
    case FormActions.EDIT_NORMATIVE: containerWidth = 1100; break;
    case FormActions.CREATE_NEW_QUESTIONNAIRE:
    case FormActions.EXPORT_TO_ATLAS: containerWidth = 1380; break;
    case FormActions.CREATE_QUESTIONNAIRE: containerWidth = 1400; break;
    case FormActions.ADD:
    case FormActions.ADD_CHILD:
    case FormActions.EDIT:
    case FormActions.EDIT_CHILD:
    case FormActions.REMOVE:
    case FormActions.ADD_DICTIONARY_ITEM:
    case FormActions.EDIT_DICTIONARY_ITEM:
    case FormActions.REMOVE_DICTIONARY_ITEM:
    case FormActions.REMOVE_CHILD: containerWidth = 600; break;
    case FormActions.CHECKLIST: containerWidth = 600; break;

    default: break;
  }

  // const containerWidth =
  //   actionType === FormActions.ADD_COMMENT ||
  //   actionType === FormActions.EDIT_COMMENT
  //     ? 1200
  //     : actionType === FormActions.ADD_EQUIPMENT &&
  //       (target === "cable-log" ||
  //         target === "impulse-line-log" ||
  //         target === "signal" ||
  //         target === "monitoring" ||
  //         target === "summary-list-of-equipment")
  //     ? 1200
  //     : target === "metrology" || target === "general-information"
  //     ? 1000
  //     : target === "monitoring"
  //     ? 1200
  //     : actionType === FormActions.REPORT ? 600 : documentFormActions ? 1100 : questionnaireFormActions ? 1400
  //           : actionType === FormActions.CREATE_POSITION_TREE_ITEMS ? 600
  //             : actionType === FormActions.ADD_USER ? 600
  //             : 1200;

  let title = "";

  switch (actionType) {
    case FormActions.ADD_DOCUMENT: title = "Добавление документации"; break;
    case FormActions.EDIT_DOCUMENT: title = "Редактирование документа"; break;
    case FormActions.ADD_NORMATIVE: title = "Добавление нормативной документации"; break;
    case FormActions.EDIT_NORMATIVE: title = "Редактирование нормативного документа"; break;
    case FormActions.CREATE_QUESTIONNAIRE:
    case FormActions.CREATE_NEW_QUESTIONNAIRE: title = "Опросный лист"; break;
    case FormActions.EXPORT_TO_ATLAS: title = "Синхронизация с АИС «АТЛАС»"; break;
    case FormActions.CREATE_POSITION_TREE_ITEMS: title = "Загрузка структуры дерева позиций"; break;
    case FormActions.IMPORT_COMMENTS_FROM_LKP: title = "Импорт данных из ЛКП"; break;
    case FormActions.IMPORT_EQUIPMENT_FROM_SLOE:  title = "Импорт данных из шаблона сводного перечная оборудования"; break;
    default: title = "Другое"; break;
  }



  return (
    <Modal
      maskClosable={false}
      style={{ border: "1px white" }}
      title={
        <Space className="d-flex justify-content-center">
          <Text strong className="text-white">
            {addActionsFlag
              ? `Добавление записи`
              : editActionsFlag
              ? "Редактирование записи"
              : removeActionsFlag
              ? "Удаление записи"
              : actionType === FormActions.CHECKLIST
              ? "Чек-лист"
              : actionType === FormActions.ADD_USER
              ? "Регистрация пользователя"
              : actionType === FormActions.REPORT ? "Отчет" : title}
          </Text>
        </Space>
      }
      width={containerWidth}
      closable
      closeIcon={
        <Text className="text-white">
          <CloseOutlined />
        </Text>
      }
      centered
      visible={formVisible}
      footer={null}
      onCancel={() => setFormVisible(false)}
    >
      {child}
    </Modal>
  );
};

export default ModalContainer;