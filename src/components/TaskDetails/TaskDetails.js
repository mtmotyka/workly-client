import React, { useState } from "react";
import { connect } from "react-redux";

import AssigneeTask from "../AssigneeTask/AssigneeTask";
import Button from "../Button/Button";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import DueDate from "../TaskDueDate/TaskDueDate";
import TaskDescription from "../TaskDescription/TaskDescription";
import EditTaskPopup from "../EditTaskPopup/EditTaskPopup";
import { editTask } from "../../redux/actions";

const TaskDetails = ({ task, editTask }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderPopup = (task) => {
    if (showPopup) {
      return (
        <EditTaskPopup
          handleClose={closePopup}
          name={task.name}
          description={task.description}
          id={task.id}
        />
      );
    }
  };

  if (!task) {
    return (
      <div className="w-full text-center text-xl opacity-40">
        Select task from the list on the left
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-7 pb-3 border-b border-solid border-gray-200">
          <div>
            <Button
              size="xxs"
              color="greenTransparent"
              rounded="md"
              className="ml-4"
              icon="complete"
              onClick={(e) =>
                editTask({
                  completed: true,
                  description: task.description,
                  dueDate: task.dueDate,
                  name: task.name,
                })
              }
            >
              Mark complete
            </Button>
          </div>
          <div className="flex items-center justify-end">
            <Button
              size="xxs"
              color="transparent"
              rounded="md"
              onClick={openPopup}
              icon="edit"
            >
              Edit
            </Button>
            <Button
              size="xxs"
              color="redTransparent"
              rounded="md"
              className="ml-5 mr-4"
              icon="delete"
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="px-4">
          <p className="mb-7 w-full h-12 text-2xl font-medium bg-white rounded-md outline-none resize-none">
            {task.name}
          </p>
          <AssigneeTask />
          <DueDate />
          <ProjectLabel />
          <TaskDescription desc={task.description} />
        </div>
      </div>
      {renderPopup(task)}
    </>
  );
};

const mapStateToProps = (state) => {
  return { task: state.taskReducer.selectedTask, editTask: state.editTask };
};

export default connect(mapStateToProps, { editTask })(TaskDetails);
