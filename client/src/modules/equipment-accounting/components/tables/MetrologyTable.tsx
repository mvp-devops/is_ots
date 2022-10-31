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
        dataSource={dataSource.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        )}
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
