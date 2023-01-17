import { useState } from "react";
import site__logo from "../../assets/img/site__logo.svg";
import { Spin as Hamburger } from "hamburger-react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import dropDown from "../../assets/img/duble-drop.svg";
import compare from "../../assets/img/compare.svg";
import Modal from "../modal-media/modal";
import "../shop-modal/shop__modal";
import "../header/header.css";
import Shop__modal from "../shop-modal/shop__modal";

function Header() {
  const [Open, setOpen] = useState(false);
  const [Select, setSelect] = useState(false);
  const [Page, setPage] = useState(false);
  const [shop, setShop] = useState(false);
  const [media, setMedia] = useState(false); 
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header__box">
          <div className="logo__box">
            <img src={site__logo} alt="logo" width={114} height={34} />
          </div>

          <div className="navbar">
            <nav className="navbar__item">
              <ul className="header__nav">
                <li onClick={() => setOpen(!Open)} className="nav__list">
                  <a className="nav__list-link blue" href="#">
                    Home
                    <img
                      className="drop__down-icon"
                      src={dropDown}
                      alt="logo"
                    />
                  </a>
                </li>

                <li onClick={() => setSelect(!Select)} className="nav__list">
                  <a className="nav__list-link" href="#">
                    SHOP
                    <img
                      className="drop__down-icon"
                      src={dropDown}
                      alt="logo"
                    />
                  </a>
                </li>

                <li onClick={() => setPage(!Page)} className="nav__list">
                  <a className="nav__list-link" href="#">
                    PAGES
                    <img
                      className="drop__down-icon"
                      src={dropDown}
                      alt="logo"
                    />
                  </a>
                </li>

                <li onClick={() => setShop(!shop)} className="nav__list">
                  <a className="nav__list-link" href="#">
                    BLOG
                    <img
                      className="drop__down-icon"
                      src={dropDown}
                      alt="logo"
                    />
                  </a>
                </li>

                <li className="nav__list">
                  <a className="nav__list-link" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </nav>

            {Open ? (
              <div className="home__menus">
                <div className="options__item">Home 1</div>
                <div className="options__item">Home 2</div>
              </div>
            ) : (
              <div> </div>
            )}

            {Select ? (
              <div className="home__menus shop">
                <div className="options__item">Home 1</div>
                <div className="options__item">Home 2</div>
              </div>
            ) : (
              <div> </div>
            )}

            {Page ? (
              <div className="home__menus pages">
                <div className="options__item">Home 1</div>
                <div className="options__item">Home 2</div>
              </div>
            ) : (
              <div> </div>
            )}

            {shop ? (
              <div className="home__menus blog">
                <div className="options__item">Home 1</div>
                <div className="options__item">Home 2</div>
              </div>
            ) : (
              <div> </div>
            )}
          </div>

          <div className="to__purchase">
            <button className="list__icons-button">
              <BsSearch className="list__icons" />
            </button>

            <button className="list__icons-button">
              <img src={compare} className="list__icons big" />
              <span className="little__rakes">1</span>
            </button>

            <button className="list__icons-button">
              <AiOutlineHeart className="list__icons" />
              <span className="little__rakes">3</span>
            </button>

            <button onClick={() => setModal(true)} className="list__icons-button">
              <AiOutlineShopping className="list__icons" />
              <span className="little__rakes">3</span>
            </button>
              <Shop__modal onOpen={modal} onClose={() => setModal(false)}/>

            <button onClick={() => setMedia(true)} className="hamburger">
              <Hamburger size={20} toggled={media} toggle={setMedia} />
            </button>
              <Modal open={media} close={() => setMedia(false)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
