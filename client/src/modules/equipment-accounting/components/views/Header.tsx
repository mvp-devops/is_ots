import { Dropdown, Menu, Space, Typography } from "antd";
import {
  FileExcelOutlined,
  DownloadOutlined,
  AppstoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import { FormActions } from "../../../main";
import { useActions } from "../../../../hooks";

const { Text } = Typography;

const Header = () => {
  const { setFormVisible, setActionType } = useActions();

  return (
    <>
      <Space className="d-flex justify-content-between m-2">
        <Text strong type="secondary">
          {setCurrentDate()}
        </Text>
        <Space className="d-flex justify-content-between">
          <PlusOutlined
            title="Добавить новую единицу оборудования"
            className="text-success"
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => {
              setActionType(FormActions.ADD_EQUIPMENT);
              setFormVisible(true);
            }}
          />

          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu
                items={[
                  {
                    label: (
                      <Space
                        className="text-secondary"
                        onSelect={(key) => console.log(key)}
                      >
                        <AppstoreOutlined
                          style={{ marginBottom: "6px", padding: 0 }}
                          className="text-primary"
                        />
                        АИС «АТЛАС»
                      </Space>
                    ),

                    key: "EXPORT_TO_ATLAS",
                  },
                  {
                    label: (
                      <Space
                        className="text-secondary"
                        onSelect={(key) => console.log(key)}
                      >
                        <AppstoreOutlined
                          style={{ marginBottom: "6px", padding: 0 }}
                          className="text-primary"
                        />
                        ИС «ТОРО»
                      </Space>
                    ),

                    key: "EXPORT_TO_TORO",
                  },
                  {
                    label: (
                      <Space
                        className="text-secondary"
                        onSelect={(key) => console.log(key)}
                      >
                        <FileExcelOutlined
                          style={{ marginBottom: "6px", padding: 0 }}
                          className="text-success"
                        />
                        MS Excel
                      </Space>
                    ),

                    key: "EXPORT_TO_EXCEL",
                  },
                ]}
              />
            }
          >
            <DownloadOutlined
              title="Экспорт"
              className="text-secondary"
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Dropdown>
        </Space>
      </Space>
    </>
  );
};

export default Header;
