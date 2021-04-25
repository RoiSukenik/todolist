import {createSlice} from "@reduxjs/toolkit";

export const taskListHistorySlice = createSlice({
    name: 'taskListHistory',
    initialState:{
        historyList: [],
    },
    reducers: {
        addToHistory: (state, action) =>
        {
            state.historyList =[...state.historyList,action.payload]
        },
        delFromHistory: (state,action) =>{
            const isTaskNameEqual=(taskName1,taskName2)=>
            {
                return taskName1 === taskName2
            }
            const updatedTaskList = state.list.filter(task =>!isTaskNameEqual(task.TaskName,action.payload));
            state.list = updatedTaskList;
        }
    }
})

export const {addToHistory,delFromHistory} = taskListHistorySlice.actions;
export default taskListHistorySlice.reducer;
