import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__section">
        <div className="top_part">
          <a href="http://localhost:3000/">
            <div className="figure">
              <span className="figure__circle"></span>
              <span className="figure__logo">QA LOGO</span>
            </div>
          </a>
          <div className="search">
            <input className="search__input" type="text"></input>
            <div className="search__square">
              <span className="search__square-text">SEARCH</span>
            </div>
          </div>
        </div>
        <div className="bottom-part">
          <div className="bottom-part__menu-option active">
            <span className="option-text active_option">HOME</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">ABOUT US</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">SERVICE</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">PARTNERS</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">CUSTOMERS</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">PROJECT</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">CAREERS</span>
          </div>
          <div className="bottom-part__menu-option">
            <span className="option-text">CONTACT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
