import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import NotFoundPage from "../pages/404";
import ROUTELIST from "../common/routeList";
import { Iroute } from "../type";

const lazyLoad = (children: ReactElement) => {
  return <Suspense fallback={<>loading···</>}>{children}</Suspense>
}

let _route:Iroute.IrouteList[] = [];

const firstItem = {
  path: '/',
  children: [
    {
      index: true,
      element: <Navigate to={ROUTELIST[0].path} />
    },
    {
      path: '*',
      element: lazyLoad(<NotFoundPage />)
    }
  ]
}

_route.push(firstItem);

for(let i=0;i<ROUTELIST.length;i++) {
  let _item:Iroute.IrouteList = {
    path: ROUTELIST[i].path,
    element: ROUTELIST[i].element
  }
  const child = ROUTELIST[i].children;
  if(child) {
    _item.children = [];
    for(let j=0;j<child.length;j++) {
      if(j===0) {
        _item.children.push({
          index: true,
          element: <Navigate to={child[j].path} />
        });
        _item.children.push({
          path: '*',
          element: lazyLoad(<NotFoundPage />)
        })
      }
      _item.children.push({
        path: child[j].path,
        element: child[j].element
      })
    }
  }
  _route.push(_item);
}

export default _route;