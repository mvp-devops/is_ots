import { Table, Typography } from "antd";
import { ImpulseLineLogView } from "../../../../../../server/common/types/equipment-accounting";
import { ModalContainer } from "../../../../components";
import { ImpulseLineLogForm } from "../forms";
import { Views } from "../../types";
import { TableColumns, sum, useImpulseLineLogTable } from ".";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const ImpulseLineLogTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useImpulseLineLogTable();

  const summary = (data: Views[]) => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={8} align="right">
        <Text strong>Длина:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{sum("impulse-line-log", data)}</Text>
      </Cell>
      <Cell index={2} align="center">
        <Text strong>м</Text>
      </Cell>
      <Cell index={3} colSpan={2} />
    </Row>
  );

  const columns = TableColumns("impulse-line-log", dataSource, currentRow);

  return (
    <>
      <Table
        size="small"
        bordered
        loading={loading}
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
      {formVisible && (
        <ModalContainer
          target="impulse-line-log"
          child={<ImpulseLineLogForm row={currentRow as ImpulseLineLogView} />}
        />
      )}
    </>
  );
};

export default ImpulseLineLogTable;
