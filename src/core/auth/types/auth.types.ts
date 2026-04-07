export type LoginResponse = {
  accessToken?: string;
  access_token?: string;
  token?: string;
};

export type JWTPayload = {
  exp: number;
  iat?: number;
  [key: string]: unknown;
};
