import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation({ handlePageChange }) {
  return (
    <Nav variant="pills" defaultActiveKey="#About">
      <Nav.Item>
        <Nav.Link href="#About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item onSelect={(Project) => handlePageChange(Project)}>
        <Nav.Link eventKey="Project">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item onSelect={(Contact) => handlePageChange(Contact)}>
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
