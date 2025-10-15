import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFetch = (url = "", id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const debounceSearch = useDebounce(id, 3000);

  useEffect(() => {
    if (!url || debounceSearch === "" || debounceSearch === undefined) return;

    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(`${url}${debounceSearch}`, {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          setError(error);
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url, debounceSearch]);
  return { loading, data, error };
};
