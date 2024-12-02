import { User } from "../drivers";

export interface ForRepoQuerying {
  getUser(email: string): Promise<User>;
  createUser(user: User, password: string): Promise<User>;
}
