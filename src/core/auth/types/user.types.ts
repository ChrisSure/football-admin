export type User = {
  id: number;
  username: string;
  role: string;
};

export type UserJWTPayload = {
  userId: number;
  username: string;
  role: string;
  exp: number;
  iat?: number;
};
