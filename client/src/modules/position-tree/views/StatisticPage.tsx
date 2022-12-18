import {
  Alert,
  Badge,
  Card, Collapse,
  Divider, Image,
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
import {FormActions, setFilePath} from "../../main";
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

  const {currentUser, formVisible, actionType} = useTypedSelector(state => state.main);


  const detailsButton = (target: string) => (
    <QuestionCircleOutlined
      title="Справка"
      className=" mx-2"
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
          <Text   strong>
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
                  <Text  >{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text   strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text   style={{ fontSize: 12 }}>
                  {showItemStatisticDescription && item.description}
                </Text>
              }
            />
          </Item>
        )}
      />
    </Card>
  );

  const renderCheckListForm = formVisible && actionType === FormActions.CHECKLIST && (
    <ModalContainer child={<CheckListForm />} />
  );

  const renderReportForm = formVisible && actionType === FormActions.REPORT && (
    <ModalContainer child={<MonthReportForm />} />
  )

  const renderExaminationDocumentationStatisticRender = (
    <Card
      style={{ minWidth: 450 }}
      bordered={false}
      title={
        <Divider>
          <Text   strong>
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
                  <Text  >{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text   strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text   style={{ fontSize: 12 }}>
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
          <Text   strong>
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
                  <Text  >{item.title}</Text>
                  <Badge
                    showZero
                    count={
                      <Text   strong>
                        {item.count}
                      </Text>
                    }
                    overflowCount={1000000}
                    style={{ backgroundColor: "#fff" }}
                  />
                </Space>
              }
              description={
                <Text   style={{ fontSize: 12 }}>
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
      currentItem.id === "1" && setCard(pathToSvg(`gpnr.svg`))
      currentItem.id === "2" && setCard(pathToSvg(`mrng.svg`))
      currentItem.id === "3" && setCard(pathToSvg(`gpnz.svg`))
      currentItem.id === "23" && setCard(pathToSvg(`gpnh.svg`))
      break;
    }
    case "field": {
      currentItem.id === "1" && setCard(pathToSvg(`np.svg`))
      currentItem.id === "2" && setCard(pathToSvg(`tz.svg`))
      currentItem.id === "3" && setCard(pathToSvg(`p.svg`))
      currentItem.id === "4" && setCard(pathToSvg(`en.svg`))
      currentItem.id === "5" && setCard(pathToSvg(`ch.svg`))
      currentItem.id === "6" && setCard(pathToSvg(`bvn.svg`))
      currentItem.id === "7" && setCard(pathToSvg(`myam.svg`))
      currentItem.id === "8" && setCard(pathToSvg(`ztm.svg`))
      currentItem.id === "9" && setCard(pathToSvg(`hsv.svg`))
      currentItem.id === "10" && setCard(pathToSvg(`o.svg`))
      currentItem.id === "11" && setCard(pathToSvg(`ach.svg`))
      currentItem.id === "12" && setCard(pathToSvg(`u.svg`))
      currentItem.id === "13" && setCard(pathToSvg(`bnp.svg`))
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
<Image
  width={750}
  src={card}
  fallback="data:image/png;base64,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"
/>
            {/*<img src={card} alt=" Карта в стадии разработки" width={750}/>*/}
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