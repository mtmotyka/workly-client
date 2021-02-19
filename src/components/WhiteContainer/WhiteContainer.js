import React, { useState } from "react";

import "./white-container.scss";
import Button from "../Button/Button";

const WhiteContainer = (props) => {
  return (
    <>
      <div className="py-3">
        <div className="p-7 bg-white rounded-md">
          <div className="flex items-center justify-between mb-4 w-full">
            <p
              className={`font-bold text-2xl inline-block ${
                props.centered && "text-center"
              }`}
            >
              {props.title}
            </p>
            {props.button && (
              <Button
                type="button"
                size="xs"
                color="green"
                rounded="sm"
                onClick={props.onButtonClick}
              >
                + Add task
              </Button>
            )}
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default WhiteContainer;
