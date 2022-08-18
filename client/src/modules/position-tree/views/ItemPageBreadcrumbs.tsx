import { Breadcrumb } from "antd";
import React, { FC } from "react";
const { Item } = Breadcrumb;

export interface BreadcrumbsProps {
  items: { id: string; title: string }[];
}

const ItemPageBreadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {items.map((item) => (
        <Item key={item.id} onClick={() => console.log(item.id)}>
          {item.title}
        </Item>
      ))}
    </Breadcrumb>
  );
};

export default ItemPageBreadcrumbs;
