import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id:1,
    name:"Lucy",
    phone:123123123
},{
    id:2,
    name:"Varonica",
    phone:234234234,
}];

const todoSlicer = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        Add:(state,action) => {
            return  [...state,action.payload]
        },
        Remove:(state,action) => {
            return state.filter(i => i.id !== action.payload.id)
        },
        Edit:(state,action) => {
            return 
        }
    }
})

export const {Add,Remove} = todoSlicer.actions
export default todoSlicer.reducer