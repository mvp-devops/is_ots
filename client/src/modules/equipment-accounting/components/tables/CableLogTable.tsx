import { Table, Typography } from "antd";

import { CableLogForm } from "../forms";

import { ModalContainer } from "../../../../components";
import { TableColumns, useCableLogTable, sum } from ".";
import { Views, CableLogView } from "../../types";
import { tableLocale } from "../../../main";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const CableLogTable = () => {
  const { loading, renderForm, dataSource, currentRow, setCurrentRow } =
    useCableLogTable();

  const summary = (data: Views[]) => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={11} align="right">
        <Text strong>Длина:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{sum("cable-log", data)}</Text>
      </Cell>
      <Cell index={2} align="center">
        <Text strong>м</Text>
      </Cell>
      <Cell index={3} colSpan={2} />
    </Row>
  );

  const formRender = renderForm && (
    <ModalContainer
      target="cable-log"
      child={<CableLogForm row={currentRow as CableLogView} />}
    />
  );

  const columns = TableColumns("cable-log", dataSource, currentRow);

  return (
    <>
      {dataSource.length > 0 && (
        <Table
          size="small"
          loading={loading}
          locale={tableLocale}
          bordered
          pagination={dataSource.length < 5 && false}
          scroll={{ y: 500, x: "100%" }}
          dataSource={dataSource}
          onRow={(record, rowIndex) => {
            return {
              onMouseEnter: () => {
                setCurrentRow(record);
              },
            };
          }}
          columns={columns}
          rowKey={(record) => record.id as string}
          summary={(data) => summary(data as Views[])}
        />
      )}
      {formRender}
    </>
  );
};

export default CableLogTable;
