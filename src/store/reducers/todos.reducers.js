const initialState = {
  data: [],
};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            task: action.task,
            id: action.id,
            isCompleted: action.isCompleted,
          },
        ],
      };
    case "DELETE_TODO":
      let todos = state.data.filter((todo) => {
        return todo.id !== action.id;
      });
      return {
        ...state,
        data: todos,
      };
    case "COMPLETED_TASK":
      const ctodo = state.data.filter((todo) => {
        return todo.id === action.id && todo.isCompleted === false
          ? (todo.isCompleted = true)
          : (todo.isCompleted = false);
      });
      console.log(ctodo);
      return {
        ...state,
        data: [...state.data],
      };
    default:
      return state;
  }
};
export default todos;
