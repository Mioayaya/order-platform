import {FC} from 'react';
import { Outlet } from 'react-router';

const ListPage:FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ListPage;