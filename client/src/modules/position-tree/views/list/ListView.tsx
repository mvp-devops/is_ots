import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Empty, List, Space, Typography } from "antd";
import { createElement, FC } from "react";
import { useItemPage } from "../hooks/useItemPage";
import { CloudSyncOutlined } from "@ant-design/icons";
const { Text } = Typography;
const { Item } = List;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const ListView: FC = () => {
  const { listItems, childrenListHeader } = useItemPage();

  const header = (
    <Space className="d-flex justify-content-start">
      <Text strong type="secondary" style={{ fontSize: 18 }}>
        Список {childrenListHeader}
      </Text>
    </Space>
  );

  const emptyText = (
    <div style={{ textAlign: "center" }}>
      <CloudSyncOutlined style={{ fontSize: 40 }} />
      <p style={{ fontSize: 20 }}>Нет данных для отображения</p>
    </div>
  );

  return (
    <List
      header={header}
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      locale={{
        emptyText,
      }}
      dataSource={listItems}
      renderItem={(item) => (
        <Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={
            item?.avatar ? (
              <img width={272} alt="logo" src={item.avatar} />
            ) : null
          }
        >
          <Item.Meta
            avatar={item?.avatar ? <Avatar src={item.avatar} /> : null}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </Item>
      )}
    />
  );
};

export default ListView;
