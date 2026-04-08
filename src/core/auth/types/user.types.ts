export type User = {
  id: number;
  username: string;
};

export type UserJWTPayload = {
  userId: number;
  username: string;
  exp: number;
  iat?: number;
};
