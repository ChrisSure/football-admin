import { jwtDecode } from "jwt-decode";
import { TOKEN_EXPIRY_KEY, TOKEN_KEY } from "../constants/auth.constants.ts";
import type { JWTPayload } from "../types/auth.types.ts";
import type { User, UserJWTPayload } from "../types/user.types.ts";

export const saveToken = (token: string): void => {
  const decoded = jwtDecode<JWTPayload>(token);
  const expiryTimestamp = decoded.exp * 1000;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_EXPIRY_KEY, String(expiryTimestamp));
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getTokenExpiry = (): number | null => {
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
  return expiry ? Number(expiry) : null;
};

export const clearToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
};

export const isTokenValid = (): boolean => {
  const token = getToken();
  const expiry = getTokenExpiry();

  if (!token || !expiry) {
    return false;
  }

  const now = Date.now();
  return now < expiry;
};

export const getUserFromToken = (): User | null => {
  const token = getToken();

  if (!token || !isTokenValid()) {
    return null;
  }

  try {
    const decoded = jwtDecode<UserJWTPayload>(token);
    return {
      id: decoded.userId,
      username: decoded.username,
    };
  } catch {
    return null;
  }
};
