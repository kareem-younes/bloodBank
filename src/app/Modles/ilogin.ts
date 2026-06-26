import { IUser } from "./user";

export interface Ilogin {
  message: string,
  user: IUser,
  token: string
}
