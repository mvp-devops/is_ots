import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 300): string => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setInputValue(value), delay);
    return clearTimeout(handler);
  }, [value, delay]);

  return inputValue;
};
