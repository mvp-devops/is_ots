import { Input, Space, Table } from "antd";

import { MonitoringView } from "../../types";
import { ModalContainer } from "../../../../components";
import { MonitoringForm } from "../forms";

import { useMonitoringTable, TableColumns } from ".";
import { tableLocale } from "../../../main";

const MonitoringTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    dataSource,
    renderMonitoringFormFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useMonitoringTable();

  const columns = TableColumns("monitoring", dataSource, currentRow);

  const renderForm = renderMonitoringFormFormEditFlag && (
    <ModalContainer
      target="monitoring"
      child={<MonitoringForm row={currentRow as MonitoringView} />}
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
