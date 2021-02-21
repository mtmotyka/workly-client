import React, { useState, useEffect } from "react";
import axios from "axios";

import WhiteContainer from "../WhiteContainer/WhiteContainer";
import SingleTaskTile from "../SingleTaskTile/SingleTaskTile";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";

const TasksList = () => {
  const [tasksList, setTasksList] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const token = localStorage.getItem("accessToken");

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

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderPopup = () => {
    if (showPopup) {
      return <AddTaskPopup handleClose={closePopup} />;
    }
  };
  return (
    <>
      <WhiteContainer title="My tasks" button={true} onButtonClick={openPopup}>
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
      {renderPopup()}
    </>
  );
};

export default TasksList;
