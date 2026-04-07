import { getToken } from "../auth/utils/token.utils.ts";

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
    throw new Error(errorMessage);
  }

  return response.json();
};
