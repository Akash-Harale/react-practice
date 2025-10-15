import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedSearch;
};
