import React, { useState } from "react";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away-subtle.css";
import "tippy.js/themes/light-border.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { addProject } from "../../redux/actions";

const AddProjectPopup = (props) => {
  const [projectName, setProjectName] = useState(null);
  const [projectColor, setProjectColor] = useState("#F9A8D4");
  const colors = [
    "#FECACA",
    "#F9A8D4",
    "#FDE68A",
    "#A7F3D0",
    "#BFDBFE",
    "#E5E7EB",
  ];

  const colorPicker = () => {
    return (
      <div className="p-4">
        <CirclePicker
          colors={colors}
          color={projectColor}
          onChangeComplete={(color) => setProjectColor(color.hex)}
        />
      </div>
    );
  };

  const addProjectHandle = () => {
    props.addProject({
      color: projectColor,
      name: projectName,
    });
    props.handleClose();
  };

  return (
    <>
      <div className="absolute z-50 left-2/4 top-2/4 px-4 py-8 w-6/12 bg-primary shadow-md transform -translate-x-2/4 -translate-y-2/4">
        <button
          className="absolute right-3 top-3 text-secondary text-xl font-light"
          onClick={props.handleClose}
        >
          &#10005;
        </button>
        <div className="mb-7 text-center text-gray-400 text-2xl">
          Create new project
        </div>
        <div className="flex items-center justify-start w-full">
          <Input
            type="text"
            name="projectName"
            id="projectName"
            label="Project name"
            value={projectName}
            placeholder="Some awesome project"
            required={true}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Tippy
            content={colorPicker()}
            trigger="click"
            placement="bottom"
            interactive={true}
            animation="shift-away-subtle"
            theme="light-border"
          >
            <div className="flex items-center justify-between -mt-2 ml-7 cursor-pointer">
              <div
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: projectColor }}
              />
              <MdKeyboardArrowDown
                size="1.5em"
                style={{ fill: "gray", opacity: "0.4" }}
              />
            </div>
          </Tippy>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            size="md"
            shadow="2xl"
            color="green"
            icon="add"
            className="mb-3 ml-6 text-center"
            onClick={addProjectHandle}
          >
            Create project
          </Button>
        </div>
      </div>
      <div
        onClick={props.handleClose}
        className="fixed z-40 left-0 top-0 w-full h-screen bg-gray-700 opacity-70"
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return { addProject: state.addProject };
};

export default connect(mapStateToProps, { addProject })(AddProjectPopup);
