import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getWeatherForecast = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      setError(true);
    }
  }, [url]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getWeatherForecast();
    }, 2000);
  }, [getWeatherForecast, url]);
  return { data, loading, error };
};

export default useFetch;
