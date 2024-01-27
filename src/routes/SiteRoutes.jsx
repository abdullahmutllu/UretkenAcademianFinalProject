import React from "react";
import "./route.css";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Content from "../components/content/Content";
import VideoPlayer from "../pages/VideoPlayer/VideoPlayer";
import Playlist from "../pages/Playlist/Playlist";
import Teacher from "../pages/Teacher/Teacher";
import TeacherProfile from "../pages/TeacherProfile/TeacherProfile";
import Contact from "../pages/Contact/Contact";
import UserProfile from "../pages/UserProfile/UserProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/view-profile" element={<UserProfile />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/about" element={<About />} />
      <Route path="/teachers" element={<Teacher />} />
      <Route path="/TeacherProfile" element={<TeacherProfile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default SiteRoutes;
