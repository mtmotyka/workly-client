import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";
import { ReactComponent as IcoSearch } from "../../assets/icons/ico-search.svg";
import { ReactComponent as ThreeDots } from "../../assets/icons/ico-three-dots.svg";
import { ReactComponent as IcoDashboard } from "../../assets/icons/ico-dashboard.svg";
import { ReactComponent as IcoCrm } from "../../assets/icons/ico-crm.svg";
import { ReactComponent as IcoWebsiteRedesign } from "../../assets/icons/ico-website-redesign.svg";
import { ReactComponent as IcoCommunication } from "../../assets/icons/ico-comunication-tool.svg";
import ExampleAvatar from "../../assets/images/example-avatar.png";
import ExampleTeamAvatarOne from "../../assets/images/example-team-avatar-1.png";
import ExampleTeamAvatarTwo from "../../assets/images/example-team-avatar-2.png";
import ExampleTeamAvatarThree from "../../assets/images/example-team-avatar-3.png";

const Sidebar = () => {
  return (
    <div className="sidebar-width-main flex flex-0 flex-col h-screen max-h-screen bg-white border-r border-solid border-gray-200 overflow-y-auto">
      <div className="sidebar-width-main bg-white">
        <div className="sidebar-width-main fixed z-1 left-0 top-0 bg-white border-r border-solid border-gray-200">
          <div className="sidebar-width-main flex items-center justify-between m-0 pb-0 pl-7 pr-5 pt-7">
            <Link
              to="/"
              className="text-black hover:text-blue-400 text-base font-bold cursor-pointer uppercase"
            >
              WORKLY
            </Link>
            <IcoSearch className="cursor-pointer" />
          </div>
          <div className="relative flex items-center justify-between m-0 mt-8 pb-4 pl-7 pr-5 pt-4 bg-gray-100">
            <img src={ExampleAvatar} alt="Avatar" />
            <div>
              <p className="text-gray-600 text-sm font-bold">
                Emilee Simchenko
              </p>
              <p className="text-gray-400 text-xs font-bold">Product Owner</p>
            </div>
            <ThreeDots />
          </div>
          <div className="flex items-center justify-start my-8 pl-7 pr-4">
            <div className="mr-7">
              <p className="text-gray-500 text-2xl font-bold">372</p>
              <p className="text-gray-500 text-xxs font-black opacity-50">
                Completed Tasks
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-2xl font-bold">11</p>
              <p className="text-gray-500 text-xxs font-black opacity-50">
                Open Tasks
              </p>
            </div>
          </div>
          <div className="my-8 pl-7 pr-4">
            <div className="mb-2 text-gray-500 text-xs font-bold opacity-50 uppercase">
              menu
            </div>
            <ul className="list-none">
              <li className="flex items-center justify-start mb-4">
                <a
                  href="/"
                  className="text-gray-500 hover:underline text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center justify-start mb-4">
                <a
                  href="/"
                  className="text-gray-500 hover:underline text-sm font-medium"
                >
                  My Tasks
                </a>
              </li>
              <li className="flex items-center justify-start">
                <a
                  href="/"
                  className="text-gray-500 hover:underline text-sm font-medium"
                >
                  Notifications
                </a>
                <span className="ml-3 p-1 text-center text-black text-xs font-bold bg-blue-400 rounded-xl">
                  3
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-px450">
          <div className="mb-8">
            <div className="mb-2 pl-7 pr-4 text-gray-500 text-xs font-bold opacity-50 uppercase">
              projects
            </div>
            <div className="flex items-center justify-start pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <IcoDashboard />
              <p className="ml-2 text-gray-500 text-sm font-medium">
                Dashboard UI KIT
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="transition-allt flex items-center justify-start pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer">
              <IcoCrm />
              <p className="ml-2 text-gray-500 text-sm font-medium">
                CRM System
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="flex items-center justify-start pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <IcoWebsiteRedesign />
              <p className="ml-2 text-gray-500 text-sm font-medium">
                Website Redesign
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="flex items-center justify-start pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <IcoCommunication />
              <p className="ml-2 text-gray-500 text-sm font-medium">
                Communication Tool
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <a
              href="/"
              className="inline-block mt-3 pl-7 text-blue-400 hover:underline text-sm font-bold"
            >
              + Add a Project
            </a>
          </div>
          <div className="my-8">
            <p className="mb-2 pl-7 pr-4 text-gray-500 text-xs font-bold opacity-50 uppercase">
              teams
            </p>
            <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <p className="text-gray-500 text-sm font-medium">Designers</p>
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
            <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <p className="text-gray-500 text-sm font-medium">Back-end</p>
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
            <div className="flex items-center justify-between pl-6 pr-5 py-3 hover:bg-gray-100 bg-white border-l-4 border-solid hover:border-blue-400 border-transparent cursor-pointer transition-all">
              <p className="text-gray-500 text-sm font-medium">Front-end</p>
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
              className="inline-block mt-3 pl-7 text-blue-400 hover:underline text-sm font-bold"
            >
              + Add a Team
            </a>
          </div>
          <div className="pb-4 pt-8">
            <p className="pl-6 pr-5 text-white text-sm font-bold">
              <a href="/" className="text-blue-400 underline">
                Invite your team
              </a>{" "}
              and start collaborating!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
