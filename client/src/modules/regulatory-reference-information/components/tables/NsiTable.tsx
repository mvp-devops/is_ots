import { Input, Layout, Space, Spin, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { FormActions, tableLocale } from "../../../main";
import { ModalContainer } from "../../../../components";
import { useNsiTable } from "./hooks";
import NsiTableColumns from "./NsiTableColumns";
import { RegulatoryReferenceInformationForm } from "../forms";

const { Text } = Typography;
const { Content } = Layout;

const NsiTable = () => {
  const {
    dictionaryTarget,
    renderNsiFormFlag,
    renderNsiItems,
    tableTitle,
    loading,
    actionType,
    setActionType,
    formVisible,
    setFormVisible,
    dataSource,
    setCurrentNsiItem,
    searchValue,
    onSearch,
    exportData,
  } = useNsiTable();

  const columns = NsiTableColumns();

  return (
    <Layout>
      <Content>
        {renderNsiItems.length > 0 ? (
          <Table
            className="border p-1 m-0"
            style={{ fontSize: 12 }}
            size="small"
            locale={tableLocale}
            loading={loading}
            // pagination={dataSource.length < 10 ? false : true}
            onRow={(record, rowIndex) => {
              return {
                onMouseEnter: (event) => setCurrentNsiItem(record),
              };
            }}
            title={() => (
              <Space className="d-flex align-items-center justify-content-between">
                <Text strong type="secondary">
                  {tableTitle}
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
                    <FileExcelOutlined
                      key="DOWNLOAD_DICTIONARY"
                      className="text-success mr-3 mb-2"
                      style={{ fontSize: 16, cursor: "pointer" }}
                      title={`Выгрузить в формате MS Excel`}
                      onClick={() => {
                        exportData(dictionaryTarget);
                      }}
                    />
                    <PlusOutlined
                      key="ADD_DICTIONARY_ITEM"
                      className="text-success mr-3 mb-2"
                      style={{ fontSize: 16, cursor: "pointer" }}
                      title={`Добавить запись`}
                      onClick={() => {
                        setActionType(FormActions.ADD_DICTIONARY_ITEM);
                        setFormVisible(true);
                      }}
                    />
                  </Space>
                </Space>
              </Space>
            )}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={dataSource}
            footer={() => (
              <Space className="d-flex justify-content-end ">
                <Text className="text-secondary">Количество записей:</Text>
                <Text strong type="secondary">
                  {dataSource.length}
                </Text>
              </Space>
            )}
          />
        ) : (
          <Space
            className="d-flex justify-content-center align-items-center"
            style={{
              height: window.innerHeight - 40,
              width: window.innerWidth - 200,
            }}
          >
            <Spin />
          </Space>
        )}
      </Content>

      {renderNsiFormFlag && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<RegulatoryReferenceInformationForm />}
        />
      )}
    </Layout>
  );
};

export default NsiTable;
