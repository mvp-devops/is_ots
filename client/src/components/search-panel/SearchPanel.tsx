import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { ChangeEventHandler, FC, useState } from "react";

interface SearchPanelProps {
  data: any[];
}

/*
При рендере добавить проверку: если в поле поиска есть хотя бы один символ - вывод отфильтрованных данных, иначе - просто вывод данных из стора

*/

const SearchPanel: FC<SearchPanelProps> = (props) => {
  const { data } = props;
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const suffix = <SearchOutlined className="text-primary" />;

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <>
      <Input
        placeholder="Поиск..."
        className="  mt-2 mb-2"
        style={{ color: "red", maxWidth: 600 }}
        size="small"
        suffix={suffix}
        onChange={(e) => searchItems(e.target.value)}
      />
    </>
  );
};

export default SearchPanel;