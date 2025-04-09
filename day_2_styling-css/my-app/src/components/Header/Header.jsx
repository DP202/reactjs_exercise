import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>Logis</h1>
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list__item">
              <a className="active">Home</a>
            </li>
            <li className="menu-list__item">
              <a>About</a>
            </li>
            <li className="menu-list__item">
              <a>Services</a>
            </li>
            <li className="menu-list__item">
              <a>Pricing</a>
            </li>

            <li className="menu-list__item dropdown">
              <a>Dropdown</a>
              <i class="dropdown-icon fas fa-chevron-down"></i>

              <ul className="list dropdown-list ">
                <li className="dropdown-list__item">
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="deep-list dropdown-list__item">
                  <a href="#">Dropdown 2</a>
                  <i class="fas fa-chevron-down"></i>

                  <ul className="dropdown-list__deep dropdown-list">
                    <li className="deep-item dropdown-list__item">
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li className=" dropdown-list__item">
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li className="dropdown-list__item">
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li className="dropdown-list__item">
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li className="dropdown-list__item">
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-list__item">
                  <a href="#">Dropdown 3</a>
                </li>
                <li className="dropdown-list__item">
                  <a href="#">Dropdown 4</a>
                </li>
                <li className="dropdown-list__item">
                  <a href="#">Dropdown 5</a>
                </li>
              </ul>
            </li>
            <li className="menu-list__item">
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <button>Get a Quote</button>
      </div>
    </div>
  );
};

export default Header;
