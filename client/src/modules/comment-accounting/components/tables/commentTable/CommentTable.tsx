import { Table } from "antd";

import { DesignDocumentCommentView } from "../../../../../../../server/common/types/comments-accounting";
import { tableLocale } from "../../../../main";

import { useCommentTable } from "./hooks/useCommentTable";

import CommentTableColumns from "./CommentTableColumns";
import CommentTableSummary from "./CommentTableSummary";
import CommentTableFooter from "./CommentTableFooter";
import SolutionTable from "../solutionTable/";
import { ModalContainer } from "../../../../../components";
import { CommentForm } from "../../forms";
import { useCommentAccounting } from "../../../hooks";

const CommentTable = () => {
  const {
    loading: commentView,
    dataSource,
    setCurrentComment,
  } = useCommentTable();

  const {
    renderCommentAccountingFormFlag,
    formVisible,
    setFormVisible,
    actionType,
  } = useCommentAccounting();

  const columns = CommentTableColumns();

  const renderForm = renderCommentAccountingFormFlag && (
    <ModalContainer
      // show={formVisible}
      // onCancel={() => setFormVisible(false)}
      // action={actionType}
      child={<CommentForm />}
    />
  );

  return (
    <>
      <Table
        rowKey={({ id }) => id}
        size="small"
        loading={commentView}
        bordered
        locale={tableLocale}
        pagination={dataSource.length < 10 && false}
        columns={columns}
        dataSource={dataSource}
        expandable={{
          expandedRowRender: (record: DesignDocumentCommentView) => (
            <SolutionTable record={record} />
          ),
          rowExpandable: (record: DesignDocumentCommentView) =>
            record.solutions.length > 0 ? true : false,
        }}
        onRow={(record) => {
          return {
            onMouseEnter: () => setCurrentComment(record),
          };
        }}
        summary={() => <CommentTableSummary />}
        footer={() => <CommentTableFooter />}
      />
      {renderForm}
    </>
  );
};

export default CommentTable;
