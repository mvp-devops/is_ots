import { Input, Layout, Space, Spin, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  ContainerOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import { DesignDocumentView } from "../../types";
import { FormActions, tableLocale } from "../../../main";
import { DesignDocumentForm } from "../forms";
import { ModalContainer } from "../../../../components";
import { useFileStorageTable } from "./hooks";
import TableColumns from "./TableColumns";
import TableFooter from "./TableFooter";
import {
  CollectiveCheckSheet,
  CommentAccountingModalContainer,
  CommentForm,
  useCommentAccounting,
} from "../../../comment-accounting";

const { Text } = Typography;
const { Content } = Layout;

const DesignDocumentTable = () => {
  const {
    loading,
    checkedDesignDocuments,
    setCurrentDocument,
    setCheckedDocuments,
    dataSource,
    searchValue,
    onSearch,
    renderFileStorageFormFlag,
    setFormVisible,
    actionType,
    setActionType,
    collectiveCheckSheetView,
    setCollectiveCheckSheetView,
  } = useFileStorageTable();

  const { renderCommentAccountingFormFlag } = useCommentAccounting();

  const columns = TableColumns();

  const formRender = renderFileStorageFormFlag && (
    <ModalContainer child={<DesignDocumentForm />} />
  );

  const addCommentForm = renderCommentAccountingFormFlag && (
    <ModalContainer child={<CommentForm />} />
  );

  const collectiveCheckSheetViewRender = collectiveCheckSheetView && (
    <CommentAccountingModalContainer
      show={collectiveCheckSheetView}
      onCancel={() => setCollectiveCheckSheetView(false)}
      action={actionType}
      child={<CollectiveCheckSheet />}
    />
  );

  return (
    <Layout>
      {loading ? (
        <Content
          className="d-flex justify-content-center align-items-center"
          style={{ height: window.innerHeight - 54 }}
        >
          <Spin size="large" />
        </Content>
      ) : (
        <Content>
          <Table
            className="border p-1"
            size="small"
            locale={tableLocale}
            loading={loading}
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
            rowSelection={{
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: DesignDocumentView[]
              ) => {
                setCheckedDocuments(selectedRows);
              },
            }}
            onRow={(record, rowIndex) => {
              return {
                onMouseEnter: (event) => setCurrentDocument(record),
              };
            }}
            // title={() => <TableTitle />}
            title={() => (
              <Space className="d-flex align-items-center justify-content-between">
                <Text strong type="secondary">
                  ДОКУМЕНТАЦИЯ
                </Text>
                <Space
                  direction="horizontal"
                  className="d-flex align-items-center justify-content-between"
                >
                  <Input
                    size="small"
                    className="text-secondary"
                    style={{ minWidth: 300 }}
                    placeholder="Поиск..."
                    title="Поиск записей по шифру/наименованию и др."
                    value={searchValue}
                    suffix={<SearchOutlined className="text-secondary" />}
                    onChange={onSearch}
                  />
                  <Space>
                    <PlusOutlined
                      key="ADD_DOCUMENT"
                      className="text-success mr-3 mb-2"
                      style={{ fontSize: 16, cursor: "pointer" }}
                      title="Добавить документ"
                      onClick={() => {
                        setActionType(FormActions.ADD_DOCUMENT);
                        setFormVisible(true);
                      }}
                    />

                    {checkedDesignDocuments.length > 0 && (
                      <ContainerOutlined
                        key="download"
                        className="text-warning mb-2"
                        style={{ fontSize: 16, cursor: "pointer" }}
                        title="Сформировать ЛКП"
                        onClick={() => {
                          setActionType(FormActions.VIEW_COMMENT);
                          setCollectiveCheckSheetView(true);
                        }}
                      />
                    )}
                    {checkedDesignDocuments.length > 0 && (
                      <DownloadOutlined
                        key="DOCUMENTATION_DOWNLOAD"
                        className="text-primary  mb-2"
                        style={{ fontSize: 16, cursor: "pointer" }}
                        title="Скачать"
                        onClick={() => console.log("Скачать документы")}
                      />
                    )}
                  </Space>
                </Space>
              </Space>
            )}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={dataSource}
            footer={() => <TableFooter />}
          />
        </Content>
      )}
      {formRender}
      {collectiveCheckSheetViewRender}
      {addCommentForm}
    </Layout>
  );
};

export default DesignDocumentTable;
