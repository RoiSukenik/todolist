import { configureStore} from '@reduxjs/toolkit'
import taskListSliceReducer from "../../features/taskList/taskListSlice";
import taskListHistorySliceReducer from "../../features/taskList/taskListHistorySlice";


export default configureStore({
    reducer: {
        taskList: taskListSliceReducer,
        removedList: taskListHistorySliceReducer,
    },
})
