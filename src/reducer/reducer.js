export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedState = {
        ...state,
        todoDetails: [...state.todoDetails, action.payload]
      };
      return updatedState;
    }
    case "DELETE_TODO": {
      const newState = {
        ...state,
        todoDetails: [
          ...state.todoDetails.slice(0, action.payload),
          ...state.todoDetails.slice(action.payload + 1)
        ]
      };
      return newState;
    }

    case "TASK_COMPLETED": {
      const updatedState = {
        ...state,
        todoDetails: [
          ...state.todoDetails.slice(0, action.payload),
          {
            ...state.todoDetails[action.payload],
            isChecked: !state.todoDetails[action.payload].isChecked
          },
          ...state.todoDetails.slice(action.payload + 1)
        ]
      };
      return updatedState;
    }

    default:
      return state;
  }
}
