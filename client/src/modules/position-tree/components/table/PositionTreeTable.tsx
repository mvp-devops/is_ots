import { Input, Layout, Space, Table, Typography } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import { FormActions, tableLocale } from "../../../main";
import TableColumns from "./TableColumns";
import { PositionTreeForm } from "../forms";
import { usePositionTreeTable } from "./hooks";
import { ModalContainer } from "../../../../components";

const { Text } = Typography;
const { Content } = Layout;

const PositionTreeTable = () => {
  const {
    loading,
    childTarget,
    dataSource,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    checkedItem,
    tableTitle,
    addChildButtonTitle,
    setPositionTreeItem,
    setPositionTreeItems,
    searchValue,
    onSearch,
    renderFormFlag,
  } = usePositionTreeTable();

  const columns = TableColumns();

  return (
    <Layout>
      <Content>
        <Table
          className="border p-1 m-0"
          style={{ fontSize: 12 }}
          size="small"
          locale={tableLocale}
          loading={loading}
          pagination={dataSource.length < 10 && false}
          rowSelection={{
            onChange: (
              selectedRowKeys: React.Key[],
              selectedRows: PositionTreeView[]
            ) => {
              setPositionTreeItems(selectedRows);
            },
          }}
          onRow={(record, rowIndex) => {
            return {
              onMouseEnter: (event) => setPositionTreeItem(record),
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
                  <PlusOutlined
                    key="ADD_CHILD"
                    className="text-success mr-3 mb-2"
                    style={{ fontSize: 16, cursor: "pointer" }}
                    title={`Добавить ${addChildButtonTitle}`}
                    onClick={() => {
                      setActionType(FormActions.ADD_CHILD);
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
              <Text className="text-secondary">Количество:</Text>
              <Text strong type="secondary">
                {dataSource.length}
              </Text>
            </Space>
          )}
        />
      </Content>

      {renderFormFlag && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<PositionTreeForm />}
        />
      )}
    </Layout>
  );
};

export default PositionTreeTable;
