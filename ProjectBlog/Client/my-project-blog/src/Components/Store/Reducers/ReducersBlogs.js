import { ACTION_TYPES } from "../Constants/ActionTypes";

const INITIAL_STATE_SIGNUP = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_LOGIN = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_ADD_BLOGS = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_GET_BLOGS = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_UPDATE_BLOGS = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_DELETE_BLOGS = {
  isLoading: false,
  data: [],
};
const INITIAL_STATE_ISOPEN = {
  isOpen_Modal: false,
};

const signUp_Users_Reducers = (state = INITIAL_STATE_SIGNUP, action) => {
  switch (action.type) {
    case ACTION_TYPES.SIGNUP_USERS_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.SIGNUP_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.SIGNUP_USERS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
const logIn_Users_Reducers = (state = INITIAL_STATE_LOGIN, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USERS_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.LOGIN_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.LOGIN_USERS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
const add_Blogs_Reducers = (state = INITIAL_STATE_ADD_BLOGS, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOGS_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.ADD_BLOGS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.ADD_BLOGS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
const get_Blogs_Reducers = (state = INITIAL_STATE_GET_BLOGS, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_BLOGS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.GET_BLOGS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.GET_BLOGS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const update_Blogs_Reducers = (state = INITIAL_STATE_UPDATE_BLOGS, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_BLOGS_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.UPDATE_BLOGS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.UPDATE_BLOGS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const delete_Blogs_Reducers = (state = INITIAL_STATE_DELETE_BLOGS, action) => {
  switch (action.type) {
    case ACTION_TYPES.DELETE_BLOGS_SUCCESS:
      return {
        ...state,
        data: [action.payload],
        isLoading: false,
      };
    case ACTION_TYPES.DELETE_BLOGS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.DELETE_BLOGS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const isOpen_Reducers = (state = INITIAL_STATE_ISOPEN, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_OPEN:
      return {
        isOpen_Modal: !state.isOpen_Modal,
      };

    default:
      return {
        isOpen_Modal: state.isOpen_Modal,
      };
  }
};

export {
  signUp_Users_Reducers,
  logIn_Users_Reducers,
  add_Blogs_Reducers,
  get_Blogs_Reducers,
  isOpen_Reducers,
  update_Blogs_Reducers,
  delete_Blogs_Reducers,
};
