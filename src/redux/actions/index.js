import axios from "axios";
import { toast } from "react-toastify";

import { BACKEND_URL } from "../../config";

const token = localStorage.getItem("accessToken");

/* ---=== TASKS ACTIONS ===--- */
export const addTask = (formProps) => async (dispatch) => {
  const response = await axios.post(BACKEND_URL + "/api/tasks", formProps, {
    headers: { Authorization: token },
  });
  dispatch({ type: "ADD_TASK", payload: formProps });
  if (response.status === 200) {
    toast.info("✔️ Task added successfully");
  } else {
    toast.error("😓 Something went wrong. Try again");
  }
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

export const editTask = (task, id) => async (dispatch) => {
  const response = await axios.put(BACKEND_URL + "/api/tasks/" + id, task, {
    headers: { Authorization: token },
  });
  dispatch({ type: "EDIT_TASK", payload: task });
  if (task.completed === false) {
    toast("✅ Task updated");
  }
};

/* ---=== AUTH ACTIONS ===--- */
