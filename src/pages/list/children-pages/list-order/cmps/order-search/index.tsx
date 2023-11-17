import { FC } from 'react';
import { Button, Form, Grid, Input, DatePicker, InputNumber } from '@arco-design/web-react';
import OrderSearchDiv from './style';
import { Iorder } from '../../../../../../type';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const OrderSearch:FC = () => {
  const [ form ] = Form.useForm();

  const onSubmit = async (v:Iorder.Isearch) => {
    console.log(v);
  }

  return (
    <OrderSearchDiv>
      <Form
          form={form}
          autoComplete='off'
          onSubmit={onSubmit}
          className='search'
        >
          <div className="left">
            <Grid.Row gutter={30}>
              <Grid.Col span={8}>
                <FormItem label='订单编号' field='id'>
                  <InputNumber placeholder='请输入订单编号' />
                </FormItem>
              </Grid.Col>
              <Grid.Col span={8}>
                <FormItem label='申请单位' field='unit'>
                  <Input placeholder='请输入申请单位' />
                </FormItem>
              </Grid.Col>
              <Grid.Col span={8}>
                <FormItem label='申请部门' field='department'>
                  <Input placeholder='请输入申请部门' />
                </FormItem>
              </Grid.Col>
            </Grid.Row>

            <Grid.Row gutter={30}>
              <Grid.Col span={8}>
                <FormItem label='订单名称' field='name'>
                  <Input placeholder='请输入订单名称'/>
                </FormItem>
              </Grid.Col>

              <Grid.Col span={8}>
                <FormItem label='创建时间' field='created'>
                  <RangePicker
                    showTime={{
                      defaultValue: ['00:00', '23:59'],
                      format: 'HH:mm',
                    }}
                    format='YYYY-MM-DD HH:mm'
                  />
                </FormItem>
              </Grid.Col>
              
              <Grid.Col span={8}>
                <FormItem label='金额最大值' field='amount'>
                  <InputNumber placeholder='请输入最大金额'/>
                </FormItem>
              </Grid.Col>
            </Grid.Row>

          </div>

          <div className="right">
            <Button type='primary' htmlType='submit'>查询</Button>
            <Button
              onClick={() => {      
                form.resetFields();        
              }}
            >
              重置
            </Button>
          </div>
        </Form>
    </OrderSearchDiv>
  )
}

export default OrderSearch;
