import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React, { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../../hooks";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const dataSource = [
  {
    href: "#",
    title: "Объект 1",
    avatar: "1.2.1",
    description: "Description",
    content: "code",
  },
];

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

interface ListViewProps {
  items?: any[];
}

const ListView: React.FC<ListViewProps> = () => {
  const { currentItem } = useTypedSelector((state) => state.positionTree);

  const setItems = (items: any[]): any[] => {
    const arr: any[] = [];
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        console.log(currentItem);
        const { id, title, code, description, file } = items[i];
        const item = {
          href: id,
          title,
          avatar: file ? `${file.path}/${file.fileName}` : null,
          description,
          content: code,
        };

        arr.push(item);
      }
    }
    return arr;
  };
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={dataSource}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
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
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default ListView;
