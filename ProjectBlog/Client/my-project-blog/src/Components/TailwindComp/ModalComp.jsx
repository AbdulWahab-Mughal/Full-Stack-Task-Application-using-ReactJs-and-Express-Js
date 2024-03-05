import React from "react";
import { MdAddComment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { add_Blogs, isOpen, update_Blogs } from "../Store/Action/ActionsBlog";
import { ErrorNotify } from "../Toast/Toastify";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const ModalComp = ({
  taskDetails,
  setTaskDetails,
  isUpdateState,
  setIsUpdateState,
  isUpdateID,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading: isLoaderadd } = useSelector(
    (state) => state.add_Blogs_Reducers
  );
  const { isLoading: isLoaderupdate } = useSelector(
    (state) => state.update_Blogs_Reducers
  );

  const isLoaderBlog = isLoaderadd || isLoaderupdate
  const { isOpen_Modal } = useSelector((state) => state.isOpen_Reducers);

  let token = localStorage.getItem("token");

  const ToggleButtonHandler = () => {
    dispatch(isOpen());
    setTaskDetails({
      title: "",
      description: "",
      status: "",
    });
  };
  const OnChangeHandler = (e) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: value,
    });
  };
  const TaskSubmitHandler = () => {
    let title = taskDetails.title;
    let description = taskDetails.description;
    let status = taskDetails.status;
    if (!title || !description || !status) {
      ErrorNotify("required Fields are missing!");

      return;
    }
    const objToSend = {
      title,
      description,
      status,
    };
    if (token) {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      if (!isUpdateState) {
        dispatch(add_Blogs(objToSend, config));
      } else {
        setIsUpdateState(!isUpdateState);
        dispatch(update_Blogs(objToSend, isUpdateID, config));
        setTaskDetails({
          title: "",
          description: "",
          status: "",
        });
      }
    } else {
      ErrorNotify("You are not allowed to post! GO And Login");
    }
  };

  return isLoaderBlog ? (
    <Loader />
  ) : (
    <>
      {!isOpen_Modal ? (
        <div className=" container flex justify-center mt-3">
          <button
            className=" bg-slate-900 px-3 py-1 rounded-lg text-white"
            onClick={ToggleButtonHandler}
          >
            <MdAddComment size={40} />
          </button>
        </div>
      ) : token ? (
        <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[600px] flex flex-col">
            <div className="bg-white p-2 rounded-lg">
              <h1 className="text-center mb-4 text-2xl text-gray-900 font-semibold">
                {/* {? "Add Blog" : "Update Blog"} */}
                Tasks
              </h1>
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={taskDetails.title}
                    onChange={OnChangeHandler}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={taskDetails.description}
                    onChange={OnChangeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className=" sm:col-span-3 mt-2">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Status
                </label>
                <div className="mt-2">
                  <select
                    id="status"
                    name="status"
                    value={taskDetails.status}
                    onChange={OnChangeHandler}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>status</option>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Test</option>
                    <option>Done</option>
                  </select>
                </div>
              </div>
              <div className="BTN mt-4 flex items-center justify-center gap-x-6">
                <button
                  className="bg-slate-700 px-6 py-3 rounded-lg text-white text-sm place-self-end mt-2"
                  onClick={ToggleButtonHandler}
                >
                  Close
                </button>
                <button
                  className="bg-slate-700 px-6 py-3 rounded-lg text-white text-sm place-self-end mt-2"
                  onClick={() => {
                    TaskSubmitHandler();
                    ToggleButtonHandler();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[600px] flex flex-col">
            <div className="bg-white p-2 rounded-lg">
              <h1 className="text-center mb-4 text-5xl text-red-400 font-semibold">
                ALERT!
              </h1>
              <h1 className=" bg-slate-600 mx-36 py-3 rounded-md text-center mb-4 text-2xl text-white font-semibold">
                LOGIN REQUIRED
              </h1>
              <p className=" mx-24 text-center mb-4 text-gray-900 font-semibold">
                You Are Unable To Add Task Because You Are Not Login. Please
                Login First to Add Task
              </p>

              <div className="BTN mt-4 flex items-center justify-center gap-x-6">
                <button
                  className="bg-slate-700 px-6 py-3 rounded-lg text-white text-sm place-self-end mt-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </button>
                <button
                  className="bg-slate-700 px-6 py-3 rounded-lg text-white text-sm place-self-end mt-2"
                  onClick={ToggleButtonHandler}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComp;
