import React from "react";
import "./videoPlayer.css";
import testVideo from "./testVideo.mp4";
import image from "./image.jpg";
import { NavLink } from "react-router-dom";
import Comments from "../Comments/Comments";
function VideoPlayer() {
  return (
    <div className="video-play">
      <div className="video-details">
        <video src={testVideo} className="video" poster={image} controls autoPlay></video>
        <h3 className="title">Bilgisayar işletmenliği</h3>
        <div className="info">
          <p>
            <i className="fas fa-calendar"></i>
            <span>21-25-2022</span>
          </p>
          <p>
            <i className="fas fa-heart"></i>
            <span>45 likes</span>
          </p>
        </div>
        <div className="tutor">
          <img src={image} alt="" />
          <div>
            <h3>Test</h3>
            <span>Bilgisayar Öğretmeni</span>
          </div>
        </div>
        <form action="" method="post" className="flex">
          <NavLink to="/Playlist" className="inline-btn">
            {/* <a href="" className="inline-btn"> */}
            Playliste git
            {/* </a> */}
          </NavLink>
          <button type="submit">
            <i className="far fa-heart"></i>
            <span>like</span>
          </button>
        </form>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe a sint recusandae inventore beatae. Nisi
            soluta placeat aliquam, alias suscipit, laboriosam aperiam nihil modi doloremque vero omnis qui esse
            voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor expedita impedit est autem rem
            itaque hic placeat fugiat, quam, iste assumenda obcaecati ipsum explicabo vitae veniam harum nisi
            reprehenderit?
          </p>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default VideoPlayer;
