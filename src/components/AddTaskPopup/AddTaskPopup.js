import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button/Button";
import SampleAvatar from "../../assets/images/sample-avatar.png";
import { ReactComponent as IcoCalendar } from "../../assets/icons/ico-calendar.svg";

const AddTaskPopup = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  let token = localStorage.getItem("accessToken");

  const createTask = async (e) => {
    e.preventDefault();
    console.log(token);

    const response = await axios.post(
      "http://workly.mikovsky-cloud.com/api/tasks",
      {
        completed: false,
        description: taskDescription,
        dueDate: dueDate.toJSON(),
        name: taskName,
      },
      { headers: { Authorization: token } }
    );
    console.log(response);
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
        <div className="flex items-center justify-start mb-1">
          <div className="w-32 text-gray-400 text-xs font-light">Assignee</div>
          <div className="flex items-center justify-start -ml-2 px-2 py-1 h-12 text-gray-500 text-sm hover:bg-gray-100 rounded-md cursor-pointer">
            <img
              src={SampleAvatar}
              alt=""
              className="mr-2 border border-gray-200 rounded-full"
            />
            Mateusz Motyka
          </div>
        </div>
        <div className="flex items-center justify-start mb-3">
          <div className="w-32 text-gray-400 text-xs font-light">Due date</div>
          <div className="flex items-center justify-start -ml-2 px-2 py-1 h-12 text-gray-500 text-sm hover:bg-gray-100 rounded-md">
            <IcoCalendar className="mr-2" />
            <DatePicker
              selected={dueDate}
              onChange={(dueDate) => setDueDate(dueDate)}
              dateFormat="dd/MM/yyyy"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-start mb-5">
          <div className="w-32 text-gray-400 text-xs font-light">Project</div>
          <p className="px-4 py-1 text-yellow-500 text-xs font-bold bg-yellow-100 rounded-full cursor-pointer uppercase">
            Developement
          </p>
        </div>
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
