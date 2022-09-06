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
  FilePdfOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import { FC, ReactNode, useState } from "react";
import { DesignDocumentCommentView } from "../../../../../../server/common/types/comments-accounting";
import {
  criticalityRequestData,
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import CommentForm from "../forms/CommentForm";
import SolutionTable from "./SolutionTable";
import { useNavigate } from "react-router-dom";
import { setCommentFilters } from "./table.settings";
import { ModalContainer } from "../forms";
import { tableLocale } from "../../../main";

export interface CommentTableProps {
  data: DesignDocumentCommentView[];
}

const { Text } = Typography;
const { Item } = List;
const { Panel } = Collapse;
const { Row, Cell } = Table.Summary;

const CommentTable: FC<CommentTableProps> = ({ data }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [actionType, setActionType] = useState("POST");

  const navigate = useNavigate();

  const openDocument = (baseUrl: string, documentPath: string) =>
    navigate(`${baseUrl}/${documentPath}`, { replace: true });

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Space
              className="text-secondary"
              onClick={() => {
                setActionType("POST");
                setFormVisible(true);
              }}
            >
              <PlusOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-success"
              />
              Добавить
            </Space>
          ),

          key: "1",
        },
        {
          label: (
            <Space
              className="text-secondary"
              onClick={() => {
                setActionType("UPDATE");
                setFormVisible(true);
              }}
            >
              <EditOutlined
                style={{ marginBottom: "6px", padding: 0 }}
                className="text-secondary"
              />
              Редактировать
            </Space>
          ),

          key: "2",
        },
        {
          label: (
            <Space
              // onClick={() => setDetailVisible(true)}
              className="text-secondary"
            >
              <DeleteOutlined
                className="text-danger"
                style={{ marginBottom: "6px", padding: 0 }}
              />
              Удалить
            </Space>
          ),
          key: "3",
        },
      ]}
    />
  );

  const expandedRowRender = (record: DesignDocumentCommentView): ReactNode => (
    <SolutionTable record={record} />
  );

  const fileType = "PDF";

  const columns: TableColumnsType<DesignDocumentCommentView> = [
    {
      title: "№ п/п",
      dataIndex: "number",
      key: "number",
      width: 50,
      align: "center",
      render: (value, record, index) => (
        <Text type="secondary">{index + 1}</Text>
      ),
    },
    {
      title: "Раздел/Марка документа",
      dataIndex: "documentSection",
      key: "documentSection",
      filterSearch:
        setCommentFilters("document-section", data).length > 5 ? true : false,
      filters: setCommentFilters("document-section", data),
      onFilter: (value: any, record) =>
        record.documentSection
          ? record.documentSection.toUpperCase().includes(value.toUpperCase())
          : false,
      width: 50,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Обозначение документа",
      dataIndex: "documentCode",
      key: "documentCode",
      width: 100,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },

    {
      title: "Наименование документа",
      dataIndex: "documentTitle",
      key: "documentTitle",
      width: 250,
      align: "center",
      render: (_, record) => {
        return (
          <Text
            onClick={() => openDocument("baseUrl", "documentPath")}
            style={{ cursor: "pointer" }}
            title="Показать документ"
          >
            {fileType && fileType.toUpperCase() === "PDF" ? (
              <FilePdfOutlined
                style={{ marginBottom: "8px", marginRight: "4px" }}
                className="text-danger"
              />
            ) : (
              <FileUnknownOutlined
                style={{ marginBottom: "8px", marginRight: "4px" }}
                className="text-secondary"
              />
            )}

            <Text type="secondary">{record.documentTitle}</Text>
          </Text>
        );
      },
    },
    {
      title: "Страница/Лист документа",
      dataIndex: "documentPage",
      key: "documentPage",
      width: 50,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Замечание",
      dataIndex: "comment",
      key: "comment",
      width: 400,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Нормативная ссылка",
      dataIndex: "normative",
      key: "normative",
      filterSearch:
        setCommentFilters("normative", data).length > 5 ? true : false,
      filters: setCommentFilters("normative", data),
      onFilter: (value: any, record) =>
        record.normative
          ? record.normative.toUpperCase().includes(value.toUpperCase())
          : false,
      width: 250,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },

    {
      title: "Код замечания**",
      dataIndex: "criticalityId",
      key: "criticalityId",
      filterSearch:
        setCommentFilters("criticality", data).length > 5 ? true : false,
      filters: setCommentFilters("criticality", data),
      onFilter: (value: any, record) =>
        record.criticalityId
          ? record.criticalityId
              .toString()
              .toUpperCase()
              .includes(value.toString().toUpperCase())
          : false,
      width: 50,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },

    {
      title: "Наименование отдела/службы",
      dataIndex: "expertSubdivision",
      key: "expertSubdivision",
      filterSearch:
        setCommentFilters("expert-subdivision", data).length > 5 ? true : false,
      filters: setCommentFilters("expert-subdivision", data),
      onFilter: (value: any, record) =>
        record.expertSubdivision
          ? record.expertSubdivision.toUpperCase().includes(value.toUpperCase())
          : false,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "Ф.И.О. специалиста, контактные данные",
      dataIndex: "expertContacts",
      key: "expertContacts",
      filterSearch:
        setCommentFilters("expert-contacts", data).length > 5 ? true : false,
      filters: setCommentFilters("expert-contacts", data),
      onFilter: (value: any, record) =>
        record.expertContacts
          ? record.expertContacts.toUpperCase().includes(value.toUpperCase())
          : false,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title: "",
      key: "actions",
      render: (_blank, record) => (
        <Dropdown trigger={["click"]} overlay={menu}>
          <EllipsisOutlined className="text-secondary" />
        </Dropdown>
      ),
    },
  ];
  return (
    <>
      <Table
        rowKey={(row) => row.number}
        size="small"
        loading={false}
        bordered
        locale={tableLocale}
        pagination={data.length < 10 && false}
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) => (record.comment.length > 0 ? true : false),
        }}
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
                  // style={{ width: "1000px" }}
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
                      ** В столбце «Ответ проектировщика» - «Статус»
                      указывается:
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
      {formVisible && (
        <ModalContainer
          show={formVisible}
          action={actionType}
          onCancel={() => setFormVisible(false)}
          child={
            <CommentForm
              target="project"
              currentId="1"
              onCancel={() => setFormVisible(false)}
            />
          }
        />
      )}
    </>
  );
};

export default CommentTable;
