import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body: any = null,
      headers: any = {}
    ) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, {
          method,
          body,
          headers,
          credentials: "include",
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        if (data.message) {
          setMessage(data.message);
        }

        return data;
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), [error, request]);

  return {
    loading,
    request,
    message,
    error,
    clearError,
  };
};
