import React from "react";

import "./white-container.scss";
import Button from "../Button/Button";

const WhiteContainer = (props) => {
  return (
    <>
      <div className="py-3">
        <div className="pb-5 pt-5 bg-white border border-solid border-gray-200">
          <div className="flex items-center justify-between mb-8 w-full">
            <p
              className={`ml-4 font-regular text-gray-400 text-xl inline-block ${
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
                rounded="md"
                onClick={props.onButtonClick}
                className="mr-4"
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
