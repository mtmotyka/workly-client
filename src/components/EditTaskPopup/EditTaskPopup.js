import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

import Button from "../Button/Button";
import AssigneeTask from "../AssigneeTask/AssigneeTask";
import DueDate from "../TaskDueDate/TaskDueDate";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import { editTask, getTasks } from "../../redux/actions";

const EditTaskPopup = (props) => {
  const [taskName, setTaskName] = useState(props.name);
  const [taskDescription, setTaskDescription] = useState(props.description);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [callbackDate, setCallbackDate] = useState(new Date());
  const sendDate = (dueDate) => {
    setCallbackDate(dueDate);
  };

  const updateTask = () => {
    console.log("na pizde");
    props.editTask(
      {
        completed: taskCompleted,
        description: taskDescription,
        dueDate: callbackDate.toJSON(),
        name: taskName,
      },
      props.id
    );
  };

  const completeTask = () => {
    props.editTask(
      {
        completed: true,
      },
      props.id
    );
    props.handleClose();
  };

  return (
    <>
      <div className="absolute z-50 left-2/4 top-2/4 pb-7 pt-4 px-4 w-6/12 bg-white shadow-md transform -translate-x-2/4 -translate-y-2/4">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <Button
            size="xs"
            color="greenTransparent"
            rounded="md"
            icon="complete"
            onClick={completeTask}
          >
            Mark complete
          </Button>
          <div>
            <button className="text-xl font-light" onClick={props.handleClose}>
              &#10005;
            </button>
          </div>
        </div>
        <textarea
          name="taskName"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          className="placeholder-gray-300 font-regular mb-7 px-2 py-2 w-full h-14 text-3xl bg-white border border-gray-100 hover:border-gray-300 focus:border-gray-300 rounded-md outline-none resize-none"
        />
        <AssigneeTask />
        <DueDate sendDate={sendDate} />
        <ProjectLabel />
        <div className="flex items-start justify-start mb-3">
          <div className="w-32 text-gray-400 text-xs font-light">
            Description
          </div>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="ml-4 p-2 w-full h-40 text-sm bg-white border border-gray-100 hover:border-gray-300 focus:border-gray-300 rounded-md outline-none resize-none"
          />
        </div>
        <div className="flex justify-center">
          <Button size="sm" rounded="md" color="green" onClick={updateTask}>
            Save
          </Button>
        </div>
      </div>
      <div
        onClick={props.handleClose}
        className="fixed z-40 left-0 top-0 w-full h-screen bg-gray-700 opacity-70"
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { editTask: state.editTask, tasksList: state.taskReducer.tasks };
};

export default connect(mapStateToProps, { editTask, getTasks })(EditTaskPopup);
