import { combineReducers } from "redux";
import getTasksReducer from "./getTasksReducer";
import showTaskDetailsReducer from "./showTaskDetailsReducer";

export default combineReducers({
  selectTask: showTaskDetailsReducer,
  tasksList: getTasksReducer,
});
