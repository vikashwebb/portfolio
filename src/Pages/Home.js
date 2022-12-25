import { Link } from "react-router-dom";
import heroUnderLine from "../images/hero-underline-personal-x-template.svg";
import heroImage from "../images/hero_image.png";
import webDesign from "../images/service-1-personal-x-template.svg";
import uiUx from "../images/service-2-personal-x-template.svg";
import productDesign from "../images/service-3.svg";
import webDevelopment from "../images/service-4-personal-x-template.svg";
import aboutMe from "../images/AboutMe.jpeg";
// import arrowX from "../images/resume-arrow-personal-x-template.svg";
// import FB from "../images/resume-facebook-small-personal.svg";
// import twitter from "../images/resume-twitter-small-personal.svg";
// import YT from "../images/resume-youtube-small-personal.svg";
// import insta from "../images/resume-instagram-small-personal.svg";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
// import FB from "../images/resume-facebook-small-personal.svg";
// import FB from "../images/resume-facebook-small-personal.svg";
// import FB from "../images/resume-facebook-small-personal.svg";

function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="section hero-section wf-section">
          <div className="container-default w-container">
            <div className="hero-wrapper">
              <div className="split-content hero-left">
                <h3 className="title subtitle">Hey, I’m Vikash Kumar</h3>
                <h1 className="title home-hero">
                  I design and code beautifully simple things, and I love what I
                  do.
                </h1>
                <img
                  src={heroUnderLine}
                  loading="eager"
                  alt=""
                  className="image hero-underline"
                />
              </div>
              <div className="image-wrapper hero-image">
                <img src={heroImage} alt="" className="image hero-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="section services-section wf-section">
          <div className="container-default w-container">
            <div className="container-small text-center">
              <h2>My services</h2>
            </div>
            <div className="services-main-wrapper">
              <div className="_2-column-grid services-grid">
                <div className="card service-card">
                  <img src={webDesign} alt="" className="image service-icon" />
                  <div>
                    <h3 className="title service-title">Web Design</h3>
                  </div>
                </div>
                <div className="card service-card">
                  <img src={uiUx} alt="" className="image service-icon" />
                  <div>
                    <h3 className="title service-title">UI / UX Design</h3>
                  </div>
                </div>
                <div className="card service-card">
                  <img
                    src={productDesign}
                    alt=""
                    className="image service-icon"
                  />
                  <div>
                    <h3 className="title service-title">App Development</h3>
                  </div>
                </div>
                <div className="card service-card">
                  <img
                    src={webDevelopment}
                    alt=""
                    className="image service-icon"
                  />
                  <div>
                    <h3 className="title service-title">Web Development</h3>
                  </div>
                </div>
              </div>
              <div className="bg services-square"></div>
            </div>
          </div>
        </div>
        <div className="section wf-section">
          <div className="container-default w-container">
            <div className="home-about-wrapper">
              <div className="image-wrapper home-about">
                <img src={aboutMe} alt="" className="image home-about" />
              </div>
              <div className="split-content home-about">
                <h2 className="title home-about">Let's Collaborate</h2>
                <p className="paragraph home-about">
                  Have an idea or an epic project in mind? Talk to me. Let’s
                  work together and make something great.
                </p>
                {/* <a href="about.html" className="button-primary w-button">
                  Get in touch
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section testimonials-section wf-section">
          <div className="container-default w-container">
            <div className="container-medium-838px testimonials">
              <h2 className="title testimonials">Reviews about my work</h2>
            </div>
            <div className="_3-column-grid portfolio-grid w-dyn-items">
              <div className="w-richtext">
                <blockquote>
                  <div className="card testimonial-card">
                    <div className="split-content testimonial-content">
                      <p className="paragraph testimonial">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div>
                        <div className="title testimonial-client-name">
                          Vijay Kumar
                        </div>
                        <div className="title testimonial-client-prosition">
                          Founder of Octa Animation Multimedia
                        </div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="w-richtext">
                <blockquote>
                  <div className="card testimonial-card">
                    <div className="split-content testimonial-content">
                      <p className="paragraph testimonial">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div>
                        <div className="title testimonial-client-name">
                          Matt Canon
                        </div>
                        <div className="title testimonial-client-prosition">
                          VP of Design at Google
                        </div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="w-richtext">
                <blockquote>
                  <div className="card testimonial-card">
                    <div className="split-content testimonial-content">
                      <p className="paragraph testimonial">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Lectus mattis nunc aliquam tincidunt est non.
                        Viverra nec eu, in ridicus”
                      </p>
                      <div>
                        <div className="title testimonial-client-name">
                          Matt Canon
                        </div>
                        <div className="title testimonial-client-prosition">
                          VP of Design at Google
                        </div>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div> */}
        <div className="style-guide-subheader">
          <h2>GET IN TOUCH</h2>
          <p>
            Together, we will create a brand that will help you to attract new
            customers and grow your business.
          </p>
          <Link to="/contact" className="button-primary small w-button">
            Get in touch
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
