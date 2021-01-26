import React from "react";

import "./white-container.scss";

const WhiteContainer = (props) => {
  return (
    <div className="white-container">
      <div className="container-content">
        <div className="info-container">
          <p
            className={`white-container__title ${props.centered && "centered"}`}
          >
            {props.title}
          </p>
          {props.button && (
            <button className="btn btn--green btn--medium">+ Add task</button>
          )}
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default WhiteContainer;
