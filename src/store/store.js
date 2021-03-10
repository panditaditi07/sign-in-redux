import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import LoginReducer from "./reducers/login.reducer";
import TodoReducer from "./reducers/todos.reducers";

const Rootreducer = combineReducers({ login: LoginReducer, todo: TodoReducer });

const logger = (store) => (next) => (action) => {
  console.log("[Middleware] Dispatching", action);
  const result = next(action);
  console.log("[Middleware] next state", store.getState());
  return result;
};

const store = createStore(Rootreducer, applyMiddleware(logger, thunk));
export default store;
