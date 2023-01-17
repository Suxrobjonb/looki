import React from "react";
import "./modal.css";
import { MdOutlineShoppingBag } from "react-icons/md";

function Modal({ open, close }) {
  if (!open) return;
  return (
    <div onClick={close} className="box__modal">
      <div className="overlay">
        <div className="exit__button">
          <p className="exit__button-text" onClick={close}>
            X
          </p>
        </div>
        <div className="about__box">
          <ul className="about__list">
            <li className="bout__item">
              <a className="about__link" href="#">
                <MdOutlineShoppingBag />
                Wishlist (0)
              </a>
            </li>

            <li className="bout__item">
              <a className="about__link" href="#">
                <MdOutlineShoppingBag />
                Wishlist (0)
              </a>
            </li>

            <li className="bout__item">
              <a className="about__link" href="#">
                <MdOutlineShoppingBag />
                Wishlist (0)
              </a>
            </li>   

            <li className="bout__item serch">
              <a className="about__link" href="#">
                <MdOutlineShoppingBag />
                serach (0)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
