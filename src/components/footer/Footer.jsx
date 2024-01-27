import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="apps">
        <a href="https://apps.apple.com/tr/app/meram-belediyesi-mobil/id1595136574?l=tr">
          <img src="https://www.meram.bel.tr/upload/medya/appstore.png" alt="App Store" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.devnet.meram">
          <img src="https://www.meram.bel.tr/upload/medya/googleplay_icon.png" alt="Google Play" />
        </a>
        <div className="text">Meram Belediyesinin mobil uygulamasını cep telefonunuza indirebilirsiniz.</div>
      </div>
    </div>
  );
}

export default Footer;
