import React, { useEffect, useState } from "react";
import ModalComp from "../TailwindComp/ModalComp";
import Cards from "../TailwindComp/Cards";
import { useDispatch, useSelector } from "react-redux";
import { get_Blogs } from "../Store/Action/ActionsBlog";
import Loader from "../Loader/Loader";

const Home = () => {
  const [isUpdateState, setIsUpdateState] = useState(false);
  const [isUpdateID, setIsUpdateID] = useState("");
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    status: "",
  });
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.get_Blogs_Reducers);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      dispatch(get_Blogs(config));
    }
  }, []);

  const AppendData = (task, id) => {
    let { title, description, status } = task;

    setTaskDetails({
      title: title,
      description: description,
      status: status,
    });
    setIsUpdateID(id);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <ModalComp
            taskDetails={taskDetails}
            setTaskDetails={setTaskDetails}
            setIsUpdateState={setIsUpdateState}
            isUpdateState={isUpdateState}
            isUpdateID={isUpdateID}
          />
          <section className="text-gray-600 body-font">
            <div className=" container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 gap-y-12">
                {data.length < 1 ? (
                  <h1 className=" w-[100%] text-red-600 font-bold  flex justify-center items-center text-6xl">
                    No Tasks Added
                  </h1>
                ) : (
                  data.map((tasks, index) => (
                    <Cards
                      tasks={tasks}
                      key={index}
                      AppendData={AppendData}
                      setIsUpdateState={setIsUpdateState}
                      isUpdateState={isUpdateState}
                    />
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
