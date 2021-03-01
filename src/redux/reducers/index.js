import { combineReducers } from "redux";

import { taskReducer } from "./tasksReducers";

export default combineReducers({
  taskReducer,
});
