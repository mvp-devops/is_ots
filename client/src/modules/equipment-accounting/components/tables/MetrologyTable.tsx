import { Table } from "antd";

import { MetrologyView } from "../../types";

import { MetrologyForm } from "../forms";

import { TableColumns, useMetrologyTable } from ".";
import { ModalContainer } from "../../../../components";
import { tableLocale } from "../../../main";

const MetrologyTable = () => {
  const { loading, formVisible, dataSource, currentRow, setCurrentRow } =
    useMetrologyTable();

  // console.log("Metrologies: ", dataSource);

  const renderForm = formVisible && (
    <ModalContainer
      target="metrology"
      child={<MetrologyForm row={currentRow as MetrologyView} />}
    />
  );

  const columns = TableColumns("metrology", dataSource, currentRow);

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
