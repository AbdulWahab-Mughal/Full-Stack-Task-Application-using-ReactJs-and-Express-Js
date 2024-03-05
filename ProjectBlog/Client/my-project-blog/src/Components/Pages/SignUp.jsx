import React from "react";
import FormBlog from "../TailwindComp/FormBlog";

const SignUp = () => {
  return (
    <>
      <div className=" flex justify-center p-0 mt-2">
        <FormBlog isLogin={false} />
      </div>
    </>
  );
};

export default SignUp;
