import { FC } from "react";
import { Table, TableColumnsType, Typography } from "antd";
import {
  DesignDocumentCommentSolutionView,
  DesignDocumentCommentView,
} from "../../..";
import { setSolutionFilters } from "../table.settings";
import { tableLocale } from "../../../../main";

export interface SolutionTableProps {
  record: DesignDocumentCommentView;
}

const { Text } = Typography;

const SolutionTable: FC<SolutionTableProps> = ({ record }) => {
  const columns: TableColumnsType<DesignDocumentCommentSolutionView> = [
    {
      title: "Ответ проектировщика",
      width: 950,
      className: "bg-primary text-white",
      children: [
        {
          title: "Статус**",
          dataIndex: "statusId",
          key: "statusId",
          width: 50,

          align: "center",
          filterSearch:
            setSolutionFilters("status", record).length > 5 ? true : false,
          filters: setSolutionFilters("status", record),
          onFilter: (value: any, record) =>
            record.statusId
              ? record.statusId
                  .toString()
                  .toUpperCase()
                  .includes(value.toString().toUpperCase())
              : false,
          render: (value: string) =>
            value === "1" ? (
              <Text type="success">{value}</Text>
            ) : value === "2" ? (
              <Text type="danger">{value}</Text>
            ) : (
              <Text type="warning">{value}</Text>
            ),
        },
        {
          title: "Комментарий",
          dataIndex: "answer",
          key: "answer",
          width: 600,
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Ф.И.О. специалиста, контактные данные",
          dataIndex: "designContacts",
          key: "designContacts",
          width: 300,
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
    {
      title: "Ответ эксперта",
      width: 950,
      children: [
        {
          title: "Статус***",
          dataIndex: "solutionId",
          key: "solutionId",
          width: 50,
          align: "center",
          filterSearch:
            setSolutionFilters("solution", record).length > 5 ? true : false,
          filters: setSolutionFilters("solution", record),
          onFilter: (value: any, record) =>
            record.solutionId
              ? record.solutionId
                  .toString()
                  .toUpperCase()
                  .includes(value.toString().toUpperCase())
              : false,
          render: (value: string) =>
            value === "1" ? (
              <Text type="success">{value}</Text>
            ) : value === "2" ? (
              <Text type="danger">{value}</Text>
            ) : (
              <Text type="warning">{value}</Text>
            ),
        },
        {
          title: "Комментарий",
          dataIndex: "solution",
          key: "solution",
          width: 600,
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
        {
          title: "Ф.И.О. специалиста, контактные данные",
          dataIndex: "expertContacts",
          key: "expertContacts",
          width: 300,
          align: "center",
          render: (value) => <Text type="secondary">{value}</Text>,
        },
      ],
    },
  ];

  const data: DesignDocumentCommentSolutionView[] = [];

  for (let i = 0; i < record.solutions.length; i++) {
    const {
      statusId,
      answer,
      designContacts,
      solutionId,
      solution,
      expertContacts,
    } = record.solutions[i];
    data.push({
      statusId,
      answer,
      designContacts,
      solutionId,
      solution,
      expertContacts,
    });
  }

  return (
    <Table
      bordered
      className="d-flex"
      locale={tableLocale}
      columns={columns}
      dataSource={data}
      rowClassName={(record) => "bg-white"}
      pagination={false}
      rowKey={() => Math.random()}
    />
  );
};

export default SolutionTable;
