import { Table } from "antd";

import { MonitoringView } from "../../types";
import { ModalContainer } from "../../../../components";
import { MonitoringForm } from "../forms";

import { useMonitoringTable, TableColumns } from ".";
import { tableLocale } from "../../../main";

const MonitoringTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useMonitoringTable();

  const columns = TableColumns("monitoring", dataSource, currentRow);

  return (
    <>
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
      />
      {formVisible && (
        <ModalContainer
          target="monitoring"
          child={<MonitoringForm row={currentRow as MonitoringView} />}
        />
      )}
    </>
  );
};

export default MonitoringTable;
