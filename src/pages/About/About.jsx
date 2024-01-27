import React from "react";
import "./about.css";
import resim from "./belediye.jpg";
import Reviews from "../Reviews/Reviews";
function About() {
  return (
    <section>
      <div className="about">
        <div className="row">
          <div className="image">
            <img src={resim} alt="" />
          </div>
          <div className="content">
            <h3>Meram Belediyesi Gençlere Yönelik Kurslarıyla Yeteneklerinizi Keşfedin!</h3>
            <p>
              Meram Belediyesi olarak gençlerimizin potansiyelini keşfetmelerine destek oluyoruz. Sizlere özel olarak
              düzenlediğimiz çeşitli kurslar ile yeni beceriler edinebilir, ilgi alanlarınıza yönelik deneyim
              kazanabilirsiniz. Müzik, sanat, dil, teknoloji ve daha birçok alanda düzenlediğimiz kurslarımızla
              gençlerimizi destekleyerek, onların kişisel ve mesleki gelişimine katkıda bulunuyoruz. Uzman eğitmenler
              eşliğinde gerçekleşen bu kurslar, sadece bilgi kazanmanıza değil, aynı zamanda yeni arkadaşlıklar
              kurmanıza da olanak tanıyor.
            </p>
            <a href="/" className="inline-btn">
              Kurslara git
            </a>
          </div>
        </div>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h3>+10k</h3>
              <span>online Kurs</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div>
              <h3>+10k</h3>
              <span>Öğrenci</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div>
              <h3>+10k</h3>
              <span>Eğitmen</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-briefcase"></i>
            <div>
              <h3>+100%</h3>
              <span>İstidham</span>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </section>
  );
}

export default About;
