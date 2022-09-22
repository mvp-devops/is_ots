import { Collapse, List, Space, Typography } from "antd";
import {
  solutionRequestData,
  statusRequestData,
} from "../../../utils/comment-accounting.consts";
import { useCommentTable } from "./hooks/useCommentTable";

const { Text } = Typography;
const { Item } = List;
const { Panel } = Collapse;

const CommentTableFooter = () => {
  const { criticalitiesList } = useCommentTable();
  return (
    <Collapse>
      <Panel header="Легенда" key="1">
        <Space
          direction="horizontal"
          align="start"
          className="d-flex justify-content-between"
        >
          <List
            header={
              <Text strong>
                * Классификатор кодов замечаний, несоответствий и рекомендаций
              </Text>
            }
            bordered
            size="small"
            // style={{ width: "1000px" }}
            dataSource={criticalitiesList}
            renderItem={({ id, title, description }) => (
              <Item key={id}>
                <Item.Meta
                  avatar={<Text type="secondary">{id}</Text>}
                  title={<Text type="secondary">{title}</Text>}
                  description={description}
                />
              </Item>
            )}
          />
          <List
            header={
              <Text strong>
                ** В столбце «Ответ проектировщика» - «Статус» указывается:
              </Text>
            }
            bordered
            size="small"
            dataSource={statusRequestData}
            renderItem={({ id, title, description }) => (
              <Item key={id}>
                <Item.Meta
                  avatar={<Text type="secondary">{id}</Text>}
                  title={<Text type="secondary">{title}</Text>}
                  description={description}
                />
              </Item>
            )}
          />
          <List
            header={
              <Text strong>
                *** В столбце «Ответ эксперта» - «Статус» указывается:
              </Text>
            }
            bordered
            size="small"
            dataSource={solutionRequestData}
            renderItem={({ id, title, description }) => (
              <Item key={id}>
                <Item.Meta
                  avatar={<Text type="secondary">{id}</Text>}
                  title={<Text type="secondary">{title}</Text>}
                  description={description}
                />
              </Item>
            )}
          />
        </Space>
      </Panel>
    </Collapse>
  );
};

export default CommentTableFooter;
