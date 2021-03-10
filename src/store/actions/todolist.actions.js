export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETED_TASK = "COMPLETED_TASK";
export const addTodo = (task) => ({
  type: ADD_TODO,
  task,
  id: Math.random(),
  isCompleted: false,
});
export const DeleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
export const Completed = (id) => ({
  type: COMPLETED_TASK,
  id,
});
