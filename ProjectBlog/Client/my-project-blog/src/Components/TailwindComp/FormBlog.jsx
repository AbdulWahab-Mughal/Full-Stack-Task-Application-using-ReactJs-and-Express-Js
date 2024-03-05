import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn_Users, SignUp_Users } from "../Store/Action/ActionsBlog";
import { ErrorNotify } from "../Toast/Toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const formBlog = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { isLoading: isLoaderSignUp } = useSelector(
    (state) => state.signUp_Users_Reducers
  );
  let { isLoading: isLoaderLogIn } = useSelector(
    (state) => state.logIn_Users_Reducers
  );
  const isLoading = isLoaderSignUp || isLoaderLogIn;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const signUpHandler = (objToSend) => {
    dispatch(SignUp_Users(objToSend, navigate));
  };

  const logInHandler = (objToSend) => {
    dispatch(LogIn_Users(objToSend, navigate));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (!email || !password) {
        ErrorNotify("Both Email And Password Is Required!");
        return;
      }
      const objToSend = {
        email,
        password,
      };
      logInHandler(objToSend);
    } else {
      if (!name || !email || !password || !phone) {
        ErrorNotify("required Fields are missing!");
        return;
      }
      const objToSend = {
        name,
        email,
        password,
        phone,
      };
      signUpHandler(objToSend);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={SubmitHandler}>
          <div className=" container flex flex-col justify-center space-y-12 bg-slate-400 py-4 px-6 rounded-2xl">
            <div className=" ">
              <h2 className=" text-center text-4xl font-semibold leading-7 text-gray-900">
                {isLogin ? "Log In" : "Register Here"}
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-96">
                {isLogin ? (
                  ""
                ) : (
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2 ">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                )}

                <div className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className=" form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>

                {isLogin ? (
                  ""
                ) : (
                  <div className="col-span-full">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className=" flex items-center justify-center gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default formBlog;
