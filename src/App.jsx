import React from "react";

// import the main components
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Content from "./components/3-main-content/Content";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <div className="separator" />
        <Content />
        <div className="separator" />
        <Contact />
        <div className="separator" />
        <Footer />
      </div>
    </>
  );
};

export default App;
