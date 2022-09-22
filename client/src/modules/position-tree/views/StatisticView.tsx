import { Button, Progress, Space } from "antd";
import { AuditOutlined, FileDoneOutlined } from "@ant-design/icons";
import React from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { FormActions } from "../../main";
import { ModalContainer } from "../../../components";
import { CheckListForm } from "../../comment-accounting";

const StatisticView = () => {
  const { setActionType, setFormVisible } = useActions();

  const onCreateCheckList = () => {
    setActionType(FormActions.CHECKLIST);
    setFormVisible(true);
  };

  const onCreateReport = () => {
    setActionType(FormActions.REPORT);
    setFormVisible(true);
  };

  const { formVisible, actionType } = useTypedSelector((state) => state.main);

  return (
    <Space className="d-flex justify-content-between">
      <div>StatisticView</div>
      <Space direction="horizontal">
        <Progress
          type="dashboard"
          strokeLinecap="butt"
          percent={30}
          width={200}
          format={(percent) => `${percent} Days`}
        />
        <Progress
          type="circle"
          percent={70}
          width={200}
          status="exception"
          showInfo
        />
        <Progress type="circle" percent={100} width={200} />
      </Space>
      <Space>
        <Button
          // icon={<AuditOutlined className="m-2" />}
          onClick={onCreateCheckList}
        >
          Чеклист
        </Button>
        <Button
          // icon={<FileDoneOutlined className="m-2" />}
          onClick={onCreateReport}
        >
          Отчет
        </Button>
      </Space>
      {formVisible && actionType === FormActions.CHECKLIST && (
        <ModalContainer
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<CheckListForm />}
        />
      )}
    </Space>
  );
};

export default StatisticView;
