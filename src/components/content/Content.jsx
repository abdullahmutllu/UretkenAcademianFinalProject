import React from "react";
import "./content.css";
import Course from "../../pages/Course/Course";
function Content() {
  return (
    <section className="quick-select">
      <div className="content">
        <div className="contentContainer">
          <div className="contentDs">
            <h1 className="title">Beğeni ve Yorumlar</h1>
            <p>
              Toplam beğeni :<span>41</span>
            </p>
            <p>
              Toplam yorum :<span>41</span>
            </p>

            <p>
              Eğitim alan öğrenci sayısı :<span>41</span>
            </p>
          </div>
          <div className="contentDs">
            <h1 className="title">Kategoriler</h1>

            <div className="flex">
              <a href="#">
                <i className="fas fa-code"></i>
                <span>Bilgisayar işletmenliği</span>
              </a>
              <a href="#">
                <i className="fas fa-code"></i>
                <span>Yapay zeka</span>
              </a>

              <a href="#">
                <i className="fas fa-camera"></i>
                <span>Fotoğrafçılık Kursu</span>
              </a>

              <a href="#">
                <i className="fas fa-vial"></i>
                <span>Kimya ve laboratuvar </span>
              </a>
            </div>
          </div>
          <div className="contentDs">
            <h1 className="title">Popüler Eğitimler</h1>

            <div className="flex">
              <a href="#">
                <i className="fab fa-react"> React</i>
                <span>React Eğitimi</span>
              </a>
            </div>
          </div>
          <div className="contentDs tutor">
            <h1 className="title">Hakkımızda</h1>
            <p>
              Meram Belediyesi olarak gençlerimizin potansiyelini keşfetmelerine destek oluyoruz. Sizlere özel olarak
              düzenlediğimiz çeşitli kurslar ile yeni beceriler edinebilir, ilgi alanlarınıza yönelik deneyim
              kazanabilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <Course />
    </section>
  );
}

export default Content;
