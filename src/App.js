import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./Style/style.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
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
