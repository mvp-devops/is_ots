import { List, Typography } from "antd";
import { dictionariesList } from "../utils/regulatory-reference-information.consts";
import { useRegulatoryReferenceInformationList } from "./hooks";

const { Item } = List;
const { Text } = Typography;

const RegulatoryReferenceInformationList = () => {
  const { onItemSelected } = useRegulatoryReferenceInformationList();

  return (
    <List
      className="mt-0 m-3"
      dataSource={dictionariesList}
      renderItem={({ id, title }) => (
        <Item
          key={id}
          onClick={() => onItemSelected(id)}
          style={{ cursor: "pointer" }}
        >
          <Text type="secondary">{title}</Text>
        </Item>
      )}
    />
  );
};

export default RegulatoryReferenceInformationList;
