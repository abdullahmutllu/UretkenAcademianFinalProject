import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import Profileimg from "./profile.png";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="close-sidebar">
        <i className="fas fa-times"></i>
      </div>
      <div className="profile">
        <img src={Profileimg} alt="" />
        <h3>Örnek kullanıcı</h3>
        <span>Öğrenci</span>
        <NavLink to="/view-profile" className="btn">
          Profile git
        </NavLink>
      </div>
      <nav className="navbar">
        <NavLink to="/">
          <i className="fas fa-home"></i>
          <span>Anasayfa</span>
        </NavLink>
        <NavLink to="/about">
          <i className="fas fa-question"></i>
          <span>Hakkımızda</span>
        </NavLink>
        <NavLink to="/contact">
          <i className="fas fa-graduation-cap"></i>
          <span>iletişim</span>
        </NavLink>
        <NavLink to="/teachers">
          <i className="fas fa-headset"></i>
          <span>Eğitmenler</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
