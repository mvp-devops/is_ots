import { FC, useState } from "react";

import { Dropdown, Menu, Space, Typography } from "antd";
import {
  FileExcelOutlined,
  DownloadOutlined,
  PrinterOutlined,
  AppstoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import { ModalContainer } from "../forms";
import SummaryListOfFacilityForm from "../forms/SummaryListOfFacilityForm";
import { FormActions } from "../../../main";

const { Text } = Typography;

const Header = () => {
  const [actionType, setActionType] = useState<string>("");
  const [formVisible, setFormVisible] = useState(false);
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
              setActionType(FormActions.ADD);
              setFormVisible(true);
            }}
          />
          <PrinterOutlined
            style={{ fontSize: "20px", cursor: "pointer" }}
            title="Печать"
            className="text-primary"
            onClick={() => {
              //  setActionType(FormActions.UPDATE);
              //  setAddCommentsVisible(true);
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

                    key: "atlas",
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

                    key: "toro",
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

                    key: "excel",
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
      {formVisible && (
        <ModalContainer
          target="summary-list-of-equipment"
          show={formVisible}
          onCancel={() => setFormVisible(false)}
          action={actionType}
          child={<SummaryListOfFacilityForm />}
        />
      )}
    </>
  );
};

export default Header;
