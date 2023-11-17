import { createSlice } from "@reduxjs/toolkit";
import { Iorder, Istore } from "../../type";

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    offset: 0,
    limit: 0,
    update: false,
    orderData: []
  },
  reducers: {
    setOrderData:(state:Istore.IstoreOrder,{payload}:{payload:Iorder.IorderData[]}) => {
      state.orderData = payload;
    }
  }
})

const { setOrderData } = orderSlice.actions;

export const orderSliceFunc = {
  setOrderData,
}

export default orderSlice.reducer;