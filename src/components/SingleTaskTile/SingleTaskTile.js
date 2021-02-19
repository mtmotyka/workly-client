import React, { useState } from "react";

import "./single-task-tile.scss";

import { ReactComponent as TaskComplete } from "../../assets/icons/ico-task-complete.svg";
import ExampleSmallAvatar from "../../assets/images/example-small-avatar.png";

const SingleTaskTile = (props) => {
  const [taskName, setTaskName] = useState("");
  return (
    <div className="relative mb-4 pl-14 pr-4 py-4 bg-gray-100 rounded-md">
      <div className="complete-btn absolute left-4 top-4 cursor-pointer">
        <TaskComplete />
      </div>
      <textarea
        className="text-lg font-bold cursor-pointer"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className="flex items-center justify-start mt-4">
        <img
          src={ExampleSmallAvatar}
          alt=""
          className="img-fluid task-info__member"
        />
        <p className="ml-4 px-4 py-1 text-yellow-500 text-xs font-bold bg-yellow-100 rounded-full cursor-pointer uppercase">
          Developement
        </p>
      </div>
    </div>
  );
};

export default SingleTaskTile;
