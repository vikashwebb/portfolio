import Header from "../Component/Header";
import Footer from "../Component/Footer";
import heroUnderLine from "../images/hero-underline-personal-x-template.svg";
import myAbout from "../images/about.jpg";
import about2 from "../images/about2.webp";

// skills import

import bitbucket from "../images/skills/bitbucket.png";
import bootstrap from "../images/skills/bootstrap.png";
import codepen from "../images/skills/codepen.png";
import css3 from "../images/skills/css3.png";
import html5 from "../images/skills/html5.png";
import jquery from "../images/skills/jquery.png";
import js from "../images/skills/js.png";
import netlify from "../images/skills/netlify.png";
import md from "../images/skills/md.png";
import photoshop from "../images/skills/photoshop.png";
import reactNative from "../images/skills/react-native.png";
import sass from "../images/skills/sass.png";
import tailwind from "../images/skills/tailwind.png";
import vsCode from "../images/skills/vs-studio.png";
import vue from "../images/skills/vue.png";
import git from "../images/skills/git.png";
import github from "../images/skills/github.png";

function About() {
  return (
    <>
      <Header />
      <div className="section about-hero wf-section">
        <div className="container-default w-container">
          <div className="hero-about-wrapper">
            <img src={myAbout} alt="" className="image hero-about-wrapper" />
            <div className="split-content hero-about-right">
              <h1 className="title hero-about">
                I’m Vikash Kumar, <br />a Mobile App and Web Developer
              </h1>
              <img
                src={heroUnderLine}
                alt=""
                className="image hero-about-underline"
              />
              <p className="paragraph hero-about">
              I am passionate about the newest technologies and designs. I live in Noida, India and love to turn ideas into beautiful things.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="narrow-section wf-section">
        <div className="container-default w-container">
          <div className="_2-column-grid my-story-grid">
            <div className="split-content my-story-content">
              <h2 className="title my-story-title">My story</h2>
              {/* <img
                src="images/611406745e92080e404e517c_my-story-underline-personal-x-template_n3vykwxi5miqhogx2m2m4y.svg"
                loading="eager"
                alt=""
                className="image my-story-underline"
              /> */}
              <p className="paragraph my-story-paragraph">
                I have three+ years of professional web design and development
                experience, and have recently started developing mobile apps
                using React Native. I have strong creative and analytical
                skills, and work well as part of a team. I also have a keen eye
                for detail.
              </p>
              <h3 className="title my-story-title">
                Now i am mobile app developer
              </h3>
              <p className="paragraph my-story-paragraph">
                I started my career as a web desinger & developer and have since
                transitioned into mobile app development. I absolutely love my
                job and enjoy working on new and innovative apps that make
                people's lives easier.
              </p>
              {/* <ul role="list" className="list my-story-list">
                <li className="list-item my-story-item">
                  <div>
                    Ornare lectus sit amet est placerat in egestas erat
                    imperdiet.
                  </div>
                </li>
                <li className="list-item my-story-item">
                  <div>
                    Cras tincidunt lobortis feugiat vivamus at augue eget arcu
                    dictum.
                  </div>
                </li>
                <li className="list-item my-story-item last">
                  <div>Posuere mori leo urna molestie at.</div>
                </li>
              </ul> */}
            </div>
            <div
              id="w-node-_28d8b925-f381-1676-938b-22b5ac2a0b83-ecb625a8"
              className="split-content my-story-image-wrapper"
            >
              <img src={about2} alt="" className="image my-story" />
              {/* <img src={about3} alt="" className="image my-story last" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container-default w-container">
          <div className="container-small text-center my-skills">
            <h2 className="title my-skills">My skills & software</h2>
            {/* <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra{" "}
              <span className="text-no-wrap">nec eu.</span>
            </p> */}
          </div>
          <div className="aboutWraper">
            <div className="container-default w-container">
              <div className="w-dyn-list">
                <div className="_5-column-grid articles-news-section blog w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={html5}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>HTML</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={css3}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>CSS</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={bootstrap}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Bootstrap</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={tailwind}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Tailwind</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={sass}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Sass</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={md}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Metiral Design</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={jquery}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>jQuery</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={js}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Java Script</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={reactNative}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>React Native</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={vue}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Vue Js</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={photoshop}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Photoshop</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={vsCode}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>VS Code</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={codepen}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Codepen</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={netlify}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Netlify</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={bitbucket}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Bitbucket</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={git}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>GIT</h3>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="card blog-card w-inline-block">
                      <div className="image-wrapper articles-news-card">
                        <img
                          src={github}
                          alt=""
                          className="image articles-news-section"
                        />
                      </div>
                      <div className="split-content articles-news-section">
                        <h3>Github</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
