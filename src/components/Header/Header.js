import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

import "./header.scss";

import Button from "../Button/Button";
import ExampleTeamAvatar from "../../assets/images/example-big-avatar.png";
import { ReactComponent as IcoChat } from "../../assets/icons/ico-chat.svg";

const Header = () => {
  return (
    <header className="header fixed z-10 left-0 top-0 pb-14 pl-7 pr-7 pt-7 bg-primary border-b border-primary">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <h2 className="text-primary text-3xl font-bold">Home</h2>
        </div>
        <div className="flex items-center justify-end">
          <button type="button" className="mr-2">
            <IoMdAddCircleOutline size="1.5em" style={{ fill: "gray" }} />
          </button>
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
                activeClassName="border-purple-main text-primary"
                to="/tasks-list"
                className="text-md font-regular pb-2 text-secondary no-underline border-b-4 border-solid border-accent hover:border-purple-main transition-all"
              >
                Tasks
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-purple-main text-primary"
                to="/kanban"
                className="text-md font-regular pb-2 text-secondary no-underline border-b-4 border-solid border-accent hover:border-purple-main transition-all"
              >
                Kanban
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-purple-main text-primary"
                to="/activity"
                className="text-md font-regular pb-2 text-secondary no-underline border-b-4 border-solid border-accent hover:border-purple-main transition-all"
              >
                Activity
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-purple-main text-primary"
                to="/calendar"
                className="text-md font-regular pb-2 text-secondary no-underline border-b-4 border-solid border-accent hover:border-purple-main transition-all"
              >
                Calendar
              </NavLink>
            </li>
            <li className="mr-6 pb-2">
              <NavLink
                activeClassName="border-purple-main text-primary"
                to="/files"
                className="text-md font-regular pb-2 text-secondary no-underline border-b-4 border-solid border-accent hover:border-purple-main transition-all"
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
