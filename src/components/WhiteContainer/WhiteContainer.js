import React from "react";

import "./white-container.scss";
import Button from "../Button/Button";

const WhiteContainer = (props) => {
  return (
    <>
      <div className="py-3">
        <div className="pb-5 pt-5 bg-primary border border-solid border-primary">
          <div className="flex items-center justify-between mb-8 w-full">
            <p
              className={`ml-4 font-regular text-primary text-xl inline-block ${
                props.centered && "text-center"
              } ${props.className}`}
            >
              {props.title}
            </p>
            {props.button && (
              <Button
                type="button"
                size={props.buttonSize}
                color={props.buttonColor}
                onClick={props.onButtonClick}
                className="mr-4"
                icon={props.buttonIcon}
              >
                {props.buttonText}
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
