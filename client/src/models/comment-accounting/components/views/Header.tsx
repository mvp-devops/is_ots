import { Space, Typography } from "antd";
import React, { FC } from "react";
import { DesignDocumentCommentRequestData } from "../../../../../../common/types/comments-accounting";

interface HeaderProps {
  data: DesignDocumentCommentRequestData;
}

const { Text } = Typography;

const Header: FC<HeaderProps> = ({ data }) => {
  const {
    projectCode,
    projectTitle,
    unitPosition,
    unitTitle,
    unitQuestionareTitle,
    subUnitPosition,
    subUnitTitle,
    subUnitQuestionareTitle,
  } = data;
  return (
    <Space direction="vertical" size="small">
      <Space direction="horizontal" className="d-flex justify-content-left">
        <Text strong>Проект:</Text>
        <Text type="secondary">Шифр.</Text>
        <Text type="secondary">Наименование</Text>
      </Space>
      {unitTitle && (
        <Space direction="vertical" className="mb-3">
          <Space direction="vertical" className="">
            <Space
              direction="horizontal"
              className="d-flex justify-content-left"
            >
              <Text strong>Объект:</Text>
              <Text type="secondary">Шифр.</Text>
              <Text type="secondary">Наименование</Text>
            </Space>
            {unitQuestionareTitle && (
              <Space
                direction="horizontal"
                className="d-flex justify-content-left"
              >
                <Text strong>Технические требования:</Text>
                <Text type="secondary">ОЛ, ТТ, ТЗ:</Text>
              </Space>
            )}
          </Space>
          {subUnitTitle && (
            <Space direction="vertical">
              <Space
                direction="horizontal"
                className="d-flex justify-content-left"
              >
                <Text strong>Подобъект:</Text>
                <Text type="secondary">Шифр.</Text>
                <Text type="secondary">Наименование</Text>
              </Space>
              {subUnitQuestionareTitle && (
                <Space
                  direction="horizontal"
                  className="d-flex justify-content-left"
                >
                  <Text strong>Технические требования:</Text>
                  <Text type="secondary">ОЛ, ТТ, ТЗ:</Text>
                </Space>
              )}
            </Space>
          )}
        </Space>
      )}
      <Space></Space>
    </Space>
  );
};

export default Header;
