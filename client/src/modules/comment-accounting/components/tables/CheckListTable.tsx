import { Table, TableColumnsType, Typography } from "antd";
import { ReactNode } from "react";
import {
  CheckListCriticalityCriterions,
  CheckListStageCriterions,
} from "../../../../../../server/common/types/comments-accounting";
import { useTypedSelector } from "../../../../hooks";
import { tableLocale } from "../../../main";
import Footer from "../../views/check-list/Footer";

const { Text } = Typography;
const { Row, Cell } = Table.Summary;

const CheckListTable = () => {
  const { checkListData } = useTypedSelector((state) => state.positionTree);
  let total = 0;

  checkListData?.criterions.map((item) => (total += Number(item.stageFactor)));

  // stageTitle: string;
  // stageTotal: number;
  // criterions: CheckListCriticalityCriterions[];

  // criticalityTitle
  // weight: number;
  // coef: number;
  // reductionFactor: number;
  // feedbackFactor: number;
  // result: number;
  // threshold: number;
  // goal: number;
  // tenseGoal: number;

  const columns: TableColumnsType<CheckListStageCriterions> = [
    {
      title: "№ п/п",
      dataIndex: "number",
      key: "number",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record, index) => (
        <Text type="secondary">{index + 1}</Text>
      ),
    },
    {
      title: "Показатель",
      dataIndex: "StageTitle",
      key: "StageTitle",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary">{record.stageTitle}</Text>
      ),

      width: 400,
    },
    {
      title: "Ед. изм.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
    },

    {
      title: "Выполнение",
      width: 150,
      align: "center",
      className: "bg-table-blue border-white",
      children: [
        {
          title: "Порог",
          dataIndex: "threshold",
          key: "threshold",
          width: 50,
          align: "center",
          className: "bg-table-blue border-white",
          render: (value, record) => <Text type="secondary">&ge;</Text>,
        },
        {
          title: "Цель",
          dataIndex: "goal",
          key: "goal",
          width: 50,
          align: "center",
          className: "bg-table-blue border-white",
          render: (value, record) => <Text type="secondary">&le;</Text>,
        },
        {
          title: "Амцель",
          dataIndex: "tenseGoal",
          key: "tenseGoal",
          width: 50,
          align: "center",
          className: "bg-table-blue border-white",
          render: (value, record) => <Text type="secondary">&#61;</Text>,
        },
      ],
    },
    {
      title: "Балл",
      dataIndex: "stageTotal",
      key: "stageTotal",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) =>
        record.stageFactor !== 0 && (
          <Text type="secondary">{record.stageFactor}</Text>
        ),
    },
    {
      title: "Янв.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Фев.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Мар.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Апр.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Май",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Июн.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Июл.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Авг.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Сен.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Окт.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Ноя.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Дек.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "I кв.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "II кв.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "III кв.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "IV кв.",
      width: 50,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary" strong>
          {record.stageTotal.toFixed(3)}
        </Text>
      ),
    },
    {
      title: "Примечание",
      width: 300,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => <Text type="secondary">Примечание</Text>,
    },
  ];

  const expandedRowRender = (
    record: CheckListStageCriterions,
    index: number
  ): ReactNode => {
    const cols: TableColumnsType<CheckListCriticalityCriterions> = [
      {
        title: "№ п/п",
        width: 43,
        className: "bg-white text-white",

        render: (_, record, ind) => (
          <Text type="secondary" style={{ fontSize: 12 }}>{`${index + 1}. ${
            ind + 1
          }`}</Text>
        ),
      },
      {
        title: "Показатель",
        width: 276,
        dataIndex: "criticalityTitle",
        key: "criticalityTitle",
        className: "bg-white",
        render: (value) => (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Ед. изм.",
        width: 48,
        key: "rangeType",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          record.weight !== 0 && (
            <Text italic type="secondary" style={{ fontSize: 12 }}>
              шт.
            </Text>
          ),
      },
      {
        title: "Порог",
        width: 58,
        dataIndex: "threshold",
        key: "threshold",
        className: "bg-white",
        align: "center",
        render: (value) => (
          <Text strong type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Цель",
        width: 50,
        dataIndex: "goal",
        key: "goal",
        className: "bg-white",
        align: "center",
        render: (value) => (
          <Text strong type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Амцель",
        width: 68,
        dataIndex: "tenseGoal",
        key: "tenseGoal",
        className: "bg-white",
        align: "center",
        render: (value) => (
          <Text strong type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Балл",
        width: 52,
        dataIndex: "weight",
        key: "weight",
        className: "bg-white",
        align: "center",
        render: (value) => (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Янв.",
        width: 57,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Фев.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Мар.",
        width: 60,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Апр.",
        width: 60,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Май",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Июн",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Июл",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Авг.",
        width: 60,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Сен.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Окт.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Ноя.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Дек.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "I кв.",
        width: 60,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "II кв.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "III кв.",
        width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "IV кв.",
        width: 60,
        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value, record) =>
          value !== 0 && (
            <Text
              strong
              type={
                value >= record.threshold
                  ? "danger"
                  : value <= record.goal && value > record.tenseGoal
                  ? "warning"
                  : "success"
              }
              style={{ fontSize: 12 }}
            >
              {value}
            </Text>
          ),
      },
      {
        title: "Примечание",

        dataIndex: "count",
        key: "count",
        className: "bg-white",
        align: "center",
        render: (value) => (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
    ];

    const data: CheckListCriticalityCriterions[] = [];

    for (let i = 0; i < record.criterions.length; i++) {
      const {
        criticalityTitle,
        weight,
        threshold,
        tenseGoal,
        goal,
        result,
        count,
        eliminated,
      } = record.criterions[i];
      data.push({
        criticalityTitle,
        weight,
        threshold,
        tenseGoal,
        goal,
        result,
        count,
        eliminated,
      });
    }
    data.push({
      criticalityTitle: "Коэффициент «Обратная связь»",
      weight: 0,
      threshold: 1.25,
      tenseGoal: 1.053,
      goal: 1.111,
      result: 0,
      count: 0,
      eliminated: 0,
    });

    return (
      <Table
        style={{ marginLeft: -8 }}
        showHeader={false}
        bordered
        columns={cols}
        dataSource={data}
        pagination={false}
        rowKey={() => Math.random()}
        locale={tableLocale}
      />
    );
  };

  return (
    <Table
      style={{ width: 1800 }}
      size="small"
      loading={false}
      bordered
      pagination={false}
      columns={columns}
      dataSource={checkListData ? checkListData.criterions : []}
      expandable={{
        expandedRowRender,
        // defaultExpandAllRows: true,
      }}
      locale={tableLocale}
      summary={(data) => (
        <Row>
          <Cell index={0} colSpan={7} align="left">
            <Text strong type="secondary">
              Оценка эффективности деятельности:
            </Text>
          </Cell>
          <Cell index={1} align="center">
            <Text strong type="secondary">
              {total}
            </Text>
          </Cell>
          <Cell index={2} align="center">
            <Text strong type="secondary">
              {checkListData?.result}
            </Text>
          </Cell>
        </Row>
      )}
      footer={() => <Footer />}
    />
  );
};

export default CheckListTable;
