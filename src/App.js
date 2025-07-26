

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./Style/style.css";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-H81Y48C7M3");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
