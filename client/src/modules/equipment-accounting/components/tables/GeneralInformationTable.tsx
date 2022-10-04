import { Table, Typography } from "antd";
import { GeneralInformationView } from "../../types";
import { GeneralInformationForm } from "../forms";
import { ModalContainer } from "../../../../components";
import { TableColumns, useGeneralInformationTable } from ".";
import { tableLocale } from "../../../main";
import { FC } from "react";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const GeneralInformationTable = () => {
  const { loading, renderForm, dataSource, currentRow, setCurrentRow } =
    useGeneralInformationTable();

  const columns = TableColumns("general-information", dataSource, currentRow);

  const summary = () => (
    <Row style={{ margin: 0, padding: 0 }}>
      <Cell index={0} colSpan={18} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} colSpan={2} align="center">
        <Text strong>{dataSource.length}</Text>
      </Cell>
    </Row>
  );

  const formRender = renderForm && (
    <ModalContainer
      target="general-information"
      child={
        <GeneralInformationForm row={currentRow as GeneralInformationView} />
      }
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
        onRow={(record) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record as GeneralInformationView);
            },
          };
        }}
        columns={columns}
        rowKey={(record) => record.id as string}
        summary={() => summary()}
      />
      {formRender}
    </>
  );
};

export default GeneralInformationTable;
