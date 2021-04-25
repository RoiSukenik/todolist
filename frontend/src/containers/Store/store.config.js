import { configureStore} from '@reduxjs/toolkit'
import taskListSliceReducer from "../../features/taskList/taskListSlice";
import trashSliceReducer from "../../features/taskList/trashSlice";
import historySliceReducer from "../../features/taskList/historySlice";

export default configureStore({
    reducer: {
        taskList: taskListSliceReducer,
        trash: trashSliceReducer,
        history: historySliceReducer,
    },
})
