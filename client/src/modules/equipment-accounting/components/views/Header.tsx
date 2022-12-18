import { Dropdown, Menu, Space, Typography } from "antd";
import {
  FileExcelOutlined,
  DownloadOutlined,
  AppstoreOutlined,
  PlusOutlined, UploadOutlined,
} from "@ant-design/icons";
import { setCurrentDate } from "../../../../utils/main.utils";
import { FormActions } from "../../../main";
import { useActions, useTypedSelector } from "../../../../hooks";
import { exportToAtlas } from "../../api/equipment-accounting.api";
import {Roles} from "../../../main/utils/main.consts";

const { Text } = Typography;

const Header = () => {
  const { setFormVisible, setActionType } = useActions();
  const { currentItem, checkedItem, currentItemFolderPath } = useTypedSelector(
    (state) => state.positionTree
  );
  const {currentUser} = useTypedSelector(state => state.main);

  return (
    <>
      <Space className="d-flex justify-content-between m-2">
        <Text strong >
          {setCurrentDate()}
        </Text>
        {(currentUser.roles.includes(Roles.EXPERT) || currentUser.roles.includes(Roles.OTS)) &&
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
            <UploadOutlined
              title="Импорт данных из шаблона"
              className="text-info"
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                setActionType(FormActions.IMPORT_EQUIPMENT_FROM_SLOE);
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
                          onClick={(e: any) => {
                            setActionType(FormActions.EXPORT_TO_ATLAS);
                            setFormVisible(true)
                          }

                          }
                          onSelect={(key) => console.log("ATLAS")}
                        >
                          <AppstoreOutlined
                            style={{ marginBottom: "6px", padding: 0 }}
                            className="text-primary"
                            title="Сформировать файл выгрузки"
                          />
                          АИС «АТЛАС»
                        </Space>
                      ),

                      key: "EXPORT_TO_ATLAS",
                    },
                    {
                      label: (
                        <Space
                          onSelect={(key) => console.log("TORO")}
                        >
                          <AppstoreOutlined
                            style={{ marginBottom: "6px", padding: 0 }}
                            className="text-primary"
                            title="Сформировать файл выгрузки"
                            onClick={(e: any) =>
                              exportToAtlas(
                                e,
                                currentItem.childrenTarget,
                                checkedItem.id.toString(),
                                `${checkedItem.code}-${checkedItem.title}`,
                                currentItemFolderPath
                              )
                            }
                          />
                          ИС «ТОРО»
                        </Space>
                      ),

                      key: "EXPORT_TO_TORO",
                    },
                    // {
                    //   label: (
                    //     <Space
                    //       onSelect={(key) => console.log("EXCEL")}
                    //     >
                    //       <FileExcelOutlined
                    //         style={{ marginBottom: "6px", padding: 0 }}
                    //         className="text-success"
                    //         title="Сформировать файл выгрузки"
                    //       />
                    //       MS Excel
                    //     </Space>
                    //   ),
                    //
                    //   key: "EXPORT_TO_EXCEL",
                    // },
                  ]}
                />
              }
            >
              <DownloadOutlined
                title="Экспорт"
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
            </Dropdown>
          </Space>
        }
      </Space>
    </>
  );
};

export default Header;