import {createSlice} from "@reduxjs/toolkit";

export const trashSlice = createSlice({
    name: 'trash',
    initialState:{
        list: [],
    },
    reducers: {
        addTrash: (state, action) =>
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

export const {addTrash,delById} = trashSlice.actions;
export default trashSlice.reducer;
