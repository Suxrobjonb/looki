import { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephoneOutbound } from "react-icons/bs";
import usa from "../../assets/img/usa flag.svg";
import list from "../../assets/img/dropDown.svg";
import "./header-top.css";

function Header__top() {
  const [open, setOpen] = useState(false);
  const [newopen, setNewopen] = useState(false);
  const [openselect, setOpenelect] = useState(false);
  return (
    <header className="header__top">
      <div className="container">
        <div className="header__tob-box">
          <div className="left__box-header">
            <ul className="social__networks">
              <li className="social__networks-item">
                <a href="/">
                  <SlSocialFacebook className="fasebook__icon" />
                </a>
              </li>

              <li className="social__networks-item">
                <a href="/">
                  <TfiTwitter className="fasebook__icon" />
                </a>
              </li>

              <li className="social__networks-item">
                <a href="/">
                  <AiOutlineYoutube className="fasebook__icon" />
                </a>
              </li>

              <li className="social__networks-item">
                <a href="/">
                  <SlSocialInstagram className="fasebook__icon" />
                </a>
              </li>
            </ul>

            <div className="phone__box">
              <a href="tel:(+123)4567890" className="phone__number">
                <BsTelephoneOutbound className="phone__img" />
                (+123)4567890
              </a>
            </div>
          </div>

          <div className="right__box-header">
            <div className="settings__dropdown">
              <span
                onClick={() => setNewopen(!newopen)}
                className="header__droopdown-text"
              >
                Settings <img src={list} className="drop__down" />
              </span>

    
              <span
                onClick={() => setOpenelect(!openselect)}
                className="header__droopdown-text right"
              >
                USD $<img src={list} className="drop__down" />
              </span>

              <span
                onClick={() => setOpen(!open)}
                className="header__droopdown-text right">
                  <img className="usa__flag" src={usa} alt="" />
                English
                <img src={list} className="drop__down" />
              </span>
              {newopen ? (
                <div className="option__titles-header">
                  <div className="options__item">My account</div>
                  <div className="options__item">Checkout</div>
                  <div className="options__item">Siginout</div>
                </div>
              ) : (
                <div> </div>
              )}

              {openselect ? (
                <div className="moneys">
                  <div className="options__item">Euro</div>
                  <div className="options__item">USD $</div>
                </div>
              ) : (
                <div> </div>
              )}

              {open ? (
                <div className="language">
                  <div className="options__item">engs</div>
                  <div className="options__item">frans</div>
                </div>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header__top;
