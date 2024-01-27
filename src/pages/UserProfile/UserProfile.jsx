import React from "react";
import "./userProfile.css";
import user from "./user.png";

function UserProfile() {
  return (
    <section className="profile">
      <div className="details">
        <div className="user">
          <img src={user} alt="" />
          <h3>Örnek kullanıcı</h3>
          <p>Öğrenci</p>
        </div>

        <div className="box-container">
          <div className="box">
            <div className="flex">
              <i className="fa-solid fa-bookmark"></i>
              <div>
                <h3>3</h3>
                <span>Kayıt olunan kurslar</span>
              </div>
            </div>
            <a href="#" className="inline-btn">
              Kursa git
            </a>
          </div>
          <div className="box">
            <div className="flex">
              <i className="fas fa-heart"></i>
              <div>
                <h3>3</h3>
                <span>Toplam beğeni</span>
              </div>
            </div>
            <a href="#" className="inline-btn">
              Beğenilere git
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
