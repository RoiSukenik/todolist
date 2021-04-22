import { configureStore } from '@reduxjs/toolkit'
import taskListSliceReducer from "../../features/taskList/taskListSlice";

export default configureStore({
    reducer: {
        taskList: taskListSliceReducer,
    },
})
