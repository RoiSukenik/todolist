import {createSlice} from "@reduxjs/toolkit";


export const taskListSlice = createSlice({
    name: 'taskList',
    initialState:{
        list: [],
    },
    reducers: {
        addTask: (state,action) =>{
            state.list = [...state.list,action.payload];
        },
        updateByName: (state,action)=>
        {
            state.list.forEach(task => {
                if(task.TaskName === action.payload.TaskName)
                {
                    task.Task = action.payload.Task;
                }
            })
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

export const {addTask,updateByName,delById} = taskListSlice.actions;
export default taskListSlice.reducer;
