import { Input, Space, Table, Typography } from "antd";

import { CableLogForm } from "../forms";

import { ModalContainer } from "../../../../components";
import { TableColumns, useCableLogTable, sum } from ".";
import { Views, CableLogView } from "../../types";
import { tableLocale } from "../../../main";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const CableLogTable = () => {
  const {
    searchValue,
    onSearch,
    loading,
    renderCableLogFormEditFlag,
    dataSource,
    currentRow,
    setCurrentRow,
  } = useCableLogTable();

  const summary = (data: readonly Views[]) => (
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

  const renderForm = renderCableLogFormEditFlag && (
    <ModalContainer
      target="cable-log"
      child={<CableLogForm row={currentRow as CableLogView} />}
    />
  );

  const searchPanel = (
    <Space className="d-flex justify-content-end mb-4">
      <Input
        placeholder="Поиск..."
        className="text-  "
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

  const columns = TableColumns("cable-log", dataSource, currentRow);

  return (
    <>
      {searchPanel}

      <Table
        size="small"
        loading={loading}
        locale={tableLocale}
        bordered
        pagination={{
          locale: {
            // Options.jsx
            items_per_page: "/ стр.",
            jump_to: "Перейти",
            jump_to_confirm: "подтвердить",
            page: "Страница",
            // Pagination.jsx
            prev_page: "Назад",
            next_page: "Вперед",
            prev_5: "Предыдущие 5",
            next_5: "Следующие 5",
            prev_3: "Предыдущие 3",
            next_3: "Следующие 3",
            // page_size: 'размер страницы'
          },
        }}
        scroll={{ y: 500, x: "100%" }}
        dataSource={dataSource.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        )}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: () => {
              setCurrentRow(record);
            },
          };
        }}
        columns={columns}
        rowKey={(record) => record.id as string}
        summary={(data) => summary(data)}
      />

      {renderForm}
    </>
  );
};

export default CableLogTable;