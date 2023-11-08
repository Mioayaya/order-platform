// 筛选订单 form 类型
export interface Isearch {
  id: number|undefined
  unit: string|undefined
  department: string|undefined
  name:string
  created: Array<string>|undefined
  amount: number|undefined
}

export interface IcreateForm {
  name: string
  unit: string
  department: string
  amount: number
}

export interface IcreateData {
  name: string
  amount: number
  apply_unit: string
  apply_department: string
  bookkeeper_id: number
}

export interface IcreateResData {
  msg: string
  success: boolean
}