
import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import email from "../images/mail.svg";
// import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(true)
  const [windowSize] = useState(getWindowSize());

  useEffect(() => {
    console.log('window size ', windowSize.innerWidth)
    if(windowSize.innerHeight > 480 ){
      setMobileMenu(false) 
    }
  }, [windowSize.innerHeight]);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="header w-nav"
    >
      <div className="container-default w-container">
        <div className="header-wrapper">
          <div className="split-content header-right">
            <Link to="/" className="brand w-nav-brand w--current">
              <img src={logo} alt="" className="header-logo" />
            </Link>
          </div>
          <div className="split-content header-center">
            <nav role="navigation" className="nav-menu w-nav-menu" style={ { display: mobileMenu ? 'none' : 'block' } } >
              <ul role="list" className="header-navigation">
                <li className="nav-item-wrapper">
                  <Link to="/" className="nav-link w--current">
                    Home
                  </Link>
                </li>
                <li className="nav-item-wrapper">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item-wrapper">
                  <Link to="/portfolio" className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item-wrapper">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <a
                href="mailto:vikashwebb@gmail.com"
                className="email-header-wrapper show-mobile w-inline-block"
              >
                <img
                  src={email}
                  alt=""
                  className="image email-header-icon"
                />
                <div>vikashwebb@gmail.com</div>
              </a>
            </nav>
            <div className="menu-button w-nav-button" onClick={() => setMobileMenu(!mobileMenu)}>
              <div className="menu-button-icon-main-wrapper">
                  <div className="menu-button-icon-wrapper">
                    <div className={`menu-icon-line-top ${!mobileMenu ? `rotate-top`: ""  } `}></div>
                    {mobileMenu ?  <div className="menu-icon-line-middle"></div> :  null}
                    
                    <div className={`menu-icon-line-bottom ${!mobileMenu ? `rotate-bottom`: ''  } `} ></div>
                 
                  </div>
              </div>
            </div>
          </div>
          <div className="split-content header-left">
            <a
              href="mailto:vikashwebb@gmail.com"
              className="email-header-wrapper w-inline-block"
            >
              <img
              src={email}
                alt=""
                className="image email-header-icon"
              />
              <div>vikashwebb@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
