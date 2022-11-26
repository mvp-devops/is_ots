import {useEffect, useLayoutEffect, useState} from "react";
import {Input, Layout, Space, Spin, Table, Typography} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined, LoadingOutlined,
} from "@ant-design/icons";
import type {NormativeView} from "../../../../../../../server/common/types/file-storage";
import { ModalContainer } from "../../../../../components";
import {FormActions, tableLocale} from "../../../../main";
import {findAllNormatives} from "../../../../file-storage/api/file-storage.api";

import NewCommentForm from "../../forms/NewCommentForm";

import MenuItems from "./MenuItems";
import TableColumns from "./TableColumns";
import TableFooter from "./TableFooter";
import NormativeForm from "../../forms/NormativeForm";
import {useActions, useTypedSelector} from "../../../../../hooks";
import {DesignDocumentView} from "../../../../../../../server/common/types/file-storage";

const { Text } = Typography;

const NormativeTable = () => {

  const [renderFormFlag, setRenderFormFlag] = useState(false);
  const [currentRow, setCurrentRow] = useState<NormativeView>();
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const {formVisible, actionType} = useTypedSelector(state => state.main)

  const {uploadNormative, setNormativeList, setCurrentNormative} = useActions();

  useLayoutEffect(() => {
    setNormativeList()
  }, []);



  const {normativeList: dataSource, currentNormative} = useTypedSelector(state => state.nsi)


  useEffect(() => {
    setRenderFormFlag((actionType === FormActions.ADD_NORMATIVE || actionType === FormActions.EDIT_NORMATIVE || actionType === FormActions.REMOVE_NORMATIVE) && formVisible)
  }, [formVisible, actionType]);


  const columns = TableColumns(dataSource);

  const loading = dataSource.length === 0 && {indicator: <LoadingOutlined style={{ fontSize: 30, marginTop: 10 }} spin />};

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

  const searchItems = (data: NormativeView[], searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const title = (
    <Space className="d-flex align-items-center justify-content-between">
      <Text strong type="secondary">
        Нормативные документы
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
        <MenuItems selectedRows={selectedRows} resetSelectedRows={() => setSelectedRows([])}/>
      </Space>
    </Space>
  );

  const renderForm = renderFormFlag && (
    <ModalContainer child={<NormativeForm action={actionType} editRow={actionType === FormActions.EDIT_NORMATIVE && currentRow}/>} />
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
            onMouseEnter: (event) => setCurrentRow(record),
          };
        }}
        title={() => title}
        rowKey={(record) => record.id}
        rowSelection={{
          onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys)}}
        columns={columns}
        dataSource={searchInput.length > 1 ? filteredResults : dataSource}
        footer={() => TableFooter(searchInput.length > 1 ? filteredResults : dataSource)}
      />

      {renderForm}
    </Layout>
  );
};

export default NormativeTable;