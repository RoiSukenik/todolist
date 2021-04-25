import {createSlice} from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: 'history',
    initialState:{
        list: [],
    },
    reducers: {
        addHistory: (state, action) =>
        {
            state.list =[...state.list,action.payload]
        },
        delById: (state,action) =>{
            const isTaskNameEqual=(taskId1,taskId2)=>
            {
                return taskId1 === taskId2
            }
            const updatedTaskList = state.list.filter(task =>!isTaskNameEqual(task.id,action.payload));
            state.list = updatedTaskList;
        }
    }
})

export const {addHistory,delById} = historySlice.actions;
export default historySlice.reducer;
