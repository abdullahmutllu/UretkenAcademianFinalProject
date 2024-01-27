import React from "react";
import "./course.css";
import image from "./react.png";
import user from "./user.png";
import { NavLink } from "react-router-dom";
function Course() {
  return (
    <section>
      <div className="courses">
        <h1 className="heading">Aktif Kurslar</h1>
        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
          <div className="box">
            <div className="tutor">
              <img src={user} alt="" />
              <div>
                <h3>Hüseyin Kaya</h3>
                <span>22.22.2022</span>
              </div>
            </div>
            <img src={image} className="thumb" alt="" />
            <h3 className="title"> React Eğitimi</h3>
            <NavLink to="./view-profile" className="inline-btn">
              Eğitime Git
            </NavLink>
          </div>
        </div>
        <div className="more-btn">
          <a href="#" className="inline-option-btn">
            Diğer kurslar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Course;
