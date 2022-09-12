import React from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

function Navigation({ key, handlePageChange }) {
  return (
    <Col>
      <Nav id="page-nav-btns" variant="pills" activeKey={key} onSelect={handlePageChange}>
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
        {/* <Nav.Item>
          <Nav.Link id="nav-links" eventKey="Contact">
            Contact
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link
            id="nav-links"
            href="AudreyGillies_Resume_2022.pdf"
            eventKey="resume"
            target="_blank"
          >
            Résumé
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
}

export default Navigation;
