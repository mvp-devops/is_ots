import { Layout, Space, Typography, TableColumnsType, Pagination } from "antd";
import Table, { ColumnType } from "antd/lib/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";
import { FormActions, tableLocale } from "../../../main";
import { NSIView } from "../../types";
import { FileExcelOutlined } from "@ant-design/icons";
import { exportTechCards } from "../../api/regulatory-reference-information.api";

const { Text } = Typography;

const renderNumber = (id: string): ReactNode => {
  const ind = +id;
  const numberRow =
    ind > 0 && ind <= 9
      ? `00${ind}`
      : ind > 9 && ind <= 99
      ? `0${ind}`
      : `${ind}`;
  return <Text   >{numberRow}</Text>;
};

const TechCardsPreView = () => {
  const header = (
    <Space className="d-flex justify-content-end" style={{ marginRight: 100 }}>
      <Space direction="vertical">
        <Text    strong className="d-flex justify-content-center">
          ВВЕДЕН В ДЕЙСТВИЕ
        </Text>

        <Text

          strong
          underline
          className="d-flex justify-content-center"
        >
          ООО «Газпромнефть-Автоматизация»
        </Text>

        <Text

          className="d-flex justify-content-center"
          style={{ fontSize: 14, marginTop: -10 }}
        >
          (наименование организации)
        </Text>

        <Text

          strong
          underline
          className="d-flex justify-content-center"
        >
          М-01.07.05-16 «Методика выполнения работ по
        </Text>

        <Text

          strong
          underline
          className="d-flex justify-content-center"
        >
          нормированию операций пусконаладочных работ
        </Text>

        <Text

          strong
          underline
          className="d-flex justify-content-center"
        >
          КИПиА, ОПС, среднего уровня АСУТП (ЛСУ)»
        </Text>

        <Text

          className="d-flex justify-content-center"
          style={{ fontSize: 14, marginTop: -10 }}
        >
          (номер и наименование НМД)
        </Text>
        <Text    strong className="d-flex justify-content-end">
          «____» ______________ 20____ г.
        </Text>
      </Space>
    </Space>
  );

  const subHeader = (
    <Space className="d-flex justify-content-center mt-5">
      <Space direction="vertical">
        <Text

          strong
          className="d-flex justify-content-center"
          style={{ fontSize: 20 }}
        >
          КТ-339
        </Text>
        <Text    strong className="d-flex justify-content-center">
          «Технологические карты на проведение пуско-наладочных работ КИПиА,
          ОПС, среднего уровня АСУТП (ЛСУ)»
        </Text>

        <Text

          strong
          className="d-flex justify-content-center"
          style={{ fontSize: 14 }}
        >
          Версия 1.0
        </Text>
        <Text

          strong
          className="d-flex justify-content-center"
          style={{ fontSize: 14 }}
        >
          ВВЕДЕН ВПЕРВЫЕ
        </Text>
      </Space>
    </Space>
  );

  const title = (
    <Space className="d-flex justify-content-start mt-5">
      <Space direction="vertical">
        <Space>
          <Text   >Код бизнес-процесса:</Text>
          <Text    strong>
            01.07.05 «Организация пуско-наладочных работ на вводимых в
            эксплуатацию, строящихся и реконструируемых объектах обустройства»
          </Text>
        </Space>
        <Space>
          <Text   >Владелец КТ:</Text>
          <Text    strong>
            Департамент по развитию инфраструктуры
          </Text>
        </Space>
        <Space>
          <Text   >Владелец информации:</Text>
          <Text    strong>
            Департамент информационных технологий, автоматизации и
            телекоммуникаций
          </Text>
        </Space>
      </Space>
    </Space>
  );

  const { renderNsiItems } = useTypedSelector((state) => state.nsi);
  const { setFormVisible, setActionType, setCurrentNsiItem } = useActions();

  const numberColumn: ColumnType<NSIView> = {
    title: "№ п/п",
    key: "number",
    width: 100,
    align: "right",
    render: (_, record) => renderNumber(record.id as string),
  };
  const codeColumn: ColumnType<NSIView> = {
    title: "Шифр",
    dataIndex: "code",
    key: "code",
    width: 300,
    render: (value) => (
      <Text    style={{ cursor: "pointer" }}>
        {value}
      </Text>
    ),
  };
  const titleColumn: ColumnType<NSIView> = {
    title: "Наименование и тип единицы оборудования",
    dataIndex: "title",
    key: "title",
    render: (value) => (
      <Text    style={{ cursor: "pointer" }}>
        {value}
      </Text>
    ),
  };
  const descriptionColumn: ColumnType<NSIView> = {
    title: "Примечание",
    dataIndex: "description",
    width: 300,
    key: "description",
    render: (value) => (
      <Text    style={{ cursor: "pointer" }}>
        {value}
      </Text>
    ),
  };
  const actionsColumn: ColumnType<NSIView> = {
    title: "Действия",
    key: "operation",
    align: "right",
    width: 50,
    render: (_blank, record) => (
      <Space size="middle" className="d-flex justify-content-end">
        <EditOutlined
          title="Редактировать информацию"
          className="  "
          onClick={() => {
            setActionType(FormActions.EDIT_DICTIONARY_ITEM);
            setFormVisible(true);
          }}
        />

        <DeleteOutlined
          title="Удалить запись"
          className="text-danger"
          onClick={() => {
            setActionType(FormActions.REMOVE_DICTIONARY_ITEM);
            setFormVisible(true);
          }}
        />
      </Space>
    ),
  };

  const columns: TableColumnsType<NSIView> = [
    numberColumn,
    codeColumn,
    titleColumn,
    descriptionColumn,
    actionsColumn,
  ];

  const TechCardsTable = (
    <Table
      className="mt-3"
      locale={tableLocale}
      // bordered
      size="small"
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
      dataSource={renderNsiItems.sort((a, b) => (a.id < b.id ? -1 : 0))}
      rowKey={(record) => record.id as string}
      onRow={(record, rowIndex) => {
        return {
          onMouseEnter: (event) => setCurrentNsiItem(record),
        };
      }}
    />
  );
  const actionsPanel = (
    <Space
      className="   d-flex justify-content-between  justify-items-end me-2"
      // onSelect={(key) => exportTechCards()}
    >
      <span></span>
      <FileExcelOutlined
        onClick={() => exportTechCards()}
        style={{ marginBottom: "6px", padding: 0, fontSize: 20 }}
        className="text-success"
        title="Сформировать файл выгрузки"
      />
    </Space>
  );

  return (
    <Layout className="site-layout-background p-2">
      {header}
      {subHeader}
      {title}
      {actionsPanel}
      {TechCardsTable}
    </Layout>
  );
};

export default TechCardsPreView;