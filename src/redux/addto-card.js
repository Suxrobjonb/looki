import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     addModal: []
};

const cardReduser = createSlice(
     {
          name:"addModal",
          initialState,
          reducers:{
               modalCard:(state, action)=> {
               state.addModal.push(action.payload);
               // console.log(action.payload);
               }
          }
     }
)

export const addElem = (state) => state.addModal 
export const { modalCard } = cardReduser.actions;
export default cardReduser.reducer;