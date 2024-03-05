import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Image from "../../assets/Images/Blog.jpeg";
import { delete_Blogs, get_Blogs, isOpen } from "../Store/Action/ActionsBlog";
import { useDispatch, useSelector } from "react-redux";

const Cards = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.get_Blogs_Reducers);
  let tasks = props.tasks;
  let { title, description, status } = tasks;
  const AppendData = props.AppendData;
  const setIsUpdateState = props.setIsUpdateState;
  const isUpdateState = props.isUpdateState;
  title = title.slice(0, 30);
  description = description.slice(0, 150);
  let token = localStorage.getItem("token");

  const ToggleButtonHandler = (tasks) => {
    let task = data.find((pro) => {
      return pro._id === tasks._id;
    });
    AppendData(task, task._id);
    setIsUpdateState(!isUpdateState);

    dispatch(isOpen());
  };
  const deleteBtnHandler = (tasks) => {
    const task = data.find((pro) => pro._id === tasks._id);
    if (token) {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      dispatch(delete_Blogs(task._id, config));
    }
    window.location.reload();
  };

  return (
    <>
      <div className="p-4 md:w-1/3 shadow-slate-300 shadow-sm ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center my-2"
              src={Image}
              alt="blog"
            />
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              TITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}...
            </h1>
            <p className="leading-relaxed mb-3">{description}...</p>
            <h2 className="tracking-widest text-xs title-font text-center font-medium text-gray-400 mb-1">
              Status
            </h2>
            <h1 className="title-font text-lg font-medium mx-16 rounded-md  text-white mb-3 text-center bg-slate-900">
              {status}
            </h1>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <abbr
                  title="Want To Edit Task"
                  className=" cursor-pointer text-gray-700"
                >
                  {" "}
                  <FaEdit
                    size={17}
                    onClick={() => {
                      ToggleButtonHandler(tasks);
                    }}
                  />
                </abbr>
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <abbr
                  title="Want To Delete Task"
                  className="cursor-pointer text-red-400"
                >
                  <RiDeleteBin6Fill
                    size={17}
                    onClick={() => {
                      deleteBtnHandler(tasks);
                    }}
                  />
                </abbr>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
