import { Iuser } from "../../type";
import request from "../axios";

// 注册
export const userRegister = (data:Iuser.IuserRegister) => {
  return request({
    url: 'user/register',
    method: 'POST',
    data
  })
}

// 登录
export const userSignIn = (data:Iuser.IuserSignIn) => {
  return request({
    url: 'user/signin',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const userGetInfor = (uid:number) => {
  return request({
    url: `user/infor?uid=${uid}`,
    method: 'GET',
  })
}

export const userTest = () => {
  return request({
    url: 'api/user/test',
    method: 'GET'
  })
}