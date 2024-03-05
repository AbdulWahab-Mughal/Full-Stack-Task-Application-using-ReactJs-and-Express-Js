import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";

const Header = () => {
const navigate = useNavigate()
  const logOutHandler = () => {
    navigate("/login")
    localStorage.removeItem("token")
  };
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <FaBloggerB size={35}/>
            <span className="ml-2 text-xl">MyBlogs</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to={"/"} className="mr-5 hover:text-white">Home</NavLink>
            <NavLink to={"/login"} className="mr-5 hover:text-white">LogIn</NavLink>
            <NavLink to={"/signup"} className="mr-5 hover:text-white">SignUp</NavLink>
          </nav>
          <button onClick={logOutHandler} className="inline-flex items-center text-white bg-orange-800 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">
            Log Out
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
