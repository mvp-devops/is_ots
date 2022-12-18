import { Input, Space, Table, Typography } from "antd";
import { GeneralInformationView, Views } from "../../types";
import { GeneralInformationForm } from "../forms";
import { ModalContainer } from "../../../../components";
import { TableColumns, useGeneralInformationTable } from ".";
import {FormActions, tableLocale} from "../../../main";
import { useGeneralInformationForm } from "../forms/hooks";
import {useState} from "react";
import {useTypedSelector} from "../../../../hooks";
import {QuestionnaireForm} from "../forms/questionnaire-form";
import {getEquipmentAsset} from "../../api/equipment-accounting.api";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const GeneralInformationTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    renderGeneralInformationFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  } = useGeneralInformationTable();

  const [currentAsset, setCurrentAsset] = useState("");

  const { deleteGeneralInformationItem } = useGeneralInformationForm();
  const {formVisible, actionType} = useTypedSelector(state => state.main);
  const {target} = useTypedSelector(state => state.positionTree);

  const columns = TableColumns(
    "general-information",
    dataSource,
    currentRow,
    deleteGeneralInformationItem
  );

  const summary = (data: readonly Views[]) => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={18} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} colSpan={2} align="center">
        <Text strong>{data.length}</Text>
      </Cell>
    </Row>
  );

  const formRender = renderGeneralInformationFormEditFlag && (
    <ModalContainer
      target="general-information"
      child={
        <GeneralInformationForm row={currentRow as GeneralInformationView} />
      }
    />
  );

  const questionnaireFormRender = formVisible && actionType === FormActions.CREATE_QUESTIONNAIRE && (
    <ModalContainer
      child={
        <QuestionnaireForm target={target}  data={currentAsset}/>
      }
    />
  );

  const searchPanel = (
    <Space className="d-flex justify-content-end mb-4">
      <Input
        placeholder="Поиск..."
        value={searchValue}
        onChange={onSearch}
        style={{
          width: 600,
          padding: 12,
          height: 32,
          gap: 10,
          marginTop: 4,
        }}
      />
    </Space>
  );

  return (
    <>
      {searchPanel}
      <Table
        size="small"
        bordered
        loading={loading}
        locale={tableLocale}
        pagination={{
          locale: {
            // Options.jsx
            items_per_page: "/ стр.",
            jump_to: "Перейти",
            jump_to_confirm: "подтвердить",
            page: "Страница",
            // Pagination.jsx
            prev_page: "Назад",
            next_page: "Вперед",
            prev_5: "Предыдущие 5",
            next_5: "Следующие 5",
            prev_3: "Предыдущие 3",
            next_3: "Следующие 3",
            // page_size: 'размер страницы'
          },
        }}
        scroll={{ y: 500, x: "100%" }}
        dataSource={dataSource.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        )}
        onRow={(record) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record as GeneralInformationView);
              getEquipmentAsset(record.id.toString()).then(data => setCurrentAsset(data));
            },
          };
        }}
        columns={columns}
        rowKey={(record) => Math.random()}
        summary={(data) => summary(data)}
      />
      {formRender}
      {questionnaireFormRender}
    </>
  );
};

export default GeneralInformationTable;