import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away-subtle.css";
import "tippy.js/themes/light-border.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FcHome, FcParallelTasks, FcInfo } from "react-icons/fc";

import "./sidebar.scss";
import { ReactComponent as ThreeDots } from "../../assets/icons/ico-three-dots.svg";
import ExampleAvatar from "../../assets/images/example-avatar.png";
import ExampleTeamAvatarOne from "../../assets/images/example-team-avatar-1.png";
import ExampleTeamAvatarTwo from "../../assets/images/example-team-avatar-2.png";
import ExampleTeamAvatarThree from "../../assets/images/example-team-avatar-3.png";
import { getUserInfo } from "../../redux/actions";
import AddProjectPopup from "../AddProjectPopup/AddProjectPopup";
import { getProjects } from "../../redux/actions";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const profileTooltip = () => {
  return (
    <ul className="bg-primary">
      <li className="border-l border-r border-t border-secondary">
        <Link
          to="/"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent border-b border-secondary"
        >
          <AiOutlineUser
            size="1.2em"
            className="mr-2"
            style={{ color: "gray" }}
          />{" "}
          Show profile
        </Link>
      </li>
      <li className="border-l border-r border-secondary">
        <Link
          to="/user-settings"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent border-b border-secondary"
        >
          <BsPencil size="1.2em" className="mr-2" style={{ color: "gray" }} />{" "}
          Edit profile
        </Link>
      </li>
      <li className="border-l border-r border-secondary">
        <Link
          to="/"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent border-b border-secondary"
        >
          <IoSettingsOutline
            size="1.2em"
            className="mr-2"
            style={{ color: "gray" }}
          />{" "}
          Settings
        </Link>
      </li>
      <li className="border-b border-l border-r border-secondary">
        <Link
          to="/"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent"
        >
          <IoLogOutOutline
            size="1.2em"
            className="mr-2"
            style={{ color: "gray" }}
          />{" "}
          Log out
        </Link>
      </li>
    </ul>
  );
};

const projectTooltip = () => {
  return (
    <ul className="bg-primary">
      <li className="border-b border-l border-r border-secondary">
        <Link
          to="/user-settings"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent border-b border-secondary"
        >
          <BsPencil size="1.2em" className="mr-2" style={{ color: "gray" }} />{" "}
          Edit project
        </Link>
      </li>
      <li className="border-b border-l border-r border-secondary">
        <Link
          to="/user-settings"
          className="flex items-center justify-start pl-3 pr-14 py-3 text-primary hover:bg-accent border-b border-secondary"
        >
          <AiOutlineDelete
            size="1.2em"
            className="mr-2"
            style={{ color: "red" }}
          />{" "}
          Delete project
        </Link>
      </li>
    </ul>
  );
};

const Sidebar = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    props.getUserInfo();
    props.getProjects();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderPopup = () => {
    if (showPopup) {
      return <AddProjectPopup handleClose={closePopup} />;
    }
  };

  return (
    <>
      {" "}
      <div className="sidebar-width-main flex flex-0 flex-col h-screen max-h-screen bg-primary border-r border-solid border-secondary overflow-y-auto">
        <div className="sidebar-width-main bg-primary">
          <div className="sidebar-width-main fixed z-1 left-0 top-0 bg-primary border-r border-solid border-secondary">
            <div className="width-full sidebar-width-main relative flex items-center justify-between m-0 pb-0 pl-7 pr-5 pt-7">
              <Link
                to="/"
                className="text-primary hover:text-purple-main text-base font-bold cursor-pointer uppercase"
              >
                WORKLY
              </Link>
              <DarkModeToggle className="absolute -right-32 cursor-pointer" />
            </div>
            <div className="relative flex items-center justify-between m-0 mt-8 pb-4 pl-7 pr-5 pt-4 bg-primary">
              <img src={ExampleAvatar} alt="Avatar" />
              <div>
                <p className="text-primary text-sm font-bold">
                  {props.user.firstName} {props.user.lastName}
                </p>
                <p className="text-secondary text-xs font-bold">
                  {props.user.jobTitle !== null ? (
                    props.user.jobTitle
                  ) : (
                    <Link to="/" className="hover:underline">
                      Add your position
                    </Link>
                  )}
                </p>
              </div>
              <Tippy
                content={profileTooltip()}
                trigger="click"
                placement="bottom"
                interactive={true}
                animation="shift-away-subtle"
              >
                <div className="-mr-3 px-2 py-3 hover:bg-accent rounded-md cursor-pointer">
                  <ThreeDots className="cursor-pointer" />
                </div>
              </Tippy>
            </div>
            <div className="flex items-center justify-start my-8 pl-7 pr-4">
              <div className="mr-7">
                <p className="text-primary text-2xl font-bold">372</p>
                <p className="text-primary text-xxs font-black opacity-50">
                  Completed Tasks
                </p>
              </div>
              <div>
                <p className="text-primary text-2xl font-bold">11</p>
                <p className="text-primary text-xxs font-black opacity-50">
                  Open Tasks
                </p>
              </div>
            </div>
            <div className="my-8 pb-5 pl-7 pr-4 border-b border-solid border-secondary">
              <div className="mb-2 text-primary text-xs font-bold opacity-50 uppercase">
                menu
              </div>
              <ul className="list-none">
                <li className="flex items-center justify-start mb-4">
                  <Link
                    to="/"
                    className="flex items-center justify-start text-primary hover:underline text-sm font-medium"
                  >
                    <FcHome size="1.2em" className="mr-2" />
                    Home
                  </Link>
                </li>
                <li className="flex items-center justify-start mb-4">
                  <Link
                    to="/tasks-list"
                    className="flex items-center justify-start text-primary hover:underline text-sm font-medium"
                  >
                    <FcParallelTasks size="1.2em" className="mr-2" />
                    My Tasks
                  </Link>
                </li>
                <li className="flex items-center justify-start">
                  <Link
                    to="/"
                    className="flex items-center justify-start text-primary hover:underline text-sm font-medium"
                  >
                    <FcInfo size="1.2em" className="mr-2" />
                    Notifications
                  </Link>
                  <span className="ml-3 p-1 text-center text-black text-xs font-bold bg-purple-main rounded-xl">
                    3
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative pt-px480">
            <p className="mb-2 pl-7 pr-4 text-primary text-xs font-bold opacity-50 uppercase">
              projects
            </p>
            <div className="mb-4 pb-5 h-52 border-b border-solid border-secondary overflow-auto">
              {props.projectsList.map((project) => {
                return (
                  <div className="flex items-center justify-start pl-6 pr-5 py-2 hover:bg-accent bg-primary border-l-4 border-solid hover:border-purple-400 border-transparent cursor-pointer transition-all">
                    <div className="w-2 h-2 bg-green-300 rounded-sm" />
                    <p className="ml-2 text-primary text-sm font-medium">
                      {project.name}
                    </p>
                    <Tippy
                      content={projectTooltip()}
                      trigger="click"
                      placement="bottom"
                      interactive={true}
                      animation="shift-away-subtle"
                    >
                      <div className="-mr-3 ml-auto px-2 py-3 hover:bg-primary rounded-md cursor-pointer">
                        <ThreeDots />
                      </div>
                    </Tippy>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className="inline-block mb-8 pl-7 text-purple-main hover:underline text-sm font-bold"
              onClick={openPopup}
            >
              + Add a Project
            </button>
            <div className="my-8">
              <p className="mb-2 pl-7 pr-4 text-primary text-xs font-bold opacity-50 uppercase">
                teams
              </p>
              <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-accent bg-primary border-l-4 border-solid hover:border-purple-400 border-transparent cursor-pointer transition-all">
                <p className="text-primary text-sm font-medium">Designers</p>
                <div className="align-center flex justify-end">
                  {Array(4)
                    .fill(null)
                    .map((element, index) => (
                      <img
                        key={index}
                        src={ExampleTeamAvatarOne}
                        alt=""
                        className="ml-2"
                      />
                    ))}
                </div>
              </div>
              <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-accent bg-primary border-l-4 border-solid hover:border-purple-400 border-transparent cursor-pointer transition-all">
                <p className="text-primary text-sm font-medium">Back-end</p>
                <div className="align-center flex justify-end">
                  {Array(2)
                    .fill(null)
                    .map((element, index) => (
                      <img
                        key={index}
                        src={ExampleTeamAvatarTwo}
                        alt=""
                        className="ml-2"
                      />
                    ))}
                </div>
              </div>
              <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-accent bg-primary border-l-4 border-solid hover:border-purple-400 border-transparent cursor-pointer transition-all">
                <p className="text-primary text-sm font-medium">Front-end</p>
                <div className="align-center flex justify-end">
                  {Array(3)
                    .fill(null)
                    .map((element, index) => (
                      <img
                        key={index}
                        src={ExampleTeamAvatarThree}
                        alt=""
                        className="ml-2"
                      />
                    ))}
                </div>
              </div>
              <a
                href="/"
                className="inline-block mt-3 pl-7 text-purple-main hover:underline text-sm font-bold"
              >
                + Add a Team
              </a>
            </div>
            <div className="pb-4 pt-8">
              <p className="pl-6 pr-5 text-white text-sm font-bold">
                <a href="/" className="text-purple-main underline">
                  Invite your team
                </a>{" "}
                and start collaborating!
              </p>
            </div>
          </div>
        </div>
      </div>
      {renderPopup()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    projectsList: state.projectsReducer.projects,
  };
};

export default connect(mapStateToProps, {
  getUserInfo,
  getProjects,
})(Sidebar);
