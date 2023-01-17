import React from "react";
import "./our_products.css";

function Our_products() {
  return (
    <>
    <div className="Products__section">
      <div className="container">
        <div className="products__box">
          <div className="products__title-box">
            <h2 className="products__title">Our products</h2>
            <p className="text__product">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, culpa?
            </p>
          </div>

          <div className="list__product-box">
            <div className="container">
              <ul className="list__product">
                <li className="list__product-item">
                  <a className="list__product-link-default" href="#">
                    New products
                  </a>
                </li>

                <li className="list__product-item">
                  <a className="list__product-link" href="#">
                    Onsale
                  </a>
                </li>

                <li className="list__product-item">
                  <a className="list__product-link" href="#">
                    Upcoming products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Our_products;
