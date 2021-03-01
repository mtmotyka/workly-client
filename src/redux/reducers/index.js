import { combineReducers } from "redux";

import {
  getTasksReducer,
  showTaskDetailsReducer,
  addTaskReducer,
} from "./tasksReducers";

export default combineReducers({
  selectTask: showTaskDetailsReducer,
  tasksList: getTasksReducer,
  addTask: addTaskReducer,
});
