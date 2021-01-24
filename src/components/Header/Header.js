import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

import ExampleTeamAvatar from "../../assets/images/example-big-avatar.png";
import { ReactComponent as IcoChat } from "../../assets/icons/ico-chat.svg";
import { ReactComponent as IcoMore } from "../../assets/icons/ico-more-dots.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main-belt main-belt">
        <div className="title-container">
          <h2 className="title-container__title">Home</h2>
          <button className="title-container__more-btn">
            <IcoMore />
          </button>
        </div>
        <div className="team-info">
          {Array(3)
            .fill(null)
            .map((index) => (
              <img
                key={index}
                src={ExampleTeamAvatar}
                alt=""
                className="team-info__person"
              />
            ))}
          <a href="/" className="team-info__button btn--gray btn--small">
            Share
          </a>
          <a href="/" className="team-info__button btn--yellow btn--small">
            <IcoChat /> Chat
          </a>
        </div>
        <nav className="header__navigation navigation">
          <ul className="navigation__menu">
            <li className="active">
              <Link to="/">Tasks</Link>
            </li>
            <li>
              <Link to="/">Kanban</Link>
            </li>
            <li>
              <Link to="/">Activity</Link>
            </li>
            <li>
              <Link to="/">Calendar</Link>
            </li>
            <li>
              <Link to="/">Files</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
