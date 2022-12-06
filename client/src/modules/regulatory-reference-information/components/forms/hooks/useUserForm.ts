import { useEffect, useState } from "react";
import {
  NSIView,
  UserCreateOrUpdateAttrs,
  PositionTreeView,
} from "../../../types";
import { useTypedSelector, useActions } from "./../../../../../hooks";
import { getItems } from "../../..";
import { FormActions } from "../../../../main";
import { userItem } from "../form.settings";
import { getAllItems, useItemPage } from "../../../../position-tree";
import { RcFile } from "antd/lib/upload";

export const useUserForm = () => {
  const [userData, setUserData] = useState<UserCreateOrUpdateAttrs>(userItem);
  const [designsList, setDesignsList] = useState<NSIView[]>([]);
  const [counterpartiesList, setCounterpartiesList] = useState<NSIView[]>([]);
  const [fieldsList, setFieldsList] = useState<PositionTreeView[]>([]);
  const { actionType } = useTypedSelector((state) => state.main);
  const { renderItems: subsidiariesList } = useTypedSelector(
    (state) => state.positionTree
  );
  const { getPositionTreeItems, createNewUser } = useActions();

  const { setFormVisible } = useItemPage();

  const changeItems = (
    data: UserCreateOrUpdateAttrs,
    setData: Function,
    key: string,
    value: string | number | RcFile | null
  ) => {
    setData({ ...data, [key]: value });
  };

  useEffect(() => {
    if (actionType === FormActions.ADD_USER) {
      getPositionTreeItems("subsidiary");
      getItems("design").then((data) => setDesignsList(data));
      getItems("counterparty").then((data) => setCounterpartiesList(data));
    }
  }, [actionType]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    userData.roles.includes("OTS") &&
      getAllItems("field").then((data) => setFieldsList(data));
  }, [userData.roles]);

  const onChangeUserData = (
    key: string,
    value: string | number | RcFile | null
  ) => {
    changeItems(userData, setUserData, key, value);
  };

  const emailValidate = (email: string): boolean => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; // eslint-disable-line

    return reg.test(email);
  };

  const phoneValidate = (phone: string): boolean => {
    const reg = /^([+]?[0-9\s-\(\)]{3,25})*$/i; // eslint-disable-line

    return reg.test(phone);
  };

  const userRegistration = () => {
    createNewUser(userData);
    setFormVisible(false);
  };

  return {
    userData,

    onChangeUserData,
    subsidiariesList,
    designsList,
    counterpartiesList,
    fieldsList,
    emailValidate,
    phoneValidate,
    setFormVisible,
    userRegistration,
  };
};