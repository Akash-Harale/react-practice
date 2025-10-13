import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url = "") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(url, { signal: controller.signal });
        setData(response.data);
      
        setLoading(false);
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
  }, [url]);
  return { loading, data, error };
};
