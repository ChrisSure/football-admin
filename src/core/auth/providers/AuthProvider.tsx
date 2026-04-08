import { useState, useCallback } from "react";
import { AuthContext } from "@core/auth";
import {
  saveToken,
  clearToken,
  isTokenValid,
  getUserFromToken,
} from "../utils/token.utils.ts";
import type { User } from "../types/user.types.ts";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return isTokenValid();
  });

  const [user, setUser] = useState<User | null>(() => {
    return getUserFromToken();
  });

  const login = useCallback((token?: string) => {
    if (token) {
      saveToken(token);
      const userData = getUserFromToken();
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
