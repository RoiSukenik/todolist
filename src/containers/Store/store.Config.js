import { configureStore } from '@reduxjs/toolkit'
import taskListSliceReducer from "../../features/taskList/taskListSlice";
import taskListHistoryReducer from "../../features/taskList/taskListHistorySlice";


export default configureStore({
    reducer: {
        taskList: taskListSliceReducer,
        taskListHistory :taskListHistoryReducer,
    },
})
