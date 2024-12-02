export interface AuthentictedUser {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
}

export type User = Pick<AuthentictedUser, "email" | "name">;

export interface ForAuthenticating {
  login: (email: string, password: string) => Promise<AuthentictedUser>;
  registere: (
    user: UserActivation,
    password: string
  ) => Promise<AuthentictedUser>;
}
