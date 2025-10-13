import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url = "") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    (() => {
      try {
        setLoading(true);
        setError(null);

        const response = axios.get(url, { signal: controller.signal });
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [url]);
  return { loading, data, error };
};
