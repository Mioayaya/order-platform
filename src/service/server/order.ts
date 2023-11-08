import { Iorder } from "../../type";
import request from "../axios";

// create
export const orderCreate = (data:Iorder.IcreateData) => {
  return request({
    url: '/order/create',
    method: 'POST',
    data
  })
}

// info
export const orderInfo = () => {
  return request({
    url: '/order/info',
    method: 'POST'
  })
}