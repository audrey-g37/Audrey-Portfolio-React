import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation({ key, handlePageChange }) {
  return (
    <Nav variant="pills" activeKey={key} onSelect={handlePageChange}>
      <Nav.Item>
        <Nav.Link id="nav-links" eventKey="About">
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="nav-links" eventKey="Project">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="nav-links" eventKey="Contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          id="nav-links"
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
