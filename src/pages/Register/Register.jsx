// Login.js

import React from "react";
import "./register.css";

function Login() {
  return (
    <div className="containerLogin">
      <div className="login-container">
        <h2 className="login-title">Kayıt Ol</h2>
        <form className="login-form">
          <input type="email" className="login-input" placeholder="Email " />
          <input type="text" className="login-input" placeholder="Kullanıcı Adı" />
          <input type="password" className="login-input" placeholder="Şifre" />
          <button type="submit" className="login-button">
            Kayıt ol
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
