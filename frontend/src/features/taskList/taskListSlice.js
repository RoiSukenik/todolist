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
        updateTaskByName: (state,action)=>
        {
            state.list.forEach(task => {
                if(task.TaskName === action.payload.TaskName)
                {
                    task.Task = action.payload.Task;
                }
            })
        },
        delTaskByName: (state,action) =>{
            const isTaskNameEqual=(taskName1,taskName2)=>
            {
                return taskName1 === taskName2
            }
            const updatedTaskList = state.list.filter(task =>!isTaskNameEqual(task.TaskName,action.payload));
            state.list = updatedTaskList;
        }
    }
})

export const {addTask,updateTaskByName,delTaskByName} = taskListSlice.actions;
export default taskListSlice.reducer;
