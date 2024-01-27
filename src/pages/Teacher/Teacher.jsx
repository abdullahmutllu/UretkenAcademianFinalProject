import React from "react";
import "./teacher.css";
import user from "./user.png";
import { NavLink } from "react-router-dom";

function Teacher() {
  return (
    <section className="teacher">
      <h1 className="heading">Eğitmenler</h1>
      <form action="" method="post" className="search-tutor">
        <input type="text" name="search-box" maxLength="100" placeholder="arama kısmı..." required />
        <button type="submit" name="search_tutor" className="fas fa-search"></button>
      </form>
      <div className="box-container">
        <div className="box">
          <div className="tutor">
            <img src={user} alt="" />
            <h3>Eğitmen hasan</h3>
            <span>Bİlgisayar öğretmeni</span>
          </div>
          <p>
            playlist: <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>105</span>
          </p>

          <NavLink className="inline-btn" to="/TeacherProfile">
            Profile git
          </NavLink>
        </div>
        <div className="box">
          <div className="tutor">
            <img src={user} alt="" />
            <h3>Eğitmen hasan</h3>
            <span>Bİlgisayar öğretmeni</span>
          </div>
          <p>
            playlist: <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>105</span>
          </p>

          <NavLink className="inline-btn" to="/TeacherProfile">
            Profile git
          </NavLink>
        </div>
        <div className="box">
          <div className="tutor">
            <img src={user} alt="" />
            <h3>Eğitmen hasan</h3>
            <span>Bİlgisayar öğretmeni</span>
          </div>
          <p>
            playlist: <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>105</span>
          </p>

          <NavLink className="inline-btn" to="/TeacherProfile">
            Profile git
          </NavLink>
        </div>
        <div className="box">
          <div className="tutor">
            <img src={user} alt="" />
            <h3>Eğitmen hasan</h3>
            <span>Bİlgisayar öğretmeni</span>
          </div>
          <p>
            playlist: <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>105</span>
          </p>

          <NavLink className="inline-btn" to="/TeacherProfile">
            Profile git
          </NavLink>
        </div>
        <div className="box">
          <div className="tutor">
            <img src={user} alt="" />
            <h3>Eğitmen hasan</h3>
            <span>Bİlgisayar öğretmeni</span>
          </div>
          <p>
            playlist: <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>105</span>
          </p>

          <NavLink className="inline-btn" to="/TeacherProfile">
            Profile git
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Teacher;
