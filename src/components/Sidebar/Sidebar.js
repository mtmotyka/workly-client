import React from "react";

import "./sidebar.scss";
import { ReactComponent as IcoSearch } from "../../assets/icons/ico-search.svg";
import { ReactComponent as ThreeDots } from "../../assets/icons/ico-three-dots.svg";
import ExampleAvatar from "../../assets/images/example-avatar.png";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
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
  );
};

export default Sidebar;
