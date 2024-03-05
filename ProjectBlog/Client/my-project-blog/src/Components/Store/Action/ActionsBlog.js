import axios from "axios";
import { ACTION_TYPES } from "../Constants/ActionTypes";
import { BASE_URL } from "../../../global";
import { ErrorNotify, SuccessNotify } from "../../Toast/Toastify";

const SignUp_Users = (objToSend, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SIGNUP_USERS,
    });
    try {
      const response = await axios.post(`${BASE_URL}/signup`, objToSend);
      const data = response.data;
      SuccessNotify(data.message);
      navigate("/login");

      dispatch({
        type: ACTION_TYPES.SIGNUP_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      dispatch({
        type: ACTION_TYPES.SIGNUP_USERS_ERROR,
      });
    }
  };
};

const LogIn_Users = (objToSend, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_USERS,
    });
    try {
      const response = await axios.post(`${BASE_URL}/login`, objToSend);
      const data = response.data;
      const token = data.token;
      localStorage.setItem("token", token);
      SuccessNotify(data.message);
      navigate("/");

      dispatch({
        type: ACTION_TYPES.LOGIN_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      dispatch({
        type: ACTION_TYPES.LOGIN_USERS_ERROR,
      });
    }
  };
};

const add_Blogs = (objToSend, config) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.ADD_BLOGS,
    });
    try {
      const response = await axios.post(
        `${BASE_URL}/usertasks`,
        objToSend,
        config
      );
      const data = response.data;
      // const token = data.token;
      console.log("User: ", data);
      // localStorage.setItem("token", token);
      SuccessNotify(data.message);
      // navigate("/");

      dispatch({
        type: ACTION_TYPES.ADD_BLOGS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      console.log(error);
      dispatch({
        type: ACTION_TYPES.ADD_BLOGS_ERROR,
      });
    }
  };
};

const get_Blogs = (config) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.GET_BLOGS,
    });
    try {
      const response = await axios.get(`${BASE_URL}/usertasks`, config);
      const data = response.data.data;
      // console.log(data);

      dispatch({
        type: ACTION_TYPES.GET_BLOGS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      console.log(error);
      dispatch({
        type: ACTION_TYPES.GET_BLOGS_ERROR,
      });
    }
  };
};

const update_Blogs = (objToSend, id, config) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_BLOGS,
    });
    try {
      const response = await axios.put(
        `${BASE_URL}/usertasks`,
        { id, ...objToSend },
        config
      );
      const data = response.data;
      SuccessNotify(data.message);

      dispatch({
        type: ACTION_TYPES.UPDATE_BLOGS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      dispatch({
        type: ACTION_TYPES.UPDATE_BLOGS_ERROR,
      });
    }
  };
};

const delete_Blogs = (_id, config) => {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.DELETE_BLOGS,
    });
    try {
      const response = await axios.delete(
        `${BASE_URL}/usertasks/${_id}`,
        config
      );
      const data = response.data;
      console.log(response);
      SuccessNotify(data.message);

      dispatch({
        type: ACTION_TYPES.DELETE_BLOGS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      ErrorNotify(error.response.data.message);
      dispatch({
        type: ACTION_TYPES.DELETE_BLOGS_ERROR,
      });
    }
  };
};

const isOpen = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.IS_OPEN,
    });
  };
};

export {
  SignUp_Users,
  LogIn_Users,
  add_Blogs,
  get_Blogs,
  update_Blogs,
  isOpen,
  delete_Blogs,
};
