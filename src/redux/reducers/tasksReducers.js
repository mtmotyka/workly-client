export const addTaskReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return action.payload;
    default:
      return state;
  }
};

export const getTasksReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export const showTaskDetailsReducer = (selectedTask = null, action) => {
  switch (action.type) {
    case "SELECT_TASK":
      return action.payload;
    default:
      return selectedTask;
  }
};
