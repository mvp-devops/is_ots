import {
  Alert,
  Badge,
  Card, Collapse,
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
import {setFilePath} from "../../main";
import {useEffect, useState} from "react";
import Contacts from "../../../pages/Contacts";

const pathToSvg = (svg: string) => setFilePath(`assets/fields/${svg}`);

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

  const {currentItem} = useTypedSelector(state => state.positionTree);
  const [card, setCard] = useState("");
  useEffect(() => {
  switch (currentItem.target) {
    case "subsidiary": {
      setCard(pathToSvg("MRNG.svg"))
      break;
    }
    case "field": {
      setCard(pathToSvg("GPNZ.svg"))
      break;
    }
    default: break;
  }
  }, [currentItem]);



  return (
    <Space  className={"d-flex  align-items-start"} style={{padding: 10}}>
      {(currentItem.target === "subsidiary" || currentItem.target === "field") ? (
        <>
          <Space direction={"vertical"} className={"d-flex justify-content-center"}>
            <img src={card} width={750}/>
            <Contacts/>
          </Space>
          {!loadignStatistic ? <Space className={"d-flex align-items-start"} style={{width: 800}}>
            {renderItemStatistic}
            {renderExaminationDocumentationStatisticRender}
            {renderSupervisionStatistic}
          </Space> : <Spin  style={{width: 750}} tip="Загрузка..."/>}
        </>
      ) :
        (
          !loadignStatistic ?  <Space className={"d-flex align-items-start"}>
            {renderItemStatistic}
            {renderExaminationDocumentationStatisticRender}
            {renderSupervisionStatistic}
          </Space> : <Spin style={{width: 750}} tip="Загрузка..."/>
        )
      }


      {renderCheckListForm}
      {renderReportForm}
    </Space>
  );
};

export default StatisticPage;