import { Collapse, Space, Table, TableColumnsType, Typography } from "antd";

const { Text } = Typography;

const { Panel } = Collapse;

interface DataSource {
  number: string;
  data: string;
}

const dataSource: DataSource[] = [
  {
    number: "1",
    data: "Расчет показателя производится на основании количества замечаний, выданных на каждой стадии. Если достигнута Амцель, коэффициент расчета принимается равным 1. Если значение находится в промежутке между Целью и Амцелью значение понижающего коэффициента принимается равным 0,95. Если значение показателя находится между Порогом и Целью, значение понижающего коэффициента принимается равным 0,9. Если значение показателя выходит за границу Цели, значение понижающего показателя принимается равным 0,8. Итоговое значение показателя рассчитывается как произведение веса показателя на суммированное значение произведений весов каждого подпоказателеля на понижающий коэффициент с округлением полученного результата до 3-х знаков после запятой",
  },
  {
    number: "2",
    data: "Расчет производится аналогично п.1",
  },
  {
    number: "3",
    data: "Расчет производится аналогично п.1",
  },
  {
    number: "4",
    data: "Расчет производится аналогично п.1",
  },
  {
    number: "5",
    data: "Расчет производится аналогично п.1",
  },
  {
    number: "6",
    data: "Показатель равен сумме подпоказателей пп. 1 - 5",
  },
];

const Footer = () => {
  const columns: TableColumnsType<DataSource> = [
    {
      title: "№ п/п",
      dataIndex: "number",
      key: "number",
      width: 50,
      align: "center",
      render: (value) => <Text type="secondary">{value}</Text>,
    },
    {
      title:
        "Описание показателя/ методика расчета/ источник информации (исходный документ)",
      dataIndex: "data",
      key: "data",

      render: (value) => <Text type="secondary">{value}</Text>,
    },
  ];

  return (
    <Space direction="vertical" size="small" style={{ minWidth: 1805 }}>
      <Collapse>
        <Panel header="Примечание" key="1" className="m-0 p-0">
          <Table
            pagination={false}
            rowKey={(row) => row.number}
            size="small"
            bordered
            columns={columns}
            dataSource={dataSource}
          />
        </Panel>
      </Collapse>
    </Space>
  );
};

export default Footer;
