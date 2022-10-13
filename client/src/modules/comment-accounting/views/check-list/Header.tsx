import { Col, Divider, Row, Space, Typography } from "antd";
import { FC } from "react";
import { CheckListView } from "../../../../../../server/common/types/comments-accounting";

interface HeaderProps {
  data: CheckListView;
}

const { Text } = Typography;

const Header: FC<HeaderProps> = ({ data }) => {
  const designTitle = data && "design" in data && data.design;
  const supplierTitle = data && "supplier" in data && data.supplier;
  const contract = data && data.contract;
  const objectTitle =
    data && "position" in data
      ? `поз. ${data.position}. ${data.title}`
      : data && "code" in data
      ? `${data.code}. ${data.title}`
      : "";
  const subsidiaryTitle = data && data.subsidiary;
  const satisfactorily = data && data.satisfactorily;
  const okay = data && data.okay;
  const great = data && data.great;
  // const satisfactorily = 95;
  // const okay = 96;
  // const greate = 98;

  return (
    <Space
      direction="horizontal"
      size="small"
      className="d-flex justify-content-between"
    >
      <Space direction="vertical">
        <Space direction="horizontal" className="d-flex justify-content-start">
          <Text strong>Заказчик:</Text>

          <Text type="secondary">{subsidiaryTitle}</Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-start">
          <Text strong>Код и наименование работы/ услуги (КТ-777):</Text>
          <Text type="secondary">{contract}</Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-start">
          <Text strong>Наименование контрагента:</Text>
          <Text type="secondary">
            {designTitle ? designTitle : supplierTitle}
          </Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-start">
          <Text strong>Договор:</Text>
          <Text type="secondary">{contract}</Text>
        </Space>
        <Space direction="horizontal" className="d-flex justify-content-start">
          <Text strong>Проект/Объект:</Text>

          <Text type="secondary">{objectTitle}</Text>
        </Space>
      </Space>
      <Space direction="horizontal" className="d-flex justify-content-end">
        <Space direction="vertical" className=" border p-1">
          <Row justify="center">
            <Text type="secondary">Шкала оценки, балл:</Text>
            <Divider className="m-0 p-0" />
          </Row>
          <Row gutter={20} justify="start">
            <Col>
              <Text strong type="secondary">
                99
              </Text>
            </Col>
            <Col
              className="border text-center"
              style={{ backgroundColor: "rgb(0, 176, 80)", width: 60 }}
            >
              <Text type="secondary"> &gt;</Text>
            </Col>
            <Col>
              <Text type="secondary">Отлично</Text>
            </Col>
          </Row>
          <Row gutter={20} justify="start">
            <Col>
              <Text strong type="secondary">
                {great}
              </Text>
            </Col>
            <Col
              className="border text-center"
              style={{ backgroundColor: "rgb(255,255,0)", width: 60 }}
            >
              <Text type="secondary"> &ge; &divide; &lt; </Text>
            </Col>
            <Col>
              <Text type="secondary">Хорошо</Text>
            </Col>
          </Row>
          <Row gutter={20} justify="start">
            <Col>
              <Text strong type="secondary">
                {okay}
              </Text>
            </Col>
            <Col
              className="border text-center"
              style={{ backgroundColor: "rgb(255,192,0)", width: 60 }}
            >
              <Text type="secondary"> &ge; &divide; &lt; </Text>
            </Col>
            <Col>
              <Text type="secondary">Удовлетворительно</Text>
            </Col>
          </Row>
          <Row gutter={20} justify="start">
            <Col>
              <Text strong type="secondary">
                {satisfactorily}
              </Text>
            </Col>
            <Col
              className="border text-center"
              style={{ backgroundColor: "rgb(255,0,0)", width: 60 }}
            >
              <Text type="secondary"> &lt; </Text>
            </Col>
            <Col>
              <Text type="secondary">Не удовлетворительно</Text>
            </Col>
          </Row>
        </Space>
      </Space>
    </Space>
  );
};

export default Header;
