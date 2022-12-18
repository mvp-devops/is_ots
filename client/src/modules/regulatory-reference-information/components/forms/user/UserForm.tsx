import { Button, Divider, Form, Space, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useUserForm } from "../hooks";
import { SelectUIComponent, InputUIComponent } from "../../../../../components";
import { userRoles } from "../../../../main";

const { Item } = Form;
const { Text } = Typography;

const UserForm = () => {
  const {
    userData,
    onChangeUserData,
    subsidiariesList,
    designsList,
    counterpartiesList,
    fieldsList,
    emailValidate,
    userRegistration,
  } = useUserForm();

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      layout="horizontal"
      className="m-1 p-1 border"
    >
      <Item label={<Text  >Роли</Text>} className="m-0">
        <SelectUIComponent
          mode="multiple"
          id="roles"
          changeValue={onChangeUserData}
          items={userRoles}
        />
      </Item>

      {(userData.roles.includes("ADMINISTRATOR") ||
        userData.roles.includes("OTS") ||
        userData.roles.includes("EXPERT") ||
        userData.roles.includes("CUSTOMER")) && (
        <Item
          label={<Text  >Дочернее общество</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="subsidiaryId"
            changeValue={onChangeUserData}
            items={subsidiariesList}
          />
        </Item>
      )}
      {userData.roles.includes("DESIGN") && (
        <Item
          label={<Text  >Проектный институт</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="designId"
            changeValue={onChangeUserData}
            items={designsList}
          />
        </Item>
      )}
      {userData.roles.includes("COUNTERPARTY") && (
        <Item label={<Text  >Контрагент</Text>} className="m-0">
          <SelectUIComponent
            id="counterpartyId"
            changeValue={onChangeUserData}
            items={counterpartiesList}
          />
        </Item>
      )}

      {userData.roles.includes("OTS") && (
        <Item
          label={<Text  >Месторождение</Text>}
          className="m-0"
        >
          <SelectUIComponent
            id="fieldId"
            changeValue={onChangeUserData}
            items={fieldsList}
          />
        </Item>
      )}
      <Item label={<Text  >Имя</Text>} className="m-0">
        <InputUIComponent
          value={userData.firstName}
          id="firstName"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Отчетство</Text>} className="m-0">
        <InputUIComponent
          value={userData.secondName}
          id="secondName"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Фамилия</Text>} className="m-0">
        <InputUIComponent
          value={userData.lastName}
          id="lastName"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Подразделение</Text>} className="m-0">
        <InputUIComponent
          value={userData.subdivision}
          id="subdivision"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Должность</Text>} className="m-0">
        <InputUIComponent
          value={userData.position}
          id="position"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >E-mail</Text>} className="m-0">
        <InputUIComponent
          value={userData.email}
          id="email"
          changeValue={onChangeUserData}
          status={!emailValidate(userData.email) ? "error" : undefined}
        />
      </Item>

      <Item
        label={<Text  >Контактный телефон</Text>}
        className="m-0"
      >
        <InputUIComponent
          value={userData.phone}
          id="phone"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Пароль</Text>} className="m-0">
        <InputUIComponent
          type="password"
          value={userData.password}
          id="password"
          changeValue={onChangeUserData}
        />
      </Item>
      <Item label={<Text  >Фото</Text>} className="m-0">
        <Upload
          className="mb-1"
          onRemove={(file) => {
            onChangeUserData("file", null);
          }}
          beforeUpload={(file) => {
            onChangeUserData("file", file);

            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>
            <Text  >Выбрать фото</Text>
          </Button>
        </Upload>
      </Item>
      <Divider className="p-0 m-2" />
      <Space className="d-flex justify-content-end mb-0">
        <Button
          type="primary"
          className="me-1 "
          onClick={() => {
            userRegistration();
            // setFormVisible(false);
          }}
        >
          Добавить
        </Button>
      </Space>
    </Form>
  );
};

export default UserForm;