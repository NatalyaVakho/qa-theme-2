import "./App.css";

const App = () => {
  return (
    <div className="project_wrapper">
      <header className="header__wrapper">
        <div className="header_section">
          <div className="top_part">
            <div className="figure">
              <span className="circle"></span>
              <span className="logo">QA LOGO</span>
            </div>
            <div className="search">
              <span className="input"></span>
              <span className="square"></span>
              <span className="text">SEARCH</span>
            </div>
          </div>
          <div className="bottom_part">
            <div className="menu__option active">
              <span className="option_text active_option">HOME</span>
            </div>
            <div className="menu__option">
              <span className="option_text">ABOUT US</span>
            </div>
            <div className="menu__option">
              <span className="option_text">SERVICE</span>
            </div>
            <div className="menu__option">
              <span className="option_text">PARTNERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CUSTOMERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">PROJECT</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CAREERS</span>
            </div>
            <div className="menu__option">
              <span className="option_text">CONTACT</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
