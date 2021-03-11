import { combineReducers } from "redux";

import { taskReducer } from "./tasksReducers";
import { userReducer } from "./userReducers";
import { projectsReducer } from "./projectsReducers";

export default combineReducers({
  taskReducer,
  userReducer,
  projectsReducer,
});
