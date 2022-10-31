import { Table } from "antd";

import { DesignDocumentCommentView } from "../../..";
import { tableLocale } from "../../../../main";

import { useCommentTable } from "./hooks/useCommentTable";

import CommentTableColumns from "./CommentTableColumns";
import CommentTableSummary from "./CommentTableSummary";
import CommentTableFooter from "./CommentTableFooter";
import SolutionTable from "../solutionTable/";

const CommentTable = () => {
  const {
    loading: commentView,
    dataSource,
    setCurrentComment,
  } = useCommentTable();

  const columns = CommentTableColumns();

  return (
    <>
      <Table
        rowKey={({ id }) => id}
        size="small"
        loading={commentView}
        bordered
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
        columns={columns}
        dataSource={dataSource.sort((a, b) =>
          a.createdAt > b.createdAt ? -1 : 0
        )}
        expandable={{
          expandedRowRender: (record: DesignDocumentCommentView) => (
            <SolutionTable record={record} />
          ),
          // rowExpandable: (record: DesignDocumentCommentView) =>
          //   record.solutions.length > 0 ? true : false,
        }}
        onRow={(record) => {
          return {
            onMouseEnter: () => setCurrentComment(record),
          };
        }}
        summary={() => <CommentTableSummary />}
        footer={() => <CommentTableFooter />}
      />
      {/* {renderForm} */}
    </>
  );
};

export default CommentTable;
