import { useState, useCallback } from "react";

interface IRequestConfig {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: any;
  body?: object;
}

const useRequest = (cb: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: IRequestConfig) => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method || "GET",
          headers: requestConfig.headers || {},
          body: requestConfig ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok || !response) {
          throw new Error("Request failed!");
        }
        const data = await response.json();

        cb(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [cb]
  );

  return { isLoading, error, sendRequest };
};

export default useRequest;
