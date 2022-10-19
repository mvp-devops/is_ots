import { Input, Space, Table, Typography } from "antd";
import { GeneralInformationView } from "../../types";
import { GeneralInformationForm } from "../forms";
import { ModalContainer } from "../../../../components";
import { TableColumns, useGeneralInformationTable } from ".";
import { tableLocale } from "../../../main";
import { useGeneralInformationForm } from "../forms/hooks";

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

  const { deleteGeneralInformationItem } = useGeneralInformationForm();

  const columns = TableColumns(
    "general-information",
    dataSource,
    currentRow,
    deleteGeneralInformationItem
  );

  const summary = () => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={18} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} colSpan={2} align="center">
        <Text strong>{dataSource.length}</Text>
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

  const searchPanel = (
    <Space className="d-flex justify-content-end mb-4">
      <Input
        placeholder="Поиск..."
        className="text-secondary"
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
        pagination={dataSource.length < 5 && false}
        scroll={{ y: 500, x: "100%" }}
        dataSource={dataSource}
        onRow={(record) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record as GeneralInformationView);
            },
          };
        }}
        columns={columns}
        rowKey={(record) => Math.random()}
        summary={() => summary()}
      />
      {formRender}
    </>
  );
};

export default GeneralInformationTable;
