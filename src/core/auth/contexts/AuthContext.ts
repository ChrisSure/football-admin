import { createContext } from "react";
import type { User } from "../types/user.types.ts";

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token?: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
