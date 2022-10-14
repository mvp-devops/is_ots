import { Layout, Space, Typography, TableColumnsType } from "antd";
import Table, { ColumnType } from "antd/lib/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Pagination from "rc-pagination/lib/locale/ru_RU";
import { ReactNode } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";
import { FormActions, tableLocale } from "../../../main";
import { NSIView } from "../../types";
import { Locale } from "antd/lib/locale-provider";

const locale: Locale = {
  locale: "ru",
  Pagination,
  global: {
    placeholder: "Выберите",
  },
  Table: tableLocale,
};

const { Text } = Typography;

const renderNumber = (id: string): ReactNode => {
  const ind = +id;
  const numberRow =
    ind > 0 && ind <= 9
      ? `00${ind}`
      : ind > 9 && ind <= 99
      ? `0${ind}`
      : `${ind}`;
  return <Text type="secondary">{numberRow}</Text>;
};

const TechCardsPreView = () => {
  const header = (
    <Space className="d-flex justify-content-end" style={{ marginRight: 100 }}>
      <Space direction="vertical">
        <Text type="secondary" strong className="d-flex justify-content-center">
          ВВЕДЕН В ДЕЙСТВИЕ
        </Text>

        <Text
          type="secondary"
          strong
          underline
          className="d-flex justify-content-center"
        >
          ООО «Газпромнефть-Автоматизация»
        </Text>

        <Text
          type="secondary"
          className="d-flex justify-content-center"
          style={{ fontSize: 14, marginTop: -10 }}
        >
          (наименование организации)
        </Text>

        <Text
          type="secondary"
          strong
          underline
          className="d-flex justify-content-center"
        >
          М-01.07.05-16 «Методика выполнения работ по
        </Text>

        <Text
          type="secondary"
          strong
          underline
          className="d-flex justify-content-center"
        >
          нормированию операций пусконаладочных работ
        </Text>

        <Text
          type="secondary"
          strong
          underline
          className="d-flex justify-content-center"
        >
          КИПиА, ОПС, среднего уровня АСУТП (ЛСУ)»
        </Text>

        <Text
          type="secondary"
          className="d-flex justify-content-center"
          style={{ fontSize: 14, marginTop: -10 }}
        >
          (номер и наименование НМД)
        </Text>
        <Text type="secondary" strong className="d-flex justify-content-end">
          «____» ______________ 20____ г.
        </Text>
      </Space>
    </Space>
  );

  const subHeader = (
    <Space className="d-flex justify-content-center mt-5">
      <Space direction="vertical">
        <Text
          type="secondary"
          strong
          className="d-flex justify-content-center"
          style={{ fontSize: 20 }}
        >
          КТ-339
        </Text>
        <Text type="secondary" strong className="d-flex justify-content-center">
          «Технологические карты на проведение пуско-наладочных работ КИПиА,
          ОПС, среднего уровня АСУТП (ЛСУ)»
        </Text>

        <Text
          type="secondary"
          strong
          className="d-flex justify-content-center"
          style={{ fontSize: 14 }}
        >
          Версия 1.0
        </Text>
        <Text
          type="secondary"
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
          <Text type="secondary">Код бизнес-процесса:</Text>
          <Text type="secondary" strong>
            01.07.05 «Организация пуско-наладочных работ на вводимых в
            эксплуатацию, строящихся и реконструируемых объектах обустройства»
          </Text>
        </Space>
        <Space>
          <Text type="secondary">Владелец КТ:</Text>
          <Text type="secondary" strong>
            Департамент по развитию инфраструктуры
          </Text>
        </Space>
        <Space>
          <Text type="secondary">Владелец информации:</Text>
          <Text type="secondary" strong>
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
      <Text type="secondary" style={{ cursor: "pointer" }}>
        {value}
      </Text>
    ),
  };
  const titleColumn: ColumnType<NSIView> = {
    title: "Наименование и тип единицы оборудования",
    dataIndex: "title",
    key: "title",
    render: (value) => (
      <Text type="secondary" style={{ cursor: "pointer" }}>
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
      <Text type="secondary" style={{ cursor: "pointer" }}>
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
          className="text-secondary"
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
        locale: {},
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

  return (
    <Layout className="site-layout-background p-2">
      {header}
      {subHeader}
      {title}
      {TechCardsTable}
    </Layout>
  );
};

export default TechCardsPreView;
