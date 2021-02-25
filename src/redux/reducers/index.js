import { combineReducers } from "redux";
import getTasksReducer from "./getTasksReducer";

const tasksListReducer = () => {
  return [
    { title: "Piosenka 1", duration: "4:05" },
    { title: "Piosenka 2", duration: "7:05" },
    { title: "Piosenka 3", duration: "12:05" },
  ];
};

const showTaskDetailsReducer = (selectedTask = null, action) => {
  if (action.type === "TASK_SELECTED") {
    return action.payload;
  }
  return selectedTask;
};

export default combineReducers({
  tasks: tasksListReducer,
  selectedTask: showTaskDetailsReducer,
  tasksList: getTasksReducer,
});
