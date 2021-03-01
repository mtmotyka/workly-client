import axios from "axios";

import { BACKEND_URL } from "../../config";

const token = localStorage.getItem("accessToken");

/* ---=== TASKS ACTIONS ===--- */

export const addTask = (formProps) => async (dispatch) => {
  const response = await axios.post(BACKEND_URL + "/api/tasks", formProps, {
    headers: { Authorization: token },
  });
  dispatch({ type: "ADD_TASK", payload: formProps });
};

export const getTasks = () => async (dispatch) => {
  const response = await axios.get(BACKEND_URL + "/api/tasks", {
    headers: { Authorization: token },
  });
  dispatch({ type: "GET_TASKS", payload: response.data });
};

export const selectTask = (task) => {
  return {
    type: "SELECT_TASK",
    payload: task,
  };
};
