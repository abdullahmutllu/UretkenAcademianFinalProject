import React from "react";
import "./playlist.css";
import Video from "../Video/Video";
import images from "./image.jpg";
import user from "./user.png";
function Playlist() {
  return (
    <div className="playlist">
      <div className="row">
        <div className="col">
          <form action="" method="post" className="save-list">
            <button type="submit" name="save_list">
              <i className="farfa-bookmark">
                <span>Oynatma Listene Ekle</span>
              </i>
            </button>
          </form>
          <div className="thumb">
            <span>6 Video</span>
            <img src={images} alt="" className="thumb" />
          </div>
        </div>
        <div className="col">
          <div className="tutor">
            <img src={user} alt="" />
            <div>
              <h3>Mustafa Sarı</h3>
              <span>Bilgisayar Öğretmeni</span>
            </div>
          </div>
          <div className="details">
            <h3>Bilgisayar İşletmenliği</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut eum sit itaque, cum ab. Quis obcaecati
              nostrum quod facere!
            </p>
            <div className="date">
              <i className="fas fa-calendar">
                <span>21-25-2023</span>
              </i>
            </div>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
}

export default Playlist;
