import { Table } from "antd";

import { MonitoringView } from "../../types";
import { ModalContainer } from "../../../../components";
import { MonitoringForm } from "../forms";

import { useMonitoringTable, TableColumns } from ".";
import { tableLocale } from "../../../main";

const MonitoringTable = () => {
  const {
    loading,
    dataSource,
    renderFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useMonitoringTable();

  const columns = TableColumns("monitoring", dataSource, currentRow);

  const renderForm = renderFormFormEditFlag && (
    <ModalContainer
      target="monitoring"
      child={<MonitoringForm row={currentRow as MonitoringView} />}
    />
  );

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
      {renderForm}
    </>
  );
};

export default MonitoringTable;
