import { FC} from 'react';
import { ListOrderPageDiv } from './style';
import OrderSearch from './cmps/order-search';
import OrderCreate from './cmps/order-create';
import OrderTable from './cmps/order-table';

const ListOrderPage:FC = () => {

  return (
    <ListOrderPageDiv> 
      <div className="title">查询订单</div>
      <OrderSearch />
      <OrderCreate />
      <OrderTable />
    </ListOrderPageDiv>
  )
}

export default ListOrderPage;