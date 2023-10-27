import {FC} from 'react';
import { Outlet } from 'react-router';

const HomePage:FC = () => {
  return (
    <div> 
      <Outlet />
    </div>
  )
}

export default HomePage;