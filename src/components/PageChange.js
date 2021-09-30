import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function PortfolioChange() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Header />
        <Navigation handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      <Footer />
    </div>
  );
}
