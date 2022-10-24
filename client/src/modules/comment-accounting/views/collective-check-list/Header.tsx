import { Space, Typography } from "antd";
import { FilePdfOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { useCollectiveCheckSheet } from "./hooks/useCollectiveCheckSheet";
import { setFilePath } from "../../../main";

const { Text } = Typography;

const Header = () => {
  const {
    projectTitleRender,
    unitTitleRender,
    unitQuestionareRender,
    subUnitTitleRender,
    subUnitQuestionareRender,
  } = useCollectiveCheckSheet();

  return (
    <Space direction="vertical" size="small">
      <Space direction="horizontal" className="d-flex justify-content-left">
        <Text strong>Проект:</Text>
        <Text type="secondary">{projectTitleRender}</Text>
      </Space>
      {unitTitleRender && (
        <Space direction="vertical" className="mb-3">
          <Space direction="vertical" className="">
            <Space
              direction="horizontal"
              className="d-flex justify-content-left"
            >
              <Text strong>Объект:</Text>
              <Text type="secondary">{unitTitleRender}</Text>
            </Space>
            {unitQuestionareRender && (
              <Space
                direction="horizontal"
                className="d-flex justify-content-left"
              >
                <Text strong>Технические требования:</Text>
                <Space className="d-flex justify-content-start">
                  <Text type="secondary">
                    {unitQuestionareRender?.fileType?.toUpperCase() ===
                    ".PDF" ? (
                      <FilePdfOutlined
                        className="text-danger"
                        style={{ marginBottom: 6 }}
                      />
                    ) : (
                      <FileUnknownOutlined
                        className="text-secondary"
                        style={{ marginBottom: 6 }}
                      />
                    )}
                  </Text>
                  <a
                    href={setFilePath(
                      `${unitQuestionareRender?.filePath}/${unitQuestionareRender?.fileName}`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-secondary"
                    title={unitQuestionareRender?.title}
                  >
                    {unitQuestionareRender?.code}.{unitQuestionareRender?.title}
                  </a>
                </Space>
              </Space>
            )}
          </Space>
          {subUnitTitleRender && (
            <Space direction="vertical">
              <Space
                direction="horizontal"
                className="d-flex justify-content-left"
              >
                <Text strong>Установка/объект:</Text>
                <Text type="secondary">{subUnitTitleRender}</Text>
              </Space>
              {subUnitQuestionareRender && (
                <Space
                  direction="horizontal"
                  className="d-flex justify-content-left"
                >
                  <Text strong>Технические требования:</Text>
                  <Space className="d-flex justify-content-start">
                    <Text type="secondary">
                      {subUnitQuestionareRender?.fileType?.toUpperCase() ===
                      ".PDF" ? (
                        <FilePdfOutlined className="text-danger" />
                      ) : (
                        <FileUnknownOutlined className="text-secondary" />
                      )}
                    </Text>
                    <a
                      href={setFilePath(
                        `${subUnitQuestionareRender?.filePath}/${subUnitQuestionareRender?.fileName}`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-2 text-secondary"
                      title={subUnitQuestionareRender?.title}
                    >
                      {subUnitQuestionareRender?.code}.
                      {subUnitQuestionareRender?.title}
                    </a>
                  </Space>
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
