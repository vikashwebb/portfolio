import reactLogo from "../logo.svg";
// import facebook from "../images/facebook.svg";
// import twitter from "../images/twitter.svg";
// import insta from "../images/insta.svg";
// import linkedin from "../images/linkedin.svg";
import email from "../images/mail.svg";
import phone from "../images/call.svg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import codepen from "../images/codepen.png"


import logo from "../images/logo.png";

// import whatsapp from "../images/whatsapp.svg";

// import "./App.css";
// import "./Style/style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-default">
        <div className="footer-wrapper">
          <div
            data-w-id="d8ff4f39-9935-6322-9c9f-6a276f3fb0f8"
            className="footer-content-top"
          >
            <div className="footer-main-container">
              <a
                href="index.html"
                aria-current="page"
                className="footer-logo-container w-inline-block w--current"
              >
                <img src={logo} alt={logo} className="header-logo" />
              </a>
              <p className="paragraph footer-paragraph">
                I am a curious person who loves to learn new things. I am a
                lifelong learner and I enjoy sharing my knowledge with others. I
                am a good listener and I am always open to new ideas.
              </p>
              
            </div>
            <div className="footer-nav-wrapper">
              <div
                id="w-node-e8d48131-b634-f991-cac4-38c5477a9b0c-ae2f46c5"
                className="footer-menu-wrapper first"
              >
                <div className="title h4-size footer-menu">Social Links</div>
                <div className="footer-menu-content pages">
                  <div className="_5-column-grid footer-social-links-grid">
                    <a
                      href="https://github.com/vikashwebb"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src={github}
                        alt={github}
                        className="image footer-social-link"
                      />
                    </a>
                    <a
                      href="https://codepen.io/coderV"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src={codepen}
                        alt={codepen}
                        className="image footer-social-link"
                      />
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/vikashwebb/"
                      className="footer-social-link w-inline-block"
                    >
                      <img
                        src={linkedin}
                        alt={linkedin}
                        className="image footer-social-link"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-menu-wrapper contact-links">
                <div className="title h4-size footer-menu">Contact Me</div>
                <div className="footer-menu-content contact-links">
                  <ul className="footer-nav last w-list-unstyled">
                    <li className="footer-nav-item">
                      <a
                        href="mailto:vikashwebb@gmail.com"
                        className="contact-link-wrapper w-inline-block"
                      >
                        <img
                          src={email}
                          alt={email}
                          className="image contact-link-icon footer-icon"
                        />
                        <div>vikashwebb@gmail.com</div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a
                        href="tel:8587062088"
                        className="contact-link-wrapper w-inline-block"
                      >
                        <img
                          src={phone}
                          alt={phone}
                          className="image contact-link-icon footer-icon"
                        />
                        <div>8587062088</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content-bottom">
        <div>
          Copyright © & Designed by VikashK - Made in
          <img src={reactLogo} className="footerLogo" alt="{reactLogo}" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
