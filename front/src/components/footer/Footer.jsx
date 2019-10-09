import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
          <div className="belt">
          <div className="footer">
            <div className="footer-left">
              <img
                className="footer-left__logo"
                src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570605681/logo-white_fdg23l.png"
                alt="Hotel Las Estrellas"
              />
              <ul className="footer-information">
                <li className="footer-information__item">
                  <span className="footer-information__item-bold">
                    Hotel Las Estrellas{" "}
                  </span>
                  2019 © Copyright 2019
                </li>
                <li className="footer-information__item">
                  <span className="footer-information__item-bold">Tlfno: </span>
                  <a href="tel:+34918932216">+34 91 893 22 16</a>
                </li>
                <li className="footer-information__item">
                  <span className="footer-information__item-bold">
                    Dirección:{" "}
                  </span>
                  Calle Las Estrellas 73, 28350 · Ciempozuelos · Madrid
                </li>
                <li className="footer-information__item">
                  <span className="footer-information__item-bold">
                    ¿Necesitas algo?{" "}
                  </span>
                  Contáctanos <Link to="/contacto">aquí</Link>
                </li>
              </ul>
            </div>
            <ul className="footer-social-main">
              <li className="footer-social-main__item footer-social-main__item--1">
                <a href="http://www.google.es"></a>
              </li>
              <li className="footer-social-main__item footer-social-main__item--2">
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
