import { useCallback, useState } from "react";
import axois from "axios";

const useHttp = ({
  url,
  headers = { "Content-Type": "application/json" },
  method = "POST",
  body,
  onFinish,
  responseType = "json",
}) => {
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const sendRequest = useCallback(() => {
    const fetchData = async (newUrl, newBody) => {
      setIsLoading(true);
      let response;
      response = await axois({
        url: newUrl ? newUrl : url,
        method: method,
        data: newBody ? newBody : body,
        responseType: responseType,
        headers: headers,
        onUploadProgress: (p) => {
          setProgress((p.loaded / p.total) * 100);
        },
      });
      let resData = response.data;
      onFinish(resData);
      if (response.status > 400) {
        throw new Error("Something went worng!");
      }
      try {
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [body, headers, method, onFinish, responseType, url]);
  return { error, isLoading, progress, sendRequest };
};
export default useHttp;
