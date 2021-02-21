import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

import Button from "../Button/Button";
import ExampleTeamAvatar from "../../assets/images/example-big-avatar.png";
import { ReactComponent as IcoChat } from "../../assets/icons/ico-chat.svg";
import { ReactComponent as IcoMore } from "../../assets/icons/ico-more-dots.svg";

const Header = () => {
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
              <NavLink
                activeClassName="border-blue-400 text-black"
                to="/tasks-list"
                className="text-md pb-2 hover:text-black no-underline font-medium border-b-4 border-solid hover:border-blue-400 opacity-70 transition-all"
              >
                Tasks
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-blue-400 text-black"
                to="/kanban"
                className="text-md pb-2 hover:text-black no-underline font-medium border-b-4 border-solid hover:border-blue-400 opacity-70 transition-all"
              >
                Kanban
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-blue-400 text-black"
                to="/activity"
                className="text-md pb-2 hover:text-black no-underline font-medium border-b-4 border-solid hover:border-blue-400 opacity-70 transition-all"
              >
                Activity
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-blue-400 text-black"
                to="/calendar"
                className="text-md pb-2 hover:text-black no-underline font-medium border-b-4 border-solid hover:border-blue-400 opacity-70 transition-all"
              >
                Calendar
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-blue-400 text-black"
                to="/files"
                className="text-md pb-2 hover:text-black no-underline font-medium border-b-4 border-solid hover:border-blue-400 opacity-70 transition-all"
              >
                Files
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
