import { Space, Typography } from "antd";
import { FileExcelOutlined, PlusOutlined } from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import Header from "./Header";
import CommentTable from "../../components/tables/CommentTable";
import { useCollectiveCheckSheet } from "./hooks/useCollectiveCheckSheet";
import { useCommentAccounting } from "../../hooks";
import { FormActions } from "../../../main";
import { CommentForm } from "../../components";
import { ModalContainer } from "../../../../components";
import {
  CollectiveCheckSheetHeaders,
  DesignDocumentCommentView,
} from "../../../../../../server/common/types/comments-accounting";

const { Text } = Typography;

const CollectiveCheckSheet = () => {
  const {
    currentDesignDocument,
    exportLKPData,
    projectTitleRender,
    unitTitleRender,
    unitQuestionareRender,
    subUnitTitleRender,
    subUnitQuestionareRender,
  } = useCollectiveCheckSheet();
  const {
    formVisible,
    setFormVisible,
    actionType,
    setActionType,
    renderCommentAccountingFormFlag,
  } = useCommentAccounting();

  const body: {
    headers: CollectiveCheckSheetHeaders;
    data: DesignDocumentCommentView[];
  } = {
    headers: {
      projectTitleRender,
      unitTitleRender,
      unitQuestionareRender,
      subUnitTitleRender,
      subUnitQuestionareRender,
    },
    data: currentDesignDocument ? currentDesignDocument.comments : [],
  };

  const renderForm = renderCommentAccountingFormFlag && (
    <ModalContainer
      show={formVisible}
      onCancel={() => setFormVisible(false)}
      action={actionType}
      child={<CommentForm />}
    />
  );

  return (
    <Space direction="vertical" size="small" className="p-3 m-1 border">
      <Space className="d-flex justify-content-between mt-3 mb-3">
        <Text strong>{setCurrentDate()}</Text>
        <Text strong>ЛИСТ КОЛЛЕКТИВНОЙ ПРОВЕРКИ</Text>
        <Space className="d-flex justify-content-between mx-3">
          <PlusOutlined
            style={{ fontSize: 16, cursor: "pointer" }}
            title="Добавить замечание"
            className="text-success"
            onClick={() => {
              setActionType(FormActions.ADD_COMMENT);
              setFormVisible(true);
            }}
          />
          <FileExcelOutlined
            style={{ fontSize: 16, cursor: "pointer" }}
            title="Выгрузить"
            className="text-success"
            onClick={() => exportLKPData(body)}
          />
        </Space>
      </Space>
      <Header />

      {currentDesignDocument && (
        <CommentTable data={currentDesignDocument.comments} />
      )}
      {renderForm}
    </Space>
  );
};

export default CollectiveCheckSheet;
