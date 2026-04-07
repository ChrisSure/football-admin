import { useState, useCallback } from "react";
import { AuthContext } from "@core/auth";
import { saveToken, clearToken, isTokenValid } from "../utils/token.utils.ts";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return isTokenValid();
  });

  const login = useCallback((token?: string) => {
    if (token) {
      saveToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
