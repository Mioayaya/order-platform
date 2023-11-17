import { Iorder, Iuser } from "..";

export interface IstoreUser {
  signFlag: boolean;
  userData: Iuser.IuserData | {}
}

export interface IstoreOrder {
  offset: number
  limit: number
  update: boolean
  orderData: Iorder.IorderData[]|[]
}

export interface Islice {
  userSlice: IstoreUser
  orderSlice: IstoreOrder
}
