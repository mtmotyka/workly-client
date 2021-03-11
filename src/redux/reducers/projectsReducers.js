const initialState = {
  projects: [],
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "GET_PROJECTS":
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
