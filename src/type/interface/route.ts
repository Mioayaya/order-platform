import { ReactElement } from "react"

export interface IrouteList  {
  [index:string] : any
}

export interface IrouteChild {
  key: string
  title: string
  path: string
  pathName: Array<string>
  element: ReactElement
}

export interface IrouteItem {
  key: string
  title: ReactElement | string
  path: string
  element: ReactElement
  children: null | IrouteChild[]
}

export interface ImenuChild {
  key: string
  title: string | ReactElement
  path: string
  pathName: string[]
}

export interface Imenu {
  key: string
  title: string | ReactElement
  child: ImenuChild[]
}