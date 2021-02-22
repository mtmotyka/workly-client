import React from "react";
import AssigneeTask from "../AssigneeTask/AssigneeTask";
import Button from "../Button/Button";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import DueDate from "../TaskDueDate/TaskDueDate";

import { showTaskDetails } from "../../utils/TasksServices/TasksServices";

const TaskDetails = () => {
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
        <h1>{showTaskDetails}</h1>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value="Testowa nazwa"
          className="placeholder-gray-300 font-regular mb-7 px-2 py-2 w-full h-12 text-2xl bg-white border border-gray-100 hover:border-gray-300 focus:border-gray-300 rounded-md outline-none resize-none"
        />
        <AssigneeTask />
        <DueDate />
        <ProjectLabel />
      </div>
    </div>
  );
};

export default TaskDetails;
