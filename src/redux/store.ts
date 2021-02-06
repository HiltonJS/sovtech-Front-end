import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import CategoryReducer from "../redux/Reducers/CategoryReducer";

const middleware = [thunk];

const store = createStore(
  CategoryReducer,

  applyMiddleware(...middleware)
);

export default store;
