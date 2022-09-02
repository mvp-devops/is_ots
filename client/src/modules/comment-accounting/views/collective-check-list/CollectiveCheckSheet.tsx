import { FC } from "react";

import { Skeleton, Space, Typography } from "antd";
import { FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import { DesignDocumentCommentRequestData } from "../../../../../../server/common/types/comments-accounting";
import Header from "./Header";
import CommentTable from "../../components/tables/CommentTable";

interface CollectiveCheckSheetProps {
  data: DesignDocumentCommentRequestData;
}

const { Text } = Typography;

const CollectiveCheckSheet: FC<CollectiveCheckSheetProps> = ({ data }) => {
  return (
    <Skeleton active loading={false}>
      <Space direction="vertical" size="small" className="p-3 m-1 border">
        <Space className="d-flex justify-content-between mt-3 mb-3">
          <Text strong>{setCurrentDate()}</Text>
          <Text strong>ЛИСТ КОЛЛЕКТИВНОЙ ПРОВЕРКИ</Text>
          <Space className="d-flex justify-content-between mx-3">
            <PrinterOutlined
              style={{ fontSize: "20px", cursor: "pointer" }}
              title="Печать"
              className="text-primary"
              //  onClick={() => {
              //    setActionType(FormActions.UPDATE);
              //    setAddCommentsVisible(true);
              //  }}
            />
            <FileExcelOutlined
              style={{ fontSize: "20px", cursor: "pointer" }}
              title="Выгрузить"
              className="text-success"
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
