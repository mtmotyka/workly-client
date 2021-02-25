import axios from "axios";
import { BACKEND_URL } from "../../config";

/* ---=== TASKS ACTIONS ===--- */
const token = localStorage.getItem("accessToken");

export const getTasks = () => async (dispatch) => {
  const response = await axios.get(BACKEND_URL + "/api/tasks", {
    headers: { Authorization: token },
  });
  dispatch({ type: "GET_TASKS", payload: response.data });
};

export const selectTask = (task) => {
  return {
    type: "TASK_SELECTED",
    payload: task,
  };
};
