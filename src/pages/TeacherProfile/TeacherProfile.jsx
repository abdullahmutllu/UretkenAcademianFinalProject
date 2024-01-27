import React from "react";
import "./teacherProfile.css";
import image from "./user.png";
function TeacherProfile() {
  return (
    <section className="teacher-profile">
      <h1 className="heading">Profil detayları</h1>
      <div className="details">
        <div className="tutor">
          <img src={image} alt="" />
          <h3>Hasan Mutlu</h3>
          <span>Fotoğrafçı</span>
        </div>
        <div className="flex">
          <p>toplam oynatma listesi</p> : <span className="span">4</span>
          <p>toplam video</p> :<span className="span">4</span>
          <p>toplam beğeni</p> : <span className="span">4</span>
        </div>
      </div>
      <section>
        <div className="courses">
          <h1 className="heading">Diğer kursları</h1>
          <div className="box-container">
            <div className="box">
              <img src={image} className="thumb" alt="" />
              <h3 className="title">Fotoğrafçılık1</h3>
              <a href="#" className="inline-btn">
                Kursa git
              </a>
            </div>
            <div className="box">
              <img src={image} className="thumb" alt="" />
              <h3 className="title">Fotoğrafçılık2</h3>
              <a href="#" className="inline-btn">
                Kursa git
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TeacherProfile;
