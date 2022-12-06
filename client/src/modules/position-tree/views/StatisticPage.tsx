import {
  Badge,
  Card,
  Divider,
  Layout,
  List,
  Space,
  Spin,
  Typography,
} from "antd";
import { AuditOutlined, FileDoneOutlined } from "@ant-design/icons";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ModalContainer } from "../../../components";
import { CheckListForm } from "../../comment-accounting";
import { useStatistic } from "./hooks";
import MonthReportForm from "../../reports/month-report-form/MonthReportForm";
import {useTypedSelector} from "../../../hooks";
import {Roles} from "../../main/utils/main.consts";

const { Text } = Typography;
const { Content } = Layout;
const { Item } = List;
const { Meta } = Item;

const StatisticPage = () => {
  const {
    loadignStatistic,
    renderCheckListButtonFlag,
    renderCheckListFormFlag,
    renderReportFormFlag,
    onCreateCheckList,
    onCreateReport,
    setShowDetails,
    itemStatistic,
    renderItemStatisticFlag,
    showItemStatisticDescription,
    examinationDocumentationStatistic,
    showExaminationDocumentationStatisticDescription,
    supervisionStatistic,
    renderSupervisionStatisticFlag,
    showSupervisionStatisticDescription,
  } = useStatistic();

  const {currentUser} = useTypedSelector(state => state.main);


  const detailsButton = (target: string) => (
    <QuestionCircleOutlined
      title="Справка"
      className="text-secondary mx-2"
      onClick={() => setShowDetails(target)}
    />
  );

  const reportButton = (
    <FileDoneOutlined
      title="Отчет"
      className="text-primary mx-2"
      onClick={onCreateReport}
    />
  );

  const checkListButton = renderCheckListButtonFlag && (
    <AuditOutlined
      title="Чек-лист"
      className="text-primary mx-2"
      onClick={onCreateCheckList}
    />
  );

  const renderItemStatistic = renderItemStatisticFlag && (
    <Card
      bordered={false}
      style={{ minWidth: 350 }}
      title={
        <Divider>
          <Text type="secondary" strong>
            Общая статистика
          </Text>
        </Divider>
      }
      extra={detailsButton("item-statistic")}
    >
      <List
        itemLayout="horizontal"
        dataSource={itemStatistic}
        renderItem={(item) => (
          <Item>
            <Meta
              title={
                <Space className="d-flex justify-content-between">
                  <Text type="secondary">{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text type="secondary" strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {showItemStatisticDescription && item.description}
                </Text>
              }
            />
          </Item>
        )}
      />
    </Card>
  );

  const renderCheckListForm = renderCheckListFormFlag && (
    <ModalContainer child={<CheckListForm />} />
  );

  const renderReportForm = renderReportFormFlag && (
    <ModalContainer child={<MonthReportForm />} />
  )

  const renderExaminationDocumentationStatisticRender = (
    <Card
      style={{ minWidth: 450 }}
      bordered={false}
      title={
        <Divider>
          <Text type="secondary" strong>
            Экспертиза документации
          </Text>
        </Divider>
      }
      extra={
        <>
          {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.ESCORT) || currentUser.roles.includes(Roles.CLERK))  && checkListButton}
          {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.ESCORT) || currentUser.roles.includes(Roles.CLERK))  && reportButton}
          {detailsButton("examination-documentation-statistic")}
        </>
      }
    >
      <List
        itemLayout="horizontal"
        size="small"
        dataSource={examinationDocumentationStatistic}
        renderItem={(item) => (
          <Item>
            <Meta
              title={
                <Space className="d-flex justify-content-between">
                  <Text type="secondary">{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text type="secondary" strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {showExaminationDocumentationStatisticDescription &&
                    item.description}
                </Text>
              }
            />
          </Item>
        )}
      />
    </Card>
  );


  const renderSupervisionStatistic = renderSupervisionStatisticFlag && (
    <Card
      bordered={false}
      style={{ minWidth: 450 }}
      title={
        <Divider>
          <Text type="secondary" strong>
            Строительный надзор
          </Text>
        </Divider>
      }
      extra={
        <>
          {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS) || currentUser.roles.includes(Roles.ESCORT) || currentUser.roles.includes(Roles.CLERK))  && reportButton}
          {detailsButton("supervision-statistic")}
        </>
      }
    >
      <List
        itemLayout="horizontal"
        size="small"
        dataSource={supervisionStatistic}
        renderItem={(item) => (
          <Item>
            <Meta
              title={
                <Space className="d-flex justify-content-between">
                  <Text type="secondary">{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text type="secondary" strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {showSupervisionStatisticDescription && item.description}
                </Text>
              }
            />
          </Item>
        )}
      />
    </Card>
  );

  return (
    <>
      {!loadignStatistic ? (
        <Layout
          className="site-layout-background"
          style={{ padding: "0 10px" }}
        >
          <Content className="d-flex  align-items-start">
            <>
              {renderItemStatistic}
              {renderExaminationDocumentationStatisticRender}
              {renderSupervisionStatistic}
            </>
          </Content>
        </Layout>
      ) : (
        <Content
          className="d-flex justify-content-center align-items-center"
          style={{
            height: window.innerHeight - 40,
          }}
        >
          <Spin tip="загрузка..." />
        </Content>
      )}
      {renderCheckListForm}
      {renderReportForm}
    </>
  );
};

export default StatisticPage;