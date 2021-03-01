import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import WhiteContainer from "../WhiteContainer/WhiteContainer";
import SingleTaskTile from "../SingleTaskTile/SingleTaskTile";
import AddTaskPopup from "../AddTaskPopup/AddTaskPopup";
import { selectTask, getTasks } from "../../redux/actions";

const TasksList = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    props.getTasks();
  }, []);

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

  return (
    <>
      <WhiteContainer title="My tasks" button={true} onButtonClick={openPopup}>
        {[props.tasksList].map((task) => {
          return (
            <SingleTaskTile
              key={task.id}
              title={task.name}
              dueDate={task.dueDate}
              description={task.description}
              handleClick={() => props.selectTask(task)}
            />
          );
        })}
      </WhiteContainer>
      {renderPopup()}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { tasksList: state.taskReducer.tasks };
};

export default connect(mapStateToProps, {
  selectTask,
  getTasks,
})(TasksList);
