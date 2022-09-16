import { Input, Layout, Space, Spin, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  ContainerOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import { DesignDocumentView } from "../../../../../../server/common/types/file-storage";
import { FormActions, tableLocale } from "../../../main";
import { DesignDocumentForm } from "../forms";
import { ModalContainer } from "../../../../components";
import { useFileStorageTable } from "./hooks";
import TableColumns from "./TableColumns";
import TableFooter from "./TableFooter";
import TableTitle from "./TableTitle";

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
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
  } = useFileStorageTable();

  const columns = TableColumns();

  const commentsViewFlag =
    formVisible && actionType === FormActions.VIEW_COMMENT;

  const form = (
    <ModalContainer
      show={formVisible}
      onCancel={() => setFormVisible(false)}
      action={actionType}
      child={
        <>
          {renderFileStorageFormFlag && <DesignDocumentForm />}
          {commentsViewFlag && <div>Таблица с замечаниями</div>}
        </>
      }
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
            pagination={dataSource.length < 10 && false}
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
                        onClick={() => console.log("Сформировать ЛКП")}
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
      {form}
    </Layout>
  );
};

export default DesignDocumentTable;
