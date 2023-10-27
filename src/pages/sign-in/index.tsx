import { FC,useEffect} from 'react';
import { Button, Form, Input, Message } from '@arco-design/web-react';
import { useNavigate } from "react-router-dom";
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setSignFlag, setUserData } from '../../store/slices/user';

import { SignInPageDiv } from './style';
import { userSignIn } from '../../service/server/user';
import { Istore, Iuser } from '../../type';

const FormItem = Form.Item;

const SignInPage:FC = () => {
  const signFlag = useSelector<Istore.Islice,boolean>(state => state.userSlice.signFlag);
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const navigate = useNavigate();
  const [ form ] = Form.useForm(); 

  useEffect(() => {
    signFlag && navigate('/');
  },[])

  const onSubmit = async (v:Iuser.IuserSignIn) => {
    try {
      const { msg,success,userData } = await userSignIn(v) as Iuser.IuserSignInRes;
      if(success) {
        Message.success(msg);
        dispatch(setSignFlag(true));
        dispatch(setUserData(userData));
        localStorage.setItem("user",JSON.stringify(userData));
        navigate('/');
      } else {
        Message.warning(msg);
      }
    } catch {
      Message.error('something was error');
    }
  }

  const registerClick = () => {
    navigate('/register');
  }

  return (
    <SignInPageDiv> 
      {
        !signFlag &&
        <Form 
        form={form}
        style={{ width: 560,marginLeft:-95 }} 
        autoComplete='off'
        onSubmit={onSubmit}
      >
        <FormItem label='邮箱' field='name' rules={[{ required: true }]} style={{marginLeft:24}}>
          <Input placeholder='请输入邮箱或手机号' />
        </FormItem>
        
        <FormItem label='密码' field='password' rules={[{ required: true }]} style={{marginLeft:24}}>
          <Input.Password defaultValue='password' placeholder='请输入密码' />
        </FormItem>

        <FormItem wrapperCol={{ offset: 6 }}>
          <Button type='primary' htmlType='submit' style={{ marginRight: 72,paddingLeft:20,paddingRight: 20}}>
            登 录
          </Button>
          <Button style={{ marginRight: 24,paddingLeft:20,paddingRight: 20 }} onClick={registerClick}> 注 册 </Button>
        </FormItem>
      </Form>
      }
    </SignInPageDiv>
  )
}

export default SignInPage;