import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Project from "../pages/Project";
// import Contact from "../pages/Contact";
import Row from "react-bootstrap/Row";

export default function PortfolioChange() {
  const [key, setKey] = useState("About");

  const handlePageChange = (k) => {
    setKey(k);
  };

  const renderPage = () => {
    if (key === "Project") {
      return <Project />;
    }
    // if (key === "Contact") {
    //   return <Contact />;
    // } 
    
    else {
      return <About />;
    }
  };

  return (
    <>
      <Row id="header-nav" className=" d-flex justify-content-between">
        <Header />
        <Navigation key={key} handlePageChange={handlePageChange} />
      </Row>
      {renderPage()}
      <Footer />
    </>
  );
}
