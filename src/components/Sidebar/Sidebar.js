import React from "react";

import "./sidebar.scss";
import { ReactComponent as IcoSearch } from "../../assets/icons/ico-search.svg";
import ExampleAvatar from "../../assets/images/example-avatar.png";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="main-sidebar__search-container search-container">
        <p className="search-container__brand">WORKLY</p>
        <IcoSearch className="search-container__search-icon" />
      </div>
      <div className="user-container">
        <img src={`data:image/png;base64,${ExampleAvatar}`} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
