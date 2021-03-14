import React from "react";

import "./single-task-tile.scss";
import { IoCheckbox } from "react-icons/io5";

import { ReactComponent as TaskComplete } from "../../assets/icons/ico-task-complete.svg";
import ExampleSmallAvatar from "../../assets/images/example-small-avatar.png";

const SingleTaskTile = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className="relative -mb-4 pb-8 pl-12 pt-5 px-4 hover:bg-accent bg-primary border-t border-solid border-secondary cursor-pointer"
    >
      <div className="complete-btn absolute left-4 top-6 cursor-pointer">
        <IoCheckbox style={{ fill: "gray" }} size="1.2em" />
      </div>
      <p className="text-md text-primary font-medium cursor-pointer">
        {props.title}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-start">
          <img
            src={ExampleSmallAvatar}
            alt=""
            className="img-fluid task-info__member"
          />
          <p className="ml-2 px-3 py-1 text-yellow-main text-xxs font-bold hover:bg-yellow-200 bg-yellow-main rounded-full cursor-pointer uppercase">
            Developement
          </p>
        </div>
        <div>
          <div className="text-secondary text-xs">
            Due date: {props.dueDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskTile;
