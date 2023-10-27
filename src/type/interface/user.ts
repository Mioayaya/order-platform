export interface IuserData {
  avatar: string
  birth: string | null
  email: string
  nick_name: string
  phone: string
  sex: number
  sign: string
  uid: number
}

export interface IuserRegister {
  nick_name: string
  email: string
  phone: string
  password: string
}

// 提交内容类型
export interface IuserSignIn {
  name: string
  password: string
}

// 返回内容类型
export interface IuserSignInRes {
  msg: string
  success: boolean
  userData: IuserData
}

export interface IuserRegisterRes {
  flag: boolean
  msg: string
}