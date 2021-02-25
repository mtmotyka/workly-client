import React, { useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button/Button";
import AssigneeTask from "../AssigneeTask/AssigneeTask";
import DueDate from "../TaskDueDate/TaskDueDate";
import ProjectLabel from "../ProjectLabel/ProjectLabel";

const AddTaskPopup = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [callbackDate, setCallbackDate] = useState(new Date());
  const sendDate = (dueDate) => {
    setCallbackDate(dueDate);
  };
  const token = localStorage.getItem("accessToken");

  const createTask = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "https://mikovsky-cloud.com/workly/api/tasks",
      {
        completed: false,
        description: taskDescription,
        dueDate: callbackDate.toJSON(),
        name: taskName,
      },
      { headers: { Authorization: token } }
    );
    console.log(response);
    props.refreshTasks();
    props.handleClose();
  };

  return (
    <>
      <div className="absolute z-50 left-2/4 top-2/4 pb-7 pt-4 px-4 w-6/12 bg-white rounded-md shadow-md transform -translate-x-2/4 -translate-y-2/4">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <Button size="xs" color="greenTransparent" rounded="md">
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
          <Button size="sm" rounded="md" color="green" onClick={createTask}>
            Add task
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

export default AddTaskPopup;
