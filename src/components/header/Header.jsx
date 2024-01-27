import { useEffect, useRef, useState } from "react";
import "./header.css";
import Profileimg from "./profile.png";
import Sidebar from "../sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpg";

function Header() {
  const btnElement = useRef();
  const searchBtn = useRef();
  const menuBtn = useRef();
  const [isBodyBlack, setIsBodyBlack] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isBodyBlack ? "var(--black)" : "";
  }, [isBodyBlack]);

  const handleButtonClick = () => {
    setIsBodyBlack(!isBodyBlack);
  };
  const toggleElement = (ref) => {
    const element = ref.current;

    if (element) {
      const isActive = element.classList.toggle("active");

      if (isActive) {
        element.style.opacity = "1";
      } else {
        element.style.opacity = "0";
      }
    }
  };

  const btnClick = () => {
    toggleElement(btnElement);
  };

  const btnSearchClick = () => {
    toggleElement(searchBtn);
  };
  const handleClick = () => {
    toggleElement(menuBtn);
    const bodyStyle = document.body.style;
    const currentPaddingLeft = bodyStyle.paddingLeft;

    if (currentPaddingLeft === "150px") {
      bodyStyle.paddingLeft = "0px";
    } else {
      bodyStyle.paddingLeft = "150px";
    }
  };

  return (
    <>
      <div className="header">
        <section className="flex">
          <p className="logo">
            <img src={logo} alt="" />
          </p>
          <form ref={searchBtn} className="search-form" action="">
            <input type="text" className="search-input" placeholder="Kurs arama..." required maxLength={100} />
            <button className="fas fa-search" type="submit"></button>
          </form>
          <div className="icons">
            <div onClick={btnClick} id="btn-user" className="fas fa-user"></div>
          </div>
          <div ref={btnElement} className="profile">
            <img src={Profileimg} alt="" />
            <h3>Örnek Kullanıcı</h3>
            <span>Öğrenci</span>
            <NavLink to="/view-profile" className="btn">
              Profile git
            </NavLink>
            <div className="flex-btn">
              <NavLink to="/login" className="option-btn">
                Giriş yap
              </NavLink>
              <NavLink to="/register" className="option-btn">
                Kayıt ol
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <div ref={menuBtn} className="sidebar">
        <Sidebar />
      </div>
    </>
  );
}

export default Header;
