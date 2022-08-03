import { FC } from "react";

import { Skeleton, Space, Typography } from "antd";
import {
  FileExcelOutlined,
  CloseOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { Header, CommentTable } from "../../";
import { setCurrentDate } from "../../../../utils/main.utils";
import { DesignDocumentCommentRequestData } from "../../../../../../common/types/comments-accounting";

interface CollectiveCheckSheetProps {
  data: DesignDocumentCommentRequestData;
}

const { Text } = Typography;

const CollectiveCheckSheet: FC<CollectiveCheckSheetProps> = ({ data }) => {
  return (
    <Skeleton active loading={false}>
      <Space direction="vertical" size="small" className="p-1 m-1 border">
        <Space className="d-flex justify-content-between mt-3 mb-3">
          <Text strong>{setCurrentDate()}</Text>
          <Text strong>ЛИСТ КОЛЛЕКТИВНОЙ ПРОВЕРКИ</Text>
          <Space className="d-flex justify-content-between mx-3">
            <PrinterOutlined
              style={{ cursor: "pointer" }}
              title="Печать"
              className="text-primary"
              //  onClick={() => {
              //    setActionType(FormActions.UPDATE);
              //    setAddCommentsVisible(true);
              //  }}
            />
            <FileExcelOutlined
              style={{ cursor: "pointer" }}
              title="Выгрузить"
              className="text-success"
            />
            <CloseOutlined
              style={{ cursor: "pointer" }}
              title="Закрыть"
              className="text-secondary"
              //  onClick={() => {
              //    setActionType(FormActions.UPDATE);
              //    setAddCommentsVisible(true);
              //  }}
            />
          </Space>
        </Space>
        <Header data={data} />

        <CommentTable data={data.view} />
      </Space>
    </Skeleton>
  );
};

export default CollectiveCheckSheet;
