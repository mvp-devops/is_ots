import { Table, Typography } from "antd";
import { useCommentTable } from "./hooks/useCommentTable";

const { Row, Cell } = Table.Summary;
const { Text } = Typography;

const CommentTableSummary = () => {
  const { dataSource } = useCommentTable();
  return (
    <Row>
      <Cell index={0} colSpan={11} align="right">
        <Text strong>Количество:</Text>
      </Cell>
      <Cell index={1} align="center">
        <Text strong>{dataSource.length}</Text>
      </Cell>
    </Row>
  );
};

export default CommentTableSummary;
