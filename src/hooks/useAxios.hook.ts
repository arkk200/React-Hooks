import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosResponseHeaders,
} from "axios";
import { useEffect, useState } from "react";

export const useAxios = (
  options: AxiosRequestConfig,
  axiosInstance = axios
) => {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    data: any;
  }>({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (options.url)
      axiosInstance(options)
        .then((response) => {
          setState({
            ...state,
            loading: false,
            data: response.data,
          });
        })
        .catch((error) => {
          setState({
            ...state,
            loading: false,
            error,
          });
        });
  }, [trigger]);
  return { ...state, refetch };
};
