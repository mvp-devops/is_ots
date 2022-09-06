import { Divider, Space, Typography } from "antd";
import { FileExcelOutlined, PrinterOutlined } from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import Header from "./Header";
import { CheckListTable } from "../../components";
import { useTypedSelector } from "../../../../hooks";
import Footer from "./Footer";

const { Text } = Typography;

const CheckList = () => {
  const { checkListData } = useTypedSelector((state) => state.positionTree);

  return (
    <Space
      direction="vertical"
      size="small"
      className="p-3 m-1 border"
      style={{ minWidth: 1835 }}
    >
      {checkListData && (
        <>
          <Space className="d-flex justify-content-between mt-3 mb-3">
            <Text strong>{setCurrentDate()}</Text>
            <Text strong>ОЦЕНОЧНЫЙ ЛИСТ КОНТРАГЕНТА</Text>
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
          <Divider className="m-1 p-0" />

          <Header data={checkListData} />

          <Divider className="m-1" />

          <CheckListTable />

          {/* <Divider className="m-1" /> */}

          {/* <Footer /> */}
        </>
      )}
    </Space>
  );
};

export default CheckList;
