import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="AudreyGillies_Resume_2021.pdf"
          eventKey="resume"
          target="_blank"
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
