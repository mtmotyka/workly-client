import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import WhiteContainer from "../WhiteContainer/WhiteContainer";
import SingleTaskTile from "../SingleTaskTile/SingleTaskTile";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";
import { selectTask, getTasks } from "../../redux/actions";

const TasksList = (props) => {
  // const [tasksList, setTasksList] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const token = localStorage.getItem("accessToken");

  // const getTasks = async () => {
  //   const response = await axios.get(
  //     "https://mikovsky-cloud.com/workly/api/tasks",
  //     { headers: { Authorization: token } }
  //   );
  //   setTasksList(response.data);
  // };

  // useEffect(() => {
  //   getTasks();
  // }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderPopup = () => {
    if (showPopup) {
      return <AddTaskPopup handleClose={closePopup} refreshTasks={getTasks} />;
    }
  };

  console.log(props.tasksList);

  return (
    <>
      <WhiteContainer title="My tasks" button={true} onButtonClick={openPopup}>
        {/* {props.tasks.map((task) => {
          return (
            <div>
              <h1>{task.title}</h1>
              <button onClick={() => props.selectTask(task)}>pokaz</button>
            </div>
          );
        })} */}
        {/* {[...tasksList].map((task) => {
          return (
            <SingleTaskTile 
              key={task.id}
              title={task.name}
              dueDate={task.dueDate}
              description={task.description}
            />
          );
        })} */}
      </WhiteContainer>
      {renderPopup()}
    </>
  );
};

const mapStateToProps = (state) => {
  return { tasksList: state.tasksList }; //tasksList bierzemy z index.js w reducers
};

export default connect(mapStateToProps, {
  // selectTask,
  getTasks,
})(TasksList);
