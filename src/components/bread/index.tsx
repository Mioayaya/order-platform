import { FC, useEffect, useState} from 'react';
import MENU from '../../common/localData';
import { useLocation } from 'react-router';
import { Breadcrumb } from '@arco-design/web-react';

const BreadcrumbItem = Breadcrumb.Item;

const Bread:FC = () => {
  const [arr,setArr] = useState<string[]>(['']);
  const location = useLocation();
  
  useEffect(() => {
    const { pathname } = location;
    setArr(getPathName(pathname))
  },[location])

  const getPathName = (path:string) => {
    for(let i in MENU) {
      for(let j in MENU[i].child) {
        if(path === MENU[i].child[j].path) {
          return MENU[i].child[j].pathName;
        }
      }
    }
    return [];
  }

  return (
    <div>
      <Breadcrumb style={{fontSize: 16}}>
        <BreadcrumbItem>{arr[0]}</BreadcrumbItem>
        <BreadcrumbItem style={{color:'#165DFF'}}>{arr[1]}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default Bread;