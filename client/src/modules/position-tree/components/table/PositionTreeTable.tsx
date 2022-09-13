import {
  Button,
  Input,
  Layout,
  Space,
  Spin,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  FileAddOutlined,
  ContainerOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
  DeleteOutlined,
  CheckOutlined,
  SearchOutlined,
  MessageOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { FormActions, tableLocale } from "../../../main";
import { usePositionTreeTableData } from "./hooks/usePositionTreeTableData";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import TableColumns from "./TableColumns";
import { ChangeEvent, MouseEvent } from "react";
import { ModalContainer, PositionTreeForm } from "../forms";

const { Text } = Typography;
const { Content } = Layout;

const PositionTreeTable = () => {
  const {
    loading,
    target,
    childTarget,
    renderItems,
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    currentItem,
    tableTitle,
    addChildButtonTitle,
  } = usePositionTreeTableData();

  const columns = TableColumns();

  console.log("childTarget: ", childTarget);

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
            className="border p-1 m-0"
            style={{ fontSize: 12 }}
            size="small"
            locale={tableLocale}
            loading={loading}
            pagination={renderItems.length < 10 && false}
            rowSelection={{
              onChange: (
                selectedRowKeys: React.Key[],
                selectedRows: PositionTreeView[]
              ) => {
                // setCheckedDocuments(selectedRows);
              },
            }}
            onRow={(record, rowIndex) => {
              return {
                // onMouseEnter: (event) => setCurrentDocument(record),
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
                    // value={searchValue}
                    // suffix={<SearchOutlined className="text-secondary" />}
                    // onChange={onSearch}
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
            dataSource={renderItems}
            footer={() => (
              <Space className="d-flex justify-content-end ">
                <Text className="text-secondary">Количество:</Text>
                <Text strong type="secondary">
                  {renderItems.length}
                </Text>
              </Space>
            )}
          />
        </Content>
      )}
      {formVisible && target && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<PositionTreeForm target={target} actionType={actionType} />}
        />
      )}
    </Layout>
  );
};

export default PositionTreeTable;
