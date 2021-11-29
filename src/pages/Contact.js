import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <h1 className="page-todo">Contact</h1>
      <Form action="https://mailthis.to/audrey.gillies@gmail.com" method="POST">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="form-label">Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="form-label">Your Email:</Form.Label>
          <Form.Control
            type="email"
            name="_replyto"
            placeholder="Your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label className="form-label">Include a Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter message here..."
            rows={3}
          />
        </Form.Group>
          <Form.Control type="hidden" name="_confirmation" value="Message has been sent!" />
          <Form.Control type="hidden" name="_after" value="/" />
        <Form.Control 
          type="submit"
          value ="Send"
          className="send-btn"
        />
      </Form>
    </div>
  );
}
