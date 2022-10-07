import { Layout, Space, Typography, Row, Col, TableColumnsType } from "antd";
import Table, { ColumnType } from "antd/lib/table";
import { ReactNode } from "react";
import { NSIView } from "../../types";

const { Text } = Typography;

interface TechnicalCardView {
  id: string;
  title: string;
  //   workType:
  //     | "Подготовительные работы"
  //     | "Автономная наладка"
  //     | "Комплексная наладка";
  //   operationTitle: string;
  //   categoryExecutor: string;
  //   laborCosts: number;
}

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

  const numberColumn: ColumnType<NSIView> = {
    title: "№ ТК-ПНР",
    key: "number",
    width: 100,
    align: "right",
    render: (_, record) => renderNumber(record.id as string),
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

  const columns: TableColumnsType<NSIView> = [numberColumn, titleColumn];

  const dataSource: NSIView[] = [
    {
      id: "1",
      title: "Термопреобразователь с унифицированным выходным сигналом",
      code: "",
      description: "",
    },
    {
      id: "2",
      title:
        "Термопреобразователь с унифицированным выходным сигналом интеллектуальный",
      code: "",
      description: "",
    },
    {
      id: "3",
      title: "Термометр сопротивления",
      code: "",
      description: "",
    },
    {
      id: "4",
      title: "Термометр сопротивления интеллектуальный",
      code: "",
      description: "",
    },
    {
      id: "5",
      title: "Преобразователь термоэлектрический",
      code: "",
      description: "",
    },
  ];

  const TechCardsTable = (
    <Table
      className="mt-3"
      bordered
      size="small"
      pagination={dataSource.length < 2 && false}
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id as string}
      onRow={(record) => {
        return {
          onClick: () => console.log(record),
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
