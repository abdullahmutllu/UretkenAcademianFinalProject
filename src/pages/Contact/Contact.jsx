import React from "react";
import "./contact.css";
import meram from "./meram.png";

function Contact() {
  return (
    <section className="contact">
      <div className="row">
        <form action="" method="post" className="form">
          <h3>Mesaj Gönder</h3>
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Adınızı giriniz"
              required
              maxLength={100}
              className="box-c  small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta Adresiniz:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Mail adresinizi giriniz"
              required
              maxLength={100}
              className="box-c  small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon Numaranız:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefon numaranızı giriniz"
              required
              maxLength={100}
              className="box-c  small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea
              id="message"
              name="message"
              placeholder="İletmek istediğiniz mesajı giriniz"
              cols="30"
              rows="10"
              className="box-c "
            ></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Mesaj Gönder" className="inline-btn" name="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
