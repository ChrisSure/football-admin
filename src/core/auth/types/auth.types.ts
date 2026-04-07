export type LoginResponse = {
  accessToken: string;
};

export type JWTPayload = {
  exp: number;
  iat?: number;
  [key: string]: unknown;
};
