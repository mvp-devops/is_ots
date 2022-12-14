import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = (data: any[], searchValue: string, delay = 300) => {
  const [results, setResults] = useState(data);
  const inputValue = useDebounce(searchValue, delay);

  useEffect(() => {
    if (inputValue !== "") {
      const filteredData = data.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults(data);
    }

  }, [inputValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return results;
};