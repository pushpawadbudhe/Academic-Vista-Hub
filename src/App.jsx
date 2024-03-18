// App.jsx
import React, { useState, useEffect } from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Billing,
  Testimonials,
  CTA,
  Footer,
  Aboutus,
} from "./components";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from  "./components/Contactus";


const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <div
          className={`bg-primary w-full backdrop-opacity-10 fixed top-0 transition-all ease-in-out duration-300 ${
            scrolling ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={` ${styles.boxWidth} `}>
              <Navbar />
            </div>
          </div>
        </div>

        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/features" element={<Business />} />
          <Route path="/product" element={<Billing />} />
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/clients" element={<Testimonials />} /> */}
          <Route path="/contact" element={<Contactus />} />
          <Route path="*" element={<Error />} />

        </Routes>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
