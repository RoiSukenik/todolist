import {createSlice} from "@reduxjs/toolkit";



export const taskListSlice = createSlice({
    name: 'taskList',
    initialState:{
        list: [],
    },
    reducers: {
        addNewTask: (state,action) =>{
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
        removeTaskByName: (state,action) =>{

            const isTaskNameEqual=(taskName1,taskName2)=>
            {
                return taskName1 === taskName2
            }
            const updatedTaskList = state.list.filter(task =>!isTaskNameEqual(task.TaskName,action.payload.TaskName))
            state.list = updatedTaskList;
        }
    }
})

export const {addNewTask,updateTaskByName,removeTaskByName} = taskListSlice.actions;
export default taskListSlice.reducer;
