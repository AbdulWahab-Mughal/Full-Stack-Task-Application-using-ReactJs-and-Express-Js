import { combineReducers } from "redux";
import {
  signUp_Users_Reducers,
  logIn_Users_Reducers,
  add_Blogs_Reducers,
  get_Blogs_Reducers,
  isOpen_Reducers,
  update_Blogs_Reducers,
  delete_Blogs_Reducers,
} from "../Reducers/ReducersBlogs";

const CombinedReducers = combineReducers({
  signUp_Users_Reducers,
  logIn_Users_Reducers,
  add_Blogs_Reducers,
  get_Blogs_Reducers,
  isOpen_Reducers,
  update_Blogs_Reducers,
  delete_Blogs_Reducers,
});

export default CombinedReducers;
