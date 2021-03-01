import React from "react";
import { connect } from "react-redux";

import AssigneeTask from "../AssigneeTask/AssigneeTask";
import Button from "../Button/Button";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import DueDate from "../TaskDueDate/TaskDueDate";

const TaskDetails = ({ task }) => {
  if (!task) {
    return <div>select taskk</div>;
  }
  return (
    <div>
      <div className="mb-7 pb-7 border-b border-solid border-gray-200">
        <Button
          size="xs"
          color="greenTransparent"
          rounded="md"
          className="ml-4"
        >
          Mark complete
        </Button>
      </div>
      <div className="px-4">
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={task.name}
          className="placeholder-gray-300 font-regular mb-7 px-2 py-2 w-full h-12 text-2xl bg-white border border-gray-100 hover:border-gray-300 focus:border-gray-300 rounded-md outline-none resize-none"
        />
        <AssigneeTask />
        <DueDate />
        <ProjectLabel />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { task: state.taskReducer.selectedTask };
};

export default connect(mapStateToProps)(TaskDetails);
