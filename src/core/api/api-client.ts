import { getToken } from "../auth/utils/token.utils.ts";
import { ApiError } from "./api-error.ts";

const BASE_URL = "http://localhost:3000";

export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const token = getToken();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage =
      errorData.message || `HTTP error! status: ${response.status}`;

    if (response.status >= 400 && response.status < 600) {
      window.dispatchEvent(
        new CustomEvent("api-error", {
          detail: { message: errorMessage, status: response.status },
        }),
      );
    }

    throw new ApiError(errorMessage, response.status, errorData);
  }

  if (response.status === 204) {
    return {} as T;
  }

  const text = await response.text();
  if (!text) {
    return {} as T;
  }

  return JSON.parse(text);
};
