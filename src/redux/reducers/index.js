import { combineReducers } from "redux";

import { taskReducer } from "./tasksReducers";
import { userReducer } from "./userReducers";

export default combineReducers({
  taskReducer,
  userReducer,
});
