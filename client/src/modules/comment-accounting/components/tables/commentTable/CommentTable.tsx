import { Table } from "antd";

import { DesignDocumentCommentView } from "../../../../../../../server/common/types/comments-accounting";
import { tableLocale } from "../../../../main";

import { useCommentTable } from "./hooks/useCommentTable";

import CommentTableColumns from "./CommentTableColumns";
import CommentTableSummary from "./CommentTableSummary";
import CommentTableFooter from "./CommentTableFooter";
import SolutionTable from "../solutionTable/";

const CommentTable = () => {
  const { loading, renderComments, setCurrentComment } = useCommentTable();

  const columns = CommentTableColumns();

  return (
    <>
      <Table
        rowKey={({ id }) => id}
        size="small"
        loading={loading}
        bordered
        locale={tableLocale}
        pagination={renderComments.length < 10 && false}
        columns={columns}
        dataSource={renderComments}
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
    </>
  );
};

export default CommentTable;
