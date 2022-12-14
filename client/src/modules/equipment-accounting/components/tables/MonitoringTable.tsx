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
    renderMonitoringFormEditFlag,
    currentRow,
    setCurrentRow,
  } = useMonitoringTable();

  const columns = TableColumns("monitoring", dataSource, currentRow);

  const renderForm = renderMonitoringFormEditFlag && (
    <ModalContainer
      target="monitoring"
      child={<MonitoringForm row={currentRow as MonitoringView} />}
    />
  );

  const searchPanel = (
    <Space className="d-flex justify-content-end mb-4">
      <Input
        placeholder="Поиск..."
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