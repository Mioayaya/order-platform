import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Iorder, Istore } from '../../../../../../type';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { orderApi } from '../../../../../../service';
import { Message, Table } from '@arco-design/web-react';
import { orderSliceFunc } from '../../../../../../store/slices/order';

const OrderTable:FC = () => {
  const orderData = useSelector<Istore.Islice,Iorder.IorderData[]>(state => state.orderSlice.orderData);
  const offset = useSelector<Istore.Islice,number>(state => state.orderSlice.offset);
  const limit = useSelector<Istore.Islice,number>(state => state.orderSlice.limit);
  const dispatch:Dispatch<AnyAction> = useDispatch();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    try {
      getOrderDataList()
    } catch {
      Message.error('error something was wrong');
      setLoading(false);
    } finally {
      setLoading(false);
      console.log(orderData);
    }
  },[])

  const getOrderDataList = async () => {
    const res = await orderApi.orderInfo({offset,limit}) as {data:Iorder.IorderData[]};
    dispatch(orderSliceFunc.setOrderData(res.data));
  }
  
  /**table data */
  const colums = [
    {
      title: '订单名称',
      dataIndex: 'name',
      sorter: (a:{name:string}, b:{name:string}) => a.name.length - b.name.length,
    },
    {
      title: '订单编号',
      dataIndex: 'id',
      sorter: (a:{id:number}, b:{id:number}) => a.id - b.id,
    },
    {
      title: '申请单位',
      dataIndex: 'apply_unit'
    },
    {
      title: '申请部门',
      dataIndex: 'apply_department'
    },
    {
      title: '金额',
      dataIndex: 'amount'
    },
    {
      title: '创建时间',
      dataIndex: 'created'
    },
    {
      title: '更新时间',
      dataIndex: 'update'
    },
    {
      title: '创建人',
      dataIndex: 'bookkeeper_id'
    }
  ]

  return (
    <div>
      {
        orderData &&
        <Table loading={loading} columns={colums} data={orderData}/>
      }

    </div>
  )
}

export default OrderTable;