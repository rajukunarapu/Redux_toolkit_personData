import { createSlice , configureStore } from "@reduxjs/toolkit";

const state  = []

let slice1 =  createSlice({
            name:'user',
            initialState:state,
            reducers:{
                userUpdate:(state,action)=>[...state ,action.payload ],
            }
        })


let store = configureStore({
    reducer:{
        user:slice1.reducer
    }
})

export default store

export const {userUpdate}  = slice1.actions