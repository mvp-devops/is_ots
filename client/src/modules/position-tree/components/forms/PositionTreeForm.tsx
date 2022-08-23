import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { ChangeEvent, FC } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { PositionTreeView } from "../../../../../../server/common/types/position-tree";
import { usePositionTreeData } from "./hooks/usePositionTreeData";
import { sgroei } from "../../../equipment-accounting/utils/equipment-accounting.consts";

const { Item } = Form;
const { Text } = Typography;
const { Option } = Select;

interface FormProps {
  target: string;
  row?: PositionTreeView;
}

const PositionTreeForm: FC<FormProps> = ({ target, row }) => {
  const { editRow, onHandlerChange } = usePositionTreeData(target);

  console.log(editRow);

  const parrentFieldItem = target === "field" &&
    "subsidiaryId" in editRow &&
    editRow.subsidiaryId && (
      <Item
        label={<Text type="secondary">Дочернее общество</Text>}
        className="m-0"
      >
        <Select
          size="small"
          className="text-secondary"
          showSearch
          defaultValue={editRow.subsidiaryId.toString()}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
          onChange={(value: string) => onHandlerChange("subsidiaryId", value)}
        >
          {sgroei.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Item>
    );

  const parrentProjectItem = target === "project" &&
    "fieldId" in editRow &&
    editRow.fieldId && (
      <Item label={<Text type="secondary">Месторождение</Text>} className="m-0">
        <Select
          size="small"
          className="text-secondary"
          showSearch
          defaultValue={editRow.fieldId.toString()}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
          onChange={(value: string) => onHandlerChange("fieldId", value)}
        >
          {sgroei.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
      </Item>
    );

  const projectDesignItem = target === "project" && "designId" in editRow && (
    <Item
      label={<Text type="secondary">Проектный институт</Text>}
      className="m-0"
    >
      <Select
        size="small"
        className="text-secondary"
        showSearch
        defaultValue={editRow.designId.toString()}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option!.children as unknown as string).includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA!.children as unknown as string)
            .toLowerCase()
            .localeCompare(
              (optionB!.children as unknown as string).toLowerCase()
            )
        }
        onChange={(value: string) => onHandlerChange("designId", value)}
      >
        {sgroei.map((item) => (
          <Option key={item.id} value={item.id}>
            {item.title}
          </Option>
        ))}
      </Select>
    </Item>
  );

  const parrentUnitItem = target === "unit" &&
    "projectId" in editRow &&
    editRow.projectId && (
      <Item label={<Text type="secondary">Проект</Text>} className="m-0">
        <Select
          size="small"
          className="text-secondary"
          showSearch
          defaultValue={editRow.projectId.toString()}
          optionFilterProp="children"
          // filterOption={(input, option) =>
          //   (option!.children as unknown as string).includes(input)
          // }
          // filterSort={(optionA, optionB) =>
          //   (optionA!.children as unknown as string)
          //     .toLowerCase()
          //     .localeCompare(
          //       (optionB!.children as unknown as string).toLowerCase()
          //     )
          // }
          onChange={(value: string) => onHandlerChange("projectId", value)}
        >
          {sgroei.map((item) => (
            <Option key={item.id} value={item.id}>
              {/* <Text>{item.code}</Text> */}
              <Text>{item.title}</Text>
            </Option>
          ))}
        </Select>
      </Item>
    );

  const parrentSubUnitItem = target === "sub-unit" &&
    "unitId" in editRow &&
    editRow.unitId && (
      <Item
        label={<Text type="secondary">Объект строительства</Text>}
        className="m-0"
      >
        <Select
          size="small"
          className="text-secondary"
          showSearch
          defaultValue={editRow.unitId.toString()}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option!.children as unknown as string).includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA!.children as unknown as string)
              .toLowerCase()
              .localeCompare(
                (optionB!.children as unknown as string).toLowerCase()
              )
          }
          onChange={(value: string) => onHandlerChange("unitId", value)}
        >
          {sgroei.map((item) => (
            <Option key={item.id} value={item.id}>
              {/* <Text>{item.code}</Text> */}
              <Text>{item.title}</Text>
            </Option>
          ))}
        </Select>
      </Item>
    );

  const contractItem = (target === "project" ||
    target === "unit" ||
    target === "sub-unit") &&
    "contract" in editRow && (
      <Item label={<Text type="secondary">№ договора</Text>} className="m-0">
        <Input
          size="small"
          className="text-secondary"
          value={editRow.contract}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onHandlerChange("contract", e.target.value)
          }
        />
      </Item>
    );

  const fileItem =
    target === "unit" || target === "sub-unit" ? (
      <Item label={<Text type="secondary">Опросный лист</Text>} className="m-0">
        <Upload
          className="mb-1"
          onRemove={(file) => {
            onHandlerChange("questionare", null);
          }}
          beforeUpload={(file) => {
            onHandlerChange("questionare", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />} style={{ width: 232 }}>
            <Text type="secondary">Выбрать файл</Text>
          </Button>
        </Upload>
      </Item>
    ) : (
      target === "subsidiary" && (
        <Item label={<Text type="secondary">Логотип</Text>} className="m-0">
          <Upload
            className="mb-1"
            onRemove={(file) => {
              onHandlerChange("file", null);
            }}
            beforeUpload={(file) => {
              onHandlerChange("file", file);

              return false;
            }}
          >
            <Button icon={<UploadOutlined />} style={{ width: 232 }}>
              <Text type="secondary">Выбрать файл</Text>
            </Button>
          </Upload>
        </Item>
      )
    );

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        className="m-1 p-1 border"
      >
        {parrentFieldItem}
        {parrentProjectItem}
        {parrentUnitItem}
        {parrentSubUnitItem}
        {projectDesignItem}

        {(target === "unit" || target === "sub-unit") &&
          "position" in editRow &&
          "equipmentId" in editRow &&
          "supplierId" in editRow && (
            <>
              <Item
                label={<Text type="secondary">Группа оборудования</Text>}
                className="m-0"
              >
                <Select
                  size="small"
                  className="text-secondary"
                  showSearch
                  optionFilterProp="children"
                  defaultValue={editRow.equipmentId.toString()}
                  filterOption={(input, option) =>
                    (option!.children as unknown as string).includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                  onChange={(value: string) =>
                    onHandlerChange("equipmentId", value)
                  }
                >
                  {sgroei.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              </Item>
              <Item
                label={<Text type="secondary">Поставщик</Text>}
                className="m-0"
              >
                <Select
                  size="small"
                  className="text-secondary"
                  showSearch
                  optionFilterProp="children"
                  defaultValue={editRow.supplierId.toString()}
                  filterOption={(input, option) =>
                    (option!.children as unknown as string).includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA!.children as unknown as string)
                      .toLowerCase()
                      .localeCompare(
                        (optionB!.children as unknown as string).toLowerCase()
                      )
                  }
                  onChange={(value: string) =>
                    onHandlerChange("supplierId", value)
                  }
                >
                  {sgroei.map((item) => (
                    <Option key={item.id} value={item.id}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              </Item>
              <Item
                label={<Text type="secondary">Позиция по ГП</Text>}
                className="m-0"
              >
                <Input
                  size="small"
                  className="text-secondary"
                  value={editRow.position}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onHandlerChange("position", e.target.value)
                  }
                />
              </Item>
            </>
          )}

        <Item
          label={<Text type="secondary">Наименование</Text>}
          className="m-0"
        >
          <Input
            size="small"
            className="text-secondary"
            value={editRow.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("title", e.target.value)
            }
          />
        </Item>
        <Item label={<Text type="secondary">Шифр</Text>} className="m-0">
          <Input
            size="small"
            className="text-secondary"
            value={editRow.code}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("code", e.target.value)
            }
          />
        </Item>

        {contractItem}
        {fileItem}

        <Item label={<Text type="secondary">Примечание</Text>} className="m-0">
          <Input
            size="small"
            className="text-secondary"
            value={editRow.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onHandlerChange("description", e.target.value)
            }
          />
        </Item>
      </Form>
      {row ? (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end mb-2">
            <Button type="primary" className="me-1">
              Обновить
            </Button>
          </Space>
        </>
      ) : (
        <>
          <Divider className="p-0 mb-3" />
          <Space className="d-flex justify-content-end">
            <Button type="primary" className="me-1">
              Добавить
            </Button>
          </Space>
        </>
      )}
    </>
  );
};

export default PositionTreeForm;