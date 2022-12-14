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
  FilePdfOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import { FC, ReactNode } from "react";
import { DesignDocumentCommentView } from "../..";
import {
  criticalityRequestData,
  solutionRequestData,
  statusRequestData,
} from "../../utils/comment-accounting.consts";
import SolutionTable from "./SolutionTable";
import { setCommentFilters } from "./table.settings";
import { FormActions, setFilePath, tableLocale } from "../../../main";
import { useCommentAccounting } from "../../hooks";
import { useCollectiveCheckSheet } from "../../views/collective-check-list/hooks/useCollectiveCheckSheet";
import { useTypedSelector } from "../../../../hooks";
import {Roles} from "../../../main/utils/main.consts";

export interface CommentTableProps {
  data: DesignDocumentCommentView[];
}

const { Text } = Typography;
const { Item } = List;
const { Panel } = Collapse;
const { Row, Cell } = Table.Summary;

const CommentTable: FC<CommentTableProps> = ({ data }) => {
  const { setFormVisible, setActionType } = useCommentAccounting();

  const { currentDesignDocument } = useTypedSelector(
    (state) => state.fileStorage
  );

  const {currentUser} = useTypedSelector(state => state.main);

  const { dataSource } = useCollectiveCheckSheet();

  const editMenuItem =       {
    label: (
      <Space
        className="  "
        onClick={() => {
          setActionType(FormActions.EDIT_COMMENT);
          setFormVisible(true);
        }}
      >
        <EditOutlined
          style={{ marginBottom: "6px", padding: 0 }}
          className="  "
        />
        Редактировать
      </Space>
    ),

    key: "EDIT_COMMENT",
  }

  const removeMenuItem = {
    label: (
      <Space
        className="  "
        onClick={() => {
          setActionType(FormActions.REMOVE_COMMENT);
          setFormVisible(true);
        }}
      >
        <DeleteOutlined
          className="text-danger"
          style={{ marginBottom: "6px", padding: 0 }}
        />
        Удалить
      </Space>
    ),
    key: "REMOVE_COMMENT",
  }

  const menu = (
    <Menu
      items={currentUser.roles.includes(Roles.EXPERT) ? [editMenuItem, removeMenuItem] : currentUser.roles.includes(Roles.CUSTOMER) ? [editMenuItem] : []}
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
      render: (value, record, index) => (
        <Text >{index + 1}</Text>
      ),
    },
    {
      title: "Раздел/Марка документа",
      dataIndex: "documentSection",
      key: "documentSection",
      filterSearch:
        setCommentFilters("document-section", data)?.length > 5 ? true : false,
      filters: setCommentFilters("document-section", data),
      onFilter: (value: any, record) =>
        record?.documentSection
          ? record?.documentSection
              ?.toUpperCase()
              ?.includes(value?.toUpperCase())
          : false,
      width: 50,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },
    {
      title: "Обозначение документа",
      dataIndex: "documentCode",
      key: "documentCode",
      width: 100,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },

    {
      title: "Наименование документа",
      dataIndex: "documentTitle",
      key: "documentTitle",
      width: 250,
      align: "center",
      render: (_, record) => {
        return (
          currentDesignDocument && (
            <Space className="d-flex justify-content-start">
              <Text >
                {currentDesignDocument?.fileType?.toUpperCase() === ".PDF" ? (
                  <FilePdfOutlined className="text-danger" />
                ) : (
                  <FileUnknownOutlined className="  " />
                )}
              </Text>
              <a
                href={setFilePath(
                  `${currentDesignDocument?.filePath}/${currentDesignDocument?.fileName}`
                )}
                target="_blank"
                rel="noreferrer"
                className="mx-2   "
                title={record?.documentTitle}
              >
                {record?.documentTitle}
              </a>
            </Space>
          )
        );
      },
    },
    {
      title: "Страница/Лист документа",
      dataIndex: "documentPage",
      key: "documentPage",
      width: 50,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },
    {
      title: "Замечание",
      dataIndex: "comment",
      key: "comment",
      width: 400,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },
    {
      title: "Нормативная ссылка",
      dataIndex: "normative",
      key: "normative",
      filterSearch:
        setCommentFilters("normative", data)?.length > 5 ? true : false,
      filters: setCommentFilters("normative", data),
      onFilter: (value: any, record) =>
        record?.normative
          ? record?.normative?.toUpperCase()?.includes(value?.toUpperCase())
          : false,
      width: 250,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },

    {
      title: "Код замечания**",
      dataIndex: "criticalityId",
      key: "criticalityId",
      filterSearch:
        setCommentFilters("criticality", data)?.length > 5 ? true : false,
      filters: setCommentFilters("criticality", data),
      onFilter: (value: any, record) =>
        record?.criticalityId
          ? record?.criticalityId
              ?.toString()
              ?.toUpperCase()
              ?.includes(value?.toString()?.toUpperCase())
          : false,
      width: 50,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },

    {
      title: "Наименование отдела/службы",
      dataIndex: "expertSubdivision",
      key: "expertSubdivision",
      filterSearch:
        setCommentFilters("expert-subdivision", data)?.length > 5
          ? true
          : false,
      filters: setCommentFilters("expert-subdivision", data),
      onFilter: (value: any, record) =>
        record?.expertSubdivision
          ? record?.expertSubdivision
              ?.toUpperCase()
              ?.includes(value?.toUpperCase())
          : false,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },
    {
      title: "Ф.И.О. специалиста, контактные данные",
      dataIndex: "expertContacts",
      key: "expertContacts",
      filterSearch:
        setCommentFilters("expert-contacts", data)?.length > 5 ? true : false,
      filters: setCommentFilters("expert-contacts", data),
      onFilter: (value: any, record) =>
        record?.expertContacts
          ? record?.expertContacts
              ?.toUpperCase()
              ?.includes(value?.toUpperCase())
          : false,
      align: "center",
      render: (value) => <Text >{value}</Text>,
    },
    {
      title: "",
      key: "actions",
      render: (_blank, record) => (
          <Dropdown trigger={["click"]} overlay={menu}>
            <EllipsisOutlined className="  " />
          </Dropdown>

      ),
    },
  ];
  return (
    <>
      <Table
        rowKey={(row) => row?.number}
        size="small"
        loading={false}
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
          a?.createdAt > b?.createdAt ? -1 : 0
        )}
        expandable={{
          expandedRowRender,
          rowExpandable: (record) =>
            record?.comment?.length > 0 ? true : false,
        }}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onMouseEnter: (event) => setCurrentComment(record),
        //   };
        // }}
        summary={(data) => (
          <Row>
            <Cell index={0} colSpan={11} align="right">
              <Text strong>Количество:</Text>
            </Cell>
            <Cell index={1} align="center">
              <Text strong>{dataSource?.length}</Text>
            </Cell>
          </Row>
        )}
        footer={() => (
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
                      * Классификатор кодов замечаний, несоответствий и
                      рекомендаций
                    </Text>
                  }
                  bordered
                  size="small"
                  // style={{ width: "1000px" }}
                  dataSource={criticalityRequestData?.slice(1, 11)}
                  renderItem={(item) => (
                    <Item key={item?.id}>
                      <Item.Meta
                        avatar={<Text   >{item?.id}</Text>}
                        title={
                          <Text    key={item?.id.toString()}>
                            {item?.title}
                          </Text>
                        }
                        description={item?.description}
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
                    <Item key={item?.id}>
                      <Item.Meta
                        avatar={<Text   >{item?.id}</Text>}
                        title={
                          <Text    key={item?.id.toString()}>
                            {item?.title}
                          </Text>
                        }
                        description={item?.description}
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
                    <Item key={item?.id}>
                      <Item.Meta
                        avatar={<Text   >{item?.id}</Text>}
                        title={
                          <Text    key={item?.id.toString()}>
                            {item?.title}
                          </Text>
                        }
                        description={item?.description}
                      />
                    </Item>
                  )}
                />
              </Space>
            </Panel>
          </Collapse>
        )}
      />
    </>
  );
};

export default CommentTable;