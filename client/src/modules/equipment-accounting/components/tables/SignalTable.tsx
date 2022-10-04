import { Table, Typography } from "antd";
import { ModalContainer } from "../../../../components";

import { SignalView } from "../../types";
import { SignalForm } from "../forms";
import { TableColumns, useSignalTable } from ".";
import { tableLocale } from "../../../main";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const SignalTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useSignalTable();

  const summary = () => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={4} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{dataSource.length}</Text>
      </Cell>
      <Cell index={2} align="center">
        <Text strong>{dataSource.length}</Text>
      </Cell>
      <Cell index={3} colSpan={7} />
    </Row>
  );

  const formRender = formVisible && (
    <ModalContainer
      target="signal"
      child={<SignalForm row={currentRow as SignalView} />}
    />
  );

  const columns = TableColumns("signal", dataSource, currentRow);

  return (
    <>
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
        summary={() => summary()}
      />
      {formRender}
    </>
  );
};

export default SignalTable;
