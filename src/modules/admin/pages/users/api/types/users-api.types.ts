import type { User } from "../../../dashboard/types/dashboard.types.ts";

export interface CreateUserResponse {
  message: string;
  user: User;
}

export interface DeleteUserResponse {
  message: string;
}

export type UsersResponse = User[];
