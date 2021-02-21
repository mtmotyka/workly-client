import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import Button from "../Button/Button";
import ExampleTeamAvatar from "../../assets/images/example-big-avatar.png";
import { ReactComponent as IcoChat } from "../../assets/icons/ico-chat.svg";
import { ReactComponent as IcoMore } from "../../assets/icons/ico-more-dots.svg";

const Header = () => {
  const [isTasksList, setIsTasksList] = useState(false);
  const [isKanban, setIsKanban] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFiles, setIsFiles] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/tasks-list") {
      setIsTasksList(true);
    } else if (window.location.pathname === "/kanban") {
      setIsKanban(true);
    } else if (window.location.pathname === "/activity") {
      setIsActivity(true);
    } else if (window.location.pathname === "/calendar") {
      setIsCalendar(true);
    } else if (window.location.pathname === "/files") {
      setIsFiles(true);
    }
  }, []);

  return (
    <header className="header fixed z-10 left-0 top-0 pb-14 pl-7 pr-7 pt-7 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <h2 className="text-3xl font-bold">Home</h2>
          <button className="ml-2 mt-1 bg-none border-none outline-none appearance-none cursor-pointer">
            <IcoMore />
          </button>
        </div>
        <div className="flex items-center justify-end">
          {Array(3)
            .fill(null)
            .map((element, index) => (
              <img
                key={index}
                src={ExampleTeamAvatar}
                alt=""
                className="mr-2 cursor-pointer"
              />
            ))}
          <Button
            type="button"
            size="xs"
            color="gray"
            rounded="full"
            className="ml-6 font-bold"
          >
            Share
          </Button>
          <Button
            type="button"
            size="xs"
            color="yellow"
            rounded="full"
            className="flex ml-4 font-bold"
          >
            <IcoChat className="mr-2" /> Chat
          </Button>
        </div>
        <nav className="absolute bottom-0 left-7">
          <ul className="flex items-center justify-start list-none">
            <li className="mr-6 pb-2">
              <Link
                to="/tasks-list"
                className={`${
                  isTasksList === true
                    ? "text-black border-blue-400"
                    : "text-gray-500 border-transparent"
                } hover:text-black no-underline border-solid border-b-4 hover:border-blue-400 text-md font-medium opacity-70 transition-all pb-2`}
              >
                Tasks
              </Link>
            </li>
            <li className="mr-6 pb-2">
              <Link
                to="/tasks-list"
                className={`${
                  isKanban === true
                    ? "text-black border-blue-400"
                    : "text-gray-500 border-transparent"
                } hover:text-black no-underline border-solid border-b-4 hover:border-blue-400 text-md font-medium opacity-70 transition-all pb-2`}
              >
                Kanban
              </Link>
            </li>
            <li className="mr-6 pb-2">
              <Link
                to="/tasks-list"
                className={`${
                  isActivity === true
                    ? "text-black border-blue-400"
                    : "text-gray-500 border-transparent"
                } hover:text-black no-underline border-solid border-b-4 hover:border-blue-400 text-md font-medium opacity-70 transition-all pb-2`}
              >
                Activity
              </Link>
            </li>
            <li className="mr-6 pb-2">
              <Link
                to="/tasks-list"
                className={`${
                  isCalendar === true
                    ? "text-black border-blue-400"
                    : "text-gray-500 border-transparent"
                } hover:text-black no-underline border-solid border-b-4 hover:border-blue-400 text-md font-medium opacity-70 transition-all pb-2`}
              >
                Calendar
              </Link>
            </li>
            <li className="mr-6 pb-2">
              <Link
                to="/tasks-list"
                className={`${
                  isFiles === true
                    ? "text-black border-blue-400"
                    : "text-gray-500 border-transparent"
                } hover:text-black no-underline border-solid border-b-4 hover:border-blue-400 text-md font-medium opacity-70 transition-all pb-2`}
              >
                Files
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
