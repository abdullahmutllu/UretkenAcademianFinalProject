import React from "react";
import "./video.css";
import image from "./image.jpg";
function Video() {
  return (
    <section className="video-container">
      <h1 className="heading">Kurs içeriği</h1>
      <div className="box-container">
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part1</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part2</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part3</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part4</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part4</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part4</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part4</h3>
        </a>
        <a href="" className="box">
          <i className="fas fa-play"></i>
          <img src={image} alt="" />
          <h3>Test Kurs = part4</h3>
        </a>
      </div>
    </section>
  );
}

export default Video;
