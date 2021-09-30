import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation({ key, handlePageChange }) {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="About"
      activeKey={key}
      onSelect={handlePageChange}
    >
      <Nav.Item>
        <Nav.Link eventKey="About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Project">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Contact">Contact</Nav.Link>
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
