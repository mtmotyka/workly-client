import axios from "axios";
import { toast } from "react-toastify";
import decode from "jwt-decode";

import { BACKEND_URL } from "../../config";

const token = localStorage.getItem("accessToken");
const decodedToken = token !== null ? decode(token) : null;

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

/* ---=== USERS ACTIONS ===--- */

export const getUserInfo = () => async (dispatch) => {
  const response = await axios.get(
    BACKEND_URL + "/api/users/" + decodedToken.id,
    {
      headers: { Authorization: token },
    }
  );
  dispatch({ type: "GET_USER", payload: response.data });
};

export const updateUserDetails = (userDetails) => async (dispatch) => {
  const response = await axios.put(BACKEND_URL + "/api/users", userDetails, {
    headers: { Authorization: token },
  });
  dispatch({ type: "EDIT_USER", payload: userDetails });
  if (response.status === 200) {
    toast.success("✔️ Your profile has been updated");
  } else {
    toast.error("😓 Something went wrong. Try again");
  }
};

export const updateUserPassword = (password) => async (dispatch) => {
  try {
    const response = await axios.put(
      BACKEND_URL + "/api/users/password",
      password,
      {
        headers: { Authorization: token },
      }
    );
    dispatch({ type: "EDIT_PASSWORD", payload: password });
    toast.success("✔️ Your password has been updated");
  } catch (err) {
    toast.error("The old password is incorrect");
  }
};
