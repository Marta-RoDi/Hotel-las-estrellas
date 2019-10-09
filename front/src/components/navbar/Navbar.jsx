import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../pages/auth/AuthService";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      opened: false
    };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      loggedInUser: nextProps["userInSession"]
    });
  }

  handleLogout = e => {
    this.props.logout();
  };

  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    if (this.state.loggedInUser && this.state.loggedInUser.username === "admin") {
      return (
        <section className="navigation">
          <div className="social">
            <div className="belt">
              <div className="social-container">
                <a className="social-container__tel" href="tel:+34918932216">
                  91 893 22 16
                </a>
                <ul className="social-main">
                  <li className="social-main__item social-main__item--1">
                    <a href="https://www.facebook.com/hotel.lasestrellas"> </a>
                  </li>
                  <li className="social-main__item social-main__item--2">
                    <a href="https://twitter.com/HLasEstrellas"> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <div className="belt">
              <div className="navbar-container">
                <div className="navbar-left">
                  <img
                    className="navbar-left__logo"
                    src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570605677/logo_nxxrou.png"
                    alt="Hotel Las Estrellas"
                  />
                  <div className="container" onClick={this.toggle.bind(this)}>
                    <div
                      className={
                        "stick stick-1 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-2 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-3 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                  </div>
                </div>
                <ul
                  className={
                    "navbar-main " +
                    (this.state.opened
                      ? "opened animated slideInRight"
                      : "closed animated ")
                  }
                >
                  <li className="navbar-main__item">
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/hotel">Hotel</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/galeria">Galería</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/reservas">Reservas</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/contacto">Contacto</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/experiencias">Experiencias</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/ofertas">Ofertas</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/panel">Panel</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <a href="#logout" onClick={this.handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      );
    } 

    else if (this.state.loggedInUser) {
      return (
        <section className="navigation">
          <div className="social">
            <div className="belt">
              <div className="social-container">
                <a className="social-container__tel" href="tel:+34918932216">
                  91 893 22 16
                </a>
                <ul className="social-main">
                  <li className="social-main__item social-main__item--1">
                    <a href="https://www.facebook.com/hotel.lasestrellas"> </a>
                  </li>
                  <li className="social-main__item social-main__item--2">
                    <a href="https://twitter.com/HLasEstrellas"> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <div className="belt">
              <div className="navbar-container">
                <div className="navbar-left">
                  <img
                    className="navbar-left__logo"
                    src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570605677/logo_nxxrou.png"
                    alt="Hotel Las Estrellas"
                  />
                  <div className="container" onClick={this.toggle.bind(this)}>
                    <div
                      className={
                        "stick stick-1 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-2 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-3 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                  </div>
                </div>
                <ul
                  className={
                    "navbar-main " +
                    (this.state.opened
                      ? "opened animated slideInRight"
                      : "closed animated ")
                  }
                >
                  <li className="navbar-main__item">
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/hotel">Hotel</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/galeria">Galería</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/reservas">Reservas</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/contacto">Contacto</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/experiencias">Experiencias</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/ofertas">Ofertas</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <a href="#logout" onClick={this.handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      );
    }
    
    else {
      return (
        <section className="navigation">
          <div className="social">
            <div className="belt">
              <div className="social-container">
                <a className="social-container__tel" href="tel:+34918932216">
                  91 893 22 16
                </a>
                <ul className="social-main">
                  <li className="social-main__item social-main__item--1">
                    <a href="https://www.facebook.com/hotel.lasestrellas"> </a>
                  </li>
                  <li className="social-main__item social-main__item--2">
                    <a href="https://twitter.com/HLasEstrellas"> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <div className="belt">
              <div className="navbar-container">
                <div className="navbar-left">
                  <img
                    className="navbar-left__logo"
                    src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570605677/logo_nxxrou.png"
                    alt="Hotel Las Estrellas"
                  />
                  <div className="container" onClick={this.toggle.bind(this)}>
                    <div
                      className={
                        "stick stick-1 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-2 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                    <div
                      className={
                        "stick stick-3 " +
                        (this.state.opened ? "open" : "open close")
                      }
                    ></div>
                  </div>
                </div>
                <ul
                  className={
                    "navbar-main " +
                    (this.state.opened
                      ? "opened animated slideInRight"
                      : "closed animated ")
                  }
                >
                  <li className="navbar-main__item">
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/hotel">Hotel</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/galeria">Galería</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/reservas">Reservas</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/contacto">Contacto</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/signup">Sign up</NavLink>
                  </li>
                  <li className="navbar-main__item">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      );
    }
  }
}

export default Navbar;
