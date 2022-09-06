import { Table, TableColumnsType, Tooltip, Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
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

  const currentMonth = new Date().getMonth() + 1;

  const textPD =
    "Учитывается каждое замечание, выданное к комплекту документации и зафиксированное в листе коллективной проверки в соответствии с процедурами, указанными в Стандарте СК-01.07.03.04 «Организация и проведение комплексной экспертизы Заказчика»";

  const textPSI =
    "Учитывается каждое замечание, выданное к комплекту документации и зафиксированное в акте об окончании заводских приемо-сдаточных испытаний в соответствии с утвержденной программой и методикой испытаний, а также действующими НМД в области промышленной автоматизации и метрологического обеспечения";

  const textPNR =
    "читывается каждое замечание, выданное в рамках осуществления строительного надзора и зафиксированное в акте, реестре замечаний в соответствии с утвержденной программой ШМР, ПНР и КО, а также НМД ГПН СК-01.07.05 Стандарт на процесс «Организация пусконаладочных работ на вводимых в эксплуатацию, строящихся и реконструируемых объектах обустройства»";

  const textED =
    "Учитывается каждое замечание на протяжении жизненного цикла работы оборудования (установки), выданное в рамках промышленной эксплуатации, гарантийных и постгарантийных обязательств, зафиксированное в акте, реестре замечаний в соответствии с действующими НМД в области промышленной автоматизации и метрологического обеспечения";

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
      // width: 150,
      align: "center",
      className: "bg-table-blue border-white",
      children: [
        {
          title: "Порог",
          dataIndex: "threshold",
          key: "threshold",
          width: 60,
          align: "center",
          className: "bg-table-blue border-white table-col",
          render: (value, record) => <Text type="secondary">&ge;</Text>,
        },
        {
          title: "Цель",
          dataIndex: "goal",
          key: "goal",
          width: 54,
          align: "center",
          className: "bg-table-blue border-white table-col",
          render: (value, record) => <Text type="secondary">&le;</Text>,
        },
        {
          title: "Амцель",
          dataIndex: "tenseGoal",
          key: "tenseGoal",
          width: 74,
          align: "center",
          className: "bg-table-blue border-white table-col",
          render: (value, record) => <Text type="secondary">&#61;</Text>,
        },
      ],
    },
    {
      title: "Балл",
      dataIndex: "stageTotal",
      key: "stageTotal",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        record.stageFactor !== 0 && (
          <Text type="secondary">{record.stageFactor}</Text>
        ),
    },
    {
      title: "Янв.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 1 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Фев.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 2 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Мар.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 3 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Апр.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 4 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Май",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 5 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Июн.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 6 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Июл.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 7 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Авг.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 8 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Сен.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 9 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Окт.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 10 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Ноя.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 11 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "Дек.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        currentMonth === 12 && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "I кв.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        (currentMonth === 1 || currentMonth === 2 || currentMonth === 3) && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "II кв.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        (currentMonth === 4 || currentMonth === 5 || currentMonth === 6) && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "III кв.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        (currentMonth === 7 || currentMonth === 8 || currentMonth === 9) && (
          <Text type="secondary" strong>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },
    {
      title: "IV кв.",
      // width: 50,
      align: "center",
      className: "bg-table-blue border-white table-col",
      render: (value, record) =>
        (currentMonth === 10 || currentMonth === 11 || currentMonth === 12) && (
          <Text type="secondary" strong style={{ cursor: "pointer" }}>
            {record.stageTotal.toFixed(2)}
          </Text>
        ),
    },

    {
      title: "Примечание",
      width: 200,
      align: "center",
      className: "bg-table-blue border-white",
      render: (value, record) => (
        <Text type="secondary">
          <Tooltip
            placement="left"
            color="white"
            title={
              record.stageTitle === "Заводские приемо-сдаточные испытания" ? (
                <Text type="secondary">{textPSI}</Text>
              ) : record.stageTitle ===
                "Пусконаладочные работы, комплексное опробование и достижение гарантированных показателей" ? (
                <Text type="secondary">{textPNR}</Text>
              ) : record.stageTitle ===
                "Стадия эксплуатации (гарантийный и постгарантийный периоды)" ? (
                <Text type="secondary">{textED}</Text>
              ) : (
                <Text type="secondary">{textPD}</Text>
              )
            }
            style={{ background: "white", color: "black" }}
          >
            Методика расчета
            <QuestionCircleOutlined
              className="mx-2"
              style={{ marginBottom: 6, marginTop: 10 }}
            />
          </Tooltip>
        </Text>
      ),
    },
  ];

  const expandedRowRender = (
    record: CheckListStageCriterions,
    index: number
  ): ReactNode => {
    const cols: TableColumnsType<CheckListCriticalityCriterions> = [
      {
        title: "№ п/п",
        width: 50,
        className: "bg-white table-col",

        render: (_, record, ind) => (
          <Text type="secondary" style={{ fontSize: 12 }}>{`${index + 1}. ${
            ind + 1
          }`}</Text>
        ),
      },
      {
        title: "Показатель",
        width: 400,
        dataIndex: "criticalityTitle",
        key: "criticalityTitle",
        className: "bg-white ",
        render: (value) => (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Ед. изм.",
        width: 50,
        key: "rangeType",
        className: "bg-white table-col",
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
        width: 60,
        dataIndex: "threshold",
        key: "threshold",
        className: "bg-white table-col",
        align: "center",
        render: (value) => (
          <Text strong type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Цель",
        width: 54,
        dataIndex: "goal",
        key: "goal",
        className: "bg-white table-col",
        align: "center",
        render: (value) => (
          <Text strong type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Амцель",
        width: 74,
        dataIndex: "tenseGoal",
        key: "tenseGoal",
        className: "bg-white table-col",
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
        className: "bg-white table-col",
        align: "center",
        render: (value) => (
          <Text type="secondary" style={{ fontSize: 12 }}>
            {value}
          </Text>
        ),
      },
      {
        title: "Янв.",
        // width: 50,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 1 && (
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
        // width: 49,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 2 && (
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
        // width: 50,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 3 && (
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
        // width: 49,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 4 && (
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
        // width: 50,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 5 && (
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
        // width: 51,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 6 && (
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
        // width: 51,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 7 && (
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
        // width: 49,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 8 && (
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
        // width: 59,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 9 && (
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
        // width: 49,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 10 && (
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
        // width: 50,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 11 && (
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
        // width: 49,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          currentMonth === 12 && (
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
        // width: 48,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          (currentMonth === 1 || currentMonth === 2 || currentMonth === 3) && (
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
        // width: 48,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          (currentMonth === 4 || currentMonth === 5 || currentMonth === 6) && (
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
        // width: 64,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          (currentMonth === 7 || currentMonth === 8 || currentMonth === 9) && (
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
        // width: 54,
        dataIndex: "count",
        key: "count",
        className: "bg-white table-col",
        align: "center",
        render: (value, record) =>
          value !== 0 &&
          (currentMonth === 10 ||
            currentMonth === 11 ||
            currentMonth === 12) && (
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
        width: 200,
        dataIndex: "description",
        key: "description",
        className: "bg-white",
        align: "center",
        // render: (value) => (
        //   <Text type="secondary" style={{ fontSize: 12 }}>
        //     {value}
        //   </Text>
        // ),
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
        style={{ marginLeft: -1, width: 1800 }}
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

  const textType =
    checkListData && checkListData?.result >= 99
      ? "success"
      : checkListData &&
        checkListData.result < 99 &&
        checkListData &&
        checkListData.result >= checkListData.great
      ? "warning"
      : checkListData &&
        checkListData.result < checkListData.great &&
        checkListData &&
        checkListData.result >= checkListData.okay
      ? "warning"
      : "danger";

  return (
    <Table
      style={{ width: 1800 }}
      rowKey={(row) => row.stageTitle}
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
            {currentMonth === 1 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={3} align="center">
            {currentMonth === 2 && checkListData && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={4} align="center">
            {currentMonth === 3 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={5} align="center">
            {currentMonth === 4 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={6} align="center">
            {currentMonth === 5 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={7} align="center">
            {currentMonth === 6 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={8} align="center">
            {currentMonth === 7 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={9} align="center">
            {currentMonth === 8 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={10} align="center">
            {currentMonth === 9 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={11} align="center">
            {currentMonth === 10 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={12} align="center">
            {currentMonth === 11 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={13} align="center">
            {currentMonth === 12 && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={14} align="center">
            {(currentMonth === 1 ||
              currentMonth === 2 ||
              currentMonth === 3) && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={15} align="center">
            {(currentMonth === 4 ||
              currentMonth === 5 ||
              currentMonth === 6) && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={16} align="center">
            {(currentMonth === 7 ||
              currentMonth === 8 ||
              currentMonth === 9) && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={17} align="center">
            {(currentMonth === 10 ||
              currentMonth === 11 ||
              currentMonth === 12) && (
              <Text strong type={textType}>
                {checkListData?.result.toFixed(2)}
              </Text>
            )}
          </Cell>
          <Cell index={17} align="center"></Cell>
        </Row>
      )}
      footer={() => <Footer />}
    />
  );
};

export default CheckListTable;
