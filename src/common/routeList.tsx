import { IconHome, IconList, IconUser } from "@arco-design/web-react/icon";
import { Iroute } from "../type";

import HomePage from "../pages/home";
import HomeMainPage from "../pages/home/children-pages/home-main";
import HomeWorkbenchPage from "../pages/home/children-pages/home-workbench";
import HomeDocsPage from "../pages/home/children-pages/home-docs";
import ListPage from "../pages/list";
import ListOrderPage from "../pages/list/children-pages/list-order";
import ListCardPage from "../pages/list/children-pages/list-card";
import PersonalPage from "../pages/personal";
import PersonalInforPage from "../pages/personal/children-pages/personal-infor";
import PersonalSettingsPage from "../pages/personal/children-pages/personal-settings";
import SignInPage from "../pages/sign-in";
import RegisterPage from "../pages/register";

const ROUTELIST:Iroute.IrouteItem[] = [
  {
    key: '0',
    title: <><IconHome/> 首页 </>,
    path: '/home',
    element: <HomePage />,
    children: [
      {
        key: '0_0',
        title: '主页',
        path: '/home/main',
        pathName: ['首页','主页'],
        element: <HomeMainPage />
      },
      {
        key: '0_1',
        title: '工作台',
        path: '/home/workbench',
        pathName: ['首页','工作台'],
        element: <HomeWorkbenchPage />
      },
      {
        key: '0_2',
        title: '文档',
        path: '/home/docs',
        pathName: ['首页','文档'],
        element: <HomeDocsPage />
      }
    ]
  },

  {
    key: '1',
    title: <> <IconList /> 列表页</>,
    path: '/list',
    element: <ListPage />,
    children: [
      {
        key: '1_0',
        title: '查询订单',
        path: '/list/order',
        pathName: ['列表页','查询订单'],
        element: <ListOrderPage />
      },
      {
        key: '1_1',
        title: '卡片列表',
        path: '/list/card',
        pathName: ['列表页','卡片列表'],
        element: <ListCardPage />
      }
    ]
  },

  {
    key: '2',
    title: <><IconUser /> 个人中心</>,
    path: '/personal',
    element: <PersonalPage />,
    children: [
      {
        key: '2_0',
        title: '用户信息',
        path: '/personal/infor',
        pathName: ['个人中心','用户信息'],
        element: <PersonalInforPage />
      },
      {
        key: '2_1',
        title: '用户设置',
        path: '/personal/settings',
        pathName: ['个人中心','用户设置'],
        element: <PersonalSettingsPage />
      }
    ]
  },

  {
    key: '999',
    path: '/signin',
    title: '登录',
    element: <SignInPage />,
    children: null
  },

  {
    key: '998',
    path: '/register',
    title: '注册',
    element: <RegisterPage />,
    children: null
  }
]

export default ROUTELIST;