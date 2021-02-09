import React from "react";

import "./white-container.scss";
import Button from "../Button/Button";

const WhiteContainer = (props) => {
  return (
    <div className="py-3">
      <div className="p-7 bg-white rounded-md">
        <div className="flex items-center mb-4">
          <p
            className={`font-bold text-2xl inline-block w-full ${
              props.centered && "text-center"
            }`}
          >
            {props.title}
          </p>
          {props.button && (
            <Button type="button" size="sm" color="green">
              + Add task
            </Button>
          )}
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default WhiteContainer;
