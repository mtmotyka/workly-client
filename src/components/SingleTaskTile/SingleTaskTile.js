import React from "react";

import "./single-task-tile.scss";

import { ReactComponent as TaskComplete } from "../../assets/icons/ico-task-complete.svg";
import ExampleSmallAvatar from "../../assets/images/example-small-avatar.png";

const SingleTaskTile = (props) => {
  return (
    <div className="relative -mb-4 pb-8 pl-12 pt-5 px-4 hover:bg-gray-50 bg-white border-t border-solid border-gray-200 cursor-pointer">
      <div className="complete-btn absolute left-4 top-6 cursor-pointer">
        <TaskComplete className="border border-solid border-gray-100 rounded-md" />
      </div>
      <p className="text-md bg- text-gray-500 font-medium cursor-pointer">
        {props.title}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-start">
          <img
            src={ExampleSmallAvatar}
            alt=""
            className="img-fluid task-info__member"
          />
          <p className="ml-2 px-3 py-1 text-yellow-500 text-xxs font-bold bg-yellow-100 hover:bg-yellow-200 rounded-full cursor-pointer uppercase">
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
