// Login.js

import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="containerLogin">
      <div className="login-container">
        <h2 className="login-title">Giriş yap</h2>
        <form className="login-form">
          <input type="text" className="login-input" placeholder="Kullanıcı Adı" />
          <input type="password" className="login-input" placeholder="Şifre" />
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
