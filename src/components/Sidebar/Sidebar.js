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
    <div className="sidebar-container">
      <div className="main-sidebar">
        <div className="main-sidebar__main-info">
          <div className="main-sidebar__search-container search-container single-container">
            <p className="search-container__brand">WORKLY</p>
            <IcoSearch className="search-container__search-icon" />
          </div>
          <div className="main-sidebar__user-container single-container">
            <img src={ExampleAvatar} alt="Avatar" />
            <div className="user-info">
              <p className="user-info__name">Emilee Simchenko</p>
              <p className="user-info__role">Product Owner</p>
            </div>
            <ThreeDots />
          </div>
          <div className="main-sidebar__tasks-info single-container">
            <div className="single-item">
              <p className="single-item__number">372</p>
              <p className="single-item__desc">Completed Tasks</p>
            </div>
            <div className="single-item">
              <p className="single-item__number">11</p>
              <p className="single-item__desc">Open Tasks</p>
            </div>
          </div>
          <div className="main-sidebar__menu menu single-container">
            <p className="single-container__title">menu</p>
            <ul className="menu__list list">
              <li className="list__item item">
                <a href="/">Home</a>
              </li>
              <li className="list__item item">
                <a href="/">My Tasks</a>
              </li>
              <li className="list__item item">
                <a href="/">Notifications</a>
                <span className="item__notification">3</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-sidebar__scroll-content">
          <div className="main-sidebar__projects projects single-container">
            <p className="single-container__title projects__title">projects</p>
            <div className="single-project">
              <IcoDashboard />
              <p className="single-project__name">Dashboard UI KIT</p>
              <ThreeDots className="single-project__more-btn" />
            </div>
            <div className="single-project">
              <IcoCrm />
              <p className="single-project__name">CRM System</p>
              <ThreeDots className="single-project__more-btn" />
            </div>
            <div className="single-project">
              <IcoWebsiteRedesign />
              <p className="single-project__name">Website Redesign</p>
              <ThreeDots className="single-project__more-btn" />
            </div>
            <div className="single-project">
              <IcoCommunication />
              <p className="single-project__name">Communication Tool</p>
              <ThreeDots className="single-project__more-btn" />
            </div>
            <a href="/" className="projects__add-project">
              + Add a Project
            </a>
          </div>
          <div className="main-sidebar__teams teams single-container">
            <p className="single-container__title teams__title">teams</p>
            <div className="single-team">
              <p className="single-team__team-name">Designers</p>
              <div className="single-team__avatar-container avatar-container">
                <img
                  src={ExampleTeamAvatarOne}
                  alt=""
                  className="avatar-container__avatar"
                />
                <img
                  src={ExampleTeamAvatarTwo}
                  alt=""
                  className="avatar-container__avatar"
                />
                <img
                  src={ExampleTeamAvatarThree}
                  alt=""
                  className="avatar-container__avatar"
                />
              </div>
            </div>
            <div className="single-team">
              <p className="single-team__team-name">Backend</p>
              <div className="single-team__avatar-container avatar-container">
                <img
                  src={ExampleTeamAvatarOne}
                  alt=""
                  className="avatar-container__avatar"
                />
                <img
                  src={ExampleTeamAvatarTwo}
                  alt=""
                  className="avatar-container__avatar"
                />
              </div>
            </div>
            <div className="single-team">
              <p className="single-team__team-name">Frontend</p>
              <div className="single-team__avatar-container avatar-container">
                <img
                  src={ExampleTeamAvatarOne}
                  alt=""
                  className="avatar-container__avatar"
                />
                <img
                  src={ExampleTeamAvatarTwo}
                  alt=""
                  className="avatar-container__avatar"
                />
                <img
                  src={ExampleTeamAvatarThree}
                  alt=""
                  className="avatar-container__avatar"
                />
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
