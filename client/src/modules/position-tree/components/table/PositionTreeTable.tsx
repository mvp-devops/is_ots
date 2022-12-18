import { Input, Layout, Space, Table, Typography } from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  AppstoreOutlined, FileDoneOutlined,
} from "@ant-design/icons";
import { PositionTreeView } from "../../types";
import { FormActions, tableLocale } from "../../../main";
import TableColumns from "./TableColumns";
import { PositionTreeForm } from "../forms";
import { usePositionTreeTable } from "./hooks";
import { ModalContainer } from "../../../../components";
import {QuestionnaireForm} from "../../../equipment-accounting/components/forms/questionnaire-form";
import {useTypedSelector} from "../../../../hooks";
import {Roles} from "../../../main/utils/main.consts";

const { Text } = Typography;
const { Content } = Layout;

const PositionTreeTable = () => {
  const {
    loading,
    // childTarget,
    dataSource,
    setFormVisible,
    setActionType,
    tableTitle,
    addChildButtonTitle,
    setPositionTreeItem,
    setPositionTreeItems,
    searchValue,
    onSearch,
    renderFormFlag,
    setSummaryListOfEquipmentView,
    checkedItems,
  } = usePositionTreeTable();

  const {actionType, formVisible} = useTypedSelector(state => state.main);
  const {currentItem: {id, childrenTarget: childTarget} } = useTypedSelector(state => state.positionTree)
  const columns = TableColumns();

  const {currentUser} = useTypedSelector(state => state.main);
  const menuItems = (
    <>
      <Space>
        {currentUser.roles.includes(Roles.ESCORT) && (
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
        )}
        {(childTarget === "unit" ||
          childTarget === "sub-unit") &&
          (currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.ESCORT) || currentUser.roles.includes(Roles.CUSTOMER)) && (
            <FileDoneOutlined
              key="CREATE_NEW_QUESTIONNAIRE"
              className="text-info mr-3 mb-2"
              style={{fontSize: 16, cursor: "pointer"}}
              title={"Сформировать новый опросный лист"}
              onClick={() => {
                setActionType(FormActions.CREATE_NEW_QUESTIONNAIRE);
                setFormVisible(true);
              }}
            />
          )
        }
      </Space>
      {(childTarget === "project" ||
        childTarget === "unit" ||
        childTarget === "sub-unit") &&
        checkedItems.length > 0 && (
          <Space>
            <AppstoreOutlined
              key="SUMMARY_LIST_OF_EQUIPMENT"
              className="text-info mr-3 mb-2"
              style={{ fontSize: 16, cursor: "pointer" }}
              title="Перечень оборудования"
              onClick={() => {
                setSummaryListOfEquipmentView(true);
                setActionType(FormActions.SUMMARY_LIST_OF_EQUIPMENT);
              }}
            />
          </Space>
        )}
    </>
  );

  return (
    <Layout>
      <Content>
        <Table
          className="border p-1 m-0"
          style={{ fontSize: 12 }}
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
              <Text strong >
                {tableTitle}
              </Text>
              <Space
                direction="horizontal"
                className="d-flex align-items-center justify-content-between"
              >
                <Input
                  size="small"
                  style={{ minWidth: 300 }}
                  placeholder="Поиск..."
                  title="Поиск записей по шифру/наименованию и др."
                  value={searchValue}
                  suffix={<SearchOutlined/>}
                  onChange={onSearch}
                />
                {menuItems}
              </Space>
            </Space>
          )}
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={dataSource.sort((a, b) =>
            "position" in a && "position" in b
              ? a.position < b.position
                ? -1
                : 0
              : a.title < b.title
              ? -1
              : 0
          )}
          footer={() => (
            <Space className="d-flex justify-content-end ">
              <Text >Количество:</Text>
              <Text strong >
                {dataSource.length}
              </Text>
            </Space>
          )}
        />
      </Content>

      {renderFormFlag && <ModalContainer child={<PositionTreeForm />} />}
      {actionType === FormActions.CREATE_NEW_QUESTIONNAIRE && formVisible && <ModalContainer child={<QuestionnaireForm target={childTarget}/>} /> }
    </Layout>
  );
};

export default PositionTreeTable;