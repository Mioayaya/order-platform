import {FC} from 'react';
import { Outlet } from 'react-router';

const ListPage:FC = () => {
  return (
    <div> 
      <h1>this is List Page</h1>
      <Outlet />
    </div>
  )
}

export default ListPage;