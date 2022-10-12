import { Input, Space, Table, Typography } from "antd";
import { ImpulseLineLogView, Views } from "../../types";
import { ModalContainer } from "../../../../components";
import { ImpulseLineLogForm } from "../forms";
import { TableColumns, sum, useImpulseLineLogTable } from ".";
import { tableLocale } from "../../../main";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const ImpulseLineLogTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    renderImpulseLineLogFormFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  } = useImpulseLineLogTable();

  const summary = (data: Views[]) => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={10} align="right">
        <Text strong>Длина:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{sum("impulse-line-log", data)}</Text>
      </Cell>
      <Cell index={2} align="center">
        <Text strong>м</Text>
      </Cell>
      <Cell index={3} />
    </Row>
  );

  const renderForm = renderImpulseLineLogFormFormEditFlag && (
    <ModalContainer
      target="impulse-line-log"
      child={<ImpulseLineLogForm row={currentRow as ImpulseLineLogView} />}
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

  const columns = TableColumns("impulse-line-log", dataSource, currentRow);

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
        columns={columns}
        onRow={(record) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record);
            },
          };
        }}
        rowKey={(record) => record.id as string}
        summary={(data) => summary(data as Views[])}
      />
      {renderForm}
    </>
  );
};

export default ImpulseLineLogTable;
