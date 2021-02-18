import React from "react";

import "./today-tasks-list.scss";
import WhiteContainer from "../WhiteContainer/WhiteContainer";
import SingleTaskTile from "../SingleTaskTile/SingleTaskTile";

const TasksList = () => {
  return (
    <WhiteContainer title="Today Tasks">
      <SingleTaskTile />
      <SingleTaskTile />
    </WhiteContainer>
  );
};

export default TasksList;
