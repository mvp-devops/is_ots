import { Input, Space, Table } from "antd";

import { MetrologyView } from "../../types";

import { MetrologyForm } from "../forms";

import { TableColumns, useMetrologyTable } from ".";
import { ModalContainer } from "../../../../components";
import { tableLocale } from "../../../main";

const MetrologyTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    dataSource,
    renderMetrologyFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useMetrologyTable();

  const renderForm = renderMetrologyFormEditFlag && (
    <ModalContainer
      target="metrology"
      child={<MetrologyForm row={currentRow as MetrologyView} />}
    />
  );

  const columns = TableColumns("metrology", dataSource, currentRow);

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
        dataSource={dataSource.sort((a, b) => (a.tag < b.tag ? -1 : 0))}
        columns={columns}
        onRow={(record) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record as MetrologyView);
            },
          };
        }}
        rowKey={(record) => record.id as string}
      />
      {renderForm}
    </>
  );
};

export default MetrologyTable;
