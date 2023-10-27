import { createSlice } from "@reduxjs/toolkit";
import { Istore, Iuser } from "../../type";

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    signFlag: false,
    userData: {}
  },
  reducers: {
    setSignFlag: (state:Istore.IstoreUser,{payload}:{payload:boolean}) => {
      state.signFlag = payload;
    },
    setUserData:(state:Istore.IstoreUser,{payload}:{payload:Iuser.IuserData}) => {
      state.userData = payload;
    }
  }
});

export const { setSignFlag,setUserData } = userSlice.actions;
export default userSlice.reducer;