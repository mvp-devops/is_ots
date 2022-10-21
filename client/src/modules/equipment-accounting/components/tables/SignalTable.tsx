import { Input, Space, Table, Typography } from "antd";
import { ModalContainer } from "../../../../components";

import { SignalView, Views } from "../../types";
import { SignalForm } from "../forms";
import { TableColumns, useSignalTable } from ".";
import { tableLocale } from "../../../main";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const SignalTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    dataSource,
    renderSignalFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useSignalTable();

  const summary = (data: readonly Views[]) => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={4} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{data.length}</Text>
      </Cell>
      <Cell index={2} align="center">
        <Text strong>{data.length}</Text>
      </Cell>
      <Cell index={3} colSpan={7} />
    </Row>
  );

  const columns = TableColumns("signal", dataSource, currentRow);

  const renderForm = renderSignalFormEditFlag && (
    <ModalContainer
      target="signal"
      child={<SignalForm row={currentRow as SignalView} />}
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
        scroll={{ y: 500, x: "100%" }}
        pagination={dataSource.length < 5 && false}
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record);
            },
          };
        }}
        rowKey={(record) => record.id as string}
        summary={(data) => summary(data)}
      />
      {renderForm}
    </>
  );
};

export default SignalTable;
