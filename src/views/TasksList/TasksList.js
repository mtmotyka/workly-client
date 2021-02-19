import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import WhiteContainer from "../../components/WhiteContainer/WhiteContainer";
import SingleTaskTile from "../../components/SingleTaskTile/SingleTaskTile";
import axios from "axios";
import AddTaskPopup from "../../components/AddTaskPopup/AddTaskPopup";

const TasksList = () => {
  const [tasksList, setTasksList] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  let token = localStorage.getItem("accessToken");

  const getTasks = async () => {
    const response = await axios.get(
      "http://workly.mikovsky-cloud.com/api/tasks",
      { headers: { Authorization: token } }
    );
    setTasksList(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-5 items-start max-h-screen">
        <div className="col-span-2">
          <WhiteContainer title="My tasks" button={true}>
            {[...tasksList].map((task) => {
              return (
                <SingleTaskTile
                  key={task.id}
                  title={task.name}
                  dueDate={task.dueDate}
                />
              );
            })}
          </WhiteContainer>
        </div>
        <div className="col-span-3">
          <WhiteContainer />
        </div>
      </div>
      <AddTaskPopup visible={false} />
    </Layout>
  );
};

export default TasksList;
