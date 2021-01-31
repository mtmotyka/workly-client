import React from "react";

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
    <div className="sidebar-container flex flex-0 flex-col h-screen max-h-screen bg-black overflow-y-auto">
      <div className="main-sidebar bg-black">
        <div className="main-sidebar__main-info fixed z-1 left-0 top-0 bg-black">
          <div className="main-sidebar__search-container flex items-center justify-between m-0 pb-0 pl-7 pr-5 pt-7">
            <p className="search-container__brand">WORKLY</p>
            <IcoSearch className="search-container__search-icon cursor-pointer" />
          </div>
          <div className="relative flex items-center justify-between m-0 mt-8 pb-4 pl-7 pr-5 pt-4 bg-gray-900">
            <img src={ExampleAvatar} alt="Avatar" />
            <div>
              <p className="text-white text-sm font-bold">Emilee Simchenko</p>
              <p className="text-gray-400 text-xs font-bold">Product Owner</p>
            </div>
            <ThreeDots />
          </div>
          <div className="flex items-center justify-start my-8 pl-7 pr-4">
            <div className="mr-7">
              <p className="text-white text-2xl font-bold">372</p>
              <p className="text-white text-xxs font-black opacity-50">
                Completed Tasks
              </p>
            </div>
            <div>
              <p className="text-white text-2xl font-bold">11</p>
              <p className="text-white text-xxs font-black opacity-50">
                Open Tasks
              </p>
            </div>
          </div>
          <div className="my-8 pl-7 pr-4">
            <div className="mb-2 text-white text-xs font-bold opacity-50 uppercase">
              menu
            </div>
            <ul className="list-none">
              <li className="flex items-center justify-start mb-6">
                <a href="/" className="text-white text-sm font-bold">
                  Home
                </a>
              </li>
              <li className="flex items-center justify-start mb-6">
                <a href="/" className="text-white text-sm font-bold">
                  My Tasks
                </a>
              </li>
              <li className="flex items-center justify-start">
                <a href="/" className="text-white text-sm font-bold">
                  Notifications
                </a>
                <span className="ml-3 p-1 text-center text-black text-xs font-bold bg-yellow-400 rounded-xl">
                  3
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-sidebar__scroll-content">
          <div className="my-8">
            <div className="mb-2 pl-7 pr-4 text-white text-xs font-bold opacity-50 uppercase">
              projects
            </div>
            <div className="flex items-center justify-start pl-7 pr-5 py-4 bg-black hover:bg-gray-900 border-l-4 border-solid border-transparent hover:border-yellow-400 cursor-pointer transition-all">
              <IcoDashboard />
              <p className="ml-2 text-white text-sm font-bold">
                Dashboard UI KIT
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="transition-allt flex items-center justify-start pl-7 pr-5 py-4 bg-black hover:bg-gray-900 border-l-4 border-solid border-transparent hover:border-yellow-400 cursor-pointer">
              <IcoCrm />
              <p className="ml-2 text-white text-sm font-bold">CRM System</p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="flex items-center justify-start pl-7 pr-5 py-4 bg-black hover:bg-gray-900 border-l-4 border-solid border-transparent hover:border-yellow-400 cursor-pointer transition-all">
              <IcoWebsiteRedesign />
              <p className="ml-2 text-white text-sm font-bold">
                Website Redesign
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <div className="flex items-center justify-start pl-7 pr-5 py-4 bg-black hover:bg-gray-900 border-l-4 border-solid border-transparent hover:border-yellow-400 cursor-pointer transition-all">
              <IcoCommunication />
              <p className="ml-2 text-white text-sm font-bold">
                Communication Tool
              </p>
              <ThreeDots className="ml-auto" />
            </div>
            <a
              href="/"
              className="inline-block mt-3 pl-7 text-yellow-400 hover:underline text-sm font-bold"
            >
              + Add a Project
            </a>
          </div>
          <div className="main-sidebar__teams teams single-container">
            <p className="single-container__title teams__title">teams</p>
            <div className="single-team">
              <p className="single-team__team-name">Designers</p>
              <div className="single-team__avatar-container avatar-container">
                {Array(4)
                  .fill(null)
                  .map((index) => (
                    <img
                      key={index}
                      src={ExampleTeamAvatarOne}
                      alt=""
                      className="avatar-container__avatar"
                    />
                  ))}
              </div>
            </div>
            <div className="single-team">
              <p className="single-team__team-name">Backend</p>
              <div className="single-team__avatar-container avatar-container">
                {Array(2)
                  .fill(null)
                  .map((index) => (
                    <img
                      key={index}
                      src={ExampleTeamAvatarTwo}
                      alt=""
                      className="avatar-container__avatar"
                    />
                  ))}
              </div>
            </div>
            <div className="single-team">
              <p className="single-team__team-name">Frontend</p>
              <div className="single-team__avatar-container avatar-container">
                {Array(3)
                  .fill(null)
                  .map((index) => (
                    <img
                      key={index}
                      src={ExampleTeamAvatarThree}
                      alt=""
                      className="avatar-container__avatar"
                    />
                  ))}
              </div>
            </div>
            <a href="/" className="teams__add-project">
              + Add a Team
            </a>
          </div>
          <div className="main-sidebar__invite invite">
            <p className="invite__text">
              <a href="/">Invite your team</a> and start collaborating!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
