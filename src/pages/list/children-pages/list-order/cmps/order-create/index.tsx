import { FC, useState} from 'react';
import { Modal, Button, Form, Input, Message, InputNumber } from '@arco-design/web-react';
import { IconPlus } from '@arco-design/web-react/icon';
import { Iorder, Istore, Iuser } from '../../../../../../type';
import { useSelector } from 'react-redux';
import { orderApi } from '../../../../../../service';
const FormItem = Form.Item;

const OrderCreate:FC = () => {
  const userData = useSelector<Istore.Islice,Iuser.IuserData>(state => state.userSlice.userData);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const onOk = async () => {
    const { name,unit,department,amount } = await form.validate() as Iorder.IcreateForm;
    const data = {
      name,
      amount,
      apply_unit: unit,
      apply_department: department,
      bookkeeper_id: userData.uid,
    }
    setConfirmLoading(true);
    const { msg, success } = await orderApi.orderCreate(data) as Iorder.IcreateResData;
    if(success) {
      Message.success(msg);
      setVisible(false);
    }else {
      Message.warning(msg);
    }
    setConfirmLoading(false); 
    // 发送请求~
  }

  return (
    <div> 
      <Button onClick={() => setVisible(true)} type='primary' icon={<IconPlus />}>新建</Button>

      <Modal
        title='新建订单'
        visible={visible}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
          labelCol={{
            style: { flexBasis: 90 },
          }}
          wrapperCol={{
            style: { flexBasis: 'calc(100% - 90px)' },
          }}
        >
          <FormItem label='订单名称' field='name' rules={[{ required: true }]}>
            <Input placeholder='' />
          </FormItem>
          <FormItem label='申请单位' field='unit' rules={[{ required: true }]}>
            <Input placeholder='' />
          </FormItem>
          <FormItem label='申请部门' field='department' rules={[{ required: true }]}>
            <Input />
          </FormItem>
          <FormItem label='金额' field='amount' rules={[{ required: true }]}>
            <InputNumber />
          </FormItem>
        </Form>
      </Modal>

    </div>
  )
}

export default OrderCreate;