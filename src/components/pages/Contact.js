import React from "react";
import Form from "react-bootstrap/Form";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Bob Smith" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Include a Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
