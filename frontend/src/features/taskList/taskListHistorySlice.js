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
        }
    }
})

export const {addToHistory} = taskListHistorySlice.actions;
export default taskListHistorySlice.reducer;
