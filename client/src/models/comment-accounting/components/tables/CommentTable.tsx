import {
  Collapse,
  Dropdown,
  List,
  Menu,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { FC, ReactNode } from "react";
import { DesignDocumentCommentView } from "../../../../../../common/types/comments-accounting";
import { CommentAccounting } from "../../comment-accounting.model";
import {
  criticalityRequestData,
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import SolutionTable from "./SolutionTable";
import { CommentTableProps } from "./types";

const { Text } = Typography;
const { Item } = List;
const { Panel } = Collapse;
const { Row, Cell } = Table.Summary;

const CommentTable: FC<CommentTableProps> = ({ data }) => {
  const commentModel = new CommentAccounting();

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Text
              type="success"
              // onClick={() => setDetailVisible(true)}
            >
              Добавить
            </Text>
          ),

          key: "1",
          icon: (
            <PlusOutlined
              title="Добавить решение"
              className="text-success"
              //  onClick={() => {
              //    setActionType(FormActions.UPDATE);
              //    setAddCommentsVisible(true);
              //  }}
            />
          ),
        },
        {
          label: (
            <Text
              type="secondary"
              // onClick={() => setDetailVisible(true)}
            >
              Редактировать
            </Text>
          ),

          key: "2",
          icon: (
            <EditOutlined
              title="Редактировать запись"
              className="text-secondary"
              //  onClick={() => {
              //    setActionType(FormActions.UPDATE);
              //    setAddCommentsVisible(true);
              //  }}
            />
          ),
        },
        {
          label: (
            <Text
              type="danger"
              // onClick={() => setDetailVisible(true)}
            >
              Удалить
            </Text>
          ),
          key: "3",
          icon: (
            <DeleteOutlined title="Удалить запись" className="text-danger" />
          ),
        },
      ]}
    />
  );

  const expandedRowRender = (record: DesignDocumentCommentView): ReactNode => (
    <SolutionTable record={record} />
  );

  const columns: TableColumnsType<DesignDocumentCommentView> = [
    {
      title: "№ п/п",
      dataIndex: "number",
      key: "number",
      width: 50,
      align: "center",
    },
    {
      title: "Раздел/Марка документа",
      dataIndex: "documentSection",
      key: "documentSection",
      filterSearch:
        commentModel.setCommentFilters("document-section", data).length > 5
          ? true
          : false,
      filters: commentModel.setCommentFilters("document-section", data),
      onFilter: (value: any, record) =>
        record.documentSection
          ? record.documentSection.toUpperCase().includes(value.toUpperCase())
          : false,
      width: 50,
      align: "center",
    },
    {
      title: "Обозначение документа",
      dataIndex: "documentCode",
      key: "documentCode",
      width: 100,
      align: "center",
    },

    {
      title: "Наименование документа",
      dataIndex: "documentTitle",
      key: "documentTitle",
      width: 250,
      align: "center",
    },
    {
      title: "Страница/Лист документа",
      dataIndex: "documentPage",
      key: "documentPage",
      width: 50,
      align: "center",
    },
    {
      title: "Замечание",
      dataIndex: "comment",
      key: "comment",
      width: 400,
      align: "center",
    },
    {
      title: "Нормативная ссылка",
      dataIndex: "normative",
      key: "normative",
      filterSearch:
        commentModel.setCommentFilters("normative", data).length > 5
          ? true
          : false,
      filters: commentModel.setCommentFilters("normative", data),
      onFilter: (value: any, record) =>
        record.normative
          ? record.normative.toUpperCase().includes(value.toUpperCase())
          : false,
      width: 250,
      align: "center",
    },

    {
      title: "Код замечания**",
      dataIndex: "criticalityId",
      key: "criticalityId",
      filterSearch:
        commentModel.setCommentFilters("criticality", data).length > 5
          ? true
          : false,
      filters: commentModel.setCommentFilters("criticality", data),
      onFilter: (value: any, record) =>
        record.criticalityId
          ? record.criticalityId
              .toString()
              .toUpperCase()
              .includes(value.toString().toUpperCase())
          : false,
      width: 50,
      align: "center",
    },

    {
      title: "Наименование отдела/службы",
      dataIndex: "expertSubdivision",
      key: "expertSubdivision",
      filterSearch:
        commentModel.setCommentFilters("expert-subdivision", data).length > 5
          ? true
          : false,
      filters: commentModel.setCommentFilters("expert-subdivision", data),
      onFilter: (value: any, record) =>
        record.expertSubdivision
          ? record.expertSubdivision.toUpperCase().includes(value.toUpperCase())
          : false,
      align: "center",
    },
    {
      title: "Ф.И.О. специалиста, контактные данные",
      dataIndex: "expertContacts",
      key: "expertContacts",
      filterSearch:
        commentModel.setCommentFilters("expert-contacts", data).length > 5
          ? true
          : false,
      filters: commentModel.setCommentFilters("expert-contacts", data),
      onFilter: (value: any, record) =>
        record.expertContacts
          ? record.expertContacts.toUpperCase().includes(value.toUpperCase())
          : false,
      align: "center",
    },
    {
      title: "",
      key: "actions",
      render: (_blank, record) => (
        <Dropdown trigger={["click"]} overlay={menu}>
          <EllipsisOutlined />
        </Dropdown>
      ),
    },
  ];
  return (
    <Table
      rowKey={(row) => row.number}
      size="small"
      loading={false}
      bordered
      pagination={data.length < 10 && false}
      columns={columns}
      dataSource={data}
      expandable={{ expandedRowRender }}
      summary={(data) => (
        <Row>
          <Cell index={0} colSpan={11} align="right">
            <Text strong>Количество:</Text>
          </Cell>
          <Cell index={1} align="center">
            <Text strong>{data.length}</Text>
          </Cell>
        </Row>
      )}
      footer={() => (
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Легенда" key="1">
            <Space
              direction="horizontal"
              align="start"
              className="d-flex justify-content-between"
            >
              <List
                header={
                  <Text strong>
                    * Классификатор кодов замечаний, несоответствий и
                    рекомендаций
                  </Text>
                }
                bordered
                size="small"
                style={{ width: "1000px" }}
                dataSource={criticalityRequestData.slice(1, 11)}
                renderItem={(item) => (
                  <Item key={item.id}>
                    <Item.Meta
                      avatar={<Text type="secondary">{item.id}</Text>}
                      title={
                        <Text type="secondary" key={item.id.toString()}>
                          {item.title}
                        </Text>
                      }
                      description={item.description}
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
                renderItem={(item) => (
                  <Item key={item.id}>
                    <Item.Meta
                      avatar={<Text type="secondary">{item.id}</Text>}
                      title={
                        <Text type="secondary" key={item.id.toString()}>
                          {item.title}
                        </Text>
                      }
                      description={item.description}
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
                renderItem={(item) => (
                  <Item key={item.id}>
                    <Item.Meta
                      avatar={<Text type="secondary">{item.id}</Text>}
                      title={
                        <Text type="secondary" key={item.id.toString()}>
                          {item.title}
                        </Text>
                      }
                      description={item.description}
                    />
                  </Item>
                )}
              />
            </Space>
          </Panel>
        </Collapse>
      )}
    />
  );
};

export default CommentTable;
