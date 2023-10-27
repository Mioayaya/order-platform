import { FC, useState, useEffect} from 'react';
import { Button, Form, Input, Message, InputNumber } from '@arco-design/web-react';
import { RegisterPageDiv } from './style';
import { useNavigate } from 'react-router';
import { Istore, Iuser } from '../../type';
import { userRegister } from '../../service/server/user';
import { useSelector } from 'react-redux';
const FormItem = Form.Item;

const RegisterPage:FC = () => {
  const navigate = useNavigate();
  const signFlag = useSelector<Istore.Islice,boolean>(state => state.userSlice.signFlag);
  const [ password,setPassword] = useState<string>('');
  const [ form ] = Form.useForm();

  useEffect(() => {
    signFlag && navigate('/');
  },[])

  const onSubmit = async (v:Iuser.IuserRegister) => {
    try {
      const { flag,msg} = await userRegister(v) as Iuser.IuserRegisterRes;
      if(flag) {
        Message.success(msg);
        navigate('/signin');
      }else {
        Message.warning(msg);
      }
      
    } catch {
      Message.error('something was wrong')
    }
  }

  const signInClick = () => {
    navigate('/signin');
  }

  return (
    <RegisterPageDiv> 
      {
        !signFlag &&
        <Form 
          form={form}
          style={{ width: 560,marginLeft:-95 }} 
          autoComplete='off'
          onSubmit={ onSubmit }
          onValuesChange={(v) => {
            v.password && setPassword(v.password);
          }}
        >
          <FormItem label='邮箱' field='email' rules={[{ required: true }]} style={{marginLeft:24}}>
            <Input placeholder='请输入邮箱' />
          </FormItem>
          
          <FormItem label='手机号' field='phone' rules={[{ required: true,type: 'number', }]} style={{marginLeft:24}}>
            <InputNumber  placeholder='请输入手机号' />
          </FormItem>

          <FormItem label='用户名' field='nick_name' rules={[{ required: true }]} style={{marginLeft:24}}>
            <Input placeholder='请输入用户名' />
          </FormItem>

          <FormItem label='密码' field='password' rules={[{ required: true }]} style={{marginLeft:24}}> 
            <Input.Password defaultValue='password' placeholder='请输入密码' />
          </FormItem>

          <FormItem 
            label='重复密码' 
            field='password2' 
            rules={[{ 
              required: true, 
              validator(value, cb) {
                if (value !== password) {
                  return cb('两次密码不一致！');
                }

                return cb();
              },
            }]} 
            style={{marginLeft:24}}
          >
            <Input.Password defaultValue='password' placeholder='请重复密码' />
          </FormItem>

          <FormItem wrapperCol={{ offset: 6 }}>
            <Button type='primary' htmlType='submit' style={{ marginRight: 72,paddingLeft:20,paddingRight: 20}}>
              注 册
            </Button>
            <Button style={{ marginRight: 24,paddingLeft:20,paddingRight: 20 }} onClick={signInClick}> 登 录 </Button>
          </FormItem>
        </Form>
      }
      
      
    </RegisterPageDiv>
  )
}

export default RegisterPage;