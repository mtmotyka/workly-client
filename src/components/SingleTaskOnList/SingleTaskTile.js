import React from "react";

import "./single-task-tile.scss";

import { ReactComponent as TaskComplete } from "../../assets/icons/ico-task-complete.svg";
import ExampleSmallAvatar from "../../assets/images/example-small-avatar.png";

const SingleTaskTile = () => {
  return (
    <div className="single-task-tile">
      <div className="single-task-tile__complete-btn">
        <TaskComplete />
      </div>
      <p className="single-task-tile__title">
        E-mail after registration so that i Can confirm my address
      </p>
      <div className="task-info">
        <img
          src={ExampleSmallAvatar}
          alt=""
          className="img-fluid task-info__member"
        />
        <p className="task-info__project">Developement</p>
      </div>
    </div>
  );
};

export default SingleTaskTile;
