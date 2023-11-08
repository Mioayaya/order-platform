import { Iuser } from "..";

export interface IstoreUser {
  signFlag: boolean;
  userData: Iuser.IuserData
}

export interface Islice {
  userSlice: IstoreUser
}
