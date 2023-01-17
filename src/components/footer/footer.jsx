import React from "react";
import logo from "../../assets/img/site__logo.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__box">
          <div className="about__site">
            <div className="text__logo-box">
              <div className="logo">
                <img src={logo} alt="" width={114} height={34} />
              </div>

              <p class="text__logo">
                We are a team of professional designers and developers that
                create high quality wordpress plugins, Html, React Template.
              </p>

              <ul className="list__social-network">
                <li className="list__social-network-item">
                  <a className="networks__link" href="#">
                    <SlSocialFacebook />
                  </a>
                </li>

                <li className="list__social-network-item">
                  <a className="networks__link" href="#">
                    <FiTwitter />
                  </a>
                </li>

                <li className="list__social-network-item">
                  <a className="networks__link" href="#">
                    <AiOutlineYoutube />
                  </a>
                </li>

                <li className="list__social-network-item">
                  <a className="networks__link" href="#">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__widget">
              <div className="widget__title-box">
                <h2 className="widget__title">Information</h2>
                <div className="widget__menu">
                  <ul class="footer-menu">
                    <li>
                      <a className="footer__menu-link" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        payment
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        Stores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="widget__title-box">
                <h2 className="widget__title">Information</h2>
                <div className="widget__menu">
                  <ul class="footer-menu">
                    <li>
                      <a className="footer__menu-link" href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        payment
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a className="footer__menu-link" href="#">
                        Stores
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
