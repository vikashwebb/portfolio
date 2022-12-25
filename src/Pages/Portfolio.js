import Header from "../Component/Header";
import Footer from "../Component/Footer";
import mochi from "../images/mochi.jpg";
import zink from "../images/zink.jpg";
// import sabhyata from "../images/sabhyata.jpg";
import ketch from "../images/ketch.jpg";
import siyaram from "../images/siyaram.jpg";
import walkway from "../images/walkway.jpg";
import ahuja from "../images/ahuja.jpeg";


function Portfolio() {
  return (
    <>
      <Header />
      <div className="section shop wf-section">
        <div className="container-default w-container">
          <div className="top-content shop-container">
            <h1 className="title portfolio">Portfolio</h1>
          </div>

          <div className="w-dyn-list">
            <div className="_3-column-grid articles-news-section w-dyn-items">
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={ketch} alt={ketch} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Get Ketch</h3>
                    <div className="split-content articles-news-card-bottom-content"> 
                      Mobile App
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={zink} alt={zink} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Zink London</h3>
                    <div className="split-content articles-news-card-bottom-content">Mobile App</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={siyaram} alt={siyaram} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Siyaram</h3>
                    <div className="split-content articles-news-card-bottom-content">Frontend</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={walkway} alt={walkway} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Walkway</h3>
                    <div className="split-content articles-news-card-bottom-content">Frontend</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={ahuja} alt={ahuja} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Ahujasons</h3>
                    <div className="split-content articles-news-card-bottom-content">Frontend</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-item">
                <div className="card blog-card w-inline-block">
                  <div className="image-wrapper articles-news-card">
                    <img src={mochi} alt={mochi} className="image articles-news-section" />
                  </div>
                  <div className="split-content articles-news-section">
                    <h3>Mochi</h3>
                    <div className="split-content articles-news-card-bottom-content">Frontend</div>
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

export default Portfolio;
