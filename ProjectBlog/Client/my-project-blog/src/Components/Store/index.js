import { applyMiddleware, createStore } from "redux";
import { signUp_Users_Reducers } from "./Reducers/ReducersBlogs";
import { thunk } from "redux-thunk";
import CombinedReducers from "./CombineReducers/combinedReducers";

const store = createStore(CombinedReducers, applyMiddleware(thunk));

export default store;
