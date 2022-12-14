import { Input, Layout, Space, Spin, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  ContainerOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import { DesignDocumentView } from "../../types";
import { FormActions, tableLocale } from "../../../main";
import  DesignDocumentForm from "../forms/design-document";
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
import {useTypedSelector} from "../../../../hooks";
import {useState} from "react";

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

  const [currentRow, setCurrentRow] = useState<DesignDocumentView>();
  const [selected, setSelected] = useState([]);

  const { renderCommentAccountingFormFlag } = useCommentAccounting();


  const columns = TableColumns();

  const formRender = renderFileStorageFormFlag && (
    <ModalContainer child={<DesignDocumentForm editRow={actionType === FormActions.EDIT_DOCUMENT && currentRow}/>} />
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
                items_per_page: "/ ??????.",
                jump_to: "??????????????",
                jump_to_confirm: "??????????????????????",
                page: "????????????????",
                // Pagination.jsx
                prev_page: "??????????",
                next_page: "????????????",
                prev_5: "???????????????????? 5",
                next_5: "?????????????????? 5",
                prev_3: "???????????????????? 3",
                next_3: "?????????????????? 3",
                // page_size: '???????????? ????????????????'
              },
            }}
            rowSelection={{
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: DesignDocumentView[]
              ) => {
                setCheckedDocuments(selectedRows);
                setSelected(selectedRowKeys)
              },
            }}
            onRow={(record, rowIndex) => {
              return {
                onMouseEnter: (event) => setCurrentRow(record),
              };
            }}
            // title={() => <TableTitle />}
            title={() => (
              <Space className="d-flex align-items-center justify-content-between">
                <Text strong>
                  ????????????????????????
                </Text>
                <Space
                  direction="horizontal"
                  className="d-flex align-items-center justify-content-between"
                >
                  <Input
                    size="small"
                    style={{ minWidth: 300 }}
                    placeholder="??????????..."
                    title="?????????? ?????????????? ???? ??????????/???????????????????????? ?? ????."
                    value={searchValue}
                    suffix={<SearchOutlined />}
                    onChange={onSearch}
                  />
                  <Space>
                    <PlusOutlined
                      key="ADD_DOCUMENT"
                      className="text-success mr-3 mb-2"
                      style={{ fontSize: 16, cursor: "pointer" }}
                      title="???????????????? ????????????????"
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
                        title="???????????????????????? ??????"
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
                        title="??????????????"
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