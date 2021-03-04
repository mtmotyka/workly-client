const initialState = {
  tasks: [],
  selectedTask: null,
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "SELECT_TASK":
      return { ...state, selectedTask: action.payload };
    case "EDIT_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, tasks: [...filteredTasks, action.payload] };
    default:
      return state;
  }
};
