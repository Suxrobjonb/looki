import React from "react";
import card from "../../assets/img/card-money.svg"
import "./footer__bottom.css";

function Footer__bottom() {
  return (
    <div className="footer__buttom">
      <div className="container">
        <div className="footer__buttom-box">
          <div>
            <p className="footer__bottom-title">
              Copyright © <a href="https://hasthemes.com/">HasThemes</a>. All
              Rights Reserved
            </p>
          </div>

          <div>
            <img src={card} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer__bottom;
