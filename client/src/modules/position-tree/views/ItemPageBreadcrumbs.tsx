import { Breadcrumb, Typography } from "antd";
import React, { FC } from "react";
const { Item } = Breadcrumb;

const { Text } = Typography;

export interface BreadcrumbsProps {
  items: { id: string; title: string }[];
}

const ItemPageBreadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {items.map((item) => (
        <Item key={item.id}>
          <Text type="secondary">{item.title}</Text>
        </Item>
      ))}
    </Breadcrumb>
  );
};

export default ItemPageBreadcrumbs;