import {useEffect, useLayoutEffect, useState} from "react";
import {Input, Layout, Space, Spin, Table, Typography} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined, LoadingOutlined,
} from "@ant-design/icons";
import { ModalContainer } from "../../../../../components";
import {FormActions, tableLocale} from "../../../../main";


import MenuItems from "./MenuItems";
import TableColumns from "./TableColumns";
import TableFooter from "./TableFooter";
import DesignDocumentForm from "../../forms/design-document";
import {DesignDocumentView} from "../../../types"
import {useActions, useTypedSelector} from "../../../../../hooks";
import {CollectiveCheckSheet, CommentAccountingModalContainer, CommentForm} from "../../../../comment-accounting";
import ImportCommentFromLKPForm
  from "../../../../comment-accounting/components/forms/comment-form/ImportCommentFromLKPForm";

const { Text } = Typography;

const DesignDocumentTable = () => {

  const [renderFormFlag, setRenderFormFlag] = useState(false);
  const [renderCommentAccountingFormFlag, setRenderCommentAccountingFormFlag] = useState(false);
  const [currentRow, setCurrentRow] = useState<DesignDocumentView>();
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selected, setSelected] = useState([]);

  const {formVisible, actionType, collectiveCheckSheetView} = useTypedSelector(state => state.main);
  const {target, currentItem: {id}} = useTypedSelector(state => state.positionTree)

  const {setDesignDocuments, setCheckedDocuments, setCollectiveCheckSheetView, setCurrentDocument} = useActions();

  useEffect(() => {
    setDesignDocuments(target, id)
  }, [id]);

  const {loading: loadingData, designDocuments: dataSource, currentDesignDocument} = useTypedSelector(state => state.fileStorage)


  useEffect(() => {
    setRenderFormFlag((formVisible &&
      actionType === FormActions.ADD_DOCUMENT ||
      actionType === FormActions.EDIT_DOCUMENT ||
      actionType === FormActions.REMOVE_DOCUMENT));

    setRenderCommentAccountingFormFlag(formVisible &&
      (actionType === FormActions.ADD_COMMENT ||
        actionType === FormActions.EDIT_COMMENT ||
        actionType === FormActions.REMOVE_COMMENT))
  }, [formVisible, actionType]);


  const columns = TableColumns(dataSource);

  const loading = loadingData && {indicator: <LoadingOutlined style={{ fontSize: 30, marginTop: 10 }} spin />};

  const pagination = (pageSize: number, length: number) => {
    const showSizeChanger = length <= pageSize ? false : true;
    const count = Math.ceil(length / pageSize)
    const pageSizeOptions =  [length]
    return {
      defaultPageSize: pageSize,
      showSizeChanger,
      // pageSizeOptions
    }

  }

  const searchItems = (data: DesignDocumentView[], searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data?.filter((item) => {
        return Object?.values(item)
          ?.join("")
          ?.toLowerCase()
          ?.includes(searchInput?.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const title = (
    <Space className="d-flex align-items-center justify-content-between">
      <Text strong type="secondary">
        Документация
      </Text>
      <Space
        direction="horizontal"
        className="d-flex align-items-center justify-content-between"
      >
        <Input
          placeholder="Поиск..."
          className="text-secondary mt-2 mb-2"
          style={{ color: "red", maxWidth: 600 }}
          size="small"
          suffix={<SearchOutlined className="text-primary" />}
          onChange={(e) => searchItems(dataSource, e.target.value)}
        />
        <MenuItems
          selectedRows={selected}
          resetSelectedRows={() => setSelected([])}
          parentTarget={target}
        />
      </Space>
    </Space>
  );

  const renderForm = renderFormFlag && (
    <ModalContainer child={<DesignDocumentForm  editRow={actionType === FormActions.EDIT_DOCUMENT && currentRow}/>} />
  );

  const addCommentForm = renderCommentAccountingFormFlag && (
    <ModalContainer child={<CommentForm />} />
  );

  const importCommentFromLKPForm = formVisible && actionType === FormActions.IMPORT_COMMENTS_FROM_LKP && <ModalContainer child={<ImportCommentFromLKPForm />} />

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
      <Table
        className="border p-1 mt-2"
        style={{ fontSize: 12 }}
        pagination={pagination(10, (searchInput.length > 1 ? filteredResults : dataSource).length)}
        size="small"
        locale={tableLocale}
        loading={loading}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: (event) => {
              setCurrentRow(record);
              setCurrentDocument(record);
              // console.log(record.id);
            },
          };
        }}
        title={() => title}
        rowKey={(record) => +record.id}
        rowSelection={{
          onChange: (
            selectedRowKeys,
            selectedRows: DesignDocumentView[]
          ) => {
            setCheckedDocuments(selectedRows);
            setSelected(selectedRowKeys)
          },
        }}

        columns={columns}
        dataSource={searchInput.length > 1 ? filteredResults : dataSource}
        footer={() => TableFooter(searchInput.length > 1 ? filteredResults : dataSource)}
      />

      {renderForm}
      {collectiveCheckSheetViewRender}
      {addCommentForm}
      {importCommentFromLKPForm}
    </Layout>
  );
};

export default DesignDocumentTable;