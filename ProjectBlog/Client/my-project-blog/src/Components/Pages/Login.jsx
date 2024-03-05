import React from "react";
import FormBlog from "../TailwindComp/FormBlog";

const Login = () => {
  return (
    <>
      <div className=" flex justify-center mt-16 ">
        <FormBlog isLogin={true} />
      </div>
    </>
  );
};

export default Login;
