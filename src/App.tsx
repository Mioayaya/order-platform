
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useRoutes } from 'react-router';
import './App.css';
import { Istore, Iuser } from './type';
import ContentPage from './pages/content';
import router from './router';
import { Message } from '@arco-design/web-react';
import { userGetInfor } from './service/server/user';
import { Dispatch,AnyAction } from '@reduxjs/toolkit';
import { setSignFlag, setUserData } from './store/slices/user';

function App() {
  const signFlag = useSelector<Istore.Islice,boolean>(state => state.userSlice.signFlag);
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user) {
      const userData = JSON.parse(user) as Iuser.IuserData;
      getUserData(userData.uid);
      
    } else {
      !signFlag && navigate('/signin');
    }
  },[])

  const getUserData = async (uid:number) => {
    try {
      const { userData } = await userGetInfor(uid) as Iuser.IuserSignInRes;
      localStorage.setItem("user",JSON.stringify(userData));
      dispatch(setSignFlag(true));
      dispatch(setUserData(userData));
    } catch {
      Message.error('smoething was wrong');
    }
  }

  return (
    <div className='app'>
      {
        signFlag ?
        <ContentPage /> :
        useRoutes(router)
      }
    </div>
  )
}

export default App
