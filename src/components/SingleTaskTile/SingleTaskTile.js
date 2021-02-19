import React from "react";

import "./single-task-tile.scss";

import { ReactComponent as TaskComplete } from "../../assets/icons/ico-task-complete.svg";
import ExampleSmallAvatar from "../../assets/images/example-small-avatar.png";

const SingleTaskTile = (props) => {
  return (
    <div className="relative mb-4 pl-14 pr-4 py-4 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer">
      <div className="complete-btn absolute left-4 top-4 cursor-pointer">
        <TaskComplete />
      </div>
      <p className="text-lg font-bold cursor-pointer">{props.title}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-start">
          <img
            src={ExampleSmallAvatar}
            alt=""
            className="img-fluid task-info__member"
          />
          <p className="ml-2 px-4 py-1 text-yellow-500 text-xs font-bold bg-yellow-100 rounded-full cursor-pointer uppercase">
            Developement
          </p>
        </div>
        <div>
          <div className="text-gray-400 text-xs">Due date: {props.dueDate}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskTile;
