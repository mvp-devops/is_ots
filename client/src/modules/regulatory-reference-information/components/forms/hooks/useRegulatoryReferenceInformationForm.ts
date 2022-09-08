import { useEffect, useState } from "react";
import {
  NSIView,
  UserCreateOrUpdateAttrs,
} from "../../../../../../../server/common/types/regulatory-reference-information";
import { useTypedSelector, useActions } from "./../../../../../hooks";
import { getItems } from "../../..";
import { FormActions } from "../../../../main";
import { userItem } from "../form.settings";
import { getAllItems, useItemPage } from "../../../../position-tree";
import { PositionTreeView } from "../../../../../../../server/common/types/position-tree";
import { RcFile } from "antd/lib/upload";

export const useRegulatoryReferenceInformationForm = () => {
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
    if (actionType === FormActions.USER) {
      getPositionTreeItems("subsidiary");
      getItems("design").then((data) => setDesignsList(data));
      getItems("counterparty").then((data) => setCounterpartiesList(data));
    }
  }, [actionType]);

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
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return reg.test(email);
  };

  const phoneValidate = (phone: string): boolean => {
    const reg = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

    return reg.test(phone);
  };

  const userRegistration = () => {
    const user = createNewUser(userData);
    console.log(user);
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
