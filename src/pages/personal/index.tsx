import {FC} from 'react';
import { Outlet } from 'react-router';

const PersonalPage:FC = () => {
  return (
    <div> 
      <h1>this is Personal Page</h1>
      <Outlet />
    </div>
  )
}

export default PersonalPage;